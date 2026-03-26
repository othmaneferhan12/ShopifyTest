const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

// ─── FONTS ───────────────────────────────────────────────────────────────────
const fonts = [
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Roman.woff2?v=1762768667', name: 'HelveticaNeue-Roman.woff2' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Medium.woff2?v=1762769252', name: 'HelveticaNeue-Medium.woff2' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Bold.woff2?v=1762769252', name: 'HelveticaNeue-Bold.woff2' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/Bull-5-Typewriter.woff2?v=1762768519', name: 'Bull-5-Typewriter.woff2' },
  { url: 'https://cdn.shopify.com/s/files/1/0511/3131/8443/files/Southera_2c5b675c-79a8-41af-bd02-1e550131dea7.woff2?v=1761659652', name: 'Southera.woff2' },
];

// ─── LOGOS ────────────────────────────────────────────────────────────────────
const logos = [
  { url: 'https://us.masons.it/cdn/shop/files/masons-clothing-logo-text.png?v=1768898312&width=500', name: 'masons-clothing-logo-text.png' },
  { url: 'https://masons-forte-dei-marmi.myshopify.com/cdn/shop/files/pandectes-banner-logo.png?v=1770040045', name: 'pandectes-banner-logo.png' },
  { url: 'https://masons-forte-dei-marmi.myshopify.com/cdn/shop/files/pandectes-reopen-logo.png?v=1770040045', name: 'pandectes-reopen-logo.png' },
];

// ─── SECTION IMAGES ──────────────────────────────────────────────────────────
const sectionImages = [
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/Masons_ss26_1.jpg', name: 'homepage-hero-ss26.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/about-4.jpg', name: 'homepage-personal-shopper.jpg' },
];

// ─── COLLECTION IMAGES ───────────────────────────────────────────────────────
const collectionImages = [
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/48c0db47f83140c08eaaabfac36707bc.jpg?v=1774282884', name: 'collection-accessories.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Athleisure.jpg?v=1761840261', name: 'collection-athleisure.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Athleisure_5a26b9f7-62a2-4074-b2e0-94b037464e30.jpg?v=1773398808', name: 'collection-athleisure-2.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/BOSTON.jpg?v=1773050022', name: 'collection-boston.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Camouflage.jpg?v=1658310268', name: 'collection-camouflage.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_2516_2c9cc02a-189c-48ca-8f04-33227e9071be.jpg?v=1700142562', name: 'collection-coats-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/ARTWORK_CAMO_NERO_-_pattern_ridotto.jpg?v=1700142808', name: 'collection-coats-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Carrot_donna.jpg?v=1744378855', name: 'collection-carrot-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/carrot_fit.jpg?v=1741252617', name: 'collection-carrot-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Chile.jpg?v=1772098718', name: 'collection-chile-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/fw23_chile_donna.jpg?v=1772635487', name: 'collection-chile-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/0fc04187-013f-4330-b2c0-4b7612d16e8f.jpg?v=1741188973', name: 'collection-chile-bermuda.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/jaqueline_bermuda.jpg?v=1734533774', name: 'collection-jaqueline-shorts.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Bermuda_Cargo_uomo_Mason_s.jpg?v=1773075261', name: 'collection-cargo-bermuda-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Bermuda_Chino_uomo_Mason_s.jpg?v=1773050067', name: 'collection-chino-bermuda-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/bermuda_jogger.webp?v=1734086563', name: 'collection-jogger-shorts-men.webp' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_3457.jpg?v=1773050121', name: 'collection-blazer-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_2622.jpg?v=1734088722', name: 'collection-shirts-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_1852.jpg?v=1719402919', name: 'collection-coats-winter-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/5_Pockets.jpg?v=1688635766', name: 'collection-denim-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/98acc3e7a5b202c8d103ce5c9f1b644e.jpg?v=1734083718', name: 'collection-bermuda-summer-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Blazer_Uomo_Invernali.jpg?v=1757074907', name: 'collection-blazer-winter-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/d906a6f81c3a35fd33077e5460d00727.jpg?v=1727879793', name: 'collection-outerwear-corduroy-men.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Blazer.jpg?v=1734530337', name: 'collection-blazer-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/9c1e538a608bca3c99dfc224617e34b1.jpg?v=1734531367', name: 'collection-dresses-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Blazer_Donna_Invernali.jpg?v=1750404904', name: 'collection-blazer-winter-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_3516.jpg?v=1719405178', name: 'collection-coats-winter-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/MG_4004_1.jpg?v=1681733900', name: 'collection-dresses-winter-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/Camicie_Donna_Invernali.jpg?v=1719403679', name: 'collection-shirts-winter-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/collections/7d4f1476a5c128c57e058615f251df8a.jpg?v=1773049985', name: 'collection-shirts-summer-women.jpg' },
];

// ─── PRODUCT IMAGES (first image per product for catalog) ────────────────────
const productImages = [
  // Page 1 products
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4CA4480_MT104S3_056.jpg?v=1770908489', name: 'product-livia-shirt-floral.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PN2R4973_CBE543_195_5__edited_edited_edited.jpg?v=1774278950', name: 'product-milano-chino-extraslim.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PN2R9663N1_CBE700_154_1__edited_edited_edited.jpg?v=1773160726', name: 'product-torino-1pinces-gabardine.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PN2R9560_JERT105_594_1__edited_1__edited_edited.jpg?v=1773161142', name: 'product-torino-city-jersey.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PF28323_MBE101_332_1__edited_edited_3f962a0b-4afd-4335-8616-0aac09506d57.jpg?v=1774277459', name: 'product-newyork-sack-parachute-green.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PF28323_MBE101_254_1__edited_edited_edited.jpg?v=1773157283', name: 'product-newyork-sack-parachute-beige.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9PF2A6541MBE091-480-SS26.jpg?v=1774345394', name: 'product-chile-jogger-travel-satin.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9BE3C1483_CBE700_226_1__edited_edited.jpg?v=1773159834', name: 'product-london-bermuda-gabardine.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT4R1020N_MBE213_143_1.jpg?v=1763628464', name: 'product-newyork-straight-linen-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT3C033_MBE339_117_1.jpg?v=1763566557', name: 'product-fatique-jogger-twill-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT2C323_MBE109_332_1.jpg?v=1763566122', name: 'product-newyork-carrot-silk-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT2C293R_CBE20S5_184_1.jpg?v=1763565576', name: 'product-marlene-cargo-camo-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT1A333_MBE041_154_1.jpg?v=1763634488', name: 'product-chile-city-gabardine-pink-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT1A333_MBE041_107_1.jpg?v=1763634870', name: 'product-chile-city-gabardine-brown-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNTN513_MBE060_300_1.jpg?v=1763634833', name: 'product-malibu-jogger-beige-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNTN513_MBE060_288_1.jpg?v=1763634809', name: 'product-malibu-jogger-milk-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/hf_20260304_142722_1f1b38e5-7fed-4691-8f1d-4e2c4c4f5d79.jpg?v=1774370190', name: 'product-malibu-jogger-pink-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4GC31199N_CBE074_300_1.jpg?v=1763631637', name: 'product-santa-barbara-jacket-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4GC31130_MT680_058_1.jpg?v=1763631295', name: 'product-helena-knit-blazer-women.jpg' },
  // Page 2 products
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2PF2A6543_MBE101_226_1__edited_edited.jpg?v=1772644614', name: 'product-chile-jogger-beige.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2PF2A6543_MBE101_167_1__edited_1__edited_edited.jpg?v=1772529341', name: 'product-chile-jogger-royal-blue.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2PF2A6543_MBE101_075_2__edited_edited.jpg?v=1772529483', name: 'product-chile-jogger-khaki.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2GC3995_CB118_169.jpg?v=1770907465', name: 'product-work-overshirt-sage.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2GB3532_CBE436_TS611.jpg?v=1772703143', name: 'product-jacket-m74-rosemary.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145ME303-001-SS26_1__edited_1__edited_edited.jpg?v=1772461233', name: 'product-chile-bermuda-skyblue.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145_ME303_394_1__edited_edited.jpg?v=1772706566', name: 'product-chile-bermuda-pastelgreen.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/camou_bianco_0fddf28d-6d8f-4905-bff0-b17c72d7fcf7.png?v=1741356134', name: 'product-fragrance-white-camou.png' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/camou_verde.png?v=1741356150', name: 'product-fragrance-green-camou.png' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/camou_nero_1eb2d40d-5f0d-481a-889c-c0ccba43bb41.png?v=1741356148', name: 'product-fragrance-black-camou.png' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT6R949N_CBE074_154.jpg?v=1770907911', name: 'product-newyork-studio-cropped-pink-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNT2C299B_CBE436_184.jpg?v=1770907444', name: 'product-marlene-cargo-butter-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/7_compressed.jpg?v=1774368455', name: 'product-newyork-carrot-beige-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/4PNTD1199B_MBE035_169_1_-Modifica.jpg?v=1763633835', name: 'product-newyork-slim-sage-women.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/9BE3C1483_CBE700_006_1__edited_8f13f086-de5e-4382-a4b0-0ed1bd1c055a.jpg?v=1772531329', name: 'product-london-bermuda-navy.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145ME303-001-SS26_1__edited_1__edited_edited_1a6ccef4-a6dc-4923-99d9-1d7b2a6e134a.jpg?v=1772465274', name: 'product-chile-cargo-bermuda-white.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145_ME303_006_1__edited_edited_edited.jpg?v=1772706222', name: 'product-chile-cargo-bermuda-navy.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145ME303-151-SS26_1__edited_edited_edited.jpg?v=1772464972', name: 'product-chile-cargo-bermuda-skyblue.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145ME303-167-SS26_1__edited_1__edited.jpg?v=1772464547', name: 'product-chile-cargo-bermuda-royalblue.jpg' },
  { url: 'https://cdn.shopify.com/s/files/1/0569/4010/1806/files/2BE22145ME303-169-SS26_1__edited_1__edited.jpg?v=1772464626', name: 'product-chile-cargo-bermuda-sage.jpg' },
];

// ─── DOWNLOAD HELPER ─────────────────────────────────────────────────────────
function download(url, dest) {
  return new Promise((resolve, reject) => {
    // Ensure URL has protocol
    if (url.startsWith('//')) url = 'https:' + url;
    if (!url.startsWith('http')) url = 'https://' + url;

    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        res.resume();
        return;
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(dest); });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadBatch(items, subdir, label) {
  console.log(`\n── ${label} (${items.length} files) ──`);
  let success = 0, fail = 0;
  for (const item of items) {
    const dest = path.join(ASSETS_DIR, subdir, item.name);
    try {
      await download(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`  ✓ ${item.name} (${(stat.size / 1024).toFixed(1)} KB)`);
      success++;
    } catch (err) {
      console.log(`  ✗ ${item.name}: ${err.message}`);
      fail++;
    }
  }
  console.log(`  → ${success} downloaded, ${fail} failed`);
  return { success, fail };
}

async function main() {
  console.log('Mason\'s Asset Downloader — Phase 2');
  console.log('===================================\n');

  const results = {};
  results.fonts = await downloadBatch(fonts, 'fonts', 'FONTS');
  results.logos = await downloadBatch(logos, 'images/logos', 'LOGOS');
  results.sections = await downloadBatch(sectionImages, 'images/sections', 'SECTION IMAGES');
  results.collections = await downloadBatch(collectionImages, 'images/collections', 'COLLECTION IMAGES');
  results.products = await downloadBatch(productImages, 'images/products', 'PRODUCT IMAGES');

  const totalSuccess = Object.values(results).reduce((s, r) => s + r.success, 0);
  const totalFail = Object.values(results).reduce((s, r) => s + r.fail, 0);
  console.log(`\n===================================`);
  console.log(`TOTAL: ${totalSuccess} downloaded, ${totalFail} failed`);
  console.log(`Assets stored in: ${ASSETS_DIR}`);
}

main().catch(console.error);
