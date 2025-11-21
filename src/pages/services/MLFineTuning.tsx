import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Database, LineChart, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MLFineTuning = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              ML Fine Tuning
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
                <p>New York</p>
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
                <p>Data Science</p>
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
              <LineChart className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Model Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current model performance, identify bottlenecks, and benchmark against industry standards to establish clear improvement targets.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Database className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Data Preparation</h3>
              <p className="text-muted-foreground">
                Meticulous data cleaning, augmentation, and structuring to create the optimal training dataset that will drive superior model performance.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Settings className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Optimization Process</h3>
              <p className="text-muted-foreground">
                Advanced hyperparameter tuning, transfer learning, and architecture optimization techniques to maximize accuracy and efficiency for your specific use case.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <CheckCircle className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Validation & Deployment</h3>
              <p className="text-muted-foreground">
                Rigorous testing across diverse scenarios ensures consistent performance. Seamless deployment with monitoring systems for continuous improvement.
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
            Precision-Optimized Models That Outperform Generic Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Unlock the full potential of machine learning with expert model fine-tuning. We optimize pre-trained models and custom algorithms to achieve superior accuracy on your specific tasks. Whether you need better predictions, faster inference, or domain-specific adaptations, our fine-tuning expertise delivers measurable performance gains.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Achieve higher accuracy with domain-specific optimization</li>
            <li>• Reduce inference time and computational costs</li>
            <li>• Adapt powerful models to your unique data and requirements</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">45+</div>
            <p className="text-xl text-muted-foreground">Models Optimized</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">92%</div>
            <p className="text-xl text-muted-foreground">Average Accuracy Gain</p>
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
              <h3 className="text-3xl font-light mb-4">Deep ML Expertise</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our team includes ML researchers and engineers with years of experience optimizing models across industries. We understand the nuances of different architectures and optimization techniques.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Custom Optimization Strategy</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Every model has unique characteristics and requirements. We develop tailored optimization strategies that address your specific accuracy, speed, and resource constraints.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Production-Ready Results</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We don't just improve accuracy — we optimize for real-world deployment. Our tuned models are efficient, scalable, and ready for production environments.
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
              Optimize Your Models
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLFineTuning;
