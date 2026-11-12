import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="About Us: Brighton-Based AI Marketing Agency | SIX³"
        description="SIX³ is a Brighton-based AI marketing and automation agency. One team for search, AI content and AI agents, helping service businesses and e-commerce brands grow, wherever they are."
        canonical="https://six3.agency/about"
      />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
