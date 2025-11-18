import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "brand-refresh-2024",
    number: "01",
    title: "Brand Refresh 2024",
    category: "Branding",
    year: "2024",
    description: "Complete brand identity redesign for a leading tech startup",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
  },
  {
    id: "mobile-banking-app",
    number: "02",
    title: "Mobile Banking App",
    category: "App Design",
    year: "2024",
    description: "Revolutionary fintech app with seamless user experience",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    id: "ecommerce-platform",
    number: "03",
    title: "E-Commerce Platform",
    category: "Web Design",
    year: "2023",
    description: "Modern e-commerce solution with advanced features",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: "ai-saas-platform",
    number: "04",
    title: "AI SaaS Platform",
    category: "Development",
    year: "2024",
    description: "Full-stack AI-powered business intelligence platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: "fitness-tracking-app",
    number: "05",
    title: "Fitness Tracking App",
    category: "App Design",
    year: "2023",
    description: "Health and wellness app with personalized insights",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
  },
  {
    id: "corporate-website",
    number: "06",
    title: "Corporate Website",
    category: "Web Design",
    year: "2024",
    description: "Professional corporate presence with modern design",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
];

export const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(".portfolio-item", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
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

        <div className="portfolio-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="portfolio-item group"
            >
              <div className="relative overflow-hidden mb-4 aspect-[4/3] bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-2xl font-light">View Project</span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <span className="text-4xl font-light text-muted-foreground/50">
                  {project.number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl font-light mb-2">{project.title}</h3>
              <p className="text-sm text-accent mb-2">{project.category}</p>
              <p className="text-muted-foreground">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
