import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceVisual } from "@/components/ServiceVisual";

gsap.registerPlugin(ScrollTrigger);

const servicePreviews = [
  {
    number: "01",
    title: "AI-Driven Search & Paid Media",
    shortDescription: "Stop wasting ad spend on manual guesswork.",
    description: "We deploy advanced machine learning algorithms to optimise bids in real time, pinpoint high-value audiences, and dominate your market across Google, Meta, LinkedIn, and TikTok.",
    features: [
      "Google Ads, Meta, LinkedIn and TikTok, planned as one budget",
      "Landing pages built to turn visits into leads and sales",
      "Conversion tracking so you know which ads bring customers",
      "Monthly optimisation and plain-English reporting"
    ],
    path: "/services/search-marketing-ppc",
    visual: "search" as const
  },
  {
    number: "02",
    title: "Generative Video & Audio",
    shortDescription: "High-production multimedia, at a fraction of the cost.",
    description: "From ultra-realistic AI avatars to localised voice cloning, we generate hyper-engaging video ads and UGC campaigns designed to stop the scroll and drive conversions.",
    features: [
      "AI video ads and social content on a monthly plan",
      "Avatar presenters and voiceovers in your brand's voice",
      "Translations and versions for every channel and language",
      "Creative tested in your ads, so the winners get the budget"
    ],
    path: "/services/content-creation",
    visual: "video" as const
  },
  {
    number: "03",
    title: "Custom AI Agents & Workflow Automation",
    shortDescription: "Meet your new 24/7 autonomous workforce.",
    description: "We build bespoke AI systems that handle the heavy lifting so your team doesn't have to, including call centre automation, instant lead follow-ups, and complex, industry-specific workflows.",
    features: [
      "AI receptionists for phone, chat and email",
      "Lead qualification and booking straight into your calendar",
      "Client intake, follow-ups and CRM updates on autopilot",
      "Built around the tools you already use"
    ],
    path: "/services/ai-dev-automation",
    visual: "agents" as const
  }
];

export const ServicePreviews = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible initially  
      gsap.set([".service-preview-header", ".service-preview-card"], { opacity: 1 });
      
      // Simple animations without complex triggers
      gsap.fromTo(".service-preview-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".service-preview-card", 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="service-preview-header mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">What we do <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" /></p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
            AI Solutions That Actually<br />
            Move the Needle
          </h2>
        </div>

        <div className="service-previews-grid space-y-12">
          {servicePreviews.map((service, index) => (
            <div key={service.number} className={`service-preview-card border border-border/50 rounded-lg hover:border-accent/30 transition-all duration-500 bg-card hover:shadow-lg`}>
              <div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-light text-gradient">
                      {service.number}
                    </span>
                    <div className="flex-1 h-0.5 bg-brand-gradient" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-light mb-4">{service.title}</h3>
                  <p className="text-xl font-medium text-foreground mb-3">{service.shortDescription}</p>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Key Features</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex">
                    <Link to={service.path}>
                      <Button variant="outline" className="group px-6 py-3">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="media-frame aspect-[4/3] flex items-center justify-center">
                    {service.visual ? (
                      <ServiceVisual kind={service.visual} label={service.title} className="w-full h-full" />
                    ) : (
                      <div className="text-center">
                        <div className="text-6xl font-light text-accent/30 mb-4">{service.number}</div>
                        <div className="text-xl text-muted-foreground">{service.title.split(' ').slice(-2).join(' ')}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-foreground hover:bg-brand-gradient-button hover:text-white hover:border-transparent hover:shadow-[0_0_32px_-10px_rgba(249,115,22,0.6)]">
              Start with an AI Growth Audit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};