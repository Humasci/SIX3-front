import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchMarketingPPC from "./pages/services/SearchMarketingPPC";
import ContentCreation from "./pages/services/ContentCreation";
import AIDevAutomation from "./pages/services/AIDevAutomation";
import MLFineTuning from "./pages/services/MLFineTuning";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/portfolio/PortfolioDetail";
import Services from "./pages/Services";
import Legal from "./pages/industries/Legal";
import RealEstate from "./pages/industries/RealEstate";
import Healthcare from "./pages/industries/Healthcare";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import LocalBusiness from "./pages/industries/LocalBusiness";
import LawFirmAutomation from "./pages/use-cases/LawFirmAutomation";
import RealEstateLeadSystem from "./pages/use-cases/RealEstateLeadSystem";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
