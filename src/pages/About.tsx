import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="About Us — SIX3 Agency"
        description="Meet the SIX3 Agency team. We're an AI-powered marketing and automation agency based in London, helping businesses grow through intelligent technology."
        canonical="https://six3.agency/about"
      />
      <Header />
      <div className="pt-24">
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
};

export default About;
