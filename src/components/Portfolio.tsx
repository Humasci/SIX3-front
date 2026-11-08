import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWormhole } from "@/components/HeroWormhole";
import { reduceMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "law-firm-automation",
    number: "01",
    title: "Law Firm Intake Automation",
    category: "AI Agents & Automation",
    year: "2024",
    description: "AI intake for a UK law firm: every enquiry answered, new matters qualified and booked, and intake admin taken off fee earners",
    image: "/images/use-cases/law-firm-automation.webp",
    metrics: "Client under NDA"
  },
  {
    id: "ecommerce-ai-campaign",
    number: "02",
    title: "E-commerce AI Marketing Campaign",
    category: "Search & Paid Media",
    year: "2026",
    description: "Paid media across search and social, consolidated into one budget with AI-assisted bidding and sales tracking back to every ad",
    image: "/images/use-cases/ecommerce-noovit.webp",
    metrics: "Search, social and attribution"
  },
];

const caseStudyPages: Record<string, string> = {
  "law-firm-automation": "/use-cases/law-firm-automation",
};

export const Portfolio = ({ lightHeader = false }: { lightHeader?: boolean }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible initially
      gsap.set([".portfolio-header h2", ".portfolio-item"], { opacity: 1, rotateX: 0, scale: 1 });
      
      // Simple header animation
      gsap.fromTo(".portfolio-header h2", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      // Simple portfolio items animation
      gsap.fromTo(".portfolio-item", 
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Enhanced hover effects for portfolio items
      const portfolioItems = document.querySelectorAll(".portfolio-item");
      portfolioItems.forEach((item, index) => {
        const image = item.querySelector(".portfolio-image");
        const overlay = item.querySelector(".portfolio-overlay");
        const number = item.querySelector(".project-number");
        const title = item.querySelector(".project-title");
        const metrics = item.querySelector(".project-metrics");
        
        item.addEventListener("mouseenter", () => {
          // 3D tilt effect
          gsap.to(item, {
            rotateX: -5,
            rotateY: 10,
            z: 50,
            duration: 0.6,
            ease: "power3.out",
            transformOrigin: "center center -100px"
          });

          // Image parallax
          gsap.to(image, {
            scale: 1.15,
            duration: 0.8,
            ease: "power2.out"
          });

          // Overlay reveal
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          });

          // Number glow effect
          gsap.to(number, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          });

          // Title slide
          gsap.to(title, {
            x: 10,
            duration: 0.4,
            ease: "power2.out"
          });

          // Metrics highlight
          gsap.to(metrics, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          });

          gsap.to(overlay, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
          });

          gsap.to([number, title, metrics], {
            x: 0,
            scale: 1,
            textShadow: "none",
            duration: 0.6,
            ease: "power2.out"
          });
        });

        // Parallax on scroll
        if (!reduceMotion) gsap.to(item, {
          yPercent: -10 * (index % 2 === 0 ? 1 : -1),
          scrollTrigger: {
            trigger: item,
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
    <section ref={sectionRef} className="bg-background">
      <div className={lightHeader ? "theme-light relative isolate overflow-hidden pt-40 pb-16 px-6" : "pt-24 pb-16 px-6"}>
        {lightHeader && <HeroWormhole />}
        <div className="max-w-7xl mx-auto portfolio-header">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Work <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* On the portfolio page this is the page's main heading */}
            {(() => {
              const Heading = lightHeader ? "h1" : "h2";
              return (
                <Heading className={`text-5xl md:text-6xl lg:text-7xl font-light ${lightHeader ? "text-gradient w-fit pb-1" : ""}`}>
                  Featured Projects<br />
                  & Case Studies
                </Heading>
              );
            })()}
            {!lightHeader && (
              <Link
                to="/portfolio"
                className="text-lg hover:text-gradient transition-colors"
              >
                View All Projects →
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={`px-6 pb-24 max-w-7xl mx-auto ${lightHeader ? "pt-16" : ""}`}>
        <div className="portfolio-grid grid md:grid-cols-2 gap-8 perspective-1000">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to={caseStudyPages[project.id] ?? `/portfolio/${project.id}`}
              className="portfolio-item group block transform-gpu"
            >
              <div className="media-frame mb-4 aspect-[4/3]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 bg-[hsl(243_50%_10%/0.85)] opacity-0 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-light text-white">View Project</span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <span className="project-number text-4xl font-light text-gradient transition-all duration-300">
                  {project.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h3 className="project-title text-2xl font-light mb-2 transition-all duration-300">{project.title}</h3>
              <p className="text-sm text-gradient mb-2 transition-colors duration-300">{project.category}</p>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="project-metrics bg-accent/10 border border-accent/20 rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/20 hover:border-accent/40">
                <p className="text-xs font-medium text-gradient">{project.metrics}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
