// Build-time renderer used by scripts/prerender.mjs: turns a URL into static HTML plus its <head> tags
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppShell, preloadRoute, routes } from "./App";
import { publishedPosts } from "./data/blogPosts";
import { portfolioIds } from "./pages/portfolio/PortfolioDetail";

export { routes, publishedPosts, portfolioIds };

export const render = async (url: string) => {
  await preloadRoute(url);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join("\n    ") : "";
  return { html, head };
};
