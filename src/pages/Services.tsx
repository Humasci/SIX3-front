import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";
import { WormholeCta } from "@/components/WormholeCta";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Search & Paid Media",
    subtitle: "Campaigns that bring in buyers, not just browsers.",
    description: "We plan Google Ads, Meta, LinkedIn and TikTok as one budget, build landing pages that turn visits into leads and sales, and track every result back to the ad that brought it in. You get monthly optimisation and a plain-English report on what your spend is buying.",
    format: "Monthly",
    features: [
      "Unified campaign management (Google Ads, Meta, LinkedIn, TikTok)",
      "Custom landing pages and offer design",
      "Advanced conversion and call tracking",
      "Automated reporting and continuous AI optimisation"
    ],
    visual: "search" as const,
    path: "/services/search-marketing-ppc"
  },
  {
    number: "02",
    title: "AI Content Studio",
    subtitle: "Video, voice, and ad creative that makes your brand the obvious choice.",
    description: "Most businesses know they need more video but never have the time to film it. We produce ads, explainers and social content with AI presenters, voiceovers and translations, on a monthly plan, in your brand's look and voice. Creative is tested in your ads, so the winners get the budget.",
    format: "Monthly",
    features: [
      "AI video ads, explainers and social clips",
      "Avatar presenters and voiceovers, with your consent and branding",
      "Translations and versions for every channel and language",
      "Creative testing linked to your ad results"
    ],
    visual: "video" as const,
    path: "/services/content-creation"
  },
  {
    number: "03",
    title: "AI Agents & Automation",
    subtitle: "24/7 AI receptionists that qualify leads and update your CRM.",
    description: "Missed calls and slow replies quietly lose you customers. We build AI receptionists for phone, chat and email that answer straight away, ask the right questions, book qualified people into your calendar and update your CRM. Then we look after them on a monthly care plan.",
    format: "Build + Care Plan",
    features: [
      "Omnichannel AI receptionists (phone, chat, email)",
      "Automated lead qualification and calendar booking",
      "Seamless CRM integration",
      "Smart human-handoff protocols"
    ],
    visual: "agents" as const,
    path: "/services/ai-dev-automation"
  },
  {
    number: "04",
    title: "Private AI",
    subtitle: "AI trained securely on your proprietary knowledge and deployed privately.",
    description: "For firms with specialist knowledge or strict data rules, off-the-shelf AI isn't always enough. We fine-tune open and commercial language models on your documents and data, test them properly against your real tasks, and deploy them where your data stays under your control.",
    format: "On Request",
    features: [
      "Fine-tuning on your documents, data and house style",
      "Evaluation against your real tasks before anything goes live",
      "Private deployment that keeps your data under your control",
      "Ongoing retraining as your knowledge changes"
    ],
    visual: "ml" as const,
    path: "/services/ml-fine-tuning"
  }
];

const Services = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".service-detail-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="AI Marketing & Automation Services | SIX³ Agency"
        description="Build a marketing engine that never sleeps: paid media, AI content, 24/7 AI receptionists and private AI. Start with a two-week, fixed-fee AI Growth Audit."
        canonical="https://six3.agency/services"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6 mt-5">
        <HeroWormhole centered />
        <div className="max-w-7xl mx-auto">
          <div className="services-hero text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-gradient w-fit max-w-5xl pb-1 mx-auto">
              Build a Marketing Engine That Never Sleeps.
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8 mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Bring more leads in, and make sure every single one is answered. Buy one service or all four: they're built to
              integrate seamlessly and multiply your results.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">2 weeks</div>
                <p className="text-sm text-muted-foreground">From audit to a clear plan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">4</div>
                <p className="text-sm text-muted-foreground">Ad channels, one budget</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Every customer answered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light mb-2">1</div>
                <p className="text-sm text-muted-foreground">Team and report for it all</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry offer */}
      <section className="px-6 pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[#a855f7]/40 bg-card p-8 md:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient-glow" />
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <p className="mb-4 text-sm font-medium tracking-[0.25em] uppercase text-gradient w-fit">Start here</p>
                <h2 className="text-4xl md:text-5xl font-light mb-4">The AI Growth Audit</h2>
                <p className="text-2xl font-light text-foreground mb-4">Stop guessing. Start scaling.</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In two weeks, we review your search, ads, content, and lead-handling processes. You get a prioritised
                  roadmap showing exactly where revenue is leaking, what to fix first, and the immediate quick wins you can
                  implement today, whether you hire us or not.
                </p>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3">
                  {["Fixed fee, two-week turnaround.", "Comprehensive review of ads, search, content, and sales workflows.", "Prioritised action plan with a team walk-through."].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block pt-2">
                  <Button className="group px-8 py-4">
                    Book Your Audit
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Our Services at a Glance</h2>
            <div className="h-1 w-24 rounded-full bg-brand-gradient mx-auto" />
          </div>
          <div className="services-grid space-y-16">
            {services.map((service, index) => {
              return (
                <div key={service.number} className={`service-detail-card ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-6xl font-light text-muted-foreground/50">
                          {service.number}
                        </span>
                        <div className="flex-1 h-0.5 bg-brand-gradient" />
                      </div>

                      <div>
                        <span className="mb-4 inline-block rounded-full border border-[#a855f7]/40 px-3 py-1 text-xs font-medium tracking-wide text-gradient">{service.format}</span>
                        <h2 className="text-4xl md:text-5xl font-light mb-4">{service.title}</h2>
                        <p className="text-xl text-muted-foreground mb-6">{service.subtitle}</p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">What's included</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex pt-6 border-t border-border">
                        <Link to={service.path}>
                          <Button className="group px-8 py-4">
                            Learn More
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="media-frame aspect-[4/3]">
                        <ServiceVisual kind={service.visual} label={service.title} className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WormholeCta buttonLabel="Book an AI Growth Audit" />

      <Footer />
    </div>
  );
};

export default Services;