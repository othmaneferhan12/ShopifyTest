# Phase 0.5 — Environment Validation
# Date: 2026-03-25

## TOOLING

- [PASS] node -v → v24.14.0
- [PASS] shopify version → 3.92.1
- [NOTE] shopify auth → Cannot verify non-interactively. CLI is installed and functional.
- [PASS] git status → main branch, remote connected (origin: github.com/othmaneferhan12/ShopifyTest.git)
- [FAIL] .env file → Exists but contains PLACEHOLDER values. Needs real credentials:
  - SOURCE_STORE=https://us.masons.it
  - TARGET_STORE=shoopify-test.myshopify.com
  - SHOPIFY_CLI_THEME_TOKEN=[needs real token]

## THEME

- [PASS] Source theme: masons/main, schema v1.0.0, theme ID 186912276862
- [PASS] OS version: OS2.0 (confirmed both source and target)
- [PASS] Customer accounts: New (redirects to shopify.com/56940101806/account)
- [PASS] Base theme on target: Horizon 3.5.0 by Shopify (installed)
- [NOTE] shopify theme dev → Not tested (requires interactive auth + store connection)
- [PASS] OS2.0 confirmed: templates/ contains 15 .json files + 1 gift_card.liquid

## DATA ACCESS

- [PASS] Admin API access to source store: NO (confirmed — using no-API scraping path)
- [PASS] Storefront API token extracted: 5b85214fece447bdf27d2d9c2f3eab8d (public)
- [NOTE] Products.json API accessible (public, ~96 active products across 4 pages)

## BASELINE

- [NOTE] Lighthouse baseline: PENDING manual run (API quota exhausted). See docs/lighthouse-baseline.txt
- [NOTE] Baseline screenshots: PENDING — requires shopify theme dev running
- [PASS] Browser DevTools accessible on source store (no password gate, no Cloudflare block)

## ACTION ITEMS BEFORE PHASE 1

1. Update .env with real target store credentials and SHOPIFY_CLI_THEME_TOKEN
2. Run `shopify theme dev --store=shoopify-test.myshopify.com` to confirm auth works
3. Run Lighthouse manually in Chrome DevTools and fill in docs/lighthouse-baseline.txt
4. Take baseline screenshots at 1440px, 768px, 375px → save to docs/screenshots/baseline/
