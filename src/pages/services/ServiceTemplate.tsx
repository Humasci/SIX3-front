import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: ProcessStep[];
  cta: string;
}

const ServiceTemplate = ({
  title,
  subtitle,
  description,
  features,
  process,
  cta,
}: ServiceTemplateProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".process-card", {
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section ref={heroRef} className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light mb-6">
            {title}
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-accent mb-6">
            {subtitle}
          </p>
          <p className="hero-subtitle text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      <section ref={featuresRef} className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item border border-border p-6 hover:bg-card transition-all duration-300"
              >
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={processRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Process -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="process-card group border border-border p-8 hover:bg-card transition-all duration-300"
              >
                <p className="text-5xl font-light text-muted-foreground/50 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl font-light mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Get Started?
          </h2>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-foreground hover:bg-foreground hover:text-background">
              {cta}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTemplate;
