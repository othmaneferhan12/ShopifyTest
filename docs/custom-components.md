# Custom Components Registry — Mason's Clone

## Custom Assets Created

| File | Type | Purpose | Size (gzip) | Used On |
|---|---|---|---|---|
| `assets/custom.css` | CSS | Root variables, menu grid, app positioning, wishlist vars | 991 B | All pages |
| `assets/custom.js` | JS | UTM capture for cart attributes | 888 B | All pages |

## Import Scripts

| File | Purpose | Status |
|---|---|---|
| `scripts/scrape-products.js` | Scrape products via public /products.json | Complete — 806 products |
| `scripts/scrape-collections.js` | Scrape collections + product mappings | Complete — 155 collections |
| `scripts/scrape-pages-blogs-nav.js` | Scrape pages, blogs, navigation | Complete — 63 pages, 0 blogs |
| `scripts/extract-navigation.js` | Extract nav structure from homepage HTML | Complete |
| `scripts/import-products.js` | Import products to target via Admin API | Run — 50 imported |
| `scripts/import-collections.js` | Import collections to target via Admin API | Run — 30 imported |
| `scripts/import-pages.js` | Import pages to target via Admin API | Run — 63 imported |
| `scripts/import-redirects.js` | Build + import 301 redirects | Ready — 1024 redirects built |
| `scripts/delete-all-products.js` | Utility: delete all products from target | Utility |
| `scripts/seo-check.js` | SEO comparison between source and target | Complete |

## Scraped Data Files

| File | Content | Count |
|---|---|---|
| `docs/scraped-data/products.json` | All products with variants, images, tags | 806 |
| `docs/scraped-data/collections.json` | All collections metadata | 155 |
| `docs/scraped-data/collection-products.json` | Collection → product handle mappings | 155 |
| `docs/scraped-data/pages.json` | All CMS pages with HTML content | 63 |
| `docs/scraped-data/navigation.json` | Main menu + footer structure | 30 items |
| `docs/scraped-data/redirect-map.json` | 301 redirect map (locale prefix) | 1024 |
| `docs/scraped-data/sitemap.xml` | Source store sitemap | — |
| `docs/scraped-data/seo-comparison.json` | SEO audit source vs target | 4 pages |

## QA Infrastructure

| File | Purpose |
|---|---|
| `tests/visual-diff.spec.js` | Playwright visual regression tests (8 pages × 3 viewports) |
| `playwright.config.js` | Playwright configuration |
| `tests/visual-diff.spec.js-snapshots/` | 24 baseline screenshot PNGs |

## Documentation

| File | Purpose |
|---|---|
| `docs/phase-0.1-recon.md` | Stack detection, theme architecture |
| `docs/phase-0.3-baseline.md` | Base theme decision, target state |
| `docs/phase-0.5-env-validation.md` | Environment validation |
| `docs/site-audit.md` | Complete site audit — sections, apps, assets |
| `docs/asset-manifest.md` | Downloaded asset inventory |
| `docs/delta-report.md` | Everything that cannot be 100% replicated |
| `docs/metafield-definitions.json` | Metafield definitions for target store |
| `docs/metaobject-definitions.json` | Metaobject definitions |
| `docs/source-templates/*.json` | Source store OS2.0 template structures |
