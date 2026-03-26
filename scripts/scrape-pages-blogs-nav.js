const fs = require('fs');

const STORE = 'https://us.masons.it';
const DELAY = 1000;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapePagesAndBlogs() {
  fs.mkdirSync('docs/scraped-data', { recursive: true });

  // 1. Pages
  console.log('--- Scraping pages ---');
  let allPages = [];
  let page = 1;
  while (true) {
    const res = await fetch(`${STORE}/pages.json?limit=250&page=${page}`);
    const data = await res.json();
    if (!data.pages || data.pages.length === 0) break;
    allPages.push(...data.pages);
    console.log(`Pages page ${page}: ${data.pages.length} (total: ${allPages.length})`);
    if (data.pages.length < 250) break;
    page++;
    await sleep(DELAY);
  }
  fs.writeFileSync('docs/scraped-data/pages.json', JSON.stringify(allPages, null, 2));
  console.log(`Saved ${allPages.length} pages.\n`);

  // 2. Blogs and articles
  console.log('--- Scraping blogs ---');
  let allBlogs = [];
  const allArticles = {};
  try {
    page = 1;
    while (true) {
      const res = await fetch(`${STORE}/blogs.json?limit=250&page=${page}`);
      if (!res.ok) { console.log(`Blogs endpoint returned ${res.status} — skipping.`); break; }
      const text = await res.text();
      if (!text || text.trim() === '') { console.log('Blogs endpoint returned empty — skipping.'); break; }
      const data = JSON.parse(text);
      if (!data.blogs || data.blogs.length === 0) break;
      allBlogs.push(...data.blogs);
      if (data.blogs.length < 250) break;
      page++;
      await sleep(DELAY);
    }
    console.log(`Found ${allBlogs.length} blogs.`);

    for (const blog of allBlogs) {
      let articles = [];
      let aPage = 1;
      while (true) {
        const res = await fetch(`${STORE}/blogs/${blog.handle}/articles.json?limit=250&page=${aPage}`);
        if (!res.ok) break;
        const text = await res.text();
        if (!text || text.trim() === '') break;
        const data = JSON.parse(text);
        if (!data.articles || data.articles.length === 0) break;
        articles.push(...data.articles);
        if (data.articles.length < 250) break;
        aPage++;
        await sleep(DELAY);
      }
      allArticles[blog.handle] = articles;
      console.log(`  Blog "${blog.title}" (${blog.handle}): ${articles.length} articles`);
    }
  } catch (e) {
    console.log('Blog scraping error:', e.message, '— continuing.');
  }
  fs.writeFileSync('docs/scraped-data/blogs.json', JSON.stringify(allBlogs, null, 2));
  fs.writeFileSync('docs/scraped-data/articles.json', JSON.stringify(allArticles, null, 2));
  console.log('');

  // 3. Navigation — try common menu handles via the Liquid-exposed JSON
  console.log('--- Scraping navigation ---');
  const navMenus = {};
  const menuHandles = ['main-menu', 'footer', 'header', 'mega-menu', 'mobile-menu'];

  // Try fetching sitemap for nav hints
  try {
    const sitemapRes = await fetch(`${STORE}/sitemap.xml`);
    const sitemapText = await sitemapRes.text();
    fs.writeFileSync('docs/scraped-data/sitemap.xml', sitemapText);
    console.log('Saved sitemap.xml');
  } catch (e) {
    console.log('Could not fetch sitemap');
  }

  // Navigation isn't available via public JSON API — we'll extract from HTML
  try {
    const homeRes = await fetch(`${STORE}/fr`);
    const html = await homeRes.text();

    // Extract nav structure from header
    const navSection = html.match(/<nav[\s\S]*?<\/nav>/gi) || [];
    fs.writeFileSync('docs/scraped-data/navigation-html.json', JSON.stringify({
      nav_elements_found: navSection.length,
      raw_nav_html: navSection
    }, null, 2));
    console.log(`Extracted ${navSection.length} <nav> elements from homepage.`);
  } catch (e) {
    console.log('Could not extract nav from homepage:', e.message);
  }

  console.log('\n--- Summary ---');
  console.log(`Pages: ${allPages.length}`);
  console.log(`Blogs: ${allBlogs.length}`);
  const totalArticles = Object.values(allArticles).reduce((sum, a) => sum + a.length, 0);
  console.log(`Articles: ${totalArticles}`);
  console.log('Done.');
}

scrapePagesAndBlogs().catch(console.error);
