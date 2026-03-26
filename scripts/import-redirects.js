const fs = require('fs');
require('dotenv').config();

const TARGET = process.env.TARGET_STORE.replace(/\/$/, '');
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const DELAY = 300;

if (!ADMIN_TOKEN) {
  console.error('ERROR: SHOPIFY_ADMIN_TOKEN not set in .env');
  process.exit(1);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function adminFetch(endpoint, options = {}) {
  const url = `${TARGET}/admin/api/2024-01${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ADMIN_TOKEN,
      ...options.headers
    }
  });

  if (res.status === 429) {
    const retryAfter = parseFloat(res.headers.get('Retry-After') || '2');
    await sleep(retryAfter * 1000);
    return adminFetch(endpoint, options);
  }

  return res;
}

async function buildAndImportRedirects() {
  // Build redirect map from locale-prefixed URLs to non-prefixed
  // Source store uses /fr/ prefix, target may not
  const products = JSON.parse(fs.readFileSync('docs/scraped-data/products.json', 'utf8'));
  const collections = JSON.parse(fs.readFileSync('docs/scraped-data/collections.json', 'utf8'));
  const pages = JSON.parse(fs.readFileSync('docs/scraped-data/pages.json', 'utf8'));

  const redirects = [];

  // Product redirects: /fr/products/handle -> /products/handle
  products.forEach(p => {
    redirects.push({ path: `/fr/products/${p.handle}`, target: `/products/${p.handle}` });
  });

  // Collection redirects
  collections.forEach(c => {
    redirects.push({ path: `/fr/collections/${c.handle}`, target: `/collections/${c.handle}` });
  });

  // Page redirects
  pages.forEach(p => {
    redirects.push({ path: `/fr/pages/${p.handle}`, target: `/pages/${p.handle}` });
  });

  // Save the redirect map
  fs.writeFileSync('docs/scraped-data/redirect-map.json', JSON.stringify(redirects, null, 2));
  console.log(`Built ${redirects.length} redirects.\n`);

  // Import redirects
  let created = 0;
  let errors = 0;

  for (const redirect of redirects) {
    try {
      const res = await adminFetch('/redirects.json', {
        method: 'POST',
        body: JSON.stringify({ redirect })
      });

      if (res.ok) {
        created++;
        if (created % 50 === 0) console.log(`  Created ${created}/${redirects.length} redirects...`);
      } else {
        errors++;
      }
    } catch {
      errors++;
    }

    await sleep(DELAY);
  }

  console.log(`\nDone. Created: ${created}, Errors: ${errors}`);
}

buildAndImportRedirects().catch(console.error);
