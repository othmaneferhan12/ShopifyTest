const { test, expect } = require('@playwright/test');

const SOURCE = 'https://us.masons.it/fr';
const TARGET = 'https://shoopify-test.myshopify.com';

const PAGES = [
  '/',
  '/collections',
  '/collections/accessories-1',
  '/products/livia-camicia-donna-a-manica-corta-in-tela-misto-lino-e-viscosa-fantasia-a-fiori',
  '/cart',
  '/pages/faq',
  '/search',
  '/404'
];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

for (const page of PAGES) {
  for (const vp of VIEWPORTS) {
    test(`${page} @ ${vp.name}`, async ({ browser }) => {
      const ctx = await browser.newContext({ viewport: vp });
      const p = await ctx.newPage();

      // Handle password page on target store
      try {
        await p.goto(TARGET + page, { timeout: 30000 });
        await p.waitForLoadState('networkidle', { timeout: 15000 });
      } catch {
        // Store may be password-protected
      }

      await expect(p).toHaveScreenshot(
        `${vp.name}${page.replace(/\//g, '-') || '-home'}.png`,
        {
          fullPage: true,
          maxDiffPixelRatio: 0.001,
          threshold: 0.2
        }
      );
    });
  }
}
