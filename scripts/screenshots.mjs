import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'https://us.masons.it/fr';
const OUT = 'docs/screenshots/source';

mkdirSync(OUT, { recursive: true });

const pages = [
  { name: 'homepage', path: '' },
  { name: 'collection-list', path: '/collections' },
  { name: 'collection', path: '/collections/all' },
  { name: 'product', path: '/products/agnes-pantalon-5-poches-femme-en-denim-stretch-slim-fit' },
  { name: 'cart', path: '/cart' },
  { name: 'about', path: '/pages/about-us' },
  { name: 'contact', path: '/pages/contacts-1' },
  { name: 'search', path: '/search' },
  { name: 'faq', path: '/pages/faq' },
  { name: '404', path: '/nonexistent-page-test' },
];

const browser = await chromium.launch({ headless: true });

for (const { name, path } of pages) {
  const url = `${BASE}${path}`;
  console.log(`Screenshotting: ${name} (${url})`);

  // Desktop 1440px
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopCtx.newPage();
  try {
    await desktopPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await desktopPage.waitForTimeout(5000);
    await desktopPage.screenshot({ path: `${OUT}/${name}-desktop.png`, fullPage: true });
    console.log(`  ✓ ${name}-desktop.png`);
  } catch (e) {
    console.log(`  ✗ Desktop failed: ${e.message}`);
  }
  await desktopCtx.close();

  // Mobile 375px
  const mobileCtx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mobilePage = await mobileCtx.newPage();
  try {
    await mobilePage.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await mobilePage.waitForTimeout(5000);
    await mobilePage.screenshot({ path: `${OUT}/${name}-mobile.png`, fullPage: true });
    console.log(`  ✓ ${name}-mobile.png`);
  } catch (e) {
    console.log(`  ✗ Mobile failed: ${e.message}`);
  }
  await mobileCtx.close();
}

await browser.close();
console.log('\nDone! All screenshots saved to', OUT);
