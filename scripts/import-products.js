const fs = require('fs');
require('dotenv').config();

const TARGET = process.env.TARGET_STORE.replace(/\/$/, '');
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const DELAY = 500;

if (!ADMIN_TOKEN) {
  console.error('ERROR: SHOPIFY_ADMIN_TOKEN not set in .env');
  console.error('Create a custom app in target store admin:');
  console.error('  Settings > Apps and sales channels > Develop apps > Create an app');
  console.error('  Scopes needed: write_products, write_inventory, write_content');
  console.error('  Add the Admin API access token to .env as SHOPIFY_ADMIN_TOKEN');
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

async function importProducts() {
  let products = JSON.parse(fs.readFileSync('docs/scraped-data/products.json', 'utf8'));
  products = products.slice(0, 50); // Limit to 50 products

  // Skip gift cards (must be created manually)
  const importable = products.filter(p => p.product_type !== 'Gift Card');
  console.log(`Importing ${importable.length} products (skipping 1 Gift Card)...\n`);

  let created = 0;
  let errors = 0;
  const errorLog = [];

  for (const product of importable) {
    const payload = {
      product: {
        title: product.title,
        handle: product.handle,
        body_html: product.body_html,
        vendor: product.vendor,
        product_type: product.product_type,
        tags: product.tags.join(', '),
        published: true,
        variants: product.variants.map(v => ({
          title: v.title,
          option1: v.option1,
          option2: v.option2,
          option3: v.option3,
          sku: v.sku,
          price: v.price,
          compare_at_price: v.compare_at_price,
          requires_shipping: v.requires_shipping,
          taxable: v.taxable,
          grams: v.grams,
          position: v.position
        })),
        options: product.options.map(o => ({
          name: o.name,
          values: o.values
        })),
        images: product.images.map(img => ({
          src: img.src,
          alt: img.alt || '',
          position: img.position
        }))
      }
    };

    try {
      const res = await adminFetch('/products.json', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        created++;
        if (created % 100 === 0) {
          console.log(`  Created ${created}/${importable.length} products...`);
        }
      } else {
        const err = await res.json();
        errors++;
        errorLog.push({ handle: product.handle, error: err });
        console.error(`  FAIL: ${product.handle} — ${JSON.stringify(err.errors || err)}`);
      }
    } catch (e) {
      errors++;
      errorLog.push({ handle: product.handle, error: e.message });
      console.error(`  FAIL: ${product.handle} — ${e.message}`);
    }

    await sleep(DELAY);
  }

  if (errorLog.length > 0) {
    fs.writeFileSync('docs/scraped-data/import-errors.json', JSON.stringify(errorLog, null, 2));
  }

  console.log(`\nDone. Created: ${created}, Errors: ${errors}`);
}

importProducts().catch(console.error);
