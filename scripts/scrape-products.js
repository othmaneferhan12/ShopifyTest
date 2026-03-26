const fs = require('fs');

const STORE = 'https://us.masons.it';
const DELAY = 1000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeAllProducts() {
  let allProducts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const res = await fetch(`${STORE}/products.json?limit=250&page=${page}`);
      const data = await res.json();

      if (!data.products || data.products.length === 0) {
        hasMore = false;
        break;
      }

      allProducts.push(...data.products);
      console.log(`Page ${page}: ${data.products.length} products — Total so far: ${allProducts.length}`);

      if (data.products.length < 250) {
        hasMore = false;
      } else {
        page++;
        await sleep(DELAY);
      }
    } catch (err) {
      console.error(`Error on page ${page}:`, err.message);
      console.log('Waiting 3 seconds then retrying...');
      await sleep(3000);
    }
  }

  fs.mkdirSync('docs/scraped-data', { recursive: true });
  fs.writeFileSync('docs/scraped-data/products.json', JSON.stringify(allProducts, null, 2));
  console.log(`DONE. Total products saved: ${allProducts.length}`);
}

scrapeAllProducts();
