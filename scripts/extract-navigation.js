const fs = require('fs');

const STORE = 'https://us.masons.it';

async function extractNavigation() {
  // Fetch homepage to extract navigation structure
  const res = await fetch(`${STORE}/fr`);
  const html = await res.text();

  // Extract all internal links from header/nav areas
  const allLinks = [...html.matchAll(/href=["'](\/fr\/[^"'#]+)["']/g)].map(m => m[1]);
  const uniqueLinks = [...new Set(allLinks)].sort();

  // Categorize
  const collections = uniqueLinks.filter(l => l.includes('/collections/'));
  const products = uniqueLinks.filter(l => l.includes('/products/'));
  const pages = uniqueLinks.filter(l => l.includes('/pages/'));
  const other = uniqueLinks.filter(l => !l.includes('/collections/') && !l.includes('/products/') && !l.includes('/pages/'));

  // Try to extract menu structure from Shopify's inline JSON
  const menuJsonMatch = html.match(/window\.__SHOPIFY_MENU__\s*=\s*(\{[\s\S]*?\});/);

  // Look for linklist references in the HTML
  const linklistRefs = [...html.matchAll(/linklists\['([^']+)'\]|linklists\["([^"]+)"\]/g)]
    .map(m => m[1] || m[2]);

  // Extract footer by looking for footer element
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  let footerLinks = [];
  if (footerMatch) {
    footerLinks = [...footerMatch[0].matchAll(/href=["'](\/fr\/[^"'#]+)["']/g)].map(m => m[1]);
  }

  const navigation = {
    main_menu: {
      handle: 'main-menu',
      items: collections.slice(0, 20).map(l => ({
        title: l.split('/').pop().replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
        url: l.replace('/fr', ''),
        type: 'collection'
      }))
    },
    footer: {
      handle: 'footer',
      items: [...new Set(footerLinks)].map(l => ({
        title: l.split('/').pop().replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
        url: l.replace('/fr', ''),
        type: l.includes('/pages/') ? 'page' : l.includes('/collections/') ? 'collection' : 'other'
      }))
    },
    all_links: {
      collections: collections.map(l => l.replace('/fr', '')),
      pages: pages.map(l => l.replace('/fr', '')),
      other: other
    },
    linklist_refs: [...new Set(linklistRefs)]
  };

  fs.writeFileSync('docs/scraped-data/navigation.json', JSON.stringify(navigation, null, 2));
  console.log(`Main menu items: ${navigation.main_menu.items.length}`);
  console.log(`Footer items: ${navigation.footer.items.length}`);
  console.log(`Total collection links: ${collections.length}`);
  console.log(`Total page links: ${pages.length}`);
  console.log(`Linklist refs: ${linklistRefs.join(', ') || 'none found'}`);
  console.log('Saved to docs/scraped-data/navigation.json');
}

extractNavigation().catch(console.error);
