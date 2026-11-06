import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { reduceMotion } from "./lib/motion";
import App from "./App.tsx";
import "./index.css";

// Visitors who asked their device to reduce motion get every scroll/entrance animation
// finished instantly: content appears in place without sliding or fading
if (reduceMotion) {
  gsap.globalTimeline.timeScale(1000);
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
