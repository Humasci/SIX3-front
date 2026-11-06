import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="About Us: London AI Marketing Agency | SIX³ Agency"
        description="SIX³ is a London AI marketing and automation agency. One team for search, AI content and AI agents, helping UK service businesses grow since 2018."
        canonical="https://six3.agency/about"
      />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
