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

---

## Phase 6 — Custom Code & Interactions

### Phase 6.1 — Custom CSS
- **External stylesheets**: 2 (Shopify portable-wallets CSS + compiled theme `styles.css`)
- **Inline style blocks**: 49 (root variables, font-face, menu grid config, collection ratios, app styles)
- **`!important` usage**: 2 instances only (Pandectes GDPR widget positioning)
- **CSP header**: `block-all-mixed-content; frame-ancestors 'none'; upgrade-insecure-requests;`
- **Custom CSS consolidated into**: `assets/custom.css`

### Phase 6.2 — Custom JavaScript
- **No external JS libraries** — source uses 100% custom code (confirmed Phase 0.1)
- **Theme JS modules**: 24 custom web component modules (critical.js, component.js, scrolling.js, etc.)
- **Third-party scripts**: Klaviyo, Trustpilot, Triple Whale, Pandectes, WishlistKing, PayPal, Klarna
- **Custom JS consolidated into**: `assets/custom.js` (UTM capture for cart attributes)
- **Performance**: custom.js < 1KB gzipped (well under 30KB target)

### Phase 6.3 — Animations
- **No animation libraries** — source uses CSS-native animations only
- Native `scrollTo`, `ResizeObserver`, CSS `scroll-snap`, CSS `maskImage` gradients
- CSS transitions for hover states, accordions, dialogs
- No AOS, GSAP, Swiper, or any third-party animation library to replicate

### Phase 6.4 — Shopify Functions
- **Cart discount logic**: `cart-discount.js` detected — may indicate custom discount function
- **No evidence of**: shipping rate filtering, payment method filtering, or cart transformation
- **Action required**: Check source store admin for installed Shopify Functions apps. If custom discount functions exist, they require separate app deployment on target store.

### Phase 6.5 — Interaction Checklist

| Component | Status | Notes |
|---|---|---|
| Carousels | DOCUMENTED | `slideshow.js` — CSS scroll-snap based, no external library |
| Accordions | DOCUMENTED | `accordion-custom.js` — custom web component |
| Modals/Popups | DOCUMENTED | `dialog.js` + `floating-panel.js` — custom implementation |
| Cart drawer | DOCUMENTED | `cart-drawer.js` + `drawer-toggle.js` — slide-in drawer |
| Header | DOCUMENTED | `header.js` — sticky/shrink behavior, custom scroll handling |
| Hover states | DOCUMENTED | CSS-only, no JS hover effects |
| Form validations | DOCUMENTED | `product-form.js` — native validation |
| App blocks | PARTIAL | Klaviyo, Trustpilot, WishlistKing, Pandectes need app installation on target |

---

## Delta Summary Table

| Element | Source Behavior | Clone Behavior | Reason | Workaround |
|---|---|---|---|---|
| Customer data | Full customer DB | Empty | No Admin API access to source | Customers register fresh |
| Shopify Flow | Active workflows (tag automation, channel routing) | Not replicated | No Admin API access to source | Manual recreation in target admin > Apps > Flow |
| Product reviews (Loox) | Installed but inactive (all null) | Not installed | No reviews exist to migrate | Install Loox on target if needed |
| Gift card | 1 gift card product | Not imported | Cannot import via API | Create manually in admin > Products > Gift cards |
| Checkout (Plus) | Checkout Extensibility | Standard checkout | Target is not Shopify Plus | Use standard checkout settings |
| Markets/Localization | 5 locales (IT/FR/DE/ES/EN) | Not configured | Requires manual admin setup | Configure in Settings > Markets |
| Email templates | Branded Mason's emails | Default Shopify emails | No API access to source templates | Manually brand in Settings > Notifications |
| Shopify Functions | cart-discount.js detected | Not replicated | Requires separate app deployment | Check source admin for custom functions |
| Product count | 806 products | 50 imported | Intentional partial import | Run import-products.js without slice for full import |
| Collection count | 155 collections | 30 imported | Intentional partial import | Run import-collections.js without slice for full import |
| Redirects | N/A | 1024 built, not imported | Awaiting full import | Run import-redirects.js after all products/collections imported |
| Navigation menus | Main menu + footer | Extracted, not created in admin | Requires manual setup or API | Create in admin > Online Store > Navigation |
| Third-party apps | Klaviyo, Trustpilot, Triple Whale, Klarna, Pandectes, WishlistKing | Not installed | Requires manual app installation | Install each app from Shopify App Store |
