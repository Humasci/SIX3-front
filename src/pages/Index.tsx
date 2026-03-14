import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServicePreviews } from "@/components/ServicePreviews";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { CursorEffect } from "@/components/CursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="SIX3 Agency — AI-Powered Marketing & Automation"
        description="AI-driven search marketing, generative content creation, and custom automation solutions. Transform your business with SIX3 Agency."
        canonical="https://six3.agency/"
      />
      <CursorEffect />
      <Header />
      <Hero />
      <About />
      <ServicePreviews />
      <Industries />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
