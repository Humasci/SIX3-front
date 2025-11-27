import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ServicePreviews } from "@/components/ServicePreviews";
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
      <Services />
      <ServicePreviews />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
