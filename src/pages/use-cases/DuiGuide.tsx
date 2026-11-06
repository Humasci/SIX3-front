import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Bell, Users, ArrowRight } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const DuiGuide = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".case-study-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".challenge-item", {
        scrollTrigger: {
          trigger: ".challenges-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
      });

      gsap.from(".solution-step", {
        scrollTrigger: {
          trigger: ".solution-section",
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="dui.guide: Our AI Legal Guidance Platform | SIX³ Agency"
        description="dui.guide is our own AI legal guidance platform: county-level DUI guidance, deadline alerts and attorney matching, built and run by SIX³ since 2025."
        canonical="https://six3.agency/use-cases/dui-guide"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/services/ai-dev-automation" className="text-gradient hover:underline">AI Agents & Automation</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Our own platform</span>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-8 text-gradient w-fit pb-1">
              dui.guide: our AI legal guidance and directory platform
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  dui.guide is a digital property we built and run ourselves. AI agents give people
                  facing a DUI plain-English guidance for their state and county, track their deadlines
                  and match them with the right attorneys. We build for clients what we'd use ourselves.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Platform:</span>
                    <p className="text-lg">dui.guide, our own property (Media Law Group LLC)</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Industry:</span>
                    <p className="text-lg">Legal Information & Compliance</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <p className="text-lg">Sheridan, Wyoming, with national US coverage</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Years:</span>
                    <p className="text-lg">2025–2026</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Website:</span>
                    <p className="text-lg">
                      <a href="https://dui.guide" target="_blank" rel="noopener" className="text-gradient hover:underline">
                        dui.guide
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/use-cases/media-publisher-directory-dui-guide.webp"
                  alt="SIX³ Agency × dui.guide"
                  className="media-frame w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="challenges-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The problem</h2>
          <div className="max-w-3xl">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                DUI cases depend heavily on where they happen. Deadlines, court locations, DMV requirements,
                SR-22 obligations and ignition interlock rules change from county to county. People facing
                a DUI had to piece it together from scattered government websites, and often missed
                deadlines or found the wrong professional.
              </p>
              <div className="space-y-6">
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Scattered information</h3>
                  <p className="text-muted-foreground">Guidance was spread across state DMV sites, county court portals and legislative databases. Hard for anyone without legal training to piece together quickly.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Missed deadlines</h3>
                  <p className="text-muted-foreground">With no single place to track deadlines, people missed licence reinstatement windows and hearing requests, which made their situation worse.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Poor attorney matching</h3>
                  <p className="text-muted-foreground">The directory had no matching, so people couldn't tell which attorneys suited their charge, county or budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="solution-section py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">What we built</h2>
          <div className="space-y-12">

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">1</div>
                  <h3 className="text-2xl font-medium">AI guidance agent</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  An AI agent that knows the user's state and county and walks them through what they need
                  to do, in plain language, using verified government data sources.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">County-level jurisdiction detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Step-by-step procedural checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Plain-English explanations of legal requirements</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI guidance agent</p>
                </div>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Bell className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Deadline alerts</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">Deadline tracking and alerts</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  An automated workflow that tracks local filing windows, licence reinstatement deadlines
                  and court dates, and sends personalised reminders by email and SMS before each one closes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Multi-channel deadline alerts (email & SMS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Auto-sync with county court calendars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Dynamic timeline builder per charge type</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Attorney and provider matching</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI matching on top of the attorney and service provider directory, showing the most relevant
                  professionals for the user's charge, county, budget and urgency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Charge and county-weighted attorney scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Automated matching for SR-22 providers and ignition interlock installers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Subscription-tier visibility management</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Provider matching</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">How we built it</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Discover</div>
              <div>
                <h3 className="font-medium mb-2">Data sources and structure</h3>
                <p className="text-muted-foreground">Mapped state DMV and county court data sources, defined how the data is structured and designed the logic that works out each user's jurisdiction.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Build</div>
              <div>
                <h3 className="font-medium mb-2">Agent and workflows</h3>
                <p className="text-muted-foreground">Built the guidance agent, deadline tracking and attorney matching, with county-level coverage.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Test</div>
              <div>
                <h3 className="font-medium mb-2">Integration and checks</h3>
                <p className="text-muted-foreground">Connected everything to the site, checked the data against official government sources and tested the full journey.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Launch</div>
              <div>
                <h3 className="font-medium mb-2">Launch and monitoring</h3>
                <p className="text-muted-foreground">Went live with automated monitoring and scheduled data refreshes, and we keep improving it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Want AI agents that do real work?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we find where enquiries and time are leaking, and show you which AI agents and automations would fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/services/ai-dev-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                See AI Agents & Automation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DuiGuide;
