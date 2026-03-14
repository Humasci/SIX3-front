import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, MapPin, Bell, Users, ArrowRight } from "lucide-react";
import icons from "@/utils/iconGenerator";

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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/services/ai-dev-automation" className="text-accent hover:underline">AI Agent Creation & Workflow Automation</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-8">
              dui.guide — AI-Powered Legal Guidance Platform
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  How dui.guide automated state and county-specific DUI procedural guidance
                  at scale — delivering 24/7 intelligent navigation to users across all 50 states
                  without a single manual lookup.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Client:</span>
                    <p className="text-lg">dui.guide — Media Law Group LLC</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Industry:</span>
                    <p className="text-lg">Legal Information & Compliance</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <p className="text-lg">Sheridan, Wyoming — National Coverage</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Implementation Time:</span>
                    <p className="text-lg">10 weeks</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={icons.duiGuide}
                  alt="dui.guide platform"
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Key Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Bot className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">24/7</div>
              <p className="text-muted-foreground">Automated guidance availability</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">50</div>
              <p className="text-muted-foreground">States with county-level coverage</p>
            </div>
            <div className="text-center">
              <Bell className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">100%</div>
              <p className="text-muted-foreground">Automated deadline and alert delivery</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">3x</div>
              <p className="text-muted-foreground">Increase in attorney directory conversions</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="challenges-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                DUI cases are intensely jurisdiction-specific. Deadlines, court locations, DMV requirements,
                SR-22 obligations, and ignition interlock rules vary dramatically from county to county.
                Users facing a DUI were forced to navigate dozens of fragmented government websites —
                often missing critical deadlines or connecting with the wrong professionals.
              </p>
              <div className="space-y-6">
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Fragmented Information</h3>
                  <p className="text-muted-foreground">Procedural guidance was scattered across state DMV sites, county court portals, and legislative databases — impossible for a layperson to piece together quickly.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Missed Critical Deadlines</h3>
                  <p className="text-muted-foreground">Without centralised deadline tracking, users routinely missed licence reinstatement windows or administrative hearing requests, compounding their legal situation.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Unqualified Attorney Matching</h3>
                  <p className="text-muted-foreground">The existing directory had no intelligent matching — users had no way to identify which attorneys were best suited to their specific charge, county, or budget.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Before AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>User journey to correct info:</span>
                    <span className="font-medium">45+ minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Deadline miss rate:</span>
                    <span className="font-medium">High</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Attorney match quality:</span>
                    <span className="font-medium">Manual / none</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours support:</span>
                    <span className="font-medium">0%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">After AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>User journey to correct info:</span>
                    <span className="font-medium text-accent">&lt; 3 minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Deadline miss rate:</span>
                    <span className="font-medium text-accent">Near zero</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Attorney match quality:</span>
                    <span className="font-medium text-accent">AI-scored</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours support:</span>
                    <span className="font-medium text-accent">24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="solution-section py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The Solution</h2>
          <div className="space-y-12">

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">1</div>
                  <h3 className="text-2xl font-medium">Conversational AI Guidance Agent</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Built a state and county-aware AI agent that walks users through their specific procedural
                  requirements in plain language — pulling from verified government data sources in real time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">County-level jurisdiction detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Step-by-step procedural checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Plain-English explanations of legal requirements</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI Guidance Agent</p>
                </div>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Bell className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Deadline Automation</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">Automated Deadline Tracking & Alerts</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Deployed an automated workflow that monitors jurisdiction-specific filing windows,
                  licence reinstatement deadlines, and court appearance schedules — delivering personalised
                  alerts via email and SMS before time-sensitive windows close.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Multi-channel deadline alerts (email & SMS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Auto-sync with county court calendars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Dynamic timeline builder per charge type</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Intelligent Attorney & Provider Matching</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implemented an AI-driven matching layer over the attorney and service provider directory —
                  scoring and surfacing the most relevant professionals based on the user's specific charge,
                  county, budget, and urgency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Charge and county-weighted attorney scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Automated matching for SR-22 providers and ignition interlock installers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Subscription-tier visibility management</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Provider Matching System</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">Implementation Timeline</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Weeks 1-2</div>
              <div>
                <h3 className="font-medium mb-2">Discovery & Data Architecture</h3>
                <p className="text-muted-foreground">Mapped all 50 state DMV and county court data sources, defined data schemas, and designed the jurisdiction-detection logic.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Weeks 3-6</div>
              <div>
                <h3 className="font-medium mb-2">AI Agent & Workflow Development</h3>
                <p className="text-muted-foreground">Built the conversational guidance agent, deadline tracking automation, and attorney matching algorithms with county-level coverage.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Weeks 7-9</div>
              <div>
                <h3 className="font-medium mb-2">Integration & Quality Assurance</h3>
                <p className="text-muted-foreground">Integrated all systems with the existing site, verified data accuracy against official government sources, and conducted end-to-end testing.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Week 10</div>
              <div>
                <h3 className="font-medium mb-2">Launch & Monitoring Setup</h3>
                <p className="text-muted-foreground">Full deployment with automated monitoring, scheduled data refresh pipelines, and ongoing support handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Build Your AI Agent Platform
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to automate complex, jurisdiction-specific workflows at scale? Let's build the system for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/services/ai-dev-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                AI Automation Service
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
