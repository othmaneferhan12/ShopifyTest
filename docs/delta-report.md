# Delta Report — Mason's Clone
## Features that cannot be fully replicated on target store

---

## Phase 3.5 — Checkout Configuration

**Source store:** Shopify Plus (Checkout Extensibility)
**Target store:** shoopify-test.myshopify.com (standard Shopify plan assumed)

### Status: CANNOT REPLICATE

The source store (masons-forte-dei-marmi.myshopify.com) uses **Shopify Plus Checkout Extensibility** — not legacy checkout.liquid. This means:
- Checkout branding is configured via the Checkout Branding API / admin settings
- Custom checkout UI extensions may be installed
- No checkout.liquid file exists to pull

**If target is NOT Shopify Plus:**
- Checkout customization is limited to standard Shopify checkout settings
- Can set: logo, accent color, button color, font in admin > Settings > Checkout
- Cannot replicate: custom checkout extensions, advanced branding, custom fields

**Recommended target checkout settings (manual, in Shopify admin):**
- Logo: Upload `masons-clothing-logo-text.png`
- Accent color: `#FF5031`
- Button color: `#222222`
- Error color: `#8B0000`
- Font: Helvetica Neue (system) or closest available
- Background: `#F2F2F2`

**If target IS Shopify Plus:**
- Apply checkout branding via admin > Settings > Checkout > Customize
- Match colors: primary bg #222222, accent #FF5031, text #FFFFFF
- Match typography: Helvetica Neue, uppercase headings
- Install matching checkout extensions if needed (Klarna, Trusted Shops)

---

## Phase 3.6 — Markets & Localization

**Source store markets (5 locales):**

| Market | Language | Currency | URL Pattern |
|---|---|---|---|
| Italy (primary) | Italian (it) | USD | /it/ |
| France | French (fr) | USD | /fr/ |
| Germany | German (de) | USD | /de/ |
| Spain | Spanish (es) | USD | /es/ |
| International | English (en) | USD | / (default) |

### Status: REQUIRES MANUAL ADMIN SETUP

Markets must be configured manually in target store admin:
1. **Admin > Settings > Markets** — create each market above
2. **Admin > Settings > Languages** — add IT, FR, DE, ES translations
3. Currency: USD for all markets (single currency)

**Locale files:** The Horizon base theme ships with all necessary locale files (en, fr, de, es, it + 40 others). The source store's locale customizations (translation overrides) cannot be pulled without admin API access.

**Action needed:** After theme deploy, review key translation strings in admin > Settings > Languages > Edit translations, especially:
- Navigation labels (FW25 Homme/Femme, Parfum & Accessoires, Notre Histoire)
- Footer links
- Product-specific labels (fit names, fabric descriptions)

---

## Phase 3.7 — Customer Accounts

**Source store:** New Customer Accounts (hosted at shopify.com/a/account)
**Detection:** Phase 0.1 confirmed new-style accounts (no /account/login path)

### Status: CONFIGURE IN ADMIN

New Customer Accounts are Shopify-hosted — no Liquid templates to customize. Configuration:

1. **Admin > Settings > Customer accounts** — enable "New customer accounts"
2. **Branding settings:**
   - Logo: Upload `masons-clothing-logo-text.png`
   - Primary color: `#000000`
   - Accent color: `#FF5031`
   - Background: `#F2F2F2`
3. No custom Liquid templates needed (pages hosted by Shopify)

**Note:** The source store's customer account pages have minimal custom branding — standard Shopify-hosted experience. Full visual match expected with the branding settings above.
