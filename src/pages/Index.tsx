import { PageSEO, organizationJsonLd } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ThreePillars } from "@/components/ThreePillars";
import { ServicePreviews } from "@/components/ServicePreviews";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { WormholeCta } from "@/components/WormholeCta";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="SIX³ Agency | Scale Your Business, Not Your Headcount"
        description="AI-powered marketing engines, custom AI agents and automated workflows that generate leads and cut operational costs 24/7. Brighton-based AI agency."
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
      <WormholeCta
        title="Ready to automate your growth?"
        subtitle="Stop doing manual work your competitors are already automating. Let's build your AI engine."
        buttonLabel="Contact Us Today"
      />
      <Footer />
    </div>
  );
};

export default Index;
