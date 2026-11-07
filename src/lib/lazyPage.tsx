import { lazy, type ComponentType } from "react";

type PageModule = { default: ComponentType };

export type LazyPage = ComponentType & { preload: () => Promise<PageModule> };

// Like React.lazy, but the page can be loaded ahead of rendering. Once loaded it renders
// straight away with no Suspense fallback, which lets the prerender (and the first render
// in the browser) show the real page instead of a blank placeholder.
export const lazyPage = (factory: () => Promise<PageModule>): LazyPage => {
  let Loaded: ComponentType | null = null;
  let promise: Promise<PageModule> | null = null;
  const preload = () =>
    (promise ??= factory().then((m) => {
      Loaded = m.default;
      return m;
    }));
  const Lazy = lazy(preload);
  const Page = () => (Loaded ? <Loaded /> : <Lazy />);
  return Object.assign(Page, { preload });
};
