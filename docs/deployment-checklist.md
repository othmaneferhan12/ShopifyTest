# Deployment Checklist — Mason's Clone

## PRE-LAUNCH

### Data & Content
- [x] Metafield and metaobject definitions documented (`docs/metafield-definitions.json`, `docs/metaobject-definitions.json`)
- [ ] Metafield definitions created in target store admin
- [ ] Inventory locations created, per-location quantities set
- [ ] All redirects imported (1024 built — run `scripts/import-redirects.js`)
- [x] Products scraped (806 total)
- [x] Products imported (50 of 806 — run full import by removing `.slice(0, 50)` in `scripts/import-products.js`)
- [x] Collections scraped (155 total)
- [x] Collections imported (30 of 155 — run full import by removing `.slice(0, 30)` in `scripts/import-collections.js`)
- [x] Pages imported (63 total)
- [ ] Gift card created manually in admin > Products > Gift cards
- [ ] Navigation menus created in admin > Online Store > Navigation (main-menu + footer)

### Apps
- [ ] Klaviyo installed and configured (email/SMS marketing)
- [ ] Trustpilot installed and configured (trust badges)
- [ ] Triple Whale installed (analytics pixel)
- [ ] Klarna installed (payments)
- [ ] Pandectes installed (GDPR cookie consent)
- [ ] WishlistKing installed (wishlist functionality)
- [ ] Trusted Shops installed (trust badges)
- [ ] All app block placeholders replaced with real app blocks

### Reviews
- [x] Loox identified as inactive on source (no reviews to migrate)
- [ ] Install Loox on target if review functionality desired

### Automation & Email
- [ ] Shopify Flow automations recreated (see delta report for tag patterns)
- [ ] Email notification templates branded (logo, colors, voice)
- [ ] Test email sent for each notification type
- [ ] Transactional email domain verified (SPF, DKIM, DMARC)

### Store Settings
- [ ] Search & Discovery filters/synonyms configured
- [ ] Markets configured (IT, FR, DE, ES, EN locales)
- [ ] Customer accounts enabled (New Customer Accounts style)
- [ ] Payment gateway configured and tested
- [ ] Shipping zones configured
- [ ] Tax settings configured
- [ ] Store password removed

## LAUNCH

- [ ] DNS pointed to new store
- [ ] SSL certificate active
- [ ] Canonical domain set in admin > Settings > Domains
- [ ] Primary domain confirmed (not .myshopify.com)
- [ ] DNS TTL lowered 24 hours before cutover

## POST-LAUNCH (first 48h)

- [ ] Google Search Console updated with new sitemap
- [ ] 20+ redirects spot-checked live
- [ ] Analytics data flowing (Triple Whale, GTM, Facebook pixel)
- [ ] Test order placed — all transactional emails received
- [ ] Review counts visible on product pages (if Loox installed)
- [ ] Flow automations firing (check run history)
- [ ] Lighthouse re-run on live domain vs baseline
- [ ] All pages tested on iOS Safari + Android Chrome
- [ ] Re-run Playwright visual diff: `npx playwright test`

## ROLLBACK PLAN

- [ ] Previous store accessible at old URL during 48h window
- [ ] DNS rollback steps documented
- [ ] Estimated rollback time: 15 minutes (DNS revert)
- [ ] Person responsible: _______________

## CLONE STATUS SUMMARY

| Metric | Value |
|---|---|
| Source store | us.masons.it (masons-forte-dei-marmi.myshopify.com) |
| Target store | shoopify-test.myshopify.com |
| Products scraped | 806 |
| Products imported | 50 (partial — full import ready) |
| Collections scraped | 155 |
| Collections imported | 30 (partial — full import ready) |
| Pages imported | 63 |
| Blogs | 0 (none on source) |
| Redirects built | 1024 |
| Visual diff snapshots | 24 |
| Custom CSS | 991 bytes gzipped |
| Custom JS | 888 bytes gzipped |
