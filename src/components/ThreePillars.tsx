import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Discover",
    subtitle: "Every business gets a custom AI strategy",
    description: "We analyze your market, competitors, and opportunities to design AI solutions that drive real growth.",
    gradient: "linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #f97316 100%)"
  },
  {
    title: "Transform",
    subtitle: "AI that works while you focus on what matters",
    description: "Your marketing transforms into an automated system that generates leads, creates content, and engages customers 24/7.",
    gradient: "linear-gradient(90deg, #a855f7 0%, #f97316 50%, #fb923c 100%)"
  },
  {
    title: "Optimize",
    subtitle: "Continuous improvement powered by data",
    description: "Real-time analytics and AI-driven insights ensure your marketing performance improves every day.",
    gradient: "linear-gradient(90deg, #f97316 0%, #a855f7 50%, #7c3aed 100%)"
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
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Everything your business depends on.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="pillar-item">
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
