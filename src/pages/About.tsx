import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About as AboutSection } from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
