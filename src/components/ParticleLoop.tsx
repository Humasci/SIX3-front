import { useEffect, useRef } from "react";

const VIOLETS = ["#7c3aed", "#8b5cf6", "#a855f7", "#6d28d9", "#c084fc", "#6366f1"];
const ORANGES = ["#f97316", "#fb923c", "#ea580c"];
const COLORS = [...VIOLETS, ...ORANGES];

type Particle = {
  s0: number;
  speed: number;
  color: number;
  size: number;
  jx: number;
  jy: number;
  jz: number;
  free: boolean;
  dx: number;
  dy: number;
  dz: number;
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

// Colour drifts from violet to orange around the loop, with a few accents mixed in
const colorFor = (s: number) => {
  const band = (Math.sin(s - 0.6) + 1) / 2;
  const orange = Math.random() < Math.pow(band, 3) * 0.9 + 0.04;
  return orange
    ? VIOLETS.length + Math.floor(Math.random() * ORANGES.length)
    : Math.floor(Math.random() * VIOLETS.length);
};

const buildParticles = (count: number): Particle[] => {
  const ps: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const s0 = Math.random() * Math.PI * 2;
    const u = Math.random() * Math.PI * 2;
    const v = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random());
    const free = Math.random() < 0.26;
    const du = Math.random() * Math.PI * 2;
    const dv = Math.acos(2 * Math.random() - 1);
    ps.push({
      s0,
      speed: 0.85 + Math.random() * 0.3,
      color: colorFor(s0),
      size: 0.6 + Math.random() * 0.75,
      jx: r * Math.sin(v) * Math.cos(u),
      jy: r * Math.sin(v) * Math.sin(u),
      jz: r * Math.cos(v),
      free,
      dx: Math.sin(dv) * Math.cos(du),
      dy: Math.sin(dv) * Math.sin(du),
      dz: Math.cos(dv),
      seed: Math.random(),
      life: 0.5 + Math.random() * 0.8,
      ox: 0, oy: 0, px: 0, py: 0, pz: 0, ps: 1, fade: 1,
    });
  }
  return ps;
};

export const ParticleLoop = ({ className = "" }: { className?: string }) => {
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
      if (!particles.length || wasMobile !== mobile) particles = buildParticles(mobile ? 650 : 1700);
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const cx0 = mobile ? W * 0.62 : W * 0.72;
      const cy0 = mobile ? H * 0.72 : H * 0.44;
      const size = mobile ? Math.min(W * 0.5, H * 0.22) : Math.min(W * 0.155, H * 0.25);
      const K = size / 3;
      const tube = K * 0.3;
      const r0 = mobile ? 3.4 : Math.max(3.2, Math.min(H * 0.0072, 6.5));
      const F = 1100;

      const ry = time * 0.22;
      const rx = 0.55 + Math.sin(time * 0.17) * 0.18;
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cX = Math.cos(rx), sX = Math.sin(rx);

      for (const p of particles) {
        const s = p.s0 + time * 0.12 * p.speed;
        // (2,3) torus knot
        const rr = Math.cos(3 * s) + 2;
        let x = rr * Math.cos(2 * s) * K + p.jx * tube;
        let y = rr * Math.sin(2 * s) * K + p.jy * tube;
        let z = -Math.sin(3 * s) * K + p.jz * tube;

        p.fade = 1;
        if (p.free) {
          const phase = ((time * 0.06) / p.life + p.seed) % 1;
          const reach = size * 0.9 * phase;
          x += p.dx * reach;
          y += p.dy * reach;
          z += p.dz * reach;
          p.fade = Math.sin(phase * Math.PI);
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
      const depth = size * 1.3;
      const base = mobile ? 0.5 : 1;
      for (const p of particles) {
        const r = r0 * p.size * p.ps * (p.free ? 0.55 : 1);
        if (r < 0.4 || p.fade <= 0.01) continue;
        const near = Math.min(1, Math.max(0, (p.pz + depth) / (2 * depth)));
        ctx.globalAlpha = base * p.fade * (p.free ? 0.7 : 1) * (0.3 + near * 0.7);
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
