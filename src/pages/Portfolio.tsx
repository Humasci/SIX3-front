import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Portfolio as PortfolioSection } from "@/components/Portfolio";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="Portfolio & Case Studies — SIX³ Agency"
        description="Explore SIX³ Agency's portfolio of AI marketing campaigns, automation projects, and case studies across legal, real estate, healthcare, and more."
        canonical="https://six3.agency/portfolio"
      />
      <Header />
      <PortfolioSection lightHeader />
      <Footer />
    </div>
  );
};

export default Portfolio;
