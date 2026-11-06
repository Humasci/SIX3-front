// Renders every page to static HTML after `vite build`, so search engines and link previews
// (LinkedIn, Facebook, Slack...) get the real content and tags without running JavaScript.
// Also writes sitemap.xml, rss.xml and a 404 page. Run by `npm run build`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");
const SITE = "https://six3.agency";

const { render, routes, publishedPosts, portfolioIds } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
// The template's default title/description/social tags are replaced by each page's own
const baseHead = template
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<link rel="canonical"[^>]*>/, "")
  .replace(/\s*<meta (name|property)="(description|og:[^"]*|twitter:[^"]*)"[^>]*>/g, "");

const posts = publishedPosts();
const urls = [
  ...routes.map((r) => r.path).filter((p) => !p.includes(":") && p !== "*"),
  ...posts.map((p) => `/blog/${p.slug}`),
  ...portfolioIds.map((id) => `/portfolio/${id}`),
];

const page = (head, html) =>
  baseHead
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered>${html}</div>`);

const write = (file, contents) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
};

for (const url of urls) {
  const { html, head } = await render(url);
  // /about → dist/about.html, served at /about by Vercel's cleanUrls
  write(path.join(dist, url === "/" ? "index.html" : `${url}.html`), page(head, html));
}
{
  const { html, head } = await render("/__not-found__");
  write(path.join(dist, "404.html"), page(head, html));
}

// Sitemap: every prerendered page, articles with their publish date
const today = new Date().toISOString().slice(0, 10);
const priority = (u) => (u === "/" ? "1.0" : u.split("/").length === 2 ? "0.8" : "0.6");
const postDates = Object.fromEntries(posts.map((p) => [`/blog/${p.slug}`, p.date]));
const noIndex = new Set(["/privacy-policy", "/terms", "/cookie-policy"]);
write(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url><loc>${SITE}${u === "/" ? "/" : u}</loc><lastmod>${postDates[u] ?? today}</lastmod><priority>${noIndex.has(u) ? "0.3" : priority(u)}</priority></url>`
    )
    .join("\n")}\n</urlset>\n`
);

// RSS feed for the blog (LinkedIn schedulers and feed readers can pick posts up from here)
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
write(
  path.join(dist, "rss.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n<title>SIX³ Agency Blog</title>\n<link>${SITE}/blog</link>\n<description>Practical guides on AI marketing and automation for UK businesses.</description>\n<language>en-gb</language>\n${posts
    .map(
      (p) =>
        `<item><title>${esc(p.title)}</title><link>${SITE}/blog/${p.slug}</link><guid>${SITE}/blog/${p.slug}</guid><pubDate>${new Date(`${p.date}T08:00:00Z`).toUTCString()}</pubDate><description>${esc(p.excerpt)}</description></item>`
    )
    .join("\n")}\n</channel></rss>\n`
);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${urls.length} pages + 404, sitemap.xml and rss.xml`);
