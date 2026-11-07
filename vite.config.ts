import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        // Libraries change rarely, so they get their own cached files separate from site code
        // (browser build only: the prerender build keeps libraries external)
        manualChunks: isSsrBuild
          ? undefined
          : {
              react: ["react", "react-dom", "react-router-dom"],
              gsap: ["gsap", "gsap/ScrollTrigger"],
            },
      },
    },
  },
  // GSAP ships CommonJS for Node; bundling it into the prerender build uses its ES module version
  ssr: { noExternal: ["gsap"] },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
