import { useEffect, useRef } from "react";

const VIOLETS = ["#7c3aed", "#8b5cf6", "#a855f7", "#6d28d9", "#c084fc", "#6366f1"];
const ORANGES = ["#f97316", "#fb923c", "#ea580c"];
const COLORS = [...VIOLETS, ...ORANGES];

type Particle = {
  x: number;
  y: number;
  z: number;
  color: number;
  size: number;
  dust: boolean;
  seed: number;
  life: number;
  ox: number;
  oy: number;
  px: number;
  py: number;
  pz: number;
  ps: number;
  fade: number;
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

const buildParticles = (count: number): Particle[] => {
  const ps: Particle[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  const surface = Math.round(count * 0.84);
  for (let i = 0; i < count; i++) {
    const dust = i >= surface;
    let x: number, y: number, z: number;
    if (dust) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      x = Math.sin(v) * Math.cos(u);
      y = Math.sin(v) * Math.sin(u);
      z = Math.cos(v);
    } else {
      // Fibonacci sphere for an even spread
      y = 1 - (i / (surface - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = golden * i;
      x = Math.cos(th) * r;
      z = Math.sin(th) * r;
    }
    const g = Math.min(1, Math.max(0, (x + y) * 0.45 + 0.5));
    const orange = Math.random() < Math.pow(g, 2.4) * 0.95;
    ps.push({
      x, y, z, dust,
      color: orange
        ? VIOLETS.length + Math.floor(Math.random() * ORANGES.length)
        : Math.floor(Math.random() * VIOLETS.length),
      size: 0.6 + Math.random() * 0.75,
      seed: Math.random(),
      life: 0.6 + Math.random() * 0.8,
      ox: 0, oy: 0, px: 0, py: 0, pz: 0, ps: 1, fade: 1,
    });
  }
  return ps;
};

// Smooth layered waves standing in for noise, so the surface ripples organically
const ripple = (x: number, y: number, z: number, t: number) =>
  Math.sin(x * 2.6 + t * 0.9) * Math.sin(y * 2.2 - t * 0.7) * Math.sin(z * 2.4 + t * 0.6) +
  0.5 * Math.sin(x * 4.1 - y * 3.3 + t * 1.2) * Math.cos(z * 3.7 - t * 0.8);

export const ParticleOrb = ({ className = "" }: { className?: string }) => {
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
      if (!particles.length || wasMobile !== mobile) particles = buildParticles(mobile ? 1100 : 2800);
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const cx0 = mobile ? W * 0.62 : W * 0.72;
      const cy0 = mobile ? H * 0.74 : H * 0.45;
      const R = mobile ? Math.min(W * 0.34, H * 0.15) : Math.min(W * 0.16, H * 0.27);
      const r0 = mobile ? 2.1 : Math.max(2.2, Math.min(H * 0.0042, 4));
      const F = 1100;

      const ry = time * 0.18;
      const rx = 0.35 + Math.sin(time * 0.21) * 0.15;
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cX = Math.cos(rx), sX = Math.sin(rx);
      const breathe = 1 + Math.sin(time * 0.8) * 0.03;

      for (const p of particles) {
        let k: number;
        p.fade = 1;
        if (p.dust) {
          const phase = ((time * 0.07) / p.life + p.seed) % 1;
          k = 1.05 + phase * 0.75;
          p.fade = Math.sin(phase * Math.PI);
        } else {
          k = (1 + ripple(p.x, p.y, p.z, time) * 0.2) * breathe;
        }
        const x = p.x * R * k, y = p.y * R * k, z = p.z * R * k;

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
      const base = mobile ? 0.5 : 1;
      for (const p of particles) {
        const r = r0 * p.size * p.ps * (p.dust ? 0.5 : 1);
        if (r < 0.4 || p.fade <= 0.01) continue;
        const near = Math.min(1, Math.max(0, (p.pz + R) / (2 * R)));
        ctx.globalAlpha = base * p.fade * (p.dust ? 0.6 : 1) * (0.22 + near * 0.78);
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
