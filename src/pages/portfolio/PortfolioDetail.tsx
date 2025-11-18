import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const projects = {
  "brand-refresh-2024": {
    title: "Brand Refresh 2024",
    category: "Branding",
    year: "2024",
    client: "TechStart Inc.",
    duration: "3 months",
    description: "Complete brand identity redesign for a leading tech startup, including logo, color palette, typography, and brand guidelines.",
    challenge: "The client needed a modern brand identity that would appeal to both enterprise clients and individual users while maintaining trust and professionalism.",
    solution: "We created a flexible brand system with a bold, contemporary aesthetic that scales across all touchpoints. The new identity increased brand recognition by 85%.",
    results: ["85% increase in brand recognition", "150% growth in social media engagement", "40% increase in conversion rates"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    ],
  },
  "mobile-banking-app": {
    title: "Mobile Banking App",
    category: "App Design",
    year: "2024",
    client: "FinFlow Bank",
    duration: "6 months",
    description: "Revolutionary fintech app with seamless user experience, biometric authentication, and real-time transaction tracking.",
    challenge: "Create a secure yet intuitive banking experience that would increase user adoption and daily active usage.",
    solution: "We designed a clean, minimal interface with focus on core banking tasks and implemented advanced security features without compromising usability.",
    results: ["200K+ downloads in first month", "4.8 star rating on app stores", "60% daily active user rate"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
    ],
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    category: "Web Design",
    year: "2023",
    client: "ShopHub",
    duration: "4 months",
    description: "Modern e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout experience.",
    challenge: "Build a scalable platform that could handle high traffic while providing personalized shopping experiences.",
    solution: "We implemented a modular design system with AI-powered recommendations and optimized the checkout flow to reduce cart abandonment.",
    results: ["45% reduction in cart abandonment", "2M+ monthly visitors", "35% increase in average order value"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    ],
  },
  "ai-saas-platform": {
    title: "AI SaaS Platform",
    category: "Development",
    year: "2024",
    client: "DataWise AI",
    duration: "8 months",
    description: "Full-stack AI-powered business intelligence platform with real-time analytics and predictive insights.",
    challenge: "Develop a scalable platform that could process massive datasets in real-time while maintaining an intuitive interface.",
    solution: "Built a microservices architecture with advanced caching and implemented a drag-and-drop dashboard builder for custom analytics.",
    results: ["1000+ enterprise clients", "99.9% uptime", "50% reduction in data analysis time"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    ],
  },
  "fitness-tracking-app": {
    title: "Fitness Tracking App",
    category: "App Design",
    year: "2023",
    client: "FitLife",
    duration: "5 months",
    description: "Health and wellness app with personalized workout plans, nutrition tracking, and social features.",
    challenge: "Create an engaging fitness app that motivates users to maintain consistent exercise habits.",
    solution: "Designed a gamified experience with achievement systems, social challenges, and AI-powered personalized recommendations.",
    results: ["500K+ active users", "4.7 star rating", "75% user retention rate"],
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    ],
  },
  "corporate-website": {
    title: "Corporate Website",
    category: "Web Design",
    year: "2024",
    client: "Global Ventures",
    duration: "3 months",
    description: "Professional corporate presence with modern design, interactive elements, and comprehensive portfolio showcase.",
    challenge: "Develop a professional website that reflects the company's values while standing out from competitors.",
    solution: "Created a bold, minimalist design with innovative interactions and smooth animations that enhance user engagement.",
    results: ["300% increase in leads", "65% longer session duration", "Award-winning design"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=600&fit=crop",
    ],
  },
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  
  const project = projects[id as keyof typeof projects];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from(".project-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".project-info", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".project-section", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div ref={contentRef} className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio">
            <Button variant="ghost" className="project-hero mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="project-hero mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              {project.title}
            </h1>
          </div>

          <div className="project-hero aspect-video w-full mb-16 overflow-hidden bg-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Client</h3>
              <p className="text-xl">{project.client}</p>
            </div>
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Duration</h3>
              <p className="text-xl">{project.duration}</p>
            </div>
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Year</h3>
              <p className="text-xl">{project.year}</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div key={index} className="border border-border p-6">
                    <p className="text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-8">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
