import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Target, BarChart3, Zap } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const SearchMarketingPPC = () => {
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
              Search Marketing & Paid Media
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src={icons.searchMarketing}
                alt="Search Marketing"
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
                <p>AI-Powered Marketing</p>
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
              <TrendingUp className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                Client onboarding and requirements gathering with market and competitor analysis, audience research and segmentation, plus campaign architecture design.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Target className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Setup & Launch</h3>
              <p className="text-muted-foreground">
                Account setup across platforms, campaign creation and configuration, tracking implementation, and creative development with testing.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <BarChart3 className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Optimization & Scaling</h3>
              <p className="text-muted-foreground">
                Daily performance monitoring, weekly optimization cycles, A/B testing execution, and budget reallocation based on AI-driven performance analysis.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Zap className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Ongoing Management</h3>
              <p className="text-muted-foreground">
                Continuous AI-driven optimization with monthly strategy reviews, quarterly campaign expansions, and annual strategic planning.
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
            AI-Driven Search Marketing with Advanced Algorithm Optimization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Multi-platform campaign management across Google Ads, Meta, LinkedIn, and TikTok with real-time AI bid optimization, advanced audience segmentation, and competitor analysis. Our custom attribution modeling and automated reporting deliver superior results.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Real-time AI bid optimization for maximum ROAS</li>
            <li>• Advanced audience segmentation and targeting</li>
            <li>• Custom attribution modeling and automated alerts</li>
            <li>• Multi-platform management (Google, Meta, LinkedIn, TikTok)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">$50K+</div>
            <p className="text-xl text-muted-foreground">Minimum Monthly Ad Spend</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">£1-5K</div>
            <p className="text-xl text-muted-foreground">Management Fees</p>
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
            Where Strategy<br />Meets Results
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Multi-Platform Expertise</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Certified management across Google Ads, Meta, LinkedIn, and TikTok platforms with real-time AI optimization algorithms that maximize performance and ROI.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Advanced AI Optimization</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Real-time AI bid optimization with advanced audience segmentation, competitor analysis, and custom attribution modeling for superior campaign performance.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Automated Intelligence</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Automated reporting and alerts with continuous AI-driven optimization, delivering superior results through data-driven decision making and strategic scaling.
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
              Start Your Campaign
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchMarketingPPC;
