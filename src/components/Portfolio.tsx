import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "law-firm-automation",
    number: "01",
    title: "Legal Firm AI Automation",
    category: "AI Agent Development",
    year: "2024",
    description: "60% reduction in intake administration time, 40% increase in qualified leads, $150K annual savings",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    metrics: "60% time reduction, $150K savings"
  },
  {
    id: "real-estate-lead-system",
    number: "02", 
    title: "Real Estate Lead Management",
    category: "Workflow Automation",
    year: "2024",
    description: "45% increase in lead conversion, 70% reduction in manual follow-up, $200K revenue increase",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    metrics: "45% conversion increase, $200K revenue boost"
  },
  {
    id: "ecommerce-ai-campaign",
    number: "03",
    title: "E-commerce AI Marketing Campaign", 
    category: "Search Marketing & Paid Media",
    year: "2024",
    description: "Multi-platform campaign with AI optimization delivering 300% ROAS improvement",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    metrics: "300% ROAS improvement"
  },
  {
    id: "healthcare-patient-system",
    number: "04",
    title: "Healthcare Patient Management",
    category: "AI Agent Creation",
    year: "2024", 
    description: "24/7 AI scheduling system with 40% faster patient processing and improved satisfaction",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    metrics: "40% faster processing, 24/7 availability"
  },
  {
    id: "fintech-ai-video-content",
    number: "05",
    title: "FinTech AI Video Campaign",
    category: "Generative AI Video & Audio",
    year: "2024",
    description: "AI avatars and voice cloning for personalized customer onboarding videos",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", 
    metrics: "75% engagement increase"
  },
  {
    id: "manufacturing-ml-optimization",
    number: "06",
    title: "Manufacturing ML Optimization",
    category: "Fine-Tuning ML Models",
    year: "2024",
    description: "Custom predictive analytics model for supply chain optimization and quality control",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
    metrics: "30% cost reduction, 95% accuracy"
  },
];

export const Portfolio = () => {
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
        gsap.to(item, {
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
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="portfolio-header mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Work -
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
              Featured Projects<br />
              & Case Studies
            </h2>
            <Link
              to="/portfolio"
              className="text-lg hover:text-accent transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        <div className="portfolio-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="portfolio-item group block transform-gpu"
            >
              <div className="relative overflow-hidden mb-4 aspect-[4/3] bg-secondary rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 bg-background/90 opacity-0 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl font-light">View Project</span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <span className="project-number text-4xl font-light text-muted-foreground/50 transition-all duration-300">
                  {project.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h3 className="project-title text-2xl font-light mb-2 transition-all duration-300">{project.title}</h3>
              <p className="text-sm text-accent mb-2 transition-colors duration-300">{project.category}</p>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="project-metrics bg-accent/10 border border-accent/20 rounded-full px-4 py-2 transition-all duration-300 hover:bg-accent/20 hover:border-accent/40">
                <p className="text-xs font-medium text-accent">{project.metrics}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
