import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { reduceMotion } from "@/lib/motion";

// Every thin brand-gradient line on the site draws itself out once, left to right, from a fifth of
// its width to full width when it first comes into view. Purely visual: lines are set up only once
// JavaScript runs, so the prerendered HTML and reduced-motion visitors simply see full lines.
const SELECTOR = ".bg-brand-gradient, .bg-brand-gradient-glow";

const isLine = (el: HTMLElement) => {
  const r = el.getBoundingClientRect();
  return r.height > 0 && r.height <= 10 && r.width >= 40;
};

export const LineReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (reduceMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("line-in");
          io.unobserve(e.target);
        }
      },
      // The clipped line counts as ~20% visible, so trigger as soon as any part is on screen
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.lineReveal || !isLine(el)) return;
        el.dataset.lineReveal = "1";
        el.classList.add("grow-line");
        io.observe(el);
      });
    };

    scan();
    // Pick up lines that render a moment later (lazy pages, sections that mount after load)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });
    const t = window.setTimeout(scan, 600);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
};
