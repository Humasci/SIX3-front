import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={counterRef} className="text-6xl md:text-7xl font-light text-muted-foreground/30">
      {count.toLocaleString()}
    </div>
  );
};

const services = [
  {
    number: "01",
    title: "Search Marketing & Paid Media",
    description: "AI-driven search marketing with advanced algorithm optimization across Google Ads, Meta, LinkedIn, TikTok with real-time bid optimization and competitor analysis.",
    path: "/services/search-marketing-ppc",
    image: "/ai-marketing-ppc-paid-media.png",
  },
  {
    number: "02",
    title: "Generative AI Video & Audio",
    description: "AI avatars and generative models for unique multimedia content including UGC campaigns, voice cloning, and brand-aligned video production.",
    path: "/services/content-creation",
  },
  {
    number: "03",
    title: "AI Agent Creation & Workflow Automation",
    description: "Custom AI systems and automated workflows for call screening, lead qualification, customer support, and business process automation.",
    path: "/services/ai-dev-automation",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      // Simple animation without complex triggers
      gsap.fromTo(".service-card", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5
        }
      );

      // Enhanced hover animations for cards
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        const number = card.querySelector(".service-number");
        const arrow = card.querySelector(".service-arrow");
        const title = card.querySelector(".service-title");
        const description = card.querySelector(".service-description");
        
        card.addEventListener("mouseenter", () => {
          // Card lift with rotation
          gsap.to(card, {
            y: -15,
            rotateX: 5,
            rotateY: 5,
            scale: 1.02,
            duration: 0.6,
            ease: "power3.out",
          });

          // Number scaling and color change
          gsap.to(number, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          });

          // Arrow movement
          gsap.to(arrow, {
            x: 5,
            y: -5,
            scale: 1.2,
            rotation: 45,
            duration: 0.4,
            ease: "back.out(1.7)"
          });

          // Title slide effect
          gsap.to(title, {
            x: 10,
            duration: 0.4,
            ease: "power2.out"
          });

          // Description fade and slight movement
          gsap.to(description, {
            opacity: 0.8,
            x: 5,
            duration: 0.4,
            ease: "power2.out"
          });

          // Background gradient animation
          gsap.to(card.querySelector(".card-bg"), {
            opacity: 1,
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          // Reset all animations
          gsap.to(card, {
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)",
          });

          gsap.to([number, arrow, title, description], {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          gsap.to(card.querySelector(".card-bg"), {
            opacity: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          });
        });

        // Staggered parallax effect on scroll
        gsap.to(card, {
          yPercent: -20 * (index % 2 === 0 ? 1 : -1),
          scrollTrigger: {
            trigger: card,
            start: "bottom bottom",
            end: "top top",
            scrub: 1
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="services-header mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">Services We Provide -</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
              Expert Services<br />
              to Drive Success
            </h2>
          <AnimatedCounter end={72} />
          </div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <Link key={service.number} to={service.path}>
              <div className="service-card group relative border border-border/50 p-8 bg-background overflow-hidden cursor-pointer perspective-1000 rounded-lg hover:border-accent/30 transition-all duration-500">
                <div className="card-bg absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="service-number text-6xl font-light text-muted-foreground/40 transition-all duration-300 group-hover:text-muted-foreground/70">
                      {service.number}
                    </span>
                    <ArrowUpRight className="service-arrow w-6 h-6 text-muted-foreground/60 transition-all duration-300 group-hover:text-accent" />
                  </div>
                  {service.image && (
                    <div className="mb-6">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-32 object-contain rounded-lg bg-white/90 p-3"
                      />
                    </div>
                  )}
                  <h3 className="service-title text-2xl font-light mb-4 transition-colors duration-300 group-hover:text-foreground">{service.title}</h3>
                  <p className="service-description text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
