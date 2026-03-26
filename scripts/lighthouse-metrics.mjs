import puppeteer from 'puppeteer-core';
import { writeFileSync } from 'fs';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const SOURCE_URL = 'https://us.masons.it/fr';
const OUTPUT = 'docs/lighthouse-baseline.txt';

const viewports = [
  { name: 'Mobile', width: 375, height: 812, mobile: true },
  { name: 'Desktop', width: 1440, height: 900, mobile: false },
];

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox'],
});

let report = `# Lighthouse Baseline — Source Store (us.masons.it/fr)\n# Date: ${new Date().toISOString().split('T')[0]}\n# Method: Puppeteer Performance API metrics\n\n`;

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.mobile });

  // Enable performance metrics
  const client = await page.createCDPSession();
  await client.send('Performance.enable');

  const start = Date.now();
  await page.goto(SOURCE_URL, { waitUntil: 'load', timeout: 120000 });
  const loadTime = Date.now() - start;

  // Get Web Vitals via Performance API
  const metrics = await page.evaluate(() => {
    const entries = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(e => e.name === 'first-contentful-paint');

    return {
      domContentLoaded: Math.round(entries?.domContentLoadedEventEnd || 0),
      loadEvent: Math.round(entries?.loadEventEnd || 0),
      fcp: Math.round(fcp?.startTime || 0),
      ttfb: Math.round(entries?.responseStart || 0),
      domInteractive: Math.round(entries?.domInteractive || 0),
      resourceCount: performance.getEntriesByType('resource').length,
      transferSize: performance.getEntriesByType('resource').reduce((sum, r) => sum + (r.transferSize || 0), 0),
    };
  });

  // Get CLS
  const cls = await page.evaluate(() => {
    return new Promise(resolve => {
      let clsValue = 0;
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      setTimeout(() => { observer.disconnect(); resolve(clsValue); }, 3000);
    });
  });

  report += `## ${vp.name} (${vp.width}x${vp.height})\n`;
  report += `- TTFB:              ${metrics.ttfb} ms\n`;
  report += `- FCP:               ${metrics.fcp} ms\n`;
  report += `- DOM Interactive:   ${metrics.domInteractive} ms\n`;
  report += `- DOM Content Loaded:${metrics.domContentLoaded} ms\n`;
  report += `- Load Event:        ${metrics.loadEvent} ms\n`;
  report += `- Total Load Time:   ${loadTime} ms\n`;
  report += `- CLS:               ${cls.toFixed(4)}\n`;
  report += `- Resources:         ${metrics.resourceCount}\n`;
  report += `- Transfer Size:     ${(metrics.transferSize / 1024).toFixed(0)} KB\n\n`;

  console.log(`${vp.name}: FCP=${metrics.fcp}ms, Load=${loadTime}ms, CLS=${cls.toFixed(4)}`);
  await page.close();
}

await browser.close();
writeFileSync(OUTPUT, report);
console.log('Saved to', OUTPUT);
