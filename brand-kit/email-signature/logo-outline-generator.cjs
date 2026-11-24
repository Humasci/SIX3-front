const { chromium } = require('playwright');
const fs = require('fs');
const [,, src, out, dbg] = process.argv;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const data = 'data:image/png;base64,' + fs.readFileSync(src).toString('base64');
  const res = await p.evaluate(async ({ data, dbg }) => {
    const img = new Image(); img.src = data; await img.decode();
    const W = img.width, H = img.height;
    const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'); g.drawImage(img, 0, 0);
    const a = g.getImageData(0, 0, W, H).data;
    // column occupancy, to find where SIX³ ends (first wide empty gap after content starts)
    const occ = []; for (let x = 0; x < W; x++) { let n = 0; for (let y = 0; y < H; y++) if (a[(y * W + x) * 4 + 3] > 40) n++; occ.push(n); }
    let start = occ.findIndex((n) => n > 0), x = start, gapStart = -1, cut = W;
    for (; x < W; x++) { if (occ[x] === 0) { if (gapStart < 0) gapStart = x; if (x - gapStart > W * 0.02) { cut = gapStart + 4; break; } } else gapStart = -1; }
    if (dbg) return { W, H, start, cut };
    // white silhouette of the SIX³ part only
    const s = document.createElement('canvas'); s.width = W; s.height = H; const sg = s.getContext('2d');
    sg.drawImage(img, 0, 0, cut, H, 0, 0, cut, H);
    sg.globalCompositeOperation = 'source-in'; sg.fillStyle = '#fff'; sg.fillRect(0, 0, W, H);
    const o = document.createElement('canvas'); o.width = W; o.height = H; const og = o.getContext('2d');
    const r = Math.round(H * 0.022);
    for (let k = 0; k < 48; k++) { const t = (k / 48) * Math.PI * 2; og.drawImage(s, Math.cos(t) * r, Math.sin(t) * r); }
    og.drawImage(img, 0, 0);
    // trim to the visible logo (plus a small margin), then scale to 2x email size (180px wide)
    const od = og.getImageData(0, 0, W, H).data; let x0 = W, y0 = H, x1 = 0, y1 = 0;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (od[(y * W + x) * 4 + 3] > 8) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    const m = Math.round(H * 0.02); x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m); x1 = Math.min(W - 1, x1 + m); y1 = Math.min(H - 1, y1 + m);
    const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
    const out = document.createElement('canvas'); const w2 = 360, h2 = Math.round(ch * 360 / cw); out.width = w2; out.height = h2;
    const q = out.getContext('2d'); q.imageSmoothingQuality = 'high'; q.drawImage(o, x0, y0, cw, ch, 0, 0, w2, h2);
    return { W, H, cut, w2, h2, png: out.toDataURL('image/png') };
  }, { data, dbg: !!dbg });
  if (res.png) fs.writeFileSync(out, Buffer.from(res.png.split(',')[1], 'base64'));
  delete res.png; console.log(res); await b.close();
})();
