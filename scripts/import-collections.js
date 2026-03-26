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
    console.log(`  Rate limited — waiting ${retryAfter}s...`);
    await sleep(retryAfter * 1000);
    return adminFetch(endpoint, options);
  }
  return res;
}

async function importCollections() {
  let collections = JSON.parse(fs.readFileSync('docs/scraped-data/collections.json', 'utf8'));
  const collectionProducts = JSON.parse(fs.readFileSync('docs/scraped-data/collection-products.json', 'utf8'));

  collections = collections.slice(0, 30); // Limit to 30 collections
  console.log(`Importing ${collections.length} collections...\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const col of collections) {
    const payload = {
      custom_collection: {
        title: col.title,
        handle: col.handle,
        body_html: col.description || '',
        published: true,
        image: col.image ? { src: col.image.src, alt: col.image.alt || '' } : undefined
      }
    };

    try {
      const res = await adminFetch('/custom_collections.json', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        created++;
        if (created % 10 === 0) console.log(`  Created ${created} collections...`);
      } else {
        const err = await res.json();
        if (JSON.stringify(err).includes('has already been taken')) {
          skipped++;
        } else {
          errors++;
          console.error(`  FAIL: ${col.handle} — ${JSON.stringify(err.errors || err)}`);
        }
      }
    } catch (e) {
      errors++;
      console.error(`  FAIL: ${col.handle} — ${e.message}`);
    }

    await sleep(DELAY);
  }

  console.log(`\nDone. Created: ${created}, Skipped (existing): ${skipped}, Errors: ${errors}`);
}

importCollections().catch(console.error);
