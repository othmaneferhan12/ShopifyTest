const fs = require('fs');

const TARGET = 'https://shoopify-test.myshopify.com';
const SOURCE = 'https://us.masons.it/fr';

const PAGES = [
  '/',
  '/collections/accessories-1',
  '/products/livia-camicia-donna-a-manica-corta-in-tela-misto-lino-e-viscosa-fantasia-a-fiori',
  '/pages/faq'
];

async function checkSEO(url) {
  const res = await fetch(url);
  const html = await res.text();

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || 'NONE';
  const metaDesc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] || 'NONE';
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i)?.[1] || 'NONE';
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].length;
  const imgNoAlt = [...html.matchAll(/<img(?![^>]*alt=)[^>]*>/gi)].length;
  const imgTotal = [...html.matchAll(/<img[^>]*>/gi)].length;

  return { url, title: title.substring(0, 80), metaDesc: metaDesc.substring(0, 80), canonical, jsonLd, imgNoAlt, imgTotal };
}

async function main() {
  const results = { source: [], target: [] };

  console.log('=== SEO Check: TARGET Store ===\n');
  for (const page of PAGES) {
    try {
      const r = await checkSEO(TARGET + page);
      results.target.push(r);
      console.log(`Page: ${page}`);
      console.log(`  Title: ${r.title}`);
      console.log(`  Meta desc: ${r.metaDesc}`);
      console.log(`  Canonical: ${r.canonical}`);
      console.log(`  JSON-LD blocks: ${r.jsonLd}`);
      console.log(`  Images: ${r.imgTotal} total, ${r.imgNoAlt} missing alt`);
      console.log('');
    } catch (e) {
      console.log(`Page: ${page} — ERROR: ${e.message}\n`);
    }
  }

  console.log('\n=== SEO Check: SOURCE Store ===\n');
  for (const page of PAGES) {
    try {
      const r = await checkSEO(SOURCE + page);
      results.source.push(r);
      console.log(`Page: ${page}`);
      console.log(`  Title: ${r.title}`);
      console.log(`  Meta desc: ${r.metaDesc}`);
      console.log(`  Canonical: ${r.canonical}`);
      console.log(`  JSON-LD blocks: ${r.jsonLd}`);
      console.log(`  Images: ${r.imgTotal} total, ${r.imgNoAlt} missing alt`);
      console.log('');
    } catch (e) {
      console.log(`Page: ${page} — ERROR: ${e.message}\n`);
    }
  }

  // Check robots.txt
  console.log('=== robots.txt ===');
  try {
    const robots = await fetch(TARGET + '/robots.txt');
    console.log('Target:', robots.status === 200 ? 'EXISTS' : 'MISSING');
  } catch { console.log('Target: ERROR'); }

  // Check sitemap
  console.log('\n=== sitemap.xml ===');
  try {
    const sitemap = await fetch(TARGET + '/sitemap.xml');
    console.log('Target:', sitemap.status === 200 ? 'EXISTS' : 'MISSING');
  } catch { console.log('Target: ERROR'); }

  fs.writeFileSync('docs/scraped-data/seo-comparison.json', JSON.stringify(results, null, 2));
  console.log('\nSaved to docs/scraped-data/seo-comparison.json');
}

main().catch(console.error);
