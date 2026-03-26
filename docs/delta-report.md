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

---

## Phase 5.7 — Customer Data Migration

### Status: SKIPPED — NO SOURCE ADMIN API

Customer data: not migrated — no Admin API access to source store. Customers must register fresh on the clone.

---

## Phase 5.8 — Shopify Flow Automations

### Status: CANNOT EXTRACT — NO SOURCE ADMIN API

Shopify Flow: workflows not accessible without source store Admin API.
Action required: manually list all active Flow workflows from the source store admin (if access can be obtained) and recreate them in target store admin > Apps > Flow.

**Indirect Flow signals detected from product tags:**
- **Automated tagging system**: Products use structured tags with prefixes (COLOR:, GENDER:, MODEL:, FIT:, SEASON:, SKU:, STYLE:, TYPE1:, TYPE2:, MAIN COLLECTION:). This suggests Flow or a tag automation app auto-tags products on creation.
- **Seasonal/promo tags**: `FW25`, `Estivo`, `Invernale`, `Promo FW25`, `SALDI30`, `NEW1`–`NEW6`, `NEWW`–`NEWW9` — likely Flow-driven for automated collection membership.
- **Channel tags**: `ZALANDO` (261 products), `NOFEED` (9 products) — suggests Flow routes products to marketplace feeds.
- **Merchandising tags**: `TRAD 1`–`TRAD 21` — likely controls sort order or display position.
- **Promo tags**: `PROMO1`, `LC20`, `LC60`, `SS25 30`, `SS25 40` — likely triggers discount automation.

**Recommendation:** Recreate these tag-based automations in target store via Shopify Flow after obtaining source admin access or documenting the rules manually.

---

## Phase 5.9 — Email Notification Templates

### Status: REQUIRES MANUAL BRANDING

Target store email sender: `othmanferhan552@gmail.com`
Target store domain: `shoopify-test.myshopify.com`

**Action required — customize in target admin > Settings > Notifications:**

1. **Order confirmation**: Update logo to Mason's logo, set brand colors (#222222 primary, #FF5031 accent)
2. **Shipping confirmation**: Match tracking link format, include Mason's branding
3. **Abandoned checkout**: Add Mason's brand voice, include discount code if applicable
4. **Customer account welcome**: Match onboarding flow with Mason's branding
5. **All templates**: Replace default Shopify logo with `masons-clothing-logo-text.png`

**Transactional email domain:**
- Current sender: `othmanferhan552@gmail.com` (Gmail — no custom domain)
- For production: configure a custom sending domain (e.g., `noreply@[yourdomain].com`)
- Verify SPF, DKIM, DMARC DNS records for the sending domain
- Configure in admin > Settings > Notifications > Sender email
