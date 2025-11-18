import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface ServiceTemplateProps {
  title: string;
  description: string;
  steps: Step[];
  overview: string;
  overviewDetails: string;
}

export const ServiceTemplate = ({
  title,
  description,
  steps,
  overview,
  overviewDetails,
}: ServiceTemplateProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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

      // Steps animation
      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Overview animation
      gsap.from(".overview-content", {
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 1,
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
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      <section ref={stepsRef} className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Simple process -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Clear, & Effective Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="step-card group border border-border p-8 hover:bg-card transition-all duration-300"
              >
                <div className="text-6xl mb-6">{step.icon}</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.number}
                </p>
                <h3 className="text-2xl font-light mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={overviewRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Overview -
          </p>
          <h2 className="overview-content text-4xl md:text-5xl font-light mb-8 max-w-3xl">
            {overview}
          </h2>
          <p className="overview-content text-lg text-muted-foreground max-w-3xl">
            {overviewDetails}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
