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
        title="AI Receptionist & Business Automation | SIX³ Agency"
        description="Custom AI receptionists for phone, chat and email that answer instantly, qualify leads and book meetings round the clock, so no lead goes unanswered."
        canonical="https://six3.agency/services/ai-dev-automation"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              Meet Your New 24/7 Workforce.
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <ServiceVisual kind="agents" label="AI Agents & Automation" className="w-full h-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:col-start-1">
              Missed calls and slow replies quietly kill your business. We build custom AI receptionists that answer
              instantly, qualify leads, and book meetings round the clock.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
              <div>
                <p className="text-muted-foreground mb-1">Format</p>
                <p>Build, then monthly care plan</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Channels</p>
                <p>Phone, chat, email</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Hours</p>
                <p>24/7</p>
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
            Built around how you already work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Workflow Mapping</h3>
              <p className="text-muted-foreground">
                We identify exactly how leads reach you and where faster, smarter replies will win you more of them.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Agent Design</h3>
              <p className="text-muted-foreground">
                We program the questions your AI should ask, the answers it can give, and exactly when it should hand a complex query over to a human.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Connect & Test</h3>
              <p className="text-muted-foreground">
                We integrate the AI with your CRM, calendar, and phone systems, rigorously testing it with your team before it ever speaks to a client.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Go-Live & Care Plan</h3>
              <p className="text-muted-foreground">
                We don't just launch and leave. Your monthly care plan includes continuous monitoring, workflow updates, and performance reviews.
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
            If you don't pick up, your prospect calls the next firm on Google. We build intelligent agents for your
            phone lines, website chat, and inbox that handle the heavy lifting so your human team can focus on
            billable work.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Omnichannel AI receptionists (Phone, Chat, Email).</li>
            <li>• Automated lead qualification and calendar booking.</li>
            <li>• Seamless CRM integration.</li>
            <li>• Smart human-handoff protocols.</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">24/7</div>
            <p className="text-xl text-muted-foreground">Every customer answered</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">{"<1 min"}</div>
            <p className="text-xl text-muted-foreground">First reply to a new lead</p>
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
            Practical AI<br />with a clear job
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Built for service businesses</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Law firms, clinics, estate agents, professional services and local businesses. We build intake,
                booking and follow-up around how your sector takes on clients, including the questions you must ask
                and the ones the AI should leave to a person. Recent work includes intake automation for a law firm.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Part of one system</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Search &amp; Paid Media brings the leads in and AI Content Studio makes people pick you. AI Agents &amp;
                Automation makes
                sure none are lost: every lead from your ads gets a reply in under a minute, and what happens next
                shows up in the same monthly report.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Build, then a care plan</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We scope and build your agents as a one-off project, then look after them on a monthly care plan:
                monitoring, updates, new workflows and a monthly review. Get in touch for a tailored quote.
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
            Client intake automation for a law firm
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            How we gave a law firm an AI receptionist that answers every new enquiry, qualifies new matters and
            books consultations, taking the intake admin off fee earners.
          </p>
          <Link to="/use-cases/law-firm-automation">
            <Button variant="outline" className="rounded-full px-8 py-4 border-foreground hover:bg-brand-gradient-button hover:text-white hover:border-transparent hover:shadow-[0_0_32px_-10px_rgba(249,115,22,0.6)]">
              Read the case study
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Find out how many leads you're missing
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

export default AIDevAutomation;
