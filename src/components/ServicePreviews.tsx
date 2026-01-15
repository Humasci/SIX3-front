import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const servicePreviews = [
  {
    number: "01",
    title: "Search Marketing & Paid Media",
    shortDescription: "AI-driven search marketing with advanced algorithm optimization",
    features: [
      "Multi-platform campaign management (Google Ads, Meta, LinkedIn, TikTok)",
      "Real-time AI bid optimization and competitor analysis",
      "Advanced audience segmentation and custom attribution modeling",
      "Automated reporting with performance alerts"
    ],
    investment: "£1K-5K management fees + ad spend",
    path: "/services/search-marketing-ppc",
    image: icons.searchMarketing
  },
  {
    number: "02",
    title: "Generative AI Video & Audio",
    shortDescription: "AI avatars and generative models for unique multimedia content",
    features: [
      "AI avatar creation and realistic animation",
      "Voice cloning and synthesis technology",
      "UGC campaign automation and video ads for paid media",
      "Multi-language content localization"
    ],
    investment: "$1.5K-7K+ packages",
    path: "/services/content-creation",
    image: icons.video
  },
  {
    number: "03",
    title: "AI Agent Creation & Workflow Automation",
    shortDescription: "Custom AI systems and automated workflows for business processes",
    features: [
      "Call center automation and AI phone screening",
      "Lead management and automated follow-up workflows",
      "Customer service automation with 24/7 support",
      "Industry-specific solutions (legal, healthcare, real estate)"
    ],
    investment: "$5K-100K+ with 200-500% ROI",
    path: "/services/ai-dev-automation",
    image: icons.automation
  }
];

export const ServicePreviews = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible initially  
      gsap.set([".service-preview-header", ".service-preview-card"], { opacity: 1 });
      
      // Simple animations without complex triggers
      gsap.fromTo(".service-preview-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".service-preview-card", 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="service-preview-header mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">Our Core Services -</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            AI-Powered Solutions<br />
            That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            From intelligent search marketing to custom AI agents, we deliver comprehensive solutions 
            that transform your business operations and maximize ROI through advanced automation.
          </p>
        </div>

        <div className="service-previews-grid space-y-12">
          {servicePreviews.map((service, index) => (
            <div key={service.number} className={`service-preview-card border border-border/50 rounded-lg hover:border-accent/30 transition-all duration-500 ${index % 2 === 0 ? 'bg-background hover:bg-secondary/20' : 'bg-secondary/30 hover:bg-secondary/40'}`}>
              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-light text-muted-foreground/50">
                      {service.number}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-light mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.shortDescription}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Key Features</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investment Range</p>
                      <p className="text-lg font-medium">{service.investment}</p>
                    </div>
                    <Link to={service.path}>
                      <Button variant="outline" className="group px-6 py-3">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-contain p-6"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-6xl font-light text-accent/30 mb-4">{service.number}</div>
                        <div className="text-xl text-muted-foreground">{service.title.split(' ').slice(-2).join(' ')}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-foreground hover:bg-foreground hover:text-background">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};