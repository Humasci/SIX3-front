import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      });

      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef}>
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="about-hero">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              About SIX3 Agency
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl">
              We are a cutting-edge AI marketing agency specializing in intelligent automation, 
              generative content creation, and custom AI solutions that drive measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="about-content grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To revolutionize digital marketing through advanced AI technology, delivering automated solutions 
                that maximize ROI while reducing operational complexity for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in the power of artificial intelligence to transform how businesses connect with 
                their audiences, optimize their operations, and scale their success.
              </p>
            </div>
            <div className="about-content">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-light text-accent mb-4">AI-POWERED</div>
                  <div className="text-xl text-muted-foreground">INNOVATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-content text-4xl md:text-5xl font-light mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">AI-Driven Marketing</h3>
              <p className="text-muted-foreground">
                Advanced search marketing with real-time optimization across Google Ads, Meta, LinkedIn, and TikTok platforms.
              </p>
            </div>
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Generative Content</h3>
              <p className="text-muted-foreground">
                AI avatars, voice cloning, and automated UGC creation for compelling video and audio content at scale.
              </p>
            </div>
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Custom AI Models</h3>
              <p className="text-muted-foreground">
                Fine-tuning language models, computer vision systems, and predictive analytics for specific business needs.
              </p>
            </div>
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Workflow Automation</h3>
              <p className="text-muted-foreground">
                AI agents for call screening, lead qualification, customer support, and business process optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">200-500%</div>
              <p className="text-lg text-muted-foreground">Average ROI Increase</p>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">30-60%</div>
              <p className="text-lg text-muted-foreground">Process Time Reduction</p>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">40-80%</div>
              <p className="text-lg text-muted-foreground">Response Time Improvement</p>
            </div>
            <div className="stat-item text-center">
              <div className="text-5xl md:text-6xl font-light mb-4">25-50%</div>
              <p className="text-lg text-muted-foreground">Lead Conversion Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-content text-4xl md:text-5xl font-light mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Legal Firms</h3>
              <p className="text-muted-foreground mb-4">
                Client intake automation, case management, and billing systems with 60% reduction in administration time.
              </p>
              <p className="text-sm text-accent">$150K+ annual savings achieved</p>
            </div>
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Healthcare</h3>
              <p className="text-muted-foreground mb-4">
                Patient scheduling, insurance verification, and care plan coordination with improved efficiency.
              </p>
              <p className="text-sm text-accent">40% faster patient processing</p>
            </div>
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Real Estate</h3>
              <p className="text-muted-foreground mb-4">
                Lead nurturing, property matching, and transaction management with 45% conversion increase.
              </p>
              <p className="text-sm text-accent">$200K+ revenue increase</p>
            </div>
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">E-commerce</h3>
              <p className="text-muted-foreground mb-4">
                Customer service automation, inventory management, and order fulfillment optimization.
              </p>
              <p className="text-sm text-accent">24/7 automated support</p>
            </div>
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Manufacturing</h3>
              <p className="text-muted-foreground mb-4">
                Supply chain optimization, quality control automation, and maintenance scheduling systems.
              </p>
              <p className="text-sm text-accent">20-40% cost reduction</p>
            </div>
            <div className="about-content border border-border p-6">
              <h3 className="text-xl font-medium mb-3">Financial Services</h3>
              <p className="text-muted-foreground mb-4">
                Risk assessment automation, customer onboarding, and compliance monitoring solutions.
              </p>
              <p className="text-sm text-accent">90%+ accuracy rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Ready to Transform<br />Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can drive measurable results for your organization.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-12 py-6 text-lg border-foreground hover:bg-foreground hover:text-background">
              Start Your AI Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};