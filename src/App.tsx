import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));
const SearchMarketingPPC = lazy(() => import("./pages/services/SearchMarketingPPC"));
const ContentCreation = lazy(() => import("./pages/services/ContentCreation"));
const AIDevAutomation = lazy(() => import("./pages/services/AIDevAutomation"));
const MLFineTuning = lazy(() => import("./pages/services/MLFineTuning"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/portfolio/PortfolioDetail"));
const Services = lazy(() => import("./pages/Services"));
const Legal = lazy(() => import("./pages/industries/Legal"));
const RealEstate = lazy(() => import("./pages/industries/RealEstate"));
const Healthcare = lazy(() => import("./pages/industries/Healthcare"));
const ProfessionalServices = lazy(() => import("./pages/industries/ProfessionalServices"));
const LocalBusiness = lazy(() => import("./pages/industries/LocalBusiness"));
const LawFirmAutomation = lazy(() => import("./pages/use-cases/LawFirmAutomation"));
const RealEstateLeadSystem = lazy(() => import("./pages/use-cases/RealEstateLeadSystem"));
const DuiGuide = lazy(() => import("./pages/use-cases/DuiGuide"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const App = () => (
  <>
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
    <BrowserRouter>
      <ScrollToTop />
      {/* Each page's code loads only when it's visited; the homepage ships in the main bundle */}
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/services/search-marketing-ppc" element={<SearchMarketingPPC />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/services/ai-dev-automation" element={<AIDevAutomation />} />
          <Route path="/services/ml-fine-tuning" element={<MLFineTuning />} />
          <Route path="/industries/legal" element={<Legal />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/local-business" element={<LocalBusiness />} />
          <Route path="/use-cases/law-firm-automation" element={<LawFirmAutomation />} />
          <Route path="/use-cases/real-estate-lead-system" element={<RealEstateLeadSystem />} />
          <Route path="/use-cases/dui-guide" element={<DuiGuide />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
