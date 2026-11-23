// Blog share images (1200×630): SIX³ logo left, vertical wormhole centre, title right.
// Matches public/images/blog/chatgpt-business-hub-share.jpg. Regenerate with: node brand-kit/patterns/blog-share-generator.cjs (needs playwright). Add an entry to IMAGES for each new post
const { chromium } = require('playwright');
const fs = require('fs');
const REPO = require('path').resolve(__dirname, '../..') + '/';
const src = fs.readFileSync(REPO + 'brand-kit/patterns/wormhole-generator.js', 'utf8');
const drawWormhole = src.slice(src.indexOf('const drawWormhole = ') + 'const drawWormhole = '.length, src.indexOf('\n};', src.indexOf('const drawWormhole')) + 2);
const logo = 'data:image/png;base64,' + fs.readFileSync(REPO + 'brand-kit/logo/six3-logo-white-transparent.png').toString('base64');
const GRAD = 'linear-gradient(90deg,#a855f7,#f97316 60%,#fde7b0)';
const IMAGES = [
  { file: 'chatgpt-ads-november-2026-share.jpg', lines: ['ChatGPT Ads'], sub: 'November 2026', tag: 'what changed' },
  { file: 'how-to-advertise-on-chatgpt-share.jpg', lines: ['ChatGPT Ads'], sub: 'How to advertise', tag: 'a practical guide' },
];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  // Horizontal wormhole drawn on a 630×1200 canvas, then turned upright so the throat runs vertically
  const art = await p.evaluate(`(${drawWormhole})(1260, 2400, { cx: 1260 / 2, cy: 1200, r0: 150, a: 210, span: 1300, tilt: 0.28, rings: 64, meridians: 56, particles: 9000 })`);
  for (const im of IMAGES) {
    const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
    await pg.setContent(`<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet"></head>
<body style="margin:0;width:1200px;height:630px;overflow:hidden;position:relative;background:radial-gradient(ellipse at 50% 50%,#17163a 0%,#0b0b22 70%);font-family:'DM Sans',sans-serif;color:#f4f4fb">
<div style="position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1.3px);background-size:28px 28px"></div>
<img src="${art}" style="position:absolute;left:50%;top:50%;width:1200px;height:630px;transform:translate(-50%,-50%) rotate(90deg) scale(1.0);transform-origin:center;width:1260px;height:2400px;margin-left:0;transform:translate(-50%,-50%) rotate(90deg) scale(0.5)">
<img src="${logo}" style="position:absolute;left:40px;top:50%;width:400px;transform:translateY(-50%)">
<div style="position:absolute;right:50px;top:50%;transform:translateY(-50%);width:360px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px">
  ${im.lines.map((l) => `<div style="font-size:56px;font-weight:700;letter-spacing:-1.5px;white-space:nowrap;line-height:1.05">${l}</div>`).join('')}
  <div style="font-size:31px;font-weight:400;line-height:1.2;color:#e6e6f2">${im.sub}</div>
  <div style="width:110px;height:3px;border-radius:3px;background:linear-gradient(90deg,#7c3aed,#a855f7 45%,#f97316,#fde7b0);margin:12px 0 6px"></div>
  <div style="font-size:27px;font-weight:600;background:${GRAD};-webkit-background-clip:text;background-clip:text;color:transparent">${im.tag}</div>
</div>
</body></html>`, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    await pg.screenshot({ path: REPO + 'public/images/blog/' + im.file, type: 'jpeg', quality: 88 });
    await pg.close();
  }
  await b.close();
  console.log('done');
})();
