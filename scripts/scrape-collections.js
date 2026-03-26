const fs = require('fs');

const STORE = 'https://us.masons.it';
const DELAY = 1000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeCollections() {
  // Step 1: Get all collections
  let allCollections = [];
  let page = 1;

  while (true) {
    const res = await fetch(`${STORE}/collections.json?limit=250&page=${page}`);
    const data = await res.json();
    if (!data.collections || data.collections.length === 0) break;
    allCollections.push(...data.collections);
    console.log(`Collections page ${page}: ${data.collections.length} (total: ${allCollections.length})`);
    if (data.collections.length < 250) break;
    page++;
    await sleep(DELAY);
  }

  // Step 2: For each collection, get product handles
  console.log(`\nFetching products for ${allCollections.length} collections...`);
  const collectionProducts = {};

  for (let i = 0; i < allCollections.length; i++) {
    const col = allCollections[i];
    let products = [];
    let pPage = 1;

    while (true) {
      try {
        const res = await fetch(`${STORE}/collections/${col.handle}/products.json?limit=250&page=${pPage}`);
        const data = await res.json();
        if (!data.products || data.products.length === 0) break;
        products.push(...data.products.map(p => p.handle));
        if (data.products.length < 250) break;
        pPage++;
        await sleep(500);
      } catch (err) {
        console.error(`Error on ${col.handle} page ${pPage}:`, err.message);
        await sleep(3000);
      }
    }

    collectionProducts[col.handle] = products;
    if ((i + 1) % 10 === 0) {
      console.log(`  ${i + 1}/${allCollections.length} collections processed...`);
    }
    await sleep(300);
  }

  // Save
  fs.mkdirSync('docs/scraped-data', { recursive: true });
  fs.writeFileSync('docs/scraped-data/collections.json', JSON.stringify(allCollections, null, 2));
  fs.writeFileSync('docs/scraped-data/collection-products.json', JSON.stringify(collectionProducts, null, 2));
  console.log(`\nDone. ${allCollections.length} collections saved.`);
  console.log(`Product mappings saved for ${Object.keys(collectionProducts).length} collections.`);
}

scrapeCollections().catch(console.error);
