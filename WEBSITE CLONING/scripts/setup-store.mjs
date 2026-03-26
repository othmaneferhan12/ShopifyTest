import { readFileSync, writeFileSync } from 'fs';

const STORE = '4eudh3-ie.myshopify.com';
const CLI_CLIENT_ID = 'fbdb2649-e327-4907-8f67-908d24cfd7e3';
const ADMIN_APP_ID = '7ee65a63608843c577db8b23c4d7316ea0a01bd2f7594f8a9c06ea668c1b775c';
const CONFIG_PATH = process.env.APPDATA + '/shopify-cli-kit-nodejs/Config/config.json';

// ── Token exchange (mirrors CLI-kit's exchange.js) ──
async function tokenRequest(params) {
  const url = new URL('https://accounts.shopify.com/oauth/token');
  url.search = new URLSearchParams(Object.entries(params)).toString();
  const res = await fetch(url.href, { method: 'POST' });
  const payload = await res.json();
  if (res.ok) return payload;
  throw new Error(`Token request failed: ${payload.error} - ${payload.error_description || ''}`);
}

async function getAdminToken() {
  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  const session = JSON.parse(config.sessionStore);
  const account = Object.values(session['accounts.shopify.com'])[0];

  if (!account?.identity) throw new Error('No CLI session found. Run: shopify auth login');

  let identityToken = account.identity.accessToken;
  const refreshToken = account.identity.refreshToken;

  // Check if token is expired
  const expiresAt = new Date(account.identity.expiresAt);
  if (expiresAt < new Date()) {
    console.log('  Refreshing expired token...');
    const refreshResult = await tokenRequest({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: CLI_CLIENT_ID,
    });
    identityToken = refreshResult.access_token;

    // Save new tokens back to config
    account.identity.accessToken = refreshResult.access_token;
    if (refreshResult.refresh_token) account.identity.refreshToken = refreshResult.refresh_token;
    account.identity.expiresAt = new Date(Date.now() + refreshResult.expires_in * 1000).toISOString();
    config.sessionStore = JSON.stringify(session);
    writeFileSync(CONFIG_PATH, JSON.stringify(config, null, '\t'));
  }

  // Exchange identity token for admin API token
  const exchangeResult = await tokenRequest({
    grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
    requested_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
    client_id: CLI_CLIENT_ID,
    audience: ADMIN_APP_ID,
    scope: 'https://api.shopify.com/auth/shop.admin.graphql https://api.shopify.com/auth/shop.admin.themes',
    subject_token: identityToken,
    destination: `https://${STORE}/admin`,
  });

  return exchangeResult.access_token;
}

// ── Admin API helper ──
async function adminRest(method, path, body) {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': adminToken,
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`https://${STORE}/admin/api/2024-10${path}`, opts);
  return res.json();
}

// ── Main ──
console.log('Authenticating with Shopify Admin API...');
const adminToken = await getAdminToken();

// Verify
const shop = await adminRest('GET', '/shop.json');
if (!shop.shop) {
  console.error('API test failed:', JSON.stringify(shop));
  process.exit(1);
}
console.log(`Connected to: ${shop.shop.name}\n`);

// ── Create Products ──
console.log('=== Creating Products ===');

const products = [
  { title: 'Classic Margarita', desc: 'Our best-selling cocktail mixer. Made with real lime juice, tangerine, and a touch of sea salt.', tags: 'mixer, cocktail, tequila, margarita' },
  { title: 'Bloody Mary', desc: 'A bold, savory Bloody Mary mixer crafted with vine-ripened tomatoes, horseradish, and a proprietary spice blend.', tags: 'mixer, cocktail, vodka, bloody mary' },
  { title: 'Cucumber Mojito', desc: 'Fresh and refreshing. Cool cucumber meets bright mint and lime in this crisp cocktail mixer.', tags: 'mixer, cocktail, rum, mojito' },
  { title: 'Ginger Smash', desc: 'Warm and spicy. Real ginger root blended with lemon and a hint of honey.', tags: 'mixer, cocktail, bourbon, whiskey' },
  { title: 'Spicy Strawberry Margarita', desc: 'Sweet meets heat. Fresh strawberries and a kick of jalapeño create a perfectly balanced mixer.', tags: 'mixer, cocktail, tequila, margarita, spicy' },
  { title: 'Piña Colada', desc: 'Tropical paradise in a bottle. Real pineapple and coconut cream blended into the perfect mixer.', tags: 'mixer, cocktail, rum, pina colada, tropical' },
];

for (const p of products) {
  process.stdout.write(`  ${p.title}... `);
  const body_html = `<p>${p.desc}</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>`;
  const res = await adminRest('POST', '/products.json', {
    product: {
      title: p.title,
      body_html,
      vendor: 'Barcoop Bevy',
      product_type: 'Cocktail Mixer',
      status: 'active',
      tags: p.tags,
      variants: [{ price: '14.99', inventory_management: null, requires_shipping: true }],
    }
  });
  console.log(res.product?.id ? `OK (${res.product.id})` : `FAILED: ${JSON.stringify(res.errors || res).substring(0, 80)}`);
}

// ── Create Pages ──
console.log('\n=== Creating Pages ===');

const pages = [
  { title: 'About', handle: 'about', template_suffix: 'about' },
  { title: 'Press', handle: 'press', template_suffix: 'press' },
  { title: 'Recipes', handle: 'recipes', template_suffix: 'recipes' },
  { title: 'Contact', handle: 'contact', template_suffix: 'contact' },
];

for (const pg of pages) {
  process.stdout.write(`  ${pg.title}... `);
  const res = await adminRest('POST', '/pages.json', {
    page: {
      title: pg.title,
      handle: pg.handle,
      template_suffix: pg.template_suffix,
      body_html: `<p>${pg.title}</p>`,
      published: true,
    }
  });
  console.log(res.page?.id ? `OK (${res.page.id})` : `FAILED: ${JSON.stringify(res.errors || res).substring(0, 80)}`);
}

console.log('\n=== Done! ===');
console.log(`Store: https://${STORE}`);
console.log(`Admin: https://${STORE}/admin`);
