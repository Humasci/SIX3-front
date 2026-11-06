import { useEffect, useRef } from "react";

const STOPS: [number, [number, number, number]][] = [
  [0, [124, 58, 237]],
  [0.5, [168, 85, 247]],
  [1, [249, 115, 22]],
];

const rgba = (t: number, a: number) => {
  t = Math.max(0, Math.min(1, t));
  let i = 1;
  while (t > STOPS[i][0]) i++;
  const [t0, A] = STOPS[i - 1];
  const [t1, B] = STOPS[i];
  const k = (t - t0) / (t1 - t0);
  return `rgba(${A.map((v, j) => Math.round(v + (B[j] - v) * k)).join(",")},${a})`;
};

type Particle = { u: number; th: number; speed: number; size: number; tone: number };

type WormholeProps = {
  className?: string;
  // "light" draws with normal blending for white backgrounds; "dark" glows additively
  variant?: "dark" | "light";
  // Horizontal position of the throat, as a fraction of the width (desktop only)
  centerX?: number;
};

// A wormhole drawn as a glowing grid: the surface r = r0·cosh(u/a), rings flowing into the throat
export const WormholeCanvas = ({ className = "", variant = "dark", centerX = 0.5 }: WormholeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1, vertical = false;
    let raf = 0, visible = false, last = performance.now(), time = 0;
    let particles: Particle[] = [];

    const build = () => {
      const n = vertical ? 700 : 1600;
      particles = Array.from({ length: n }, () => ({
        u: Math.random() * 2 - 1,
        th: Math.random() * Math.PI * 2,
        speed: 0.04 + Math.random() * 0.08,
        size: 0.5 + Math.random() * 1.3,
        tone: (Math.random() - 0.5) * 0.25,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      const was = vertical;
      vertical = W < 768;
      if (!particles.length || was !== vertical) build();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      // Along = the wormhole's axis (horizontal on desktop, vertical on phones), across = its radius
      const along = vertical ? H : W;
      const across = vertical ? W : H;
      const light = variant === "light";
      const cx = vertical ? W / 2 : W * centerX, cy = H / 2;
      const r0 = across * (vertical ? 0.13 : 0.12);
      const a = along * 0.13;
      const span = along * 0.55;
      const tilt = 0.3;
      const spin = time * 0.05;
      const R = (u: number) => r0 * Math.cosh(u / a);
      const heat = (u: number) => Math.exp(-Math.abs(u) / (a * 1.1));
      const P = (u: number, th: number): [number, number, number] => {
        const r = R(u);
        const s = u + r * Math.sin(th) * tilt;
        const c = r * Math.cos(th);
        return vertical ? [cx + c, cy + s, Math.sin(th)] : [cx + s, cy + c, Math.sin(th)];
      };

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r0 * 2.6);
      glow.addColorStop(0, light ? "rgba(249,115,22,0.16)" : "rgba(255,210,170,0.32)");
      glow.addColorStop(0.3, light ? "rgba(236,120,90,0.08)" : "rgba(249,115,22,0.14)");
      glow.addColorStop(1, "rgba(124,58,237,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = light ? "source-over" : "lighter";
      const k = light ? 0.75 : 1;

      // Rings flow inward towards the throat from both mouths
      const rings = 34;
      const flow = (time * 0.06) % 1;
      for (let i = 0; i < rings; i++) {
        const f = (i + flow) / rings;
        for (const side of [-1, 1]) {
          const u = side * span * (1 - f);
          const r = R(u);
          if (r > across * 1.4) continue;
          const h = heat(u);
          ctx.beginPath();
          if (vertical) ctx.ellipse(cx, cy + u, r, Math.max(1, r * tilt), 0, 0, Math.PI * 2);
          else ctx.ellipse(cx + u, cy, Math.max(1, r * tilt), r, 0, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(0.15 + h * 0.85, k * (0.1 + h * 0.5) * Math.min(1, f * 4));
          ctx.lineWidth = 0.6 + h * 1.4;
          ctx.stroke();
        }
      }

      // Meridians, slowly turning
      const meridians = vertical ? 22 : 34;
      const steps = 70;
      for (let j = 0; j < meridians; j++) {
        const th = (j / meridians) * Math.PI * 2 + spin;
        let prev: [number, number, number] | null = null;
        for (let k = 0; k <= steps; k++) {
          const u = -span + (2 * span * k) / steps;
          const p = P(u, th);
          if (prev) {
            const h = heat(u);
            ctx.beginPath();
            ctx.moveTo(prev[0], prev[1]);
            ctx.lineTo(p[0], p[1]);
            ctx.strokeStyle = rgba(0.15 + h * 0.85, k * (0.06 + h * 0.42) * (0.5 + 0.5 * p[2]));
            ctx.lineWidth = 0.6 + h;
            ctx.stroke();
          }
          prev = p;
        }
      }

      // Particles drift along the surface into the throat and out the other side
      for (const p of particles) {
        p.u += p.speed * 0.016 * (reduceMotion ? 0 : 1);
        if (p.u > 1) p.u -= 2;
        const u = p.u * span;
        const h = heat(u);
        const [x, y, front] = P(u, p.th + spin);
        const edge = 1 - Math.abs(p.u);
        ctx.globalAlpha = k * Math.min(1, edge * 2.2) * (0.35 + h * 0.65) * (0.55 + 0.45 * front);
        ctx.fillStyle = rgba(0.12 + h * 0.88 + p.tone, 1);
        ctx.beginPath();
        ctx.arc(x, y, p.size * (0.7 + h * 0.8), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
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

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [variant, centerX]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
