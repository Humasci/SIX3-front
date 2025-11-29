import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, TrendingUp, Video, Brain, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Search Marketing & Paid Media",
    subtitle: "AI-driven search marketing with advanced algorithm optimization",
    description: "Multi-platform campaign management across Google Ads, Meta, LinkedIn, and TikTok with real-time AI bid optimization, advanced audience segmentation, and competitor analysis.",
    features: [
      "Real-time AI bid optimization for maximum ROAS",
      "Multi-platform management (Google, Meta, LinkedIn, TikTok)",
      "Advanced audience segmentation and targeting",
      "Custom attribution modeling and automated alerts"
    ],
    investment: "£1K-5K management fees + ad spend",
    icon: TrendingUp,
    path: "/services/search-marketing-ppc"
  },
  {
    number: "02", 
    title: "Generative AI Video & Audio",
    subtitle: "AI avatars and generative models for unique multimedia content",
    description: "AI avatar creation and animation, voice cloning and synthesis, custom video content generation, UGC campaign automation, and brand-aligned content production.",
    features: [
      "AI avatar creation and realistic animation",
      "Voice cloning and synthesis technology", 
      "UGC campaign automation and video ads",
      "Multi-language content localization"
    ],
    investment: "£200-7K+ packages",
    icon: Video,
    path: "/services/content-creation"
  },
  {
    number: "03",
    title: "AI Agent Creation & Workflow Automation",
    subtitle: "Custom AI systems and automated workflows for business processes",
    description: "Custom AI agent development for call screening, lead qualification, customer support, business process automation, and workflow orchestration with legacy system integration.",
    features: [
      "Call center automation and AI phone screening",
      "Lead management and automated follow-up workflows", 
      "Customer service automation with 24/7 support",
      "Industry-specific solutions (legal, healthcare, real estate)"
    ],
    investment: "$5K-100K+ with 200-500% ROI",
    icon: Users,
    path: "/services/ai-dev-automation"
  }
];

const Services = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-detail-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="services-hero text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Comprehensive AI-powered solutions that transform your business operations, 
              maximize ROI, and drive sustainable growth through intelligent automation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">200-500%</div>
                <p className="text-sm text-muted-foreground">Average ROI</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">30-60%</div>
                <p className="text-sm text-muted-foreground">Time Savings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">40-80%</div>
                <p className="text-sm text-muted-foreground">Faster Response</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">25-50%</div>
                <p className="text-sm text-muted-foreground">Lead Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="services-grid space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.number} className={`service-detail-card ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-6xl font-light text-muted-foreground/50">
                          {service.number}
                        </span>
                        <div className="flex-1 h-px bg-border" />
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      
                      <div>
                        <h2 className="text-4xl md:text-5xl font-light mb-4">{service.title}</h2>
                        <p className="text-xl text-muted-foreground mb-6">{service.subtitle}</p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Key Features</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Investment Range</p>
                          <p className="text-xl font-medium">{service.investment}</p>
                        </div>
                        <Link to={service.path}>
                          <Button className="group px-8 py-4">
                            Learn More
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent className="w-24 h-24 text-accent/40 mx-auto mb-6" />
                          <div className="text-2xl font-light text-accent/60">{service.title.split(' ').slice(-2).join(' ')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Ready to Transform<br />Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can drive measurable results for your organization.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-12 py-6 text-lg border-foreground hover:bg-foreground hover:text-background">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;