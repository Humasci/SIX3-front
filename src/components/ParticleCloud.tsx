import { useEffect, useRef } from "react";

const VIOLETS = ["#7c3aed", "#8b5cf6", "#a855f7", "#6d28d9", "#c084fc", "#6366f1"];
const ORANGES = ["#f97316", "#fb923c", "#ea580c"];
const COLORS = [...VIOLETS, ...ORANGES];

// Overlapping lobes that make up the cloud: centre (x, y, z) and radius, in cloud units
const LOBES: [number, number, number, number][] = [
  [-1.15, 0.18, 0.0, 0.5],
  [-0.55, -0.12, 0.12, 0.7],
  [0.15, -0.32, -0.08, 0.82],
  [0.85, -0.08, 0.06, 0.66],
  [1.4, 0.22, -0.04, 0.42],
  [-0.15, 0.3, 0.22, 0.6],
  [0.55, 0.36, -0.2, 0.52],
  [-0.8, 0.42, -0.18, 0.4],
];

// Curved ribbons particles flow along: vertical offset, wave amplitude, frequency, phase
const STREAMS: [number, number, number, number][] = [
  [-0.18, 0.32, 1.5, 0.0],
  [0.12, 0.26, 1.9, 2.1],
  [0.32, 0.22, 1.2, 4.0],
  [-0.42, 0.18, 2.3, 1.2],
  [0.02, 0.4, 1.0, 5.3],
];

type Particle = {
  lobe: number;
  x: number;
  y: number;
  z: number;
  core: number;
  wisp: boolean;
  color: number;
  size: number;
  seed: number;
  ox: number;
  oy: number;
  px: number;
  py: number;
  pz: number;
  ps: number;
  alpha: number;
};

const mix = (hex: string, target: number, amount: number) => {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => Math.round(c + (target - c) * amount));
  return `rgb(${ch[0]},${ch[1]},${ch[2]})`;
};

const makeSprite = (hex: string) => {
  const s = 16;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(s * 0.42, s * 0.38, s * 0.04, s * 0.5, s * 0.5, s * 0.5);
  grad.addColorStop(0, mix(hex, 255, 0.18));
  grad.addColorStop(0.5, hex);
  grad.addColorStop(1, mix(hex, 0, 0.45));
  g.fillStyle = grad;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
  g.fill();
  return c;
};

const gauss = () => {
  const u = 1 - Math.random(), v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

const pickColor = (x: number, y: number) => {
  // Violet towards the top-left of the cloud, orange towards the bottom-right
  const g = Math.min(1, Math.max(0, (x / 1.6 + y / 0.9) * 0.35 + 0.5));
  const orange = Math.random() < Math.pow(g, 2.4) * 0.95;
  return orange
    ? VIOLETS.length + Math.floor(Math.random() * ORANGES.length)
    : Math.floor(Math.random() * VIOLETS.length);
};

const buildParticles = (count: number): Particle[] => {
  const ps: Particle[] = [];
  const weights = LOBES.map(([, , , r]) => r * r * r);
  const total = weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < count; i++) {
    const wisp = Math.random() < 0.3;
    let lobe = 0;
    let pick = Math.random() * total;
    while (pick > weights[lobe] && lobe < LOBES.length - 1) pick -= weights[lobe++];
    const r = LOBES[lobe][3];
    let gx = gauss(), gy = gauss(), gz = gauss();
    const len = Math.hypot(gx, gy, gz);
    if (len > 1.8) {
      gx *= 1.8 / len; gy *= 1.8 / len; gz *= 1.8 / len;
    }
    const x = wisp ? (Math.random() - 0.5) * 4.2 : gx * r * 0.4;
    const y = wisp ? gauss() * 0.035 : gy * r * 0.38;
    const z = wisp ? gauss() * 0.035 : gz * r * 0.4;
    const core = wisp ? 0 : Math.max(0, 1 - Math.min(1.8, len) / 1.8);
    ps.push({
      lobe: wisp ? Math.floor(Math.random() * STREAMS.length) : lobe, x, y, z, core, wisp,
      color: pickColor(x + (wisp ? 0 : LOBES[lobe][0]), y + (wisp ? 0 : LOBES[lobe][1])),
      size: 0.55 + Math.random() * 0.8,
      seed: Math.random() * 100,
      ox: 0, oy: 0, px: 0, py: 0, pz: 0, ps: 1, alpha: 1,
    });
  }
  return ps;
};

export const ParticleCloud = ({ className = "" }: { className?: string }) => {
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
    // Adaptive quality: draw fewer particles if frames run slow on this device
    let drawCount = Infinity, slowFrames = 0;
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
      if (!particles.length || wasMobile !== mobile) particles = buildParticles(mobile ? 5000 : 11000);
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const cx0 = mobile ? W * 0.52 : W * 0.68;
      const cy0 = mobile ? H * 0.3 : H * 0.46;
      const S = mobile ? Math.min(W * 0.46, H * 0.2) : Math.min(W * 0.22, H * 0.4);
      const r0 = mobile ? 1.15 : Math.max(1.1, Math.min(H * 0.0019, 2));
      const F = 1100;

      const ry = Math.sin(time * 0.16) * 0.5;
      const rx = 0.18 + Math.sin(time * 0.13) * 0.08;
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cX = Math.cos(rx), sX = Math.sin(rx);

      const n = Math.min(particles.length, drawCount);
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        let x: number, y: number, z: number;
        if (p.wisp) {
          // Wisps blow slowly across and wrap round
          const span = 4.2;
          const [off, amp, freq, phase] = STREAMS[p.lobe];
          x = ((((p.x + time * 0.06 + span / 2) % span) + span) % span) - span / 2;
          y = off + amp * Math.sin(freq * x + phase + time * 0.3) + p.y;
          z = 0.35 * Math.cos(freq * 0.8 * x + phase) + p.z;
          p.alpha = Math.pow(Math.max(0, 1 - Math.abs(x) / (span / 2)), 1.2);
        } else {
          const [lx, ly, lz, lr] = LOBES[p.lobe];
          const swell = 1 + Math.sin(time * 0.35 + p.lobe * 1.7) * 0.08;
          const drift = Math.sin(time * 0.22 + p.lobe) * 0.06;
          const f = 0.09 * lr;
          x = lx + drift + p.x * swell + Math.sin(time * 0.5 + p.seed + p.y * 3) * f;
          y = ly + Math.cos(time * 0.27 + p.lobe * 2.3) * 0.04 + p.y * swell + Math.sin(time * 0.43 + p.seed * 1.3 + p.z * 3) * f;
          z = lz + p.z * swell + Math.cos(time * 0.37 + p.seed + p.x * 3) * f;
          p.alpha = 0.35 + p.core * 0.65;
        }
        x *= S; y *= S; z *= S;

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

      const depth = S * 0.9;
      const base = mobile ? 0.9 : 0.95;
      // Additive blending: where particles gather, the light builds up into glowing clumps and trails
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        const near0 = Math.min(1, Math.max(0, (p.pz + S * 0.9) / (S * 1.8)));
        const r = r0 * p.size * p.ps * (0.7 + near0 * 0.6) * (p.wisp ? 0.85 : 0.8 + p.core * 0.4);
        if (r < 0.3 || p.alpha <= 0.01) continue;
        const near = Math.min(1, Math.max(0, (p.pz + depth) / (2 * depth)));
        ctx.globalAlpha = base * p.alpha * (0.4 + near * 0.6);
        ctx.drawImage(sprites[p.color], p.px - r, p.py - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      const elapsed = now - last;
      if (elapsed > 26 && drawCount > 3000) {
        if (++slowFrames > 20) {
          drawCount = Math.round(Math.min(drawCount, particles.length) * 0.75);
          slowFrames = 0;
        }
      } else slowFrames = Math.max(0, slowFrames - 1);
      const dt = Math.min(0.05, elapsed / 1000);
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
