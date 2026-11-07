import { PageSEO, organizationJsonLd } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ThreePillars } from "@/components/ThreePillars";
import { ServicePreviews } from "@/components/ServicePreviews";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="SIX³ Agency | AI Marketing & Automation Agency, Brighton, UK"
        description="AI marketing and automation agency in Brighton, UK. Search and paid media, AI video content and AI agents that answer every enquiry, as one system."
        canonical="https://six3.agency/"
        jsonLd={organizationJsonLd}
      />
      <CursorEffect />
      <Header />
      <Hero />
      <About />
      <ThreePillars />
      <ServicePreviews />
      <Industries />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
