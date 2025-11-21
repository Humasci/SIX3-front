import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchMarketingPPC from "./pages/services/SearchMarketingPPC";
import ContentCreation from "./pages/services/ContentCreation";
import AIAutomationDev from "./pages/services/AIAutomationDev";
import MLFineTuning from "./pages/services/MLFineTuning";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/portfolio/PortfolioDetail";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/services/search-marketing-ppc" element={<SearchMarketingPPC />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/services/ai-automation-dev" element={<AIAutomationDev />} />
          <Route path="/services/ml-fine-tuning" element={<MLFineTuning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
