import { useEffect, useRef } from "react";

const PALETTE: [string, number][] = [
  ["#7c3aed", 5],
  ["#8b5cf6", 4],
  ["#a855f7", 4],
  ["#6d28d9", 3],
  ["#c084fc", 2],
  ["#6366f1", 2],
  ["#f97316", 3],
  ["#fb923c", 2],
];

type Particle = {
  t: number;
  strand: number;
  rung: number;
  color: number;
  size: number;
  jx: number;
  jy: number;
  jz: number;
  sx: number;
  sy: number;
  sz: number;
  seed: number;
  free: boolean;
  ox: number;
  oy: number;
  px: number;
  py: number;
  pz: number;
  ps: number;
  d: number;
};

const mix = (hex: string, target: number, amount: number) => {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => Math.round(c + (target - c) * amount));
  return `rgb(${ch[0]},${ch[1]},${ch[2]})`;
};

const makeSprite = (hex: string) => {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(s * 0.36, s * 0.32, s * 0.04, s * 0.5, s * 0.5, s * 0.5);
  grad.addColorStop(0, mix(hex, 255, 0.65));
  grad.addColorStop(0.35, hex);
  grad.addColorStop(1, mix(hex, 0, 0.6));
  g.fillStyle = grad;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
  g.fill();
  return c;
};

const pickColor = (r: number) => {
  const total = PALETTE.reduce((a, [, w]) => a + w, 0);
  let x = r * total;
  for (let i = 0; i < PALETTE.length; i++) {
    x -= PALETTE[i][1];
    if (x <= 0) return i;
  }
  return 0;
};

const smoothstep = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

const buildParticles = (scale: number): Particle[] => {
  const ps: Particle[] = [];
  const rnd = Math.random;
  const base = (t: number, strand: number, rung: number, free: boolean): Particle => {
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(rnd());
    return {
      t, strand, rung, free,
      color: pickColor(rnd()),
      size: 0.65 + rnd() * 0.7,
      jx: (rnd() - 0.5) * 2, jy: Math.cos(a) * r, jz: Math.sin(a) * r,
      sx: -0.2 - rnd() * 1.1, sy: (rnd() - 0.5) * 2.2, sz: (rnd() - 0.5) * 2,
      seed: rnd() * 1000,
      ox: 0, oy: 0, px: 0, py: 0, pz: 0, ps: 1, d: 0,
    };
  };
  const strandCount = Math.round(460 * scale);
  for (let s = 0; s < 2; s++) {
    for (let i = 0; i < strandCount; i++) ps.push(base(rnd(), s, -1, false));
  }
  const rungs = Math.round(30 * scale);
  for (let k = 0; k < rungs; k++) {
    const t = (k + 0.5) / rungs;
    for (let j = 0; j < 9; j++) ps.push(base(t + (rnd() - 0.5) * 0.003, 0, (j + 0.5) / 9, false));
  }
  const free = Math.round(170 * scale);
  for (let i = 0; i < free; i++) ps.push(base(rnd() * 0.35, rnd() < 0.5 ? 0 : 1, -1, true));
  return ps;
};

export const ParticleHelix = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sprites = PALETTE.map(([hex]) => makeSprite(hex));
    let particles: Particle[] = [];
    let W = 0, H = 0, dpr = 1, mobile = false;
    let raf = 0, visible = true, last = performance.now(), time = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      const wasMobile = mobile;
      mobile = W < 768;
      if (!particles.length || wasMobile !== mobile) particles = buildParticles(mobile ? 0.5 : 1);
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const originX = mobile ? W * -0.1 : W * 0.4;
      const originY = mobile ? H * 0.78 : H * 0.62;
      const L = mobile ? W * 1.35 : W * 0.72;
      const R = mobile ? Math.min(H * 0.07, 60) : Math.min(H * 0.15, 135);
      const tube = R * 0.1;
      const theta = mobile ? -0.38 : -0.26;
      const ct = Math.cos(theta), st = Math.sin(theta);
      const turns = 2.2;
      const spin = time * 0.35;
      const F = 900;
      const cx = W / 2, cy = H / 2;
      const r0 = mobile ? 4.2 : Math.max(4, Math.min(H * 0.009, 8));
      const scatter = H * 0.45;

      for (const p of particles) {
        const ang = p.t * turns * Math.PI * 2 + spin + p.strand * Math.PI;
        let v: number, w: number;
        if (p.rung >= 0) {
          const k = 1 - 2 * p.rung;
          v = Math.cos(ang) * R * k;
          w = Math.sin(ang) * R * k;
        } else {
          v = Math.cos(ang) * R;
          w = Math.sin(ang) * R;
        }
        let u = p.t * L + p.jx * tube;
        v += p.jy * tube;
        w += p.jz * tube;

        const d = p.free ? 1 : smoothstep(0.34, 0.0, p.t);
        p.d = d;
        if (d > 0) {
          const drift = Math.sin(time * 0.4 + p.seed) * 0.12;
          u += (p.sx + drift) * scatter * d * 0.9;
          v += (p.sy + Math.cos(time * 0.3 + p.seed) * 0.1) * scatter * d * 0.5;
          w += p.sz * scatter * d * 0.35;
        }

        const x = originX + u * ct - v * st;
        const y = originY + u * st + v * ct;
        const s = F / (F - w);
        p.px = cx + (x - cx) * s + p.ox;
        p.py = cy + (y - cy) * s + p.oy;
        p.pz = w;
        p.ps = s;

        const dx = p.px - mouse.x, dy = p.py - mouse.y;
        const dist = Math.hypot(dx, dy);
        const reach = 130;
        const push = dist < reach && dist > 0.01 ? (reach - dist) / reach : 0;
        p.ox += ((push ? (dx / dist) * push * 45 : 0) - p.ox) * 0.08;
        p.oy += ((push ? (dy / dist) * push * 45 : 0) - p.oy) * 0.08;
      }

      particles.sort((a, b) => a.pz - b.pz);
      const depth = R + scatter * 0.35;
      for (const p of particles) {
        const r = r0 * p.size * p.ps * (1 - p.d * 0.45);
        if (r < 0.4) continue;
        const near = (p.pz + depth) / (2 * depth);
        ctx.globalAlpha = (mobile ? 0.55 : 1) * (1 - p.d * 0.55) * Math.min(1, Math.max(0.25, 0.35 + near * 0.75));
        ctx.drawImage(sprites[p.color], p.px - r, p.py - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt;
      draw();
      if (visible && !document.hidden) raf = requestAnimationFrame(loop);
      else raf = 0;
    };

    const start = () => {
      if (reduceMotion || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw();
    start();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    io.observe(canvas);

    const onVisibility = () => start();
    document.addEventListener("visibilitychange", onVisibility);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
