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
