# Phase 0.3 — Baseline

## Base Theme Decision

Source theme: `masons/main` (fully bespoke custom OS2.0 theme)
- NOT based on any public Shopify theme
- Custom web component framework (DeclarativeShadowElement)
- Custom scroll/animation system (no GSAP/Swiper/etc.)

**Decision: Use existing Horizon 3.5.0 as base on target store.**

The target store (shoopify-test.myshopify.com) already has Horizon 3.5.0 installed.
Horizon is a paid Shopify theme by Shopify — it provides a solid OS2.0 foundation
that we will heavily customize to match the source store's bespoke design.

FLAG: The source theme is fully custom. Every section, component, and animation
will need to be built or heavily modified from the Horizon base. This is not a
theme-swap — it is a ground-up rebuild using Horizon's scaffolding.

## Target Store Current State
- Theme: Horizon 3.5.0 by Shopify
- OS version: OS2.0 (templates/*.json confirmed)
- Templates present: 404, article, blog, cart, collection, index, list-collections,
  page (+ about, contact, press, recipes variants), password, product, search

## Baseline Screenshots
Status: PENDING — requires `shopify theme dev` to be running.
To complete:
1. Run: shopify theme dev --store=shoopify-test.myshopify.com
2. Capture at 1440px, 768px, 375px
3. Save to: docs/screenshots/baseline/

## Lighthouse Baseline
Status: PENDING MANUAL RUN — see docs/lighthouse-baseline.txt
