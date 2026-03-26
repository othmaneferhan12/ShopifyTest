const fs = require('fs');
require('dotenv').config();

const TARGET = process.env.TARGET_STORE.replace(/\/$/, '');
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const DELAY = 300;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function adminFetch(endpoint, options = {}) {
  const res = await fetch(`${TARGET}/admin/api/2024-01${endpoint}`, {
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

async function deleteAll() {
  let deleted = 0;

  while (true) {
    const res = await adminFetch('/products.json?limit=250&fields=id');
    const data = await res.json();
    if (!data.products || data.products.length === 0) break;

    for (const p of data.products) {
      await adminFetch(`/products/${p.id}.json`, { method: 'DELETE' });
      deleted++;
      if (deleted % 25 === 0) console.log(`Deleted ${deleted}...`);
      await sleep(DELAY);
    }
  }

  console.log(`Done. Deleted ${deleted} products.`);
}

deleteAll().catch(console.error);
