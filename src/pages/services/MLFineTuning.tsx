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
        description="Language models fine-tuned on your documents and data, tested on your real tasks and deployed privately, for UK firms with specialist knowledge or data rules."
        canonical="https://six3.agency/services/ml-fine-tuning"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              Private AI
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <ServiceVisual kind="ml" label="Private AI" className="w-full h-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:col-start-1">
              AI trained on your own knowledge, deployed privately. Language models fine-tuned on your documents and
              data, tested against your real tasks, and run where your data stays under your control.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
              <div>
                <p className="text-muted-foreground mb-1">Format</p>
                <p>By enquiry</p>
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
              <h3 className="text-2xl font-light mb-4">Scope & data review</h3>
              <p className="text-muted-foreground">
                We agree the job the model needs to do, such as drafting, summarising, sorting or answering
                questions. Then we review your documents and data: what you have, how usable it is and what must stay
                confidential.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Choose & fine-tune</h3>
              <p className="text-muted-foreground">
                We pick the right starting point from open and commercial language models, then fine-tune it on your
                documents, data and house style. Where it helps, your experts rate sample answers and we train the
                model on their feedback.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Test on real tasks</h3>
              <p className="text-muted-foreground">
                Before anything goes live, we test the model on a set of your real tasks and compare it with
                off-the-shelf options for accuracy, tone, safety and running cost. You see the results and decide.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Deploy privately & retrain</h3>
              <p className="text-muted-foreground">
                We deploy it in your own cloud or on infrastructure you control, connect it to your systems, and
                retrain it as your knowledge, products and rules change.
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
            AI that knows your field and keeps your data private
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            For firms with specialist knowledge or strict data rules, off-the-shelf AI isn't always enough. It
            doesn't know your precedents, products or house style, and sending client data to a public tool may not
            be an option. We fine-tune open and commercial language models on your documents and data, test them
            properly against your real tasks, and deploy them where your data stays under your control.
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
            Why it works <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Your knowledge.<br />Your model.
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
                rest of your system, for example giving your Get It Done AI receptionist accurate answers in your own
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
