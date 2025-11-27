import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
};

export default About;
