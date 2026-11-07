import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="About Us: AI Marketing Agency in Brighton, UK | SIX³"
        description="SIX³ is an AI marketing and automation agency in Brighton, UK. One team for search, AI content and AI agents, helping UK service businesses grow since 2018."
        canonical="https://six3.agency/about"
      />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
