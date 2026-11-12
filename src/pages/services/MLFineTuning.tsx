import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";

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
      <PageSEO
        title="Custom AI Models & Fine-Tuning | SIX³ Agency"
        description="Advanced language models fine-tuned on your proprietary data and deployed where you retain 100% control. Private AI for specialist and regulated UK firms."
        canonical="https://six3.agency/services/ml-fine-tuning"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              Your Knowledge. Your Model. Total Privacy.
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <ServiceVisual kind="ml" label="Private AI" className="w-full h-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:col-start-1">
              Off-the-shelf AI isn't built for specialist firms. We fine-tune advanced language models on your
              proprietary data and deploy them where you retain 100% control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
              <div>
                <p className="text-muted-foreground mb-1">Format</p>
                <p>On request</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Built for</p>
                <p>Specialist and regulated firms</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Your data</p>
                <p>Stays under your control</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Start with</p>
                <p>AI Growth Audit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="steps-section py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            How it works <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Tested on your work before it goes live
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Scope & Data Review</h3>
              <p className="text-muted-foreground">
                We define the job (drafting, summarising, sorting) and audit your available data to ensure strict confidentiality.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Fine-Tuning</h3>
              <p className="text-muted-foreground">
                We train top-tier models on your documents and style guidelines. Your human experts review sample outputs to make the AI smarter.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Real-World Testing</h3>
              <p className="text-muted-foreground">
                Before launch, we rigorously test the model against your actual daily tasks, measuring accuracy, tone, and safety.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Private Deployment</h3>
              <p className="text-muted-foreground">
                We launch the model on infrastructure you control, ensuring your data never leaves your hands.
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
            Why It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            For regulated industries, sending client data to public AI tools is a compliance nightmare. We build
            bespoke AI that understands your specific vocabulary, precedents, and house style—deployed securely in
            your own environment.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Fine-tuning on your documents, data and house style</li>
            <li>• Evaluation against your real tasks before anything goes live</li>
            <li>• Private deployment that keeps your data under your control</li>
            <li>• Ongoing retraining as your knowledge changes</li>
            <li>• Drafting, summarising and sorting tools built on your model</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Private</div>
            <p className="text-xl text-muted-foreground">Deployed where your data stays under your control</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Tested</div>
            <p className="text-xl text-muted-foreground">Against your real tasks before go-live</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            The SIX³ difference <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Built for firms that<br />can't take chances.
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Built for specialist firms</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Law firms, healthcare practices, financial and professional services. We work with your field's
                vocabulary, compliance rules and edge cases, and keep a person in the loop wherever the stakes are
                high.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Measured before it's trusted</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We don't promise accuracy gains up front. We build a test from your real work, measure the model
                against it and only recommend going live when it's good enough for the job.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Yours, and part of the system</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Your fine-tuned model, training data and test results belong to you. The model can also power the
                rest of your system, for example giving your AI receptionist accurate answers in your own
                words.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Not sure you need a custom model? The audit will tell you.
          </h2>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-12 py-6 text-lg border-foreground hover:bg-brand-gradient-button hover:text-white hover:border-transparent hover:shadow-[0_0_32px_-10px_rgba(249,115,22,0.6)]">
              Book an AI Growth Audit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLFineTuning;
