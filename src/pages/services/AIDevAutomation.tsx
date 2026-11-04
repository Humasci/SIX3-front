import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icons from "@/utils/iconGenerator";

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
      <PageSEO
        title="AI Agent Creation & Workflow Automation — SIX³ Agency"
        description="Custom AI agent development for call screening, lead qualification, and customer support. Business process automation with 200-500% ROI. SIX³ Agency, London."
        canonical="https://six3.agency/services/ai-dev-automation"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light pt-40 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              AI Agent Creation & Workflow Automation
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <img
                src={icons.ai}
                alt="AI Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
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
            Simple process <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Clear, & Effective Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Business process audit and mapping, AI opportunity assessment and ROI calculation, technical requirements gathering, and solution architecture design.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">AI Agent Development</h3>
              <p className="text-muted-foreground">
                Custom agent persona and capability design, conversation flows and decision trees, integration connector development, and workflow automation scripting.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Integration & Testing</h3>
              <p className="text-muted-foreground">
                Production environment deployment, system integration testing, user acceptance testing with client teams, and performance optimization.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
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
            Overview <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
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
            <div className="text-7xl md:text-8xl font-light mb-4">Ongoing</div>
            <p className="text-xl text-muted-foreground">Support Available</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Advantage <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Where Innovation<br />Meets Practical Solutions
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Industry Specializations</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Legal firms, healthcare, real estate, e-commerce, and manufacturing with specialized solutions for client intake, patient scheduling, lead nurturing, and supply chain optimization.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Proven Results</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                30-60% reduction in manual processing time, 40-80% improvement in response times, 25-50% increase in lead conversion rates, and 20-40% reduction in operational costs.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Comprehensive Packages</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Starter, professional and enterprise packages scoped to your business, with ongoing support for optimization and new features. Get in touch for a tailored quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Case Study <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            dui.guide — AI-Powered Legal Guidance Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            How we built AI agents that deliver state and county-specific DUI procedural guidance across all 50 states, with automated deadline tracking and intelligent attorney matching.
          </p>
          <Link to="/use-cases/dui-guide">
            <Button variant="outline" className="rounded-full px-8 py-4 border-foreground hover:bg-foreground hover:text-background">
              Read Case Study
            </Button>
          </Link>
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
