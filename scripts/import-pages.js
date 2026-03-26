const fs = require('fs');
require('dotenv').config();

const TARGET = process.env.TARGET_STORE.replace(/\/$/, '');
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const DELAY = 500;

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

async function importPages() {
  const pages = JSON.parse(fs.readFileSync('docs/scraped-data/pages.json', 'utf8'));
  console.log(`Importing ${pages.length} pages...\n`);

  let created = 0;
  let errors = 0;

  for (const page of pages) {
    const payload = {
      page: {
        title: page.title,
        handle: page.handle,
        body_html: page.body_html,
        published: true
      }
    };

    try {
      const res = await adminFetch('/pages.json', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        created++;
        if (created % 10 === 0) console.log(`  Created ${created}/${pages.length} pages...`);
      } else {
        const err = await res.json();
        errors++;
        console.error(`  FAIL: ${page.handle} — ${JSON.stringify(err.errors || err)}`);
      }
    } catch (e) {
      errors++;
      console.error(`  FAIL: ${page.handle} — ${e.message}`);
    }

    await sleep(DELAY);
  }

  console.log(`\nDone. Created: ${created}, Errors: ${errors}`);
}

importPages().catch(console.error);
