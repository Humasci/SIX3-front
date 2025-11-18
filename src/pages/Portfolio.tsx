import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Portfolio as PortfolioSection } from "@/components/Portfolio";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
