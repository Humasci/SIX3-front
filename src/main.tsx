import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { reduceMotion } from "./lib/motion";
import App, { preloadRoute } from "./App.tsx";
import "./index.css";

// Visitors who asked their device to reduce motion get every scroll/entrance animation
// finished instantly: content appears in place without sliding or fading
if (reduceMotion) {
  gsap.globalTimeline.timeScale(1000);
}

const root = document.getElementById("root")!;

// Load this URL's page first so the first render is the finished page. Prerendered pages arrive
// with their HTML already inside #root (for search engines and link previews); React replaces it
// with the live app here, then reveals it
preloadRoute(window.location.pathname).finally(() => {
  createRoot(root).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  requestAnimationFrame(() => root.removeAttribute("data-prerendered"));
});
