import puppeteer from 'puppeteer-core';
import { mkdir } from 'fs/promises';

const URL = 'http://127.0.0.1:9494';
const OUTPUT_DIR = 'docs/screenshots/baseline';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-375', width: 375, height: 812 },
];

await mkdir(OUTPUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox'],
});

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height });
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({
    path: `${OUTPUT_DIR}/${vp.name}.png`,
    fullPage: true,
  });
  console.log(`Captured: ${vp.name}.png (${vp.width}x${vp.height})`);
  await page.close();
}

await browser.close();
console.log('Done. Screenshots saved to', OUTPUT_DIR);
