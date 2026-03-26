#!/bin/bash
# ============================================================
# Barcoop Bevy — Store Setup Script
# Creates products, pages, and navigation via Shopify Admin API
# ============================================================
# USAGE:
#   bash scripts/setup-store.sh YOUR_ACCESS_TOKEN
#
# To get an access token:
#   1. Go to https://4eudh3-ie.myshopify.com/admin/settings/apps
#   2. Click "Develop apps" → "Create an app"
#   3. Name it "Store Setup" → click "Configure Admin API scopes"
#   4. Enable: write_products, write_content, write_online_store_pages
#   5. Click "Install app" → copy the Admin API access token
# ============================================================

STORE="4eudh3-ie.myshopify.com"
API_VERSION="2024-10"
TOKEN="$1"

if [ -z "$TOKEN" ]; then
  echo "Usage: bash scripts/setup-store.sh YOUR_ACCESS_TOKEN"
  echo ""
  echo "To get a token, create a Custom App in Shopify Admin:"
  echo "  https://$STORE/admin/settings/apps/development"
  exit 1
fi

BASE="https://$STORE/admin/api/$API_VERSION"

# Helper function
api() {
  curl -s -X POST "$BASE/graphql.json" \
    -H "Content-Type: application/json" \
    -H "X-Shopify-Access-Token: $TOKEN" \
    -d "$1"
}

api_rest() {
  curl -s -X POST "$BASE/$1" \
    -H "Content-Type: application/json" \
    -H "X-Shopify-Access-Token: $TOKEN" \
    -d "$2"
}

echo "Testing API connection..."
RESULT=$(api '{"query":"{ shop { name } }"}')
SHOP_NAME=$(echo "$RESULT" | grep -o '"name":"[^"]*"' | head -1)
if [ -z "$SHOP_NAME" ]; then
  echo "ERROR: Could not connect to Shopify Admin API."
  echo "Response: $RESULT"
  exit 1
fi
echo "Connected to $SHOP_NAME"
echo ""

# ── Create Products ──────────────────────────────────────────
echo "=== Creating Products ==="

create_product() {
  local title="$1"
  local desc="$2"
  local price="$3"
  local vendor="Barcoop Bevy"
  local type="Cocktail Mixer"

  echo -n "  Creating: $title... "
  RESULT=$(api_rest "products.json" "{
    \"product\": {
      \"title\": \"$title\",
      \"body_html\": \"$desc\",
      \"vendor\": \"$vendor\",
      \"product_type\": \"$type\",
      \"status\": \"active\",
      \"variants\": [{
        \"price\": \"$price\",
        \"inventory_management\": null,
        \"requires_shipping\": true
      }],
      \"tags\": \"mixer, cocktail\"
    }
  }")
  PRODUCT_ID=$(echo "$RESULT" | grep -o '"id":[0-9]*' | head -1)
  if [ -n "$PRODUCT_ID" ]; then
    echo "OK ($PRODUCT_ID)"
  else
    echo "FAILED"
    echo "    $RESULT" | head -1
  fi
}

create_product "Classic Margarita" \
  "<p>Our best-selling cocktail mixer. Made with real lime juice, tangerine, and a touch of sea salt. Just add tequila and ice for the perfect margarita every time.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

create_product "Bloody Mary" \
  "<p>A bold, savory Bloody Mary mixer crafted with vine-ripened tomatoes, horseradish, and a proprietary spice blend. Add your favorite vodka for brunch perfection.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

create_product "Cucumber Mojito" \
  "<p>Fresh and refreshing. Cool cucumber meets bright mint and lime in this crisp cocktail mixer. Perfect with rum or as a non-alcoholic spritzer.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

create_product "Ginger Smash" \
  "<p>Warm and spicy. Real ginger root blended with lemon and a hint of honey for a cocktail mixer that pairs perfectly with bourbon or whiskey.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

create_product "Spicy Strawberry Margarita" \
  "<p>Sweet meets heat. Fresh strawberries and a kick of jalapeño create a margarita mixer that's perfectly balanced between sweet and spicy.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

create_product "Piña Colada" \
  "<p>Tropical paradise in a bottle. Real pineapple and coconut cream blended into the perfect piña colada mixer. Add rum or enjoy it virgin.</p><ul><li>All-natural ingredients</li><li>No artificial flavors or colors</li><li>Makes 8-10 cocktails per bottle</li></ul>" \
  "14.99"

echo ""

# ── Create Pages ─────────────────────────────────────────────
echo "=== Creating Pages ==="

create_page() {
  local title="$1"
  local handle="$2"
  local template="$3"
  local body="$4"

  echo -n "  Creating: $title... "
  RESULT=$(api_rest "pages.json" "{
    \"page\": {
      \"title\": \"$title\",
      \"handle\": \"$handle\",
      \"template_suffix\": \"$template\",
      \"body_html\": \"$body\",
      \"published\": true
    }
  }")
  PAGE_ID=$(echo "$RESULT" | grep -o '"id":[0-9]*' | head -1)
  if [ -n "$PAGE_ID" ]; then
    echo "OK ($PAGE_ID)"
  else
    echo "FAILED"
    echo "    $RESULT" | head -1
  fi
}

create_page "About" "about" "about" "<p>About Barcoop Bevy</p>"
create_page "Press" "press" "press" "<p>Press coverage</p>"
create_page "Recipes" "recipes" "recipes" "<p>Cocktail recipes</p>"
create_page "Contact" "contact" "contact" "<p>Get in touch</p>"

echo ""

# ── Create Navigation Menu ───────────────────────────────────
echo "=== Updating Navigation ==="
echo -n "  Fetching main menu... "

# Get the main menu ID
MENUS=$(curl -s "$BASE/menus.json" \
  -H "X-Shopify-Access-Token: $TOKEN")
MENU_ID=$(echo "$MENUS" | grep -o '"id":[0-9]*' | head -1 | grep -o '[0-9]*')

if [ -n "$MENU_ID" ]; then
  echo "found (ID: $MENU_ID)"
  echo -n "  Updating menu items... "
  RESULT=$(curl -s -X PUT "$BASE/menus/$MENU_ID.json" \
    -H "Content-Type: application/json" \
    -H "X-Shopify-Access-Token: $TOKEN" \
    -d "{
      \"menu\": {
        \"id\": $MENU_ID,
        \"links\": [
          {\"title\": \"Shop\", \"type\": \"catalog\", \"link\": \"/collections/all\"},
          {\"title\": \"Recipes\", \"type\": \"page\", \"link\": \"/pages/recipes\"},
          {\"title\": \"About\", \"type\": \"page\", \"link\": \"/pages/about\"},
          {\"title\": \"Press\", \"type\": \"page\", \"link\": \"/pages/press\"},
          {\"title\": \"Contact\", \"type\": \"page\", \"link\": \"/pages/contact\"}
        ]
      }
    }")
  NAV_TITLE=$(echo "$RESULT" | grep -o '"title":"[^"]*"' | head -1)
  if [ -n "$NAV_TITLE" ]; then
    echo "OK"
  else
    echo "FAILED (may need manual setup)"
  fi
else
  echo "not found (create navigation manually in Shopify Admin)"
fi

echo ""
echo "=== Done! ==="
echo "Visit your store: https://$STORE"
echo "Admin: https://$STORE/admin"
