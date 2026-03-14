import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, FlaskConical, BarChart2, Rocket } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const MLFineTuning = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
              ML Model Fine-Tuning
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src={icons.mlFineTuning}
                alt="ML Fine-Tuning"
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
                <p>Machine Learning</p>
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
              <Database className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Data Audit & Preparation</h3>
              <p className="text-muted-foreground">
                Review and clean your proprietary datasets, define training objectives, assess data quality and volume, and establish labelling guidelines for supervised fine-tuning.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <FlaskConical className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Model Selection & Training</h3>
              <p className="text-muted-foreground">
                Select the optimal foundation model (GPT, LLaMA, Mistral, or domain-specific), configure training hyperparameters, run fine-tuning pipelines, and apply RLHF where required.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <BarChart2 className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Evaluation & Benchmarking</h3>
              <p className="text-muted-foreground">
                Rigorous performance benchmarking against baseline models, red-teaming for safety and bias, accuracy and latency testing, and iterative refinement cycles.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Rocket className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Deployment & Monitoring</h3>
              <p className="text-muted-foreground">
                Scalable API deployment, integration with existing systems, continuous performance monitoring, and scheduled re-training as new data becomes available.
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
            Custom Model Training Tailored to Your Business Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Off-the-shelf AI models are generic. Fine-tuned models are yours. We adapt state-of-the-art foundation models to your proprietary data, domain language, and business objectives — delivering dramatically higher accuracy and relevance for your specific use case.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Fine-tuning of GPT, LLaMA, Mistral, and other foundation models</li>
            <li>• Domain-specific NLP for legal, healthcare, finance, and retail</li>
            <li>• Reinforcement Learning from Human Feedback (RLHF)</li>
            <li>• Custom classification, extraction, and generation pipelines</li>
            <li>• Ongoing retraining and model versioning</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">£5-50K</div>
            <p className="text-xl text-muted-foreground">Investment Range</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Ongoing</div>
            <p className="text-xl text-muted-foreground">Retraining Available</p>
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
              <h3 className="text-3xl font-light mb-4">Domain Expertise</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We fine-tune models across legal, healthcare, finance, e-commerce, and professional services — with deep understanding of each domain's vocabulary, compliance requirements, and edge cases.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Proven Accuracy Gains</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Clients typically see 40-70% improvements in task-specific accuracy over base models, reduced hallucination rates, and significantly lower inference costs through model distillation techniques.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Full Ownership</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Your fine-tuned model weights are yours. We deliver complete model artifacts, training scripts, evaluation reports, and deployment infrastructure so you maintain full control and portability.
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
              Start Fine-Tuning
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLFineTuning;
