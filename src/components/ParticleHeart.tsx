import { useEffect, useRef } from "react";
import { HEART_PATH } from "@/components/Logo";

const VIOLETS = ["#7c3aed", "#8b5cf6", "#a855f7", "#6d28d9", "#c084fc", "#6366f1"];
const ORANGES = ["#f97316", "#fb923c", "#ea580c"];
const COLORS = [...VIOLETS, ...ORANGES];

type Pt = [number, number];

type Particle = {
  a: Pt;
  b: Pt;
  z: number;
  delay: number;
  color: number;
  size: number;
  dust: boolean;
  dx: number;
  dy: number;
  dz: number;
  seed: number;
  ox: number;
  oy: number;
  px: number;
  py: number;
  pz: number;
  ps: number;
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
  grad.addColorStop(0, mix(hex, 255, 0.6));
  grad.addColorStop(0.35, hex);
  grad.addColorStop(1, mix(hex, 0, 0.6));
  g.fillStyle = grad;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
  g.fill();
  return c;
};

// Sample filled pixels of a shape, normalised so the shape fits a unit box centred on 0
const sampleShape = (paint: (g: CanvasRenderingContext2D, size: number) => void, count: number): Pt[] => {
  const size = 320;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.fillStyle = "#fff";
  paint(g, size);
  const data = g.getImageData(0, 0, size, size).data;
  const filled: Pt[] = [];
  let minX = size, maxX = 0, minY = size, maxY = 0;
  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
      if (data[(y * size + x) * 4 + 3] > 128) {
        filled.push([x, y]);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const span = Math.max(maxX - minX, maxY - minY) || 1;
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const pts: Pt[] = [];
  for (let i = 0; i < count; i++) {
    const [x, y] = filled[Math.floor(Math.random() * filled.length)] ?? [cx, cy];
    pts.push([(x - cx + Math.random() * 2) / span, (y - cy + Math.random() * 2) / span]);
  }
  return pts;
};

const heartPoints = (count: number) =>
  sampleShape((g, size) => {
    g.save();
    g.scale(size / 24, size / 24);
    g.fill(new Path2D(HEART_PATH));
    g.restore();
  }, count);

const lessThreePoints = (count: number) =>
  sampleShape((g, size) => {
    g.font = `800 ${size * 0.42}px "DM Sans", system-ui, sans-serif`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText("<3", size / 2, size / 2);
  }, count);

const buildParticles = (count: number): Particle[] => {
  const shapeCount = Math.round(count * 0.86);
  const hearts = heartPoints(shapeCount);
  const glyphs = lessThreePoints(shapeCount);
  const ps: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const dust = i >= shapeCount;
    const a = dust ? ([0, 0] as Pt) : hearts[i];
    const b = dust ? ([0, 0] as Pt) : glyphs[i];
    // Violet top-left to orange bottom-right, like the logo heart
    const g = Math.min(1, Math.max(0, (a[0] + a[1]) * 0.9 + 0.5));
    const orange = Math.random() < Math.pow(g, 2.2) * 0.95;
    const du = Math.random() * Math.PI * 2;
    const dv = Math.acos(2 * Math.random() - 1);
    ps.push({
      a,
      b,
      z: (Math.random() - 0.5) * 0.16,
      delay: Math.random() * 0.35,
      color: orange
        ? VIOLETS.length + Math.floor(Math.random() * ORANGES.length)
        : Math.floor(Math.random() * VIOLETS.length),
      size: 0.6 + Math.random() * 0.75,
      dust,
      dx: Math.sin(dv) * Math.cos(du),
      dy: Math.sin(dv) * Math.sin(du),
      dz: Math.cos(dv),
      seed: Math.random(),
      ox: 0, oy: 0, px: 0, py: 0, pz: 0, ps: 1,
    });
  }
  return ps;
};

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Heart for 4.5s, morph 1.8s, "<3" for 3s, morph back 1.8s
const HOLD_A = 4.5, MORPH = 1.8, HOLD_B = 3;
const CYCLE = HOLD_A + MORPH + HOLD_B + MORPH;
const morphAmount = (t: number, delay: number) => {
  const c = t % CYCLE;
  const k = (x: number) => easeInOut(Math.min(1, Math.max(0, (x - delay * MORPH * 0.5) / (MORPH * (1 - delay * 0.5)))));
  if (c < HOLD_A) return 0;
  if (c < HOLD_A + MORPH) return k(c - HOLD_A);
  if (c < HOLD_A + MORPH + HOLD_B) return 1;
  return 1 - k(c - HOLD_A - MORPH - HOLD_B);
};

const heartbeat = (t: number) => {
  const p = t % 1.25;
  const pulse = (x: number, at: number) => Math.exp(-Math.pow((x - at) / 0.06, 2));
  return pulse(p, 0.1) + 0.6 * pulse(p, 0.32);
};

export const ParticleHeart = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sprites = COLORS.map(makeSprite);
    let particles: Particle[] = [];
    let W = 0, H = 0, dpr = 1, mobile = false;
    let raf = 0, visible = true, last = performance.now(), time = 0;
    let cancelled = false;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      particles = buildParticles(mobile ? 700 : 1600);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      const wasMobile = mobile;
      mobile = W < 768;
      if (!particles.length || wasMobile !== mobile) build();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const cx0 = mobile ? W * 0.6 : W * 0.72;
      const cy0 = mobile ? H * 0.74 : H * 0.44;
      const S = mobile ? Math.min(W * 0.7, H * 0.3) : Math.min(W * 0.29, H * 0.47);
      const r0 = mobile ? 3.2 : Math.max(3.2, Math.min(H * 0.0072, 6.5));
      const F = 1100;

      const ry = Math.sin(time * 0.35) * 0.45;
      const rx = Math.sin(time * 0.23) * 0.12;
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cX = Math.cos(rx), sX = Math.sin(rx);

      const heartPhase = 1 - morphAmount(time, 0);
      const beat = 1 + heartbeat(time) * 0.045 * heartPhase;

      for (const p of particles) {
        let x: number, y: number, z: number;
        if (p.dust) {
          const phase = (time * 0.05 + p.seed) % 1;
          const reach = S * (0.35 + phase * 0.55);
          x = p.dx * reach;
          y = p.dy * reach * 0.8;
          z = p.dz * reach * 0.5;
        } else {
          const m = morphAmount(time, p.delay);
          const swirl = Math.sin(m * Math.PI);
          const wob = Math.sin(time * 1.3 + p.seed * 12) * 0.006;
          x = (p.a[0] + (p.b[0] - p.a[0]) * m + p.dx * swirl * 0.12 + wob) * S * beat;
          y = (p.a[1] + (p.b[1] - p.a[1]) * m + p.dy * swirl * 0.12 + wob) * S * beat;
          z = (p.z + p.dz * swirl * 0.15) * S;
        }

        const x1 = x * cY + z * sY;
        const z1 = -x * sY + z * cY;
        const y1 = y * cX - z1 * sX;
        const z2 = y * sX + z1 * cX;

        const sc = F / (F - z2);
        p.px = cx0 + x1 * sc + p.ox;
        p.py = cy0 + y1 * sc + p.oy;
        p.pz = z2;
        p.ps = sc;

        const ddx = p.px - mouse.x, ddy = p.py - mouse.y;
        const dist = Math.hypot(ddx, ddy);
        const reachM = 140;
        const push = dist < reachM && dist > 0.01 ? (reachM - dist) / reachM : 0;
        p.ox += ((push ? (ddx / dist) * push * 50 : 0) - p.ox) * 0.08;
        p.oy += ((push ? (ddy / dist) * push * 50 : 0) - p.oy) * 0.08;
      }

      particles.sort((a, b) => a.pz - b.pz);
      const depth = S * 0.5;
      const base = mobile ? 0.5 : 1;
      for (const p of particles) {
        const fade = p.dust ? Math.sin(((time * 0.05 + p.seed) % 1) * Math.PI) * 0.6 : 1;
        const r = r0 * p.size * p.ps * (p.dust ? 0.55 : 1);
        if (r < 0.4 || fade <= 0.01) continue;
        const near = Math.min(1, Math.max(0, (p.pz + depth) / (2 * depth)));
        ctx.globalAlpha = base * fade * (0.45 + near * 0.55);
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
      if (cancelled || reduceMotion || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw();
    start();

    // Resample the "<3" once the brand font has loaded so the glyphs match the site type
    document.fonts?.ready.then(() => {
      if (cancelled) return;
      build();
      draw();
    });

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
      cancelled = true;
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
