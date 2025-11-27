import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Users, Settings, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AIDevAutomation = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: ".steps-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      });

      gsap.from(".advantage-card", {
        scrollTrigger: {
          trigger: ".advantages-section",
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              AI Agent Creation & Workflow Automation
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop"
                alt="AI Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p>London</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p>2025</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Lead</p>
                <p>AI Team</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Category</p>
                <p>AI Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="steps-section py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Simple process -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Clear, & Effective Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <Brain className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Business process audit and mapping, AI opportunity assessment and ROI calculation, technical requirements gathering, and solution architecture design.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Users className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">AI Agent Development</h3>
              <p className="text-muted-foreground">
                Custom agent persona and capability design, conversation flows and decision trees, integration connector development, and workflow automation scripting.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Settings className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Integration & Testing</h3>
              <p className="text-muted-foreground">
                Production environment deployment, system integration testing, user acceptance testing with client teams, and performance optimization.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Zap className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Deployment & Training</h3>
              <p className="text-muted-foreground">
                Live system deployment and cutover, team training and documentation, change management support, and 30-day optimization period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Overview -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8 max-w-3xl">
            Custom AI Systems and Automated Workflows for Business Processes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Custom AI agent development for call screening, lead qualification, and customer support. Business process automation with workflow orchestration, legacy system integration, real-time analytics, and compliance automation.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Call center automation and AI phone screening</li>
            <li>• Lead management and automated follow-up workflows</li>
            <li>• Customer service automation with 24/7 support</li>
            <li>• CRM integration and pipeline management</li>
            <li>• Operations automation and compliance tracking</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">$5-100K</div>
            <p className="text-xl text-muted-foreground">Investment Range</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Ongoing</div>
            <p className="text-xl text-muted-foreground">Support Available</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Advantage -
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Where Innovation<br />Meets Practical Solutions
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Industry Specializations</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Legal firms, healthcare, real estate, e-commerce, and manufacturing with specialized solutions for client intake, patient scheduling, lead nurturing, and supply chain optimization.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Proven Results</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                30-60% reduction in manual processing time, 40-80% improvement in response times, 25-50% increase in lead conversion rates, and 20-40% reduction in operational costs.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Comprehensive Packages</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Starter packages from $5-15K, professional packages $15-35K, enterprise solutions $35-100K+, with ongoing support from $2-10K/month for optimization and new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Let's work Together
          </h2>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-12 py-6 text-lg border-foreground hover:bg-foreground hover:text-background">
              Start AI Automation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDevAutomation;
