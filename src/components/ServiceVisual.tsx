import { useEffect, useRef } from "react";

export type ServiceVisualKind = "search" | "video" | "agents" | "ml";

const STOPS: [number, [number, number, number]][] = [
  [0, [124, 58, 237]],
  [0.5, [168, 85, 247]],
  [1, [249, 115, 22]],
];

const color = (t: number, a: number) => {
  t = Math.max(0, Math.min(1, t));
  let i = 1;
  while (t > STOPS[i][0]) i++;
  const [t0, A] = STOPS[i - 1];
  const [t1, B] = STOPS[i];
  const k = (t - t0) / (t1 - t0);
  return `rgba(${A.map((v, j) => Math.round(v + (B[j] - v) * k)).join(",")},${a})`;
};

// A particle with a home position in a 100×75 design space; `kind` says how it moves
type P = { x: number; y: number; r: number; seed: number; group: number; f: number; kind: "dot" | "bar" | "wave" | "ring" | "dust"; c?: number };
type Edge = { a: [number, number]; b: [number, number]; speed: number; offset: number };

// Same palette as the hero cloud: mostly violets, with orange flecks that grow towards the right
const VIOLETS = ["#7c3aed", "#8b5cf6", "#a855f7", "#6d28d9", "#c084fc", "#6366f1"];
const ORANGES = ["#f97316", "#fb923c", "#ea580c"];
const PALETTE = [...VIOLETS, ...ORANGES];

const rand = (seed: number) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

const build = (kind: ServiceVisualKind) => {
  const rnd = rand(17 + kind.length * 13);
  const ps: P[] = [];
  const edges: Edge[] = [];
  const disc = (cx: number, cy: number, rad: number, n: number, group = 0) => {
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * rad;
      ps.push({ x: cx + Math.cos(a) * d, y: cy + Math.sin(a) * d, r: 0.35 + rnd() * 0.35, seed: rnd() * 100, group, f: 0, kind: "dot" });
    }
  };
  const line = (a: [number, number], b: [number, number], n: number, jitter = 0.35) => {
    for (let i = 0; i < n; i++) {
      const t = rnd();
      ps.push({ x: a[0] + (b[0] - a[0]) * t + (rnd() - 0.5) * jitter, y: a[1] + (b[1] - a[1]) * t + (rnd() - 0.5) * jitter, r: 0.25 + rnd() * 0.25, seed: rnd() * 100, group: 0, f: t, kind: "dot" });
    }
  };

  if (kind === "search") {
    // Bars that rise and fall, framed by a slowly turning magnifier ring and handle
    const bars = [[30, 22], [40, 32], [50, 26], [60, 40]];
    bars.forEach(([x, h], gi) => {
      for (let i = 0; i < 260; i++) {
        const f = rnd();
        ps.push({ x: x - 3 + rnd() * 6, y: 56 - f * h, r: 0.3 + rnd() * 0.3, seed: rnd() * 100, group: gi, f, kind: "bar" });
      }
    });
    for (let i = 0; i < 700; i++) {
      const a = rnd() * Math.PI * 2, d = 26 + (rnd() - 0.5) * 2.4;
      ps.push({ x: 45 + Math.cos(a) * d, y: 38 + Math.sin(a) * d, r: 0.3 + rnd() * 0.35, seed: a, group: 0, f: d, kind: "ring" });
    }
    line([64, 57], [80, 71], 260, 2);
  } else if (kind === "video") {
    // A screen with a play button and a live waveform beneath
    const R = (x0: number, y0: number, x1: number, y1: number, n: number) => {
      line([x0, y0], [x1, y0], n); line([x0, y1], [x1, y1], n); line([x0, y0], [x0, y1], n * 0.6); line([x1, y0], [x1, y1], n * 0.6);
    };
    R(18, 10, 82, 50, 220);
    for (let i = 0; i < 700; i++) {
      // fill a triangle by sampling barycentric coordinates
      let u = rnd(), v = rnd();
      if (u + v > 1) { u = 1 - u; v = 1 - v; }
      const A = [43, 21], B = [43, 39], C = [59, 30];
      ps.push({ x: A[0] + (B[0] - A[0]) * u + (C[0] - A[0]) * v, y: A[1] + (B[1] - A[1]) * u + (C[1] - A[1]) * v, r: 0.3 + rnd() * 0.3, seed: rnd() * 100, group: 0, f: 0, kind: "dot" });
    }
    for (let i = 0; i < 900; i++) {
      const x = 14 + rnd() * 72;
      ps.push({ x, y: 62, r: 0.3 + rnd() * 0.3, seed: rnd() * 100, group: 0, f: (rnd() - 0.5) * 2, kind: "wave" });
    }
  } else if (kind === "agents") {
    // A network of agents passing signals to each other
    const nodes: [number, number][] = [[50, 37], [24, 18], [76, 16], [16, 52], [84, 54], [38, 64], [64, 66]];
    nodes.forEach(([x, y], i) => disc(x, y, i === 0 ? 7 : 4.2, i === 0 ? 300 : 130, i));
    const links = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [2, 4], [5, 6], [1, 2]];
    links.forEach(([a, b]) => {
      line(nodes[a], nodes[b], 70, 0.3);
      edges.push({ a: nodes[a], b: nodes[b], speed: 0.18 + rnd() * 0.2, offset: rnd() });
    });
  } else {
    // A layered neural network with data flowing left to right
    const layers = [[18, [20, 37, 54]], [40, [12, 27, 42, 57]], [62, [12, 27, 42, 57]], [84, [26, 48]]] as [number, number[]][];
    layers.forEach(([x, ys], li) => ys.forEach((y) => disc(x, y + 3, 3.3, 90, li)));
    for (let l = 0; l < layers.length - 1; l++) {
      const [x0, y0s] = layers[l], [x1, y1s] = layers[l + 1];
      y0s.forEach((y0) => y1s.forEach((y1) => {
        line([x0, y0 + 3], [x1, y1 + 3], 26, 0.2);
        edges.push({ a: [x0, y0 + 3], b: [x1, y1 + 3], speed: 0.28, offset: l * 0.33 + rnd() * 0.12 });
      }));
    }
  }
  // Denser, finer texture: each particle gets a near twin, so shapes read as fine grain like the hero
  const twins: P[] = ps.map((p) => ({
    ...p,
    x: p.kind === "ring" ? p.x : p.x + (rnd() - 0.5) * 0.9,
    y: p.kind === "ring" || p.kind === "bar" ? p.y : p.y + (rnd() - 0.5) * 0.9,
    seed: p.kind === "ring" ? p.seed + (rnd() - 0.5) * 0.02 : rnd() * 100,
    r: p.r * (0.6 + rnd() * 0.3),
  }));
  ps.push(...twins);
  for (let i = 0; i < 320; i++) ps.push({ x: rnd() * 100, y: rnd() * 75, r: 0.15 + rnd() * 0.2, seed: rnd() * 100, group: 0, f: 0, kind: "dust" });
  for (const p of ps) {
    const toward = Math.min(1, Math.max(0, p.x / 100));
    p.c = rnd() < 0.06 + Math.pow(toward, 2.2) * 0.4
      ? VIOLETS.length + Math.floor(rnd() * ORANGES.length)
      : Math.floor(rnd() * VIOLETS.length);
  }
  return { ps, edges };
};

export const ServiceVisual = ({ kind, className = "", label }: { kind: ServiceVisualKind; className?: string; label?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { ps, edges } = build(kind);
    let W = 0, H = 0, dpr = 1, raf = 0, visible = false, last = performance.now(), time = 2;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      // Phones get no extra detail beyond 1.5x
      dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // Fit the 100×75 design space, centred
      const s = Math.min(W / 100, H / 75);
      const ox = (W - 100 * s) / 2, oy = (H - 75 * s) / 2;
      const glow = ctx.createRadialGradient(W * 0.5, H * 0.48, 0, W * 0.5, H * 0.48, Math.max(W, H) * 0.6);
      glow.addColorStop(0, "rgba(124,58,237,0.12)");
      glow.addColorStop(0.6, "rgba(124,58,237,0.04)");
      glow.addColorStop(1, "rgba(124,58,237,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const sweep = (time * 0.18) % 1.4 - 0.2;

      for (const p of ps) {
        let x = p.x, y = p.y, a = 0.42;
        const wob = Math.sin(time * 1.3 + p.seed) * 0.25;
        if (p.kind === "bar") {
          const h = 0.55 + 0.45 * Math.sin(time * 0.9 + p.group * 1.3);
          if (p.f > h) continue;
          a = 0.55 + 0.45 * (p.f / h);
        } else if (p.kind === "ring") {
          const ang = p.seed + time * 0.12;
          x = 45 + Math.cos(ang) * p.f; y = 38 + Math.sin(ang) * p.f;
          a = 0.45 + 0.35 * Math.sin(ang * 3 + time);
        } else if (p.kind === "wave") {
          const amp = 9 * Math.sin((x - 14) / 72 * Math.PI) * (0.6 + 0.4 * Math.sin(time * 1.7));
          y = 62 + Math.sin(x * 0.45 - time * 3) * amp * Math.cos(x * 0.13 + time) + p.f * 0.6;
        } else if (p.kind === "dust") {
          x = (p.x + time * 1.2) % 100; y = p.y + Math.sin(time * 0.5 + p.seed) * 1.5;
          a = 0.25;
        } else {
          x += wob * 0.3; y += Math.cos(time * 1.1 + p.seed) * 0.08;
        }
        // A soft highlight sweeps across left to right
        const lit = Math.exp(-Math.pow((x / 100 - sweep) / 0.12, 2));
        ctx.globalAlpha = Math.min(0.62, a + lit * 0.18);
        ctx.fillStyle = PALETTE[p.c ?? 0];
        const r = p.r * s * 0.55 * (1 + lit * 0.3);
        ctx.beginPath();
        ctx.arc(ox + x * s, oy + y * s, Math.max(0.5, r), 0, Math.PI * 2);
        ctx.fill();
      }

      // Signals travelling along network edges
      for (const e of edges) {
        for (let k = 0; k < 3; k++) {
          const t = (time * e.speed + e.offset + k * 0.07) % 1;
          const x = e.a[0] + (e.b[0] - e.a[0]) * t, y = e.a[1] + (e.b[1] - e.a[1]) * t;
          ctx.globalAlpha = 0.7 - k * 0.22;
          ctx.fillStyle = color(0.55 + t * 0.45, 1);
          ctx.beginPath();
          ctx.arc(ox + x * s, oy + y * s, (0.55 - k * 0.14) * s, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      time += Math.min(0.05, (now - last) / 1000);
      last = now;
      draw();
      if (visible && !document.hidden) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const start = () => {
      if (reduceMotion || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    // Nothing is drawn until the canvas is about to scroll into view
    let ready = false;
    const prepare = () => {
      if (ready) return;
      ready = true;
      resize();
      draw();
    };
    const ro = new ResizeObserver(() => { if (ready) { resize(); draw(); } });
    ro.observe(canvas);
    const io = new IntersectionObserver(
      ([en]) => {
        visible = en.isIntersecting;
        if (visible) prepare();
        start();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(canvas);
    const onVis = () => start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [kind]);

  return <canvas ref={canvasRef} className={className} role="img" aria-label={label ?? `${kind} illustration`} />;
};
