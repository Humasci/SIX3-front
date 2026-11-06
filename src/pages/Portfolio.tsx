import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Portfolio as PortfolioSection } from "@/components/Portfolio";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="Case Studies & Portfolio | SIX³ Agency"
        description="Our work in AI marketing and automation: client intake automation for a UK law firm, e-commerce paid media and dui.guide, our own AI legal platform."
        canonical="https://six3.agency/portfolio"
      />
      <Header />
      <PortfolioSection lightHeader />
      <Footer />
    </div>
  );
};

export default Portfolio;
