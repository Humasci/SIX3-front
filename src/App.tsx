import { Suspense } from "react";
import { BrowserRouter, Routes, Route, matchPath } from "react-router-dom";
import "./i18n";
import { ScrollToTop } from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import { LineReveal } from "./components/LineReveal";
import { lazyPage } from "./lib/lazyPage";
import Index from "./pages/Index";

// Each page's code loads only when it's visited; the homepage ships in the main bundle
const NotFound = lazyPage(() => import("./pages/NotFound"));
const SearchMarketingPPC = lazyPage(() => import("./pages/services/SearchMarketingPPC"));
const ContentCreation = lazyPage(() => import("./pages/services/ContentCreation"));
const AIDevAutomation = lazyPage(() => import("./pages/services/AIDevAutomation"));
const MLFineTuning = lazyPage(() => import("./pages/services/MLFineTuning"));
const About = lazyPage(() => import("./pages/About"));
const Contact = lazyPage(() => import("./pages/Contact"));
const Portfolio = lazyPage(() => import("./pages/Portfolio"));
const PortfolioDetail = lazyPage(() => import("./pages/portfolio/PortfolioDetail"));
const Services = lazyPage(() => import("./pages/Services"));
const Legal = lazyPage(() => import("./pages/industries/Legal"));
const RealEstate = lazyPage(() => import("./pages/industries/RealEstate"));
const Healthcare = lazyPage(() => import("./pages/industries/Healthcare"));
const ProfessionalServices = lazyPage(() => import("./pages/industries/ProfessionalServices"));
const LocalBusiness = lazyPage(() => import("./pages/industries/LocalBusiness"));
const LawFirmAutomation = lazyPage(() => import("./pages/use-cases/LawFirmAutomation"));
const RealEstateLeadSystem = lazyPage(() => import("./pages/use-cases/RealEstateLeadSystem"));
const PrivacyPolicy = lazyPage(() => import("./pages/PrivacyPolicy"));
const Terms = lazyPage(() => import("./pages/Terms"));
const CookiePolicy = lazyPage(() => import("./pages/CookiePolicy"));
const Blog = lazyPage(() => import("./pages/Blog"));
const BlogPost = lazyPage(() => import("./pages/BlogPost"));

// Add new pages above the catch-all "*" route. The prerender and the sitemap read this list too
export const routes = [
  { path: "/", Page: Index },
  { path: "/about", Page: About },
  { path: "/services", Page: Services },
  { path: "/contact", Page: Contact },
  { path: "/portfolio", Page: Portfolio },
  { path: "/portfolio/:id", Page: PortfolioDetail },
  { path: "/services/search-marketing-ppc", Page: SearchMarketingPPC },
  { path: "/services/content-creation", Page: ContentCreation },
  { path: "/services/ai-dev-automation", Page: AIDevAutomation },
  { path: "/services/ml-fine-tuning", Page: MLFineTuning },
  { path: "/industries/legal", Page: Legal },
  { path: "/industries/real-estate", Page: RealEstate },
  { path: "/industries/healthcare", Page: Healthcare },
  { path: "/industries/professional-services", Page: ProfessionalServices },
  { path: "/industries/local-business", Page: LocalBusiness },
  { path: "/use-cases/law-firm-automation", Page: LawFirmAutomation },
  { path: "/use-cases/real-estate-lead-system", Page: RealEstateLeadSystem },
  { path: "/privacy-policy", Page: PrivacyPolicy },
  { path: "/terms", Page: Terms },
  { path: "/cookie-policy", Page: CookiePolicy },
  { path: "/blog", Page: Blog },
  { path: "/blog/:slug", Page: BlogPost },
  { path: "*", Page: NotFound },
];

// Loads the page for a URL before the first render, so it appears without a loading flash
export const preloadRoute = async (pathname: string) => {
  const route = routes.find((r) => r.path !== "*" && matchPath(r.path, pathname)) ?? routes[routes.length - 1];
  if ("preload" in route.Page) await route.Page.preload();
};

// Everything inside the router: the browser wraps it in BrowserRouter, the prerender in StaticRouter
export const AppShell = () => (
  <>
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="40%" stopColor="#a855f7" />
          <stop offset="78%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fde7b0" />
        </linearGradient>
      </defs>
    </svg>
    <ScrollToTop />
    <CookieConsent />
    <LineReveal />
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </Suspense>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
