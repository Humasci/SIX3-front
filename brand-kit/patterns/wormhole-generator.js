const { chromium } = require('playwright');
// Regenerate with: node brand-kit/patterns/wormhole-generator.js (needs playwright)
const OUT = __dirname + '/';

// Runs in the browser: draws a wormhole (surface of revolution r = r0·cosh(x/a)) as a glowing grid
const drawWormhole = (W, H, opts) => {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const { cx, cy, r0, a, span, tilt, rings, meridians, particles } = opts;
  const STOPS = [[0, [124, 58, 237]], [0.5, [168, 85, 247]], [1, [249, 115, 22]]];
  const col = (t, al) => { t = Math.max(0, Math.min(1, t)); let i = 1; while (t > STOPS[i][0]) i++;
    const [t0, A] = STOPS[i - 1], [t1, B] = STOPS[i], k = (t - t0) / (t1 - t0);
    return `rgba(${A.map((v, j) => Math.round(v + (B[j] - v) * k)).join(',')},${al})`; };
  const R = (x) => r0 * Math.cosh(x / a);
  // throat glow
  const glow = g.createRadialGradient(cx, cy, 0, cx, cy, r0 * 2.2);
  glow.addColorStop(0, 'rgba(255,214,170,0.55)'); glow.addColorStop(0.25, 'rgba(249,115,22,0.28)');
  glow.addColorStop(0.6, 'rgba(124,58,237,0.12)'); glow.addColorStop(1, 'rgba(124,58,237,0)');
  g.fillStyle = glow; g.fillRect(0, 0, W, H);
  g.globalCompositeOperation = 'lighter';
  const pt = (x, th) => { const r = R(x); return [cx + x + r * Math.sin(th) * tilt, cy + r * Math.cos(th), Math.sin(th)]; };
  // closeness to throat drives colour (orange core, violet mouths) and brightness
  const heat = (x) => Math.exp(-Math.abs(x) / (a * 1.1));
  // rings
  for (let i = 0; i <= rings; i++) {
    const x = -span + (2 * span * i) / rings, r = R(x), h = heat(x);
    if (r > H * 1.6) continue;
    g.beginPath(); g.ellipse(cx + x, cy, Math.max(1, r * tilt), r, 0, 0, Math.PI * 2);
    g.strokeStyle = col(0.15 + h * 0.85, 0.18 + h * 0.6); g.lineWidth = 0.8 + h * 1.6; g.stroke();
  }
  // meridians
  for (let j = 0; j < meridians; j++) {
    const th = (j / meridians) * Math.PI * 2;
    let prev = null;
    for (let s = 0; s <= 240; s++) {
      const x = -span + (2 * span * s) / 240; const [px, py, front] = pt(x, th); const h = heat(x);
      if (prev) { g.beginPath(); g.moveTo(prev[0], prev[1]); g.lineTo(px, py);
        g.strokeStyle = col(0.15 + h * 0.85, (0.1 + h * 0.55) * (0.55 + 0.45 * front)); g.lineWidth = 0.7 + h * 1.3; g.stroke(); }
      prev = [px, py];
    }
  }
  // particles flowing over the surface + scattered dust
  let sd = 9; const rnd = () => (sd = (sd * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < particles; i++) {
    let x, y, h, rad;
    if (rnd() < 0.7) { x = (rnd() * 2 - 1) * span; const th = rnd() * Math.PI * 2; const p = pt(x, th); h = heat(x);
      x = p[0] + (rnd() - 0.5) * 6; y = p[1] + (rnd() - 0.5) * 6; rad = 0.6 + rnd() * 1.6 * (0.5 + h); }
    else { x = rnd() * W; y = rnd() * H; h = 0.1; rad = 0.4 + rnd() * 1.1; }
    g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fillStyle = col(0.1 + h * 0.9 + (rnd() - 0.5) * 0.2, 0.25 + rnd() * 0.55); g.fill();
  }
  // bright throat core
  const core = g.createLinearGradient(cx - r0 * tilt * 2, 0, cx + r0 * tilt * 2, 0);
  core.addColorStop(0, 'rgba(255,200,150,0)'); core.addColorStop(0.5, 'rgba(255,230,205,0.6)'); core.addColorStop(1, 'rgba(255,200,150,0)');
  g.fillStyle = core; g.fillRect(cx - r0 * tilt * 2, cy - r0 * 1.02, r0 * tilt * 4, r0 * 2.04);
  return c.toDataURL('image/png');
};

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  // Pattern alone (transparent), for future reuse
  const pattern = await p.evaluate(drawWormhole.toString().replace(/^/, '(') + ')(2400, 1350, { cx: 1200, cy: 675, r0: 170, a: 260, span: 1300, tilt: 0.28, rings: 64, meridians: 56, particles: 9000 })');
  require('fs').writeFileSync(OUT + 'wormhole-pattern-2400x1350.png', Buffer.from(pattern.split(',')[1], 'base64'));
  // Section divider slide preview (1920×1080)
  const art = await p.evaluate(drawWormhole.toString().replace(/^/, '(') + ')(1920, 1080, { cx: 1260, cy: 540, r0: 120, a: 190, span: 1100, tilt: 0.3, rings: 56, meridians: 48, particles: 7000 })');
  const s = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await s.setContent(`<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;800&display=swap" rel="stylesheet"></head>
<body style="margin:0;width:1920px;height:1080px;overflow:hidden;position:relative;background:#0b0b22;font-family:'DM Sans',sans-serif">
<img src="${art}" style="position:absolute;inset:0;width:1920px;height:1080px">
<div style="position:absolute;inset:0;background:linear-gradient(90deg,#0b0b22 0%,rgba(11,11,34,.92) 30%,rgba(11,11,34,.15) 58%,rgba(11,11,34,0) 70%)"></div>
<div style="position:absolute;left:128px;top:0;bottom:0;width:780px;display:flex;flex-direction:column;justify-content:center;gap:32px">
  <div style="font-size:30px;font-weight:500;letter-spacing:10px;color:#c4b5fd">SECTION 02</div>
  <div style="font-size:128px;font-weight:800;letter-spacing:-4px;line-height:1.02;color:#f4f4fb">[Section title]</div>
  <div style="width:420px;height:8px;border-radius:8px;background:linear-gradient(90deg,#7c3aed,#a855f7 45%,#f97316)"></div>
  <div style="font-size:36px;font-weight:500;line-height:1.35;color:#c9c9dc">[One line on what this section covers]</div>
</div>
<div style="position:absolute;left:128px;right:128px;bottom:64px;display:flex;justify-content:space-between;font-size:24px;color:#8f8fae"><span>SIX³ Agency · [Client name]</span><span>[Section]</span></div>
</body></html>`, { waitUntil: 'networkidle' });
  await s.evaluate(() => document.fonts.ready);
  await s.screenshot({ path: OUT + 'wormhole-section-divider-1920x1080.png' });
  await b.close();
  console.log('done');
})();
