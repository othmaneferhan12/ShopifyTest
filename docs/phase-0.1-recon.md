# Phase 0.1 — Reconnaissance: Browse & Stack Detection

## Source Store
- URL: https://us.masons.it/fr
- Shopify internal shop: masons-forte-dei-marmi.myshopify.com
- Merchant ID: gid://shopify/Shop/56940101806

## Config Table

| Field | Value |
|---|---|
| Source theme | `masons/main` — custom theme, schema_name: `masons`, schema_version: `1.0.0`, theme ID: `186912276862` |
| OS version | OS2.0 — section rendering via `?section_id=`, `.shopify-section` DOM caching, `@theme/` import maps, web components |
| Customer accounts | New — `/fr/account` redirects to `https://shopify.com/56940101806/account?locale=fr` |
| Shopify Plus | YES — Enterprise plan, Checkout Extensibility active (shop.app redirect) |
| JS libraries | None (no GSAP, Swiper, AOS, Alpine, jQuery, Splide, Flickity, Lottie). 100% custom code |
| Third-party apps | Klaviyo, Trustpilot, Triple Whale, Klarna, Trusted Shops, Pandectes (GDPR), GTM, TikTok pixel, Facebook pixel, Quantcast |
| Markets/Localization | YES — 5 locales (IT, FR, DE, ES, EN), USD currency, URL prefix pattern |

## Theme Architecture
- Framework: Custom web component system (DeclarativeShadowElement -> Component)
- Key modules: critical.js, component.js, scrolling.js, section-renderer.js, morph.js, dialog.js, events.js, focus.js, performance.js, utilities.js, paginated-list.js, product-form.js, media-gallery.js, quick-add.js, recently-viewed-products.js, custom-variant-picker.js
- Fonts: Helvetica Neue (Roman/Medium/Bold), Bull-5 (monospace), Southera (custom display) — self-hosted, font-display: swap
- Animations: Custom scroll handling (native scrollTo, ResizeObserver, CSS scroll-snap, CSS maskImage gradients)
- Storefront API token: 5b85214fece447bdf27d2d9c2f3eab8d
- CDN path: //us.masons.it/cdn/shop/t/61/assets/

## Cloning Implications
1. Custom theme — NOT based on Dawn or any public theme. Sections/components must be built from scratch.
2. No animation library dependencies — all CSS/native JS.
3. Checkout Extensibility — Plus checkout via shop.app, uses Checkout UI Extensions (not checkout.liquid).
4. Multi-market/multi-locale — Shopify Markets config needed with same locale structure.
