import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Database, Code, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MLFineTuning = () => {
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
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              Fine-Tuning ML Models
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
                alt="Machine Learning"
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
                <p>ML Team</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Category</p>
                <p>Custom AI Development</p>
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
              <h3 className="text-2xl font-light mb-4">Data Assessment & Planning</h3>
              <p className="text-muted-foreground">
                Data audit and quality assessment, objective definition and success metrics, technical architecture design, and compliance review.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Database className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Data Preparation</h3>
              <p className="text-muted-foreground">
                Data cleaning and preprocessing, annotation and labeling, training/validation/test split, and baseline model evaluation.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Code className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Model Development</h3>
              <p className="text-muted-foreground">
                Model architecture selection, hyperparameter optimization, training and validation, and performance optimization for your specific requirements.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Zap className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Testing & Deployment</h3>
              <p className="text-muted-foreground">
                Comprehensive testing, performance benchmarking, production deployment, and ongoing monitoring with optimization support.
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
            Custom AI Models Tailored to Client Data and Objectives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Large Language Model fine-tuning, computer vision model adaptation, recommendation system optimization, predictive analytics development, custom chatbot training, and industry-specific AI solutions.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Large Language Model fine-tuning and adaptation</li>
            <li>• Computer vision and image recognition models</li>
            <li>• Recommendation systems and predictive analytics</li>
            <li>• Custom chatbot training and NLP solutions</li>
            <li>• Industry-specific AI model development</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">$5K+</div>
            <p className="text-xl text-muted-foreground">Starting Investment</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">6+ Wks</div>
            <p className="text-xl text-muted-foreground">Development Timeline</p>
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
            Where Precision<br />Meets Performance
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Custom Model Types</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Language models for content generation and classification, computer vision for image analysis, recommendation systems, and predictive analytics for forecasting and risk assessment.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Performance Optimization</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Model accuracy improvements, inference speed optimization, business impact measurement, cost reduction vs baseline, and high user adoption rates.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Enterprise Solutions</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Advanced development packages from $15K-35K with enterprise solutions starting at $50K+, including ongoing support and feature updates.
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
              Start Model Development
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLFineTuning;
