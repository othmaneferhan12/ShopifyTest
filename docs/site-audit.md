# Site Audit — us.masons.it/fr

## 1.1 Design Tokens

### 1. CSS Custom Properties (Full Extraction)

All tokens extracted from `:root` / inline `<style>` on `https://us.masons.it/fr`.

#### Color Tokens

| Variable | Value |
|---|---|
| `--color-background` | `rgb(242 242 242 / 1.0)` — **#F2F2F2** |
| `--color-background-rgb` | `242 242 242` |
| `--color-foreground` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-foreground-rgb` | `0 0 0` |
| `--color-foreground-heading` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-foreground-heading-rgb` | `0 0 0` |
| `--color-accent` | `rgb(255 80 49 / 1.0)` — **#FF5031** |
| `--color-primary` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-primary-rgb` | `0 0 0` |
| `--color-primary-hover` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-border` | `rgb(229 229 229 / 1.0)` — **#E5E5E5** |
| `--color-border-rgb` | `229 229 229` |
| `--color-shadow` | `rgb(128 125 125 / 1.0)` — **#807D7D** |
| `--color-shadow-rgb` | `128 125 125` |
| `--color-primary-button-text` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-primary-button-background` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-primary-button-border` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-primary-button-hover-text` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-primary-button-hover-background` | `rgb(255 80 49 / 1.0)` — **#FF5031** |
| `--color-primary-button-hover-border` | `rgb(255 80 49 / 1.0)` — **#FF5031** |
| `--color-secondary-button-text` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-secondary-button-background` | `rgb(0 0 0 / 0.0)` — **transparent** |
| `--color-secondary-button-border` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-secondary-button-hover-text` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-secondary-button-hover-background` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-secondary-button-hover-border` | `rgb(34 34 34 / 1.0)` — **#222222** |
| `--color-input-background` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-input-text` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-input-border` | `rgb(229 229 229 / 1.0)` — **#E5E5E5** |
| `--color-input-hover-background` | `rgb(229 229 229 / 1.0)` — **#E5E5E5** |
| `--color-variant-background` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-variant-border` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-variant-text` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-variant-hover-background` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-variant-hover-text` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-variant-hover-border` | `rgb(255 80 49 / 1.0)` — **#FF5031** |
| `--color-selected-variant-background` | `rgb(255 255 255 / 1.0)` — **#FFFFFF** |
| `--color-selected-variant-border` | `rgb(255 80 49 / 1.0)` — **#FF5031** |
| `--color-selected-variant-text` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-selected-variant-hover-background` | `rgb(229 229 229 / 1.0)` — **#E5E5E5** |
| `--color-selected-variant-hover-text` | `rgb(0 0 0 / 1.0)` — **#000000** |
| `--color-selected-variant-hover-border` | `rgb(229 229 229 / 1.0)` — **#E5E5E5** |
| `--color-foreground-muted` | `rgb(var(--color-foreground-rgb) / var(--opacity-60))` |
| `--color-error` | **#8B0000** (dark red) |
| `--color-success` | **#006400** (dark green) |
| `--color-white` | **#FFFFFF** |
| `--color-black` | **#000000** |
| `--color-instock` | **#3ED660** (green) |
| `--color-lowstock` | `var(--color-accent)` — **#FF5031** |
| `--color-outofstock` | **#C8C8C8** (grey) |

#### Font Tokens

| Variable | Value |
|---|---|
| `--font-body--family` | `Helvetica Neue, sans-serif` |
| `--font-subheading--family` | `Helvetica Neue, sans-serif` |
| `--font-heading--family` | `Helvetica Neue, monospace` |
| `--font-accent--family` | `Bull-5, monospace` |
| `--southera` | `'Southera'` |
| `--font-body--weight` | `400` |
| `--font-subheading--weight` | `500` |
| `--font-heading--weight` | `500` |
| `--font-accent--weight` | `400` |
| `--font-body--style` | `normal` |
| `--font-heading--style` | `normal` |

#### Font Size Scale

| Variable | Value |
|---|---|
| `--font-size--2xs` | `0.8125rem` (13px) |
| `--font-size--xs` | `0.875rem` (14px) |
| `--font-size--sm` | `1rem` (16px) |
| `--font-size--md` | `1.125rem` (18px) |
| `--font-size--lg` | `1.25rem` (20px) |
| `--font-size--xl` | `1.5rem` (24px) |
| `--font-size--2xl` | `2rem` (32px) |
| `--font-size--3xl` | `2.5rem` (40px) |
| `--font-size--4xl` | `3rem` (48px) |
| `--font-size--5xl` | `3.5rem` (56px) |
| `--font-size--paragraph` | `1.4rem` (14px) |
| `--font-size--h1` | `2.4rem` (24px) |
| `--font-size--h2` | `2.4rem` (24px) |
| `--font-size--h3` | `2.0rem` (20px) |
| `--font-size--h4` | `1.8rem` (18px) |
| `--font-size--h5` | `1.6rem` (16px) |
| `--font-size--h6` | `1.4rem` (14px) |

#### Heading Typography

| Level | Family | Weight | Case | Letter Spacing | Line Height |
|---|---|---|---|---|---|
| H1 | `--font-heading--family` | `500` | `uppercase` | `0.25em` | `160%` |
| H2 | `--font-heading--family` | `500` | `uppercase` | `0.25em` | `160%` |
| H3 | `--font-body--family` | `400` | `uppercase` | `0.25em` | `160%` |
| H4 | `--font-body--family` | `400` | `none` | `0.25em` | `160%` |
| H5 | `--font-body--family` | `400` | `none` | `0.25em` | `160%` |
| H6 | `--font-body--family` | `400` | `none` | `0.25em` | `160%` |

#### Spacing Scale

| Token | Value |
|---|---|
| `--margin-3xs` / `--padding-3xs` / `--gap-3xs` | `0.125rem` (2px) |
| `--margin-2xs` / `--gap-2xs` | `0.3rem` (4.8px) |
| `--padding-2xs` | `0.25rem` (4px) |
| `--margin-xs` / `--padding-xs` / `--gap-xs` | `0.5rem` (8px) |
| `--margin-sm` / `--padding-sm` / `--gap-sm` | `0.7rem` (11.2px) |
| `--margin-md` / `--padding-md` / `--gap-md` | `0.8rem` / `0.9rem` |
| `--margin-lg` / `--padding-lg` / `--gap-lg` | `1rem` (16px) |
| `--margin-xl` / `--padding-xl` / `--gap-xl` | `1.25rem` (20px) |
| `--margin-2xl` / `--padding-2xl` / `--gap-2xl` | `1.5rem` / `2rem` |
| `--margin-3xl` / `--padding-3xl` / `--gap-3xl` | `1.75rem` / `3rem` |
| `--margin-4xl` / `--padding-4xl` | `2rem` (32px) |
| `--margin-5xl` / `--padding-5xl` | `3rem` (48px) |
| `--margin-6xl` / `--padding-6xl` | `5rem` / `4rem` |

#### Layout Tokens

| Variable | Value |
|---|---|
| `--sidebar-width` | `37rem` |
| `--narrow-content-width` | `57.6rem` |
| `--normal-content-width` | `67.2rem` |
| `--wide-content-width` | `90rem` |
| `--narrow-page-width` | `144rem` |
| `--normal-page-width` | `192rem` |
| `--wide-page-width` | `240rem` |
| `--padding-inline` | `1.2rem` |

#### Border & Radius Tokens

| Variable | Value |
|---|---|
| `--style-border-width` | `1px` |
| `--style-border-radius-xs` | `0.2rem` |
| `--style-border-radius-sm` | `0.6rem` |
| `--style-border-radius-md` | `0.8rem` |
| `--style-border-radius-lg` | `1rem` |
| `--style-border-radius-pills` | `0` |
| `--style-border-radius-buttons-primary` | `0` |
| `--style-border-radius-buttons-secondary` | `0` |
| `--style-border-radius-popover` | `0` |

#### Animation Tokens

| Variable | Value |
|---|---|
| `--ease-out-cubic` | `cubic-bezier(0.33, 1, 0.68, 1)` |
| `--ease-out-quad` | `cubic-bezier(0.32, 0.72, 0, 1)` |
| `--animation-speed-fast` | `0.0625s` |
| `--animation-speed` | `0.125s` |
| `--animation-speed-medium` | `0.15s` |
| `--animation-speed-slow` | `0.2s` |
| `--animation-easing` | `ease-in-out` |
| `--drawer-animation-speed` | `0.2s` |

#### Z-Index Scale

| Variable | Value |
|---|---|
| `--layer-section-background` | `-2` |
| `--layer-lowest` | `-1` |
| `--layer-base` | `0` |
| `--layer-flat` | `1` |
| `--layer-raised` | `2` |
| `--layer-heightened` | `4` |
| `--layer-sticky` | `8` |
| `--layer-window-overlay` | `10` |
| `--layer-header-menu` | `12` |
| `--layer-overlay` | `16` |
| `--layer-menu-drawer` | `18` |
| `--layer-temporary` | `20` |

#### Opacity Scale

| Variable | Value |
|---|---|
| `--opacity-5` | `0.05` |
| `--opacity-8` | `0.08` |
| `--opacity-10` | `0.1` |
| `--opacity-15` | `0.15` |
| `--opacity-20` | `0.2` |
| `--opacity-25` | `0.25` |
| `--opacity-30` | `0.3` |
| `--opacity-40` | `0.4` |
| `--opacity-50` | `0.5` |
| `--opacity-60` | `0.6` |
| `--opacity-70` | `0.7` |
| `--opacity-80` | `0.8` |
| `--opacity-85` | `0.85` |
| `--opacity-90` | `0.9` |

---

### 2. Computed Colors from Key Elements

| Selector | Background | Color (Text) | Border |
|---|---|---|---|
| `body` | `#F2F2F2` (light grey) | `#000000` (black) | `#E5E5E5` |
| `h1` | transparent | `#000000` (via `--color-foreground-heading`) | — |
| `h2` | transparent | `#000000` (via `--color-foreground-heading`) | — |
| `a` | transparent | `#000000` (via `--color-foreground`) | — |
| `button` / `.btn` | `#222222` (primary) / transparent (secondary) | `#FFFFFF` (primary) / `#222222` (secondary) | `#222222` |
| `.header` | `#F2F2F2` (inherits background) | `#000000` | — |
| `footer` | `#F2F2F2` (inherits background) | `#000000` | — |
| `.card` | `#FFFFFF` (via `--color-variant-background`) | `#000000` | hover: `rgba(0,0,0,0.3)` |

---

### 3. Color Palette Summary

| Slot | Purpose | Source Hex | Used On |
|---|---|---|---|
| 1 | Primary background | **#F2F2F2** | `body`, `.header`, `footer`, page background |
| 2 | Secondary background | **#FFFFFF** | Cards, inputs, variant pickers, secondary button hover |
| 3 | Primary text | **#000000** | `body`, headings, links, secondary button text |
| 4 | Accent / button hover | **#FF5031** | Button hover bg/border, selected variant border, low stock indicator |
| 5 | Button label / primary button bg | **#222222** bg / **#FFFFFF** text | Primary buttons (dark bg, white text) |
| 6 | Borders / shadows | **#E5E5E5** border / **#807D7D** shadow | Input borders, dividers, drawer shadows, popover shadows |
| 7 | Status colors | **#3ED660** in-stock / **#8B0000** error / **#006400** success / **#C8C8C8** out-of-stock | Stock indicators, form validation, success messages |

---

### 4. Theme Color Scheme Structure

> **Note:** No admin API access to source store. `config/settings_schema.json` is not accessible via CLI or public scraping. However, from the extracted CSS custom properties we can infer the theme's color scheme architecture:

**Inferred schema structure:**
- The theme uses a **flat token system** (not Shopify Dawn-style `color_schemes` with numbered scheme groups).
- Colors are defined directly as `:root` CSS custom properties with both `rgb()` and `-rgb` (space-separated channel) variants.
- The scheme supports:
  - **Surfaces:** `background`, `foreground`, `foreground-heading`
  - **Interactive:** `primary-button-*` (text/bg/border + hover states), `secondary-button-*` (text/bg/border + hover states)
  - **Inputs:** `input-*` (background/text/border/hover)
  - **Variants:** `variant-*` and `selected-variant-*` (background/text/border + hover)
  - **Accent:** Single accent color (`--color-accent: #FF5031`)
  - **Utility:** `error`, `success`, `instock`, `lowstock`, `outofstock`
- **Button styling:** Square (border-radius: 0), uppercase, 1px border, no shadow on rest state.
- **Overall aesthetic:** Minimal, monochrome (#F2F2F2 / #000 / #222) with a single warm accent (#FF5031 red-orange). Zero rounded corners on interactive elements.

---

## 1.2 Typography

### 1. Computed Typography per Element

| Element | Font Family | Weight | Size | Line Height | Letter Spacing | Text Transform |
|---|---|---|---|---|---|---|
| `h1` | Helvetica Neue, monospace | 500 | 2.4rem (24px) | 160% | 0.25em | uppercase |
| `h2` | Helvetica Neue, monospace | 500 | 2.4rem (24px) | 160% | 0.25em | uppercase |
| `h3` | Helvetica Neue, sans-serif | 400 | 2.0rem (20px) | 160% | 0.25em | uppercase |
| `h4` | Helvetica Neue, sans-serif | 400 | 1.8rem (18px) | 160% | 0.25em | none |
| `h5` | Helvetica Neue, sans-serif | 400 | 1.6rem (16px) | 160% | 0.25em | none |
| `h6` | Helvetica Neue, sans-serif | 400 | 1.4rem (14px) | 160% | 0.25em | none |
| `p` | Helvetica Neue, sans-serif | 400 | 1.4rem (14px) | 120% | 0em | none |
| `a` | Helvetica Neue, sans-serif | 400 | inherited | inherited | 0em | none |
| `button` | Helvetica Neue, sans-serif | 400 | inherited | inherited | — | uppercase |
| `li` | Helvetica Neue, sans-serif | 400 | inherited | inherited | 0em | none |
| `input` | Helvetica Neue, sans-serif | 400 | inherited | inherited | 0em | none |

### 2. @font-face Declarations

All fonts are **custom self-hosted** `.woff2` files on Shopify CDN. No Google Fonts, Adobe Fonts, or Shopify font library used.

#### Helvetica Neue — Roman (body weight)
- **File:** `HelveticaNeue-Roman.woff2`
- **URL:** `https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Roman.woff2?v=1762768667`
- **@font-face weights declared:** 400, 700 (normal + italic)
- **font-display:** swap

#### Helvetica Neue — Medium (heading weight)
- **File:** `HelveticaNeue-Medium.woff2`
- **URL:** `https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Medium.woff2?v=1762769252`
- **@font-face weights declared:** 400, 700 (normal + italic)
- **font-display:** swap

#### Helvetica Neue — Bold
- **File:** `HelveticaNeue-Bold.woff2`
- **URL:** `https://cdn.shopify.com/s/files/1/0569/4010/1806/files/HelveticaNeue-Bold.woff2?v=1762769252`
- **@font-face weights declared:** 400, 700 (normal + italic)
- **font-display:** swap

#### Bull-5 Typewriter (accent/monospace)
- **File:** `Bull-5-Typewriter.woff2`
- **URL:** `https://cdn.shopify.com/s/files/1/0569/4010/1806/files/Bull-5-Typewriter.woff2?v=1762768519`
- **@font-face weights declared:** 400, 700 (normal + italic)
- **font-display:** swap

#### Southera (display/decorative)
- **File:** `Southera.woff2`
- **URL:** `https://cdn.shopify.com/s/files/1/0511/3131/8443/files/Southera_2c5b675c-79a8-41af-bd02-1e550131dea7.woff2?v=1761659652`
- **@font-face weight:** normal
- **font-display:** swap
- **Note:** Hosted on a different Shopify store CDN (0511/3131/8443 vs 0569/4010/1806) — likely shared asset or originating theme dependency.

### 3. Font Source Identification

| Font | Source | Action Required |
|---|---|---|
| Helvetica Neue Roman | Custom @font-face (Shopify CDN) | Download .woff2, load via `assets/custom-fonts.css` |
| Helvetica Neue Medium | Custom @font-face (Shopify CDN) | Download .woff2, load via `assets/custom-fonts.css` |
| Helvetica Neue Bold | Custom @font-face (Shopify CDN) | Download .woff2, load via `assets/custom-fonts.css` |
| Bull-5 Typewriter | Custom @font-face (Shopify CDN) | Download .woff2, load via `assets/custom-fonts.css` |
| Southera | Custom @font-face (Shopify CDN) | Download .woff2, load via `assets/custom-fonts.css` |

### 4. Font Mapping Table

| Role | Font Family | Weight(s) | Source | CSS Variable |
|---|---|---|---|---|
| Body | Helvetica Neue (Roman) | 400 | Custom .woff2 | `--font-body--family: Helvetica Neue, sans-serif` |
| Headings (H1-H2) | Helvetica Neue (Medium) | 500 | Custom .woff2 | `--font-heading--family: Helvetica Neue, monospace` |
| Subheadings | Helvetica Neue (Medium) | 500 | Custom .woff2 | `--font-subheading--family: Helvetica Neue, sans-serif` |
| Accent / Monospace | Bull-5 Typewriter | 400 | Custom .woff2 | `--font-accent--family: Bull-5, monospace` |
| Display / Decorative | Southera | normal | Custom .woff2 | `--southera: 'Southera'` |
| Bold emphasis | Helvetica Neue (Bold) | 700 | Custom .woff2 | Used via font-weight: 700 on Helvetica Neue |

### 5. CSS Variable Names for Fonts

```
--font-body--family: Helvetica Neue, sans-serif
--font-body--weight: 400
--font-body--style: normal

--font-heading--family: Helvetica Neue, monospace
--font-heading--weight: 500
--font-heading--style: normal

--font-subheading--family: Helvetica Neue, sans-serif
--font-subheading--weight: 500
--font-subheading--style: normal

--font-accent--family: Bull-5, monospace
--font-accent--weight: 400
--font-accent--style: normal

--southera: 'Southera'
```

### 6. Custom Fonts Action Plan

All 5 font files must be downloaded as `.woff2` and self-hosted in the clone theme:

1. Download the 5 `.woff2` files from the CDN URLs above
2. Upload to `assets/` folder in the clone theme
3. Create `assets/custom-fonts.css` with @font-face declarations pointing to the local files
4. Load `custom-fonts.css` in `layout/theme.liquid` via `{{ 'custom-fonts.css' | asset_url | stylesheet_tag }}`
5. Set the CSS variables in the theme settings to match the source

**Note:** The heading family fallback is `monospace` (not `sans-serif`) — this is intentional in the source theme and must be preserved.

---

## 1.3 Section Inventory

### Pages Screenshotted

Screenshots saved to `docs/screenshots/source/` at 1440px (desktop) and 375px (mobile):

1. Homepage `/fr`
2. Collection list `/fr/collections` (redirects to masons.it — minimal content)
3. Collection `/fr/collections/all`
4. Product `/fr/products/agnes-pantalon-5-poches-femme-en-denim-stretch-slim-fit`
5. Cart `/fr/cart`
6. About `/fr/pages/about-us`
7. Contact `/fr/pages/contacts-1`
8. Search `/fr/search`
9. FAQ `/fr/pages/faq`
10. 404 `/fr/nonexistent-page-test`

Blog: `/fr/blogs/news` (template `template--26534940639614`)

---

### Global Sections (present on ALL pages)

#### G1 — Announcement Bar
| Field | Value |
|---|---|
| Section ID | `sections--26534940410238__announcement_VQkp6J` |
| Section type | `announcement` — custom needed |
| Content | "INSCRIVEZ-VOUS À LA NEWSLETTER – 10% SUR VOTRE PREMIÈRE COMMANDE" (scrolling marquee). Region/language selector: 195+ countries, 5 languages (EN/ES/FR/IT/DE) |
| Layout | Full-width bar, horizontally scrolling text |
| Colors | Background: `--color-background` (#F2F2F2), text: `--color-foreground` (#000) |
| Spacing | Compact bar height, minimal padding |
| Responsive | Same content on mobile, narrower viewport |
| Animation | Marquee-style horizontal text scroll |
| Interactive state | Click opens region/language overlay |

#### G2 — Header
| Field | Value |
|---|---|
| Section ID | `sections--26534940410238__header` |
| Section type | `header` — custom needed |
| Content | Logo (PNG: `masons-clothing-logo-text.png`, left-aligned). 7 top-level nav items: FW25 Homme, FW25 Femme, Special Price Homme, Special Price Femme, Parfum & Accessoires, Notre Histoire, Blog. Utility icons: search, account, cart (with badge). |
| Layout | Horizontal flex, logo left, nav center, icons right. Mega-menu: `--menu-columns-desktop: 6`, `--menu-columns-tablet: 4` |
| Colors | Background: transparent/`--color-background`, text: `--color-foreground` (#000) |
| Spacing | Menu parent font: 1.2rem, uppercase, weight 500, line-height 200% |
| Responsive | Mobile: hamburger icon opens drawer menu with accordion sub-categories |
| Animation | Sticky header behavior (scroll-aware). Drawer: slide-in `--drawer-animation-speed: 0.2s` |
| Interactive state | Menu hover: color transition. Cart badge updates dynamically. Account: dropdown dialog |

#### G3 — Mobile Search
| Field | Value |
|---|---|
| Section ID | `sections--26534940410238__1773307945b64ef622` |
| Section type | `mobile-search` — custom needed |
| Content | Search input with placeholder text, submit button with SVG icon |
| Layout | Full-width, visible only `< 750px` |
| Colors | Background: #F2F2F2, icon hover: #FF5031 |
| Spacing | 16px padding |
| Responsive | Hidden on desktop (display:none above 750px) |
| Interactive state | Button icon turns orange on hover |

#### G4 — Global Blocks
| Field | Value |
|---|---|
| Section ID | `sections--26534940410238__blocks_y3XEKi` |
| Section type | `blocks` — minimal/empty container, likely for app embeds or global modals |
| Content | Empty or dynamically loaded |

#### G5 — Footer
| Field | Value |
|---|---|
| Section ID | `sections--26534940377470__footer` |
| Section type | `footer` — custom needed |
| Content | Newsletter signup (email input + privacy policy link). Copyright "© 2026 Mason's". "Powered by Made in Evolve" credit. 12 payment icons: Amex, Apple Pay, Bancontact, Google Pay, iDEAL, Wero, Maestro, Mastercard, PayPal, Shop Pay, Union Pay, Visa |
| Layout | Vertical stack: newsletter → copyright → payment icons. Centered, max-width constrained |
| Colors | Background: `--color-background` (#F2F2F2), text: `--color-foreground` (#000) |
| Spacing | Standard section padding |
| Responsive | Stacks vertically on mobile, same content |

---

### Homepage Template (`template--26535203537278`)
7 template sections + 5 global sections = **12 total**

#### H1 — Hero Banner
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__hero_8MbntM` |
| Section type | `hero` — custom needed |
| Content | Full-width image (`Masons_ss26_1.jpg`). Heading: "NOUVELLE COLLECTION SS26". Tagline: "Découvrez la nouvelle collection : passion artisanale depuis 1974". Two CTA links: Homme → `/fr/collections/printemps-ete-homme`, Femme → `/fr/collections/printemps-ete-femme` |
| Layout | Full-width hero, text overlay on image, centered |
| Colors | Image overlay with gradient, white text on dark image |
| Spacing | Full viewport width, large vertical padding |
| Responsive | Image scales, text stacks vertically on mobile |
| Animation | Potential fade-in on load |

#### H2 — Collection Links (Model Showcase)
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__collection_links_kj66pU` |
| Section type | `collection-links` — custom needed |
| Content | 4 men's models (Milan, New York, Turin, Chile) + 5 women's models. Each has description text (100-150 words), large image + thumbnail, CTA: "DÉCOUVRIR LE MODÈLE" |
| Layout | Two groups (Homme/Femme), each model as a card with image + text |
| Colors | Standard theme colors |
| Spacing | Section padding, gap between model cards |
| Responsive | Cards stack on mobile |

#### H3 — Shop The Look
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__shop_the_look_nEzmxN` |
| Section type | `shop-the-look` — custom needed |
| Content | 6 editorial looks, each with lifestyle photo + 3-5 product cards. Product cards: image, name, price in USD. Categories: Men's Casual, Women's Tailored, Men's Workwear, Women's Cargo, Women's Knit, Mixed Casual |
| Layout | Grid-based cards, 3:4 aspect ratio, prev/next navigation |
| Colors | Standard theme colors |
| Responsive | Fewer columns on mobile, swipeable |
| Interactive state | Prev/next carousel buttons |

#### H4 — Product List (Men's SS26)
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__product_list_KhqYzm` |
| Section type | `product-list` — custom needed |
| Content | Heading: "HOMME SS26 NOUVEAUTÉS". CTA: "DÉCOUVREZ LA NOUVELLE COLLECTION". Products: overshirts, jackets, blazers, chinos, cargos, denim, travel wear. $305-$545 range. Multiple color swatches, 5-image carousel per product |
| Layout | Horizontal scrolling product carousel |
| Colors | Standard theme colors |
| Responsive | Fewer visible cards on mobile, swipeable |
| Interactive state | Carousel prev/next, quick-add on hover |

#### H5 — Product List (Women's SS26)
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__product_list_8HBMei` |
| Section type | `product-list` — reuse H4 section type |
| Content | Heading: "FEMME SS26 NOUVEAUTÉS". 12 items: jackets, cargo pants, joggers, bermudas. $289-$595 range. Color/fit variants, quick-add |
| Layout | Same as H4 — horizontal scrolling carousel |

#### H6 — Image With Text (About Us)
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__image_with_text_qMGeBL` |
| Section type | `image-with-text` — custom needed |
| Content | Brand heritage since 1974. Giorgio + Vilmo Martini story, Carrara tailoring. CTA: "ABOUT US" button. Brand pillars: "Authentique", "Libre", "Élégant" |
| Layout | Image + text side by side |
| Colors | Standard theme colors |
| Responsive | Stacks vertically on mobile |

#### H7 — Image With Text (Personal Shopper)
| Field | Value |
|---|---|
| Section ID | `template--26535203537278__image_with_text_bjp4ki` |
| Section type | `image-with-text` — reuse H6 section type |
| Content | Heading: "PERSONAL SHOPPER FOR YOU". Video call service description (Italian/English). Image: `about-4.jpg`. CTA: "BOOK ON WHATSAPP" → phone link |
| Layout | Same as H6 — image + text side by side |

---

### Collection List Template (`template--26534940737918`)
1 template section + 5 global sections = **6 total**

#### CL1 — Main Collection List
| Field | Value |
|---|---|
| Section ID | `template--26534940737918__main` |
| Section type | `main-list-collections` — custom needed |
| Content | **Redirects to `masons.it`** via `window.location`. No visible collection grid. |
| Note | This page redirects — the clone may need a proper collection list or replicate the redirect behavior |

---

### Collection Template (`template--26535203504510`)
1 template section + 5 global sections = **6 total**

#### CO1 — Main Collection
| Field | Value |
|---|---|
| Section ID | `template--26535203504510__main` |
| Section type | `main-collection` — custom needed |
| Content | Product grid (793 products on "All"). Sidebar filters: Italian sizes, inch sizes, 12 colors, model names. Sort: 8 options (featured, best sellers, A-Z, Z-A, price). Product cards: multi-image carousel, title, model, sale price, color swatches, quick-add, stock badges ("Épuisé") |
| Layout | Grid: `repeat(3, 1fr)` desktop, `auto-fill minmax(12rem, 1fr)` zoom-out. Gap: `1.6rem 1.2rem`. Sidebar filter panel |
| Colors | Standard theme. Sale price highlighted |
| Spacing | Grid gap: 1.6rem vertical, 1.2rem horizontal |
| Responsive | 2 columns on tablet, 1-2 on mobile. Filters collapse to drawer |
| Pagination | Numbered pages (16 pages total), prev/next arrows |
| Interactive state | Grid view toggle, quick-add hover overlay, color swatch selection |

---

### Product Template (`template--26534940508542`)
5 template sections + 5 global sections = **10 total**

#### P1 — Main Product
| Field | Value |
|---|---|
| Section ID | `template--26534940508542__main` |
| Section type | `main-product` — custom needed |
| Content | Media gallery (4 images, thumbnails numbered 01-04, zoom). Product info: title, brand, code, SKU. Variant picker: size selector (25-34 US), color display ("BLEU MARINE"), per-size stock status. Price: sale $284 / compare-at $355. Buy button: "Ajouter au panier". Size guide table (IT/US/FR/DE/UK). Composition: 94% Coton, 5% Polyester, 1% Élasthanne. Manufacturing note: "Teint en pièce". 14-day return policy |
| Layout | Two-column: media gallery left, product info right |
| Colors | Standard theme. Sale price in accent or distinct color |
| Responsive | Stacks vertically on mobile: gallery on top, info below |
| Interactive state | Thumbnail click switches main image. Size buttons: hover border change. Out-of-stock sizes greyed out |

#### P2 — Product Description
| Field | Value |
|---|---|
| Section ID | `template--26534940508542__product_description_qDz6W8` |
| Section type | `product-description` — custom needed |
| Content | Extended marketing copy: fabric quality, design details (colored eyelet, M rivet), versatility positioning |
| Layout | Full-width text block below main product section |

#### P3 — Product Recommendations
| Field | Value |
|---|---|
| Section ID | `template--26534940508542__product_recommendations_NeYqcN` |
| Section type | `product-recommendations` — custom needed |
| Content | "Vous pourriez aussi aimer :" heading + product carousel (Shopify recommendations API) |
| Layout | Horizontal scrolling product grid |

#### P4 — App Embed (Widget 1)
| Field | Value |
|---|---|
| Section ID | `template--26534940508542__1772452475e4a48005` |
| Section type | `app-embed` — third-party widget (lb-widget-pac, likely Trustpilot reviews) |
| Content | Responsive widget container: min-width 0, max-width 100%, width 100% |

#### P5 — App Embed (Widget 2)
| Field | Value |
|---|---|
| Section ID | `template--26534940508542__17730509946196dc60` |
| Section type | `app-embed` — third-party widget (empty/lazy-loaded) |

---

### Cart Template (`template--26534940672382`)
2 template sections + 5 global sections = **7 total**

#### CA1 — Main Cart
| Field | Value |
|---|---|
| Section ID | `template--26534940672382__main` |
| Section type | `main-cart` — custom needed |
| Content | Empty state: "Votre panier est vide". Login prompt for faster checkout. "Continuer vos achats" link → collections. When items present: line items with image, title, variant, price, quantity controls. Subtotal + checkout button |
| Layout | Single column, centered |
| Responsive | Same layout, responsive widths |

#### CA2 — App Embed (Upsell Widget)
| Field | Value |
|---|---|
| Section ID | `template--26534940672382__1772464415603793e2` |
| Section type | `app-embed` — third-party widget (lb-widget-icuc, likely upsell/cross-sell) |

---

### Search Template (`template--26534940574078`)
1 template section + 5 global sections = **6 total**

#### S1 — Main Search
| Field | Value |
|---|---|
| Section ID | `template--26534940574078__main` |
| Section type | `main-search` — custom needed |
| Content | Sort dropdown: "Pertinence" default, price low→high, price high→low. "Tout effacer" filter reset. Article count display. Product results in grid with image carousels, quick-add, color/size selectors, promotional badges (-20%) |
| Layout | Grid: `repeat(auto-fill, minmax(270px, 1fr))`. Grid view toggle |
| Responsive | Fewer columns on mobile |

---

### Page Template (`template--26534940541310`)
Used by: About Us, 404, and other generic pages.
1 template section + 5 global sections = **6 total**

#### PG1 — Main Page
| Field | Value |
|---|---|
| Section ID | `template--26534940541310__main` |
| Section type | `main-page` — standard Shopify page section |
| Content | Renders page rich text/HTML body content |
| Layout | Single column, centered, max-width constrained |

---

### Contact Template (`template--26785302380926`)
1 template section + 5 global sections = **6 total**

#### CT1 — Main Contact
| Field | Value |
|---|---|
| Section ID | `template--26785302380926__main` |
| Section type | `main-contact` — custom template (`page.contatti`) |
| Content | Contact form and/or contact information (dynamically rendered) |

---

### FAQ Template (`template--26608410952062`)
1 template section + 5 global sections = **6 total**

#### FAQ1 — Main FAQ
| Field | Value |
|---|---|
| Section ID | `template--26608410952062__main` |
| Section type | `main-faq` — custom template (`page.faq`) |
| Content | FAQ questions and answers (dynamically rendered, likely accordion layout) |

---

### Blog Template (`template--26534940639614`)
1 template section + 5 global sections = **6 total**

#### B1 — Main Blog
| Field | Value |
|---|---|
| Section ID | `template--26534940639614__main` |
| Section type | `main-blog` — blog article list |
| Content | Blog post cards with titles, excerpts, dates, images |

---

### Section Count Summary

| Page | Template ID | Template Sections | Global Sections | Total |
|---|---|---|---|---|
| **Homepage** | `template--26535203537278` | 7 | 5 | **12** |
| **Collection List** | `template--26534940737918` | 1 | 5 | **6** |
| **Collection** | `template--26535203504510` | 1 | 5 | **6** |
| **Product** | `template--26534940508542` | 5 | 5 | **10** |
| **Cart** | `template--26534940672382` | 2 | 5 | **7** |
| **Search** | `template--26534940574078` | 1 | 5 | **6** |
| **Page (About/404)** | `template--26534940541310` | 1 | 5 | **6** |
| **Contact** | `template--26785302380926` | 1 | 5 | **6** |
| **FAQ** | `template--26608410952062` | 1 | 5 | **6** |
| **Blog** | `template--26534940639614` | 1 | 5 | **6** |
| | | **21 unique** | **5 global** | |

**Total unique section types to build: ~15** (hero, collection-links, shop-the-look, product-list, image-with-text, header, footer, announcement, mobile-search, main-collection, main-product, product-description, product-recommendations, main-cart, main-search, main-page, main-blog, main-contact, main-faq)

---

## 1.4 Navigation

### Desktop Header

| Element | Detail |
|---|---|
| **Logo** | PNG image: `masons-clothing-logo-text.png` (`?height=100`). Left-aligned. Links to `https://us.masons.it` |
| **Sticky behavior** | `sticky="always"` or `sticky="scroll-up"`. Shows on scroll-up, hides on scroll-down. Animation delay: **150ms**. Attributes: `data-stickyState` (inactive/active/idle), `data-scrollDirection` (up/down/none), `data-animating`. Uses `--header-height` and `--header-group-height` CSS vars. ResizeObserver monitors dimensions |
| **Transparency** | No transparent-on-hero logic detected |

#### Top-Level Menu Items (7)

| # | Label | URL |
|---|---|---|
| 1 | FW25 Homme | `/fr/collections/fall-winter-homme` |
| 2 | FW25 Femme | `/fr/collections/fall-winter-femme` |
| 3 | Special Price Homme | `/fr/collections/printemps-ete-homme` |
| 4 | Special Price Femme | `/fr/collections/printemps-ete-femme` |
| 5 | Parfum & Accessoires | `/fr/collections/parfums` |
| 6 | Notre Histoire | `/fr/pages/decouvrez-notre-histoire` |
| 7 | Blog | `/fr/blogs/news` |

#### Mega Menu Structure

**FW25 Homme** (6 desktop cols / 4 tablet cols):
- Col 1 — FW25 Homme: Nouveautés, Pantalons, Blazer, Costumes, Vestes, Surchemises
- Col 2 — Pantalons: Chino, Cargo, Jogger, Denim
- Col 3 — Prestige
- Col 4 — Shop By Fit: Extra Slim, Slim, Regular, Carrot, Relaxed
- Col 5 — Shop by Model: Chile, Milano, New York, Torino, Osaka, Boston, George & John

**FW25 Femme** (6 desktop cols / 4 tablet cols):
- Col 1 — FW25 Femme: Nouveautés, Pantalons, Blazer, Costumes, Vestes, Chemises
- Col 2 — Pantalons: Chino, Cargo, Jogger, Denim
- Col 3 — Prestige
- Col 4 — Shop By Fit: Slim, Wide Leg, Carrot, Straight, Relaxed
- Col 5 — Shop by Model: New York, New York Carrot, Chile, Malibu, Easy

**Parfum & Accessoires** (8 desktop cols / 4 tablet cols):
- Parfum, Accessoires

#### Utility Icons (right-aligned)
- **Search:** Text field labeled "Rechercher"
- **Account:** Dropdown with login options, sub-items: Commandes, Profil
- **Cart:** Item count badge + total display

### Mobile Drawer

| Element | Detail |
|---|---|
| **Trigger** | Hamburger icon → adds `"menu-open"` class |
| **Direction** | Slide-in (CSS-controlled, likely from left) |
| **Animation** | CSS-driven, uses `onAnimationEnd()` detection. Duration defined in CSS (not JS) |
| **Sub-menus** | Nested `<details>` elements with accordion behavior. Opening one submenu traps focus to it. Closing resets sibling `<details[open]>` (collapses other open menus = **single-open behavior**) |
| **Close** | "Fermer" button or Escape key. `removeTrapFocus()` on close |
| **Language** | Includes full country/region selector + language switcher (EN/ES/FR/IT/DE) |

### Footer

| Element | Detail |
|---|---|
| **Layout** | Single column, vertical stack, centered |
| **Newsletter** | Email input (placeholder: "Email"), "Sign up" button, "By signing up to our newsletter, you agree with our privacy policy" |
| **Link groups** | Minimal — "Mason's" brand link only |
| **Social links** | None present |
| **Payment icons** | 12 icons: Amex, Apple Pay, Bancontact, Google Pay, iDEAL, Wero, Maestro, Mastercard, PayPal, Shop Pay, Union Pay, Visa |
| **Copyright** | "© 2026 Mason's" with link to `/fr` |
| **Legal links** | Privacy Policy → `/fr/policies/privacy-policy` |
| **Attribution** | "Powered by Made in Evolve" |

### Breadcrumbs

No breadcrumbs detected on any page. Navigation relies on mega-menu + collection hierarchy.

---

## 1.5 Animations

### Animation Token System (from CSS custom properties)

| Token | Value |
|---|---|
| `--animation-speed-fast` | `0.0625s` (62.5ms) |
| `--animation-speed` | `0.125s` (125ms) |
| `--animation-speed-medium` | `0.15s` (150ms) |
| `--animation-speed-slow` | `0.2s` (200ms) |
| `--drawer-animation-speed` | `0.2s` (200ms) |
| `--animation-easing` | `ease-in-out` |
| `--ease-out-cubic` | `cubic-bezier(0.33, 1, 0.68, 1)` |
| `--ease-out-quad` | `cubic-bezier(0.32, 0.72, 0, 1)` |
| `--animation-slideshow-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--animation-timing-hover` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--animation-timing-active` | `cubic-bezier(0.5, 0, 0.75, 0)` |
| `--animation-timing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--animation-timing-default` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--animation-timing-fade-in` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--animation-timing-fade-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |

### @keyframes Inventory (32 keyframes from base.css)

| Keyframe | Animation | Properties |
|---|---|---|
| `fadeIn` | Fade in | opacity 0→1 |
| `fadeOut` | Fade out | opacity 1→0 |
| `fadeInUp` | Fade + slide up | opacity 0→1, translateY(10px)→0 |
| `grow` | Pulse grow | scale 1→1.2→1 |
| `slideInLeft` | Slide from right | translateX(100%)→0 |
| `slideOutRight` | Slide out right | translateX(0)→-100% |
| `slideInRight` | Slide from left | translateX(-100%)→0 |
| `slideOutLeft` | Slide out left | translateX(0)→100% |
| `slideInTop` | Slide from bottom | translateY(100%)→0 |
| `slideOutBottom` | Slide out bottom | translateY(0)→100% |
| `slideInBottom` | Slide from top | translateY(-100%)→0 |
| `slideOutTop` | Slide out top | translateY(0)→-100% |
| `slideInLeftViewTransition` | Soft slide from right | translateX(100px)→0 |
| `slideInTopViewTransition` | Soft slide from bottom | translateY(100px)→0 |
| `cartBubbleSlideIn` | Cart badge bounce | translateY(-1em)→0 |
| `elementSlideInTop` | Element enter from top | opacity 0→1, margin-top var→0 |
| `elementSlideOutTop` | Element exit upward | opacity 1→0, translateY→var |
| `elementSlideInBottom` | Element enter from bottom | opacity 0→1, translateY(-padding)→0 |
| `elementSlideOutBottom` | Element exit downward | opacity 1→0, translateY→-padding |
| `thumbnailsSlideInTop` | Thumb enter from top | translateY(-50%+margin)→-50%, opacity 0→1 |
| `thumbnailsSlideOutTop` | Thumb exit upward | translateY(-50%)→(-50%+margin), opacity 1→0 |
| `thumbnailsSlideInBottom` | Thumb enter from bottom | translateY(100%)→0, opacity 0→1 |
| `thumbnailsSlideOutBottom` | Thumb exit downward | opacity 1→0, translateY→100% |
| `search-element-slide-in-bottom` | Search result enter | translateY(20px)→0, opacity 0→1 |
| `search-element-slide-out-bottom` | Search result exit | opacity 1→0, translateY→20px |
| `dialogZoom` | Dialog close zoom | opacity 1→0, scale(1)→0.95, translateY→1em |
| `thumbnail-selected` | Selected thumb pulse | box-shadow 0→2px→0, scale 0.9→1→0.9 |
| `backdropFilter` | Backdrop dim | backdrop-filter brightness 1→0.75 |
| `modalSlideInTop` | Modal enter from top | translateY(padding)→0, opacity 0→1 |
| `modalSlideOutTop` | Modal exit upward | opacity 1→0, translateY→padding |
| `text-shimmer` | Skeleton loading | background-position 100%→-100% |
| `arrowsSlideIn` | Arrows fade in | translate(padding)→0, opacity 0→1 |

### Scroll-Triggered Animations

**None detected.** No IntersectionObserver-based scroll reveals, no parallax, no fade-on-scroll. The theme uses **no scroll-triggered animations** — all animations are interaction-driven (hover, click, page transitions).

### Hover States

| Element | Hover Effect |
|---|---|
| Product cards / collection cards | `transform` + `box-shadow` transition |
| Primary button | Background: `#222222` → `#FF5031`, border: `#222222` → `#FF5031` |
| Secondary button | Background: transparent → `#FFFFFF`, text/border stay `#222222` |
| Links (`<a>`) | `text-decoration-color` + `color` transition |
| Gallery cards | `transform` + `box-shadow` transition |
| Slideshow controls | SVG icon `color` transition |
| Pills (filter chips) | `background-color` transition |
| Quantity selector | `background-color` transition |
| Summary elements | `color` transition on hover |

### Header Behavior

| Behavior | Detail |
|---|---|
| **Type** | Sticky, show on scroll-up / hide on scroll-down |
| **Modes** | `sticky="always"` (always visible) or `sticky="scroll-up"` (directional) |
| **Animation delay** | 150ms between state transitions |
| **States** | `data-stickyState`: inactive → active → idle |
| **Scroll tracking** | `data-scrollDirection`: up / down / none |
| **Transparent on hero** | NO — not implemented |
| **Shrink on scroll** | NO — height is fixed |
| **CSS vars updated** | `--header-height`, `--header-group-height` via ResizeObserver |

### Carousel / Slider Config

| Setting | Value |
|---|---|
| **Library** | None — 100% custom implementation |
| **Scroll mechanism** | CSS `scroll-snap-type: [axis] mandatory` |
| **Scroll behavior** | Native `scrollTo` with smooth scrolling |
| **Scroll hints** | CSS `mask-image` gradients based on scroll position |
| **Controls** | Prev/next arrows, thumbnail navigation |
| **Autoplay** | NO — not detected |
| **Loop** | NO — native scroll behavior |
| **ResizeObserver** | Updates scroll dimensions on resize |

### Accordion (FAQ, Product Details)

| Setting | Value |
|---|---|
| **Type** | Native `<details>` elements |
| **Multi-open** | YES — each `<details>` operates independently |
| **Mobile drawer sub-menus** | Single-open (closing siblings when opening new) |
| **Animation** | `details::details-content` CSS transition: `content-visibility`, `padding-block`, `opacity`, `block-size` |
| **Close trigger** | Click toggle + Escape key (if `closeWithEscape` attribute) |
| **Responsive defaults** | `open-by-default-on-mobile`, `open-by-default-on-desktop` attributes |

### Cart Drawer

| Setting | Value |
|---|---|
| **Type** | Native `<dialog>` element via `DialogComponent` |
| **Open trigger** | "CartAddEvent" fires → `showDialog()` (auto-open attribute) |
| **Close animation** | Adds `"dialog-closing"` CSS class → awaits `onAnimationEnd()` → closes |
| **Scroll lock** | `"scroll-lock"` attribute on document root during open |
| **Backdrop** | Native `<dialog>` `::backdrop` pseudo-element. CSS: `backdropFilter` keyframe: brightness 1→0.75 |
| **Overlay opacity** | `--backdrop-opacity: 0.15`, `--backdrop-color-rgb: var(--color-shadow-rgb)` |

### Modal / Popup

| Setting | Value |
|---|---|
| **Type** | Native `<dialog>` element |
| **Open** | `modalSlideInTop`: translateY(padding)→0, opacity 0→1 |
| **Close** | `modalSlideOutTop`: opacity 1→0, translateY→padding. Then `dialogZoom`: scale(1)→0.95 |
| **Duration** | `--animation-speed` (0.125s) + `--animation-easing` (ease-in-out) |

### View Transitions (Page Transitions)

| Setting | Value |
|---|---|
| **API** | Native `startViewTransition()` API |
| **Old content exit** | `fadeOut` — `var(--animation-speed) var(--animation-easing)` |
| **New content enter** | `fadeIn` + `slideInTopViewTransition` — same timing |
| **Duration** | 0.125s ease-in-out |
| **Usage** | Collection-links toggle, potentially page navigation |

---

## 1.6 Third-Party Apps

### Detection Results

**Theme App Extensions (app blocks):** No `shopify-section-app--*` IDs detected. App blocks are embedded inline within template sections (not standalone sections).

**Shopify App Blocks (inline):**
- `shopify-app-block lb-widget-pac` — on product page (product section)
- `shopify-app-block lb-widget-bl` — on product page (product section)
- `shopify-app-block lb-widget-icuc` — on cart page

**Web Pixels:** `web-pixel-sandbox` reference detected: `web-pixels@fcfee988w5aeb613cpc8e4bc33m6693e112/custom/web-pixel-156959102`

**Search & Discovery App:**
- `data-filter` ✓ (collection page)
- `.facets__form` ✓ (collection page)
- `[id*="Facet"]` ✓ (collection page)
- `predictive-search` ✓ (homepage + collection)
- **Verdict: YES — Shopify Search & Discovery app is active**

### App Inventory

| App / Widget | Purpose | DOM Selector / Script | Injection Method | Needs Real App Install? |
|---|---|---|---|---|
| **Klaviyo** | Email marketing, popups, flows | `static.klaviyo.com/onsite/js/klaviyo.js?company_id=TuLFF4` | ScriptTag (async) | YES — for signup forms, flows, popups |
| **Trustpilot** | Review widgets, trust badges | `ecommplugins-scripts.trustpilot.com/v2.1/js/header.min.js` + settings JS | ScriptTag + app blocks (`lb-widget-pac`, `lb-widget-bl`) | YES — for review display |
| **Triple Whale** | Analytics, attribution | `pps.triplewhale.systems/main.js` | ScriptTag (async) | YES — for analytics dashboard |
| **Klarna** | Buy now, pay later messaging | `s3.eu-west-1.amazonaws.com/production-klarna-il-shopify-osm/` | ScriptTag | YES — for payment option display |
| **Trusted Shops** | Trust seal, buyer protection | `tseish-app.connect.trustedshops.com/esc.js` + `widgets.trustedshops.com/js/XE5B9E8E265AB9131EE7D390FB045BA31.js` | ScriptTag | YES — for trust badge |
| **Pandectes** | GDPR/cookie consent (CMP) | `pandectes-cmp` custom element, inline config | Theme App Extension | YES — for GDPR compliance |
| **Loox** | Product reviews (inactive) | Metafield references: `MetafieldLooxRating`, `MetafieldLooxCount` (both null) | Metafield + theme code | Optional — currently inactive (no reviews) |
| **Shopify Search & Discovery** | Collection filtering, predictive search | `data-filter`, `.facets__form`, `predictive-search` | Native Shopify app | YES — free Shopify app |
| **Cozy Country Redirect** | Geo-redirect visitors | `cozycountryredirectii.addons.business/js/eggbox/8619/script_*.js` | ScriptTag | Optional — for geo-redirect |
| **Google Tag Manager** | Tag management | Container ID: `GTM-MC27J74` | Inline script via Pandectes | Configure (not app install) |
| **Facebook/Meta Pixel** | Conversion tracking | Cookie: `_fbp`, loaded via GTM/Pandectes consent | Web Pixel | Configure in Shopify admin |
| **TikTok Pixel** | Social commerce tracking | Cookies: `tt_sessionId`, `_ttp`, loaded via consent | Web Pixel | Configure in Shopify admin |
| **Pinterest Tag** | Pin tracking | Cookies: `_pin_unauth`, `_pinterest_ct_ua` | Web Pixel | Configure in Shopify admin |
| **hCaptcha** | Form spam protection | Captcha provider script | Inline | Built-in Shopify feature |

### App Visual Shells (for Phase 4 placeholders)

| Widget | Container | Dimensions | Location |
|---|---|---|---|
| `lb-widget-pac` (Trustpilot) | `class="shopify-block shopify-app-block lb-widget-pac"` | min-width: 0, max-width: 100%, width: 100% | Product page, after recommendations |
| `lb-widget-bl` (Trustpilot) | `class="shopify-block shopify-app-block lb-widget-bl"` | min-width: 0, max-width: 100%, width: 100% | Product page, after recommendations |
| `lb-widget-icuc` (Upsell) | `class="shopify-block shopify-app-block lb-widget-icuc"` | min-width: 0, max-width: 100%, width: 100% | Cart page, after cart items |
| Klaviyo popup | Full-screen overlay | Viewport-sized | Triggered by scroll/timer |
| Pandectes cookie banner | Fixed bottom bar | Full-width, ~80px height | All pages, bottom |

### Social Media Links Found

| Platform | URL |
|---|---|
| Facebook | `https://www.facebook.com` |
| Instagram | `https://www.instagram.com` |
| Pinterest | `https://www.pinterest.com` |
| TikTok | `https://www.tiktok.com` |
| YouTube | `https://www.youtube.com` |
| WhatsApp | `https://wa.me/` (Personal Shopper booking) |

---

## 1.7 Audit Completeness Checklist

| Section | Status |
|---|---|
| 1.1 Design Tokens | ✅ 200+ CSS custom properties, 7-slot color palette |
| 1.1b JSON Templates | ✅ 8 template files, 21 template sections + 5 global |
| 1.2 Typography | ✅ 5 custom fonts, @font-face URLs, font mapping table |
| 1.3 Section Inventory | ✅ 10 pages screenshotted (20 screenshots), 26 sections catalogued |
| 1.4 Navigation | ✅ Desktop mega-menu (7 items), mobile drawer, footer structure |
| 1.5 Animations | ✅ 32 keyframes, hover states, header/carousel/drawer/modal behavior |
| 1.6 Apps | ✅ 14 apps/integrations identified with injection methods |

**Phase 1 Full Site Audit is COMPLETE.**

---

*Extracted: 2026-03-25 from https://us.masons.it/fr*
