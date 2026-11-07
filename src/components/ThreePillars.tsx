import { useEffect, useRef } from "react";
import gsap from "gsap";
import { WormholeCanvas } from "@/components/WormholeCanvas";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Audit",
    subtitle: "Find where growth is leaking",
    description: "In two weeks we review your search, ads, content and lead handling, and hand you a prioritised plan with quick wins.",
    gradient: "linear-gradient(90deg, #7c3aed 0%, #a855f7 45%, #f97316 85%, #fde7b0 100%)"
  },
  {
    title: "Build",
    subtitle: "Launch the system that fixes it",
    description: "Campaigns that bring in the right customers, content that wins them, and AI agents that answer and book every one.",
    gradient: "linear-gradient(90deg, #a855f7 0%, #f97316 55%, #fde7b0 100%)"
  },
  {
    title: "Compound",
    subtitle: "Every month, each part lifts the others",
    description: "We optimise ads, content and automations together, so better leads meet faster replies and results build on each other.",
    gradient: "linear-gradient(90deg, #fde7b0 0%, #f97316 25%, #a855f7 65%, #7c3aed 100%)"
  }
];

export const ThreePillars = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pillar-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 px-6 bg-background">
      <div className="absolute inset-0 opacity-90 pointer-events-none" aria-hidden="true">
        <WormholeCanvas className="w-full h-full" />
      </div>
      {/* Darken around the text so the copy stays readable over the grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 55%, hsl(var(--background) / 0.55), transparent 75%), linear-gradient(180deg, hsl(var(--background)) 0%, transparent 18%, transparent 82%, hsl(var(--background)) 100%)" }}
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            How growth gets cubed.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="pillar-item text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {pillar.title}
              </h3>

              {/* Gradient underline */}
              <div
                className="h-1 w-full mb-6"
                style={{ background: pillar.gradient }}
              />

              <h4 className="text-xl font-medium mb-4 text-white">
                {pillar.subtitle}
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
