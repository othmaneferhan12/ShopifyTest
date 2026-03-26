/**
 * Extract metafield and product data from source store via public .json endpoints.
 * No API access needed — uses Shopify's public product JSON.
 */

const fs = require('fs');

const STORE_URL = 'https://us.masons.it';

async function fetchJSON(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

async function getProductHandles() {
  // Get product handles from collections/all page
  const data = await fetchJSON(`${STORE_URL}/collections/all/products.json?limit=50`);
  return data.products.map(p => p.handle);
}

async function getProductDetails(handle) {
  const data = await fetchJSON(`${STORE_URL}/products/${handle}.json`);
  return data.product;
}

async function getCollections() {
  const data = await fetchJSON(`${STORE_URL}/collections.json`);
  return data.collections;
}

async function main() {
  console.log('Step 1: Fetching product handles...');
  let handles;
  try {
    handles = await getProductHandles();
    console.log(`Found ${handles.length} products`);
  } catch (e) {
    console.error('Failed to get product handles:', e.message);
    console.log('Trying alternative: /products.json...');
    try {
      const data = await fetchJSON(`${STORE_URL}/products.json?limit=50`);
      handles = data.products.map(p => p.handle);
      console.log(`Found ${handles.length} products via /products.json`);
    } catch (e2) {
      console.error('Also failed:', e2.message);
      handles = [];
    }
  }

  // Sample up to 5 products for metafield analysis
  const sampleHandles = handles.slice(0, 5);
  const products = [];

  console.log('\nStep 2: Fetching product details for metafield analysis...');
  for (const handle of sampleHandles) {
    try {
      const product = await getProductDetails(handle);
      products.push({
        handle: product.handle,
        title: product.title,
        vendor: product.vendor,
        product_type: product.product_type,
        tags: product.tags,
        variants_count: product.variants?.length,
        options: product.options?.map(o => ({ name: o.name, values: o.values?.slice(0, 5) })),
        // Check for metafields in the product JSON (only exposed if configured)
        metafields: product.metafields || null,
        // Check variant-level data
        sample_variant: product.variants?.[0] ? {
          title: product.variants[0].title,
          sku: product.variants[0].sku,
          price: product.variants[0].price,
          compare_at_price: product.variants[0].compare_at_price,
          option1: product.variants[0].option1,
          option2: product.variants[0].option2,
          option3: product.variants[0].option3,
          weight: product.variants[0].weight,
          weight_unit: product.variants[0].weight_unit,
          barcode: product.variants[0].barcode,
        } : null,
        body_html_snippet: product.body_html?.substring(0, 500),
      });
      console.log(`  ✓ ${product.title} (${product.variants?.length} variants)`);
    } catch (e) {
      console.error(`  ✗ ${handle}: ${e.message}`);
    }
  }

  console.log('\nStep 3: Fetching collections...');
  let collections = [];
  try {
    collections = await getCollections();
    console.log(`Found ${collections.length} collections`);
  } catch (e) {
    console.error('Failed to get collections:', e.message);
  }

  // Analyze what metafield-like data we can infer
  const inferredMetafields = [];

  // From product page audit: composition, manufacturing, size guide are displayed
  // These are likely stored as product metafields
  inferredMetafields.push(
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'composition',
      type: 'single_line_text_field',
      description: 'Material composition (e.g. 94% Coton 05% Polyester 01% Élasthanne)',
      source: 'DOM observation — product page composition block',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'manufacturing',
      type: 'single_line_text_field',
      description: 'Special manufacturing process notes (e.g. Teint en pièce)',
      source: 'DOM observation — product page manufacturing block',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'size_guide',
      type: 'rich_text_field',
      description: 'Size conversion table (IT/US/FR/DE/UK)',
      source: 'DOM observation — product page size guide block',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'product_code',
      type: 'single_line_text_field',
      description: 'Internal product code displayed on product page',
      source: 'DOM observation — product info block',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'fit',
      type: 'single_line_text_field',
      description: 'Fit type (extra slim, regular, slim, cargo, etc.)',
      source: 'Inferred from collection-links section pant model descriptions',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'custom',
      key: 'model_name',
      type: 'single_line_text_field',
      description: 'Model name (Milan, New York, Turin, Chile, etc.)',
      source: 'Inferred from collection-links section showing model names',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'loox',
      key: 'avg_rating',
      type: 'number_decimal',
      description: 'Loox average review rating (currently inactive/null)',
      source: 'Site audit — MetafieldLooxRating reference in DOM',
    },
    {
      owner_type: 'PRODUCT',
      namespace: 'loox',
      key: 'num_reviews',
      type: 'number_integer',
      description: 'Loox review count (currently inactive/null)',
      source: 'Site audit — MetafieldLooxCount reference in DOM',
    }
  );

  // Save all results
  const output = {
    extraction_date: new Date().toISOString(),
    source_store: STORE_URL,
    method: 'Public .json endpoints + DOM observation inference',
    products_sampled: products,
    collections: collections.map(c => ({
      handle: c.handle,
      title: c.title,
      body_html_snippet: c.body_html?.substring(0, 300),
    })),
    total_products: handles.length,
    total_collections: collections.length,
    inferred_metafields: inferredMetafields,
  };

  fs.writeFileSync(
    'docs/scraped-data/metafield-extraction.json',
    JSON.stringify(output, null, 2)
  );

  console.log('\n=== INFERRED METAFIELD DEFINITIONS ===');
  console.table(
    inferredMetafields.map(m => ({
      Owner: m.owner_type,
      Namespace: m.namespace,
      Key: m.key,
      Type: m.type,
    }))
  );
  console.log(`\nTotal: ${inferredMetafields.length} metafield definitions`);
  console.log(`Products found: ${handles.length}`);
  console.log(`Collections found: ${collections.length}`);
  console.log('\nSaved to docs/scraped-data/metafield-extraction.json');
}

main().catch(console.error);
