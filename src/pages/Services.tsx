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
    title: "Get Found: Search & Paid Media",
    subtitle: "Campaigns that bring in the right enquiries, not just more clicks",
    description: "We plan Google Ads, Meta, LinkedIn and TikTok as one budget, build landing pages that turn visits into enquiries, and track every lead back to the ad that brought it in. You get monthly optimisation and a plain-English report on what your spend is buying.",
    format: "Monthly",
    features: [
      "Campaign strategy, build and management across four channels",
      "Landing pages and offers designed to convert",
      "Conversion and call tracking so you can see cost per enquiry",
      "Monthly optimisation, testing and reporting"
    ],
    visual: "search" as const,
    path: "/services/search-marketing-ppc"
  },
  {
    number: "02",
    title: "Get Chosen: AI Content Studio",
    subtitle: "Video, voice and ad content that makes people pick you",
    description: "Most businesses know they need more video but never have the time to film it. We produce ads, explainers and social content with AI presenters, voiceovers and translations, on a monthly plan, in your brand's look and voice. Creative is tested in your ads, so the winners get the budget.",
    format: "Monthly content packs",
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
    title: "Get It Done: AI Agents & Automation",
    subtitle: "AI that answers, qualifies and books every enquiry, day and night",
    description: "Missed calls and slow replies quietly lose you customers. We build AI receptionists for phone, chat and email that answer straight away, ask the right questions, book qualified people into your calendar and update your CRM. Then we look after them on a monthly care plan.",
    format: "Build, then monthly care plan",
    features: [
      "AI receptionists for phone, website chat and email",
      "Lead qualification, booking and reminders",
      "Client intake, follow-ups and CRM workflows",
      "Integrations with the tools you already use"
    ],
    visual: "agents" as const,
    path: "/services/ai-dev-automation"
  },
  {
    number: "04",
    title: "Private AI: Custom Models",
    subtitle: "AI trained on your own knowledge, deployed privately",
    description: "For firms with specialist knowledge or strict data rules, off-the-shelf AI isn't always enough. We fine-tune open and commercial language models on your documents and data, test them properly against your real tasks, and deploy them where your data stays under your control.",
    format: "By enquiry",
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
        description="Search and paid media, AI video content, AI receptionists and automation, and private AI models for UK businesses. Start with a two-week AI Growth Audit."
        canonical="https://six3.agency/services"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6 mt-5">
        <HeroWormhole centered />
        <div className="max-w-7xl mx-auto">
          <div className="services-hero text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-gradient w-fit pb-1 mx-auto">
              Services
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8 mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Bring more leads in, and make sure every one gets answered. Buy one part or all three: they're built to work together,
              so each one makes the others work harder.
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
                <p className="text-sm text-muted-foreground">Every enquiry answered</p>
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
                <h2 className="text-4xl md:text-5xl font-light mb-4">AI Growth Audit</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In two weeks we review your search, ads, content and how you handle enquiries. You get a prioritised
                  plan showing where growth is leaking, what to fix first and what it's worth, plus quick wins you can
                  act on straight away, whether or not you work with us afterwards.
                </p>
              </div>
              <div className="space-y-4">
                <ul className="space-y-3">
                  {["Fixed fee, two weeks", "Ads, search, content and lead handling reviewed", "Prioritised plan and quick wins", "Walk-through call with your team"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block pt-2">
                  <Button className="group px-8 py-4">
                    Book your audit
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