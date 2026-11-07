import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, TrendingUp, Users, Phone, ArrowRight } from "lucide-react";
import icons from "@/utils/iconGenerator";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const RealEstateLeadSystem = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-study-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".result-item", {
        scrollTrigger: {
          trigger: ".results-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="AI Lead System for Estate Agents: Example | SIX³ Agency"
        description="How we'd build an AI lead system for estate agents: portal leads answered in under a minute, buyers and vendors qualified, viewings and valuations booked."
        canonical="https://six3.agency/use-cases/real-estate-lead-system"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/industries/real-estate" className="text-gradient hover:underline">Estate Agents</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Example system</span>
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-light mb-8 text-gradient w-fit pb-1">
              How we'd build an AI lead system for an estate agency
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  This is an example, not a client result. It shows how we'd combine ads, content and
                  automation for a typical independent agency, so every portal and website lead gets a fast
                  reply and the serious ones end up in a negotiator's diary.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Example agency:</span>
                    <p className="text-lg">Independent sales and lettings agency</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Lead sources:</span>
                    <p className="text-lg">Rightmove, Zoopla, website, Google and Meta ads</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Where we'd start:</span>
                    <p className="text-lg">AI Growth Audit, then a phased build</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  loading="lazy"
                  decoding="async"
                  src={icons.realEstate}
                  alt="Real estate office"
                  className="media-frame w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="results-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">What the system does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="result-item text-center">
              <TrendingUp className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">&lt;1 min</div>
              <p className="text-muted-foreground">First reply to a new portal or website lead</p>
            </div>
            <div className="result-item text-center">
              <Phone className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">24/7</div>
              <p className="text-muted-foreground">Evening and weekend enquiries answered</p>
            </div>
            <div className="result-item text-center">
              <Home className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">4</div>
              <p className="text-muted-foreground">Ad channels managed: Google, Meta, LinkedIn, TikTok</p>
            </div>
            <div className="result-item text-center">
              <Users className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">Every</div>
              <p className="text-muted-foreground">Lead, booking and conversation logged in your CRM</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The problem it solves</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Buyers and tenants enquire with several agents at once, often in the evening. The agent who
                replies first usually gets the viewing. Meanwhile negotiators spend their day chasing leads
                by phone and email, and vendors ready to sell wait in the queue.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Slow portal follow-up</h3>
                  <p className="text-muted-foreground">Rightmove and Zoopla leads sit in an inbox until someone is free to call.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">No way to sort leads</h3>
                  <p className="text-muted-foreground">Serious buyers, vendors and landlords get the same treatment as casual browsers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Evenings and weekends</h3>
                  <p className="text-muted-foreground">Enquiries that arrive after the office closes wait until the next working day.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">A typical agency today</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>First reply:</span>
                    <span className="font-medium">When a negotiator is free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-medium">On the phone, if at all</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Follow-up:</span>
                    <span className="font-medium">Manual calls and emails</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After hours:</span>
                    <span className="font-medium">Next working day</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">With the system</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>First reply:</span>
                    <span className="font-medium text-gradient">Under a minute</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-medium text-gradient">Same questions, every lead</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Follow-up:</span>
                    <span className="font-medium text-gradient">Automatic, until they book</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After hours:</span>
                    <span className="font-medium text-gradient">Answered and booked</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">How we'd build it</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">1</div>
                  <h3 className="text-2xl font-medium">Instant reply and qualification</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  An AI agent replies to every new lead by text, email or chat within a minute, asks what they
                  need, and sorts buyers, vendors, landlords and tenants by how ready they are to move.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Budget, area and timing asked in conversation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Mortgage and chain position checked for buyers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Vendors and landlords passed to a negotiator straight away</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <Users className="w-16 h-16 text-accent/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <Phone className="w-16 h-16 text-accent/40" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">Follow-up and booking</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Leads who aren't ready yet get useful follow-up, such as matching properties and local market
                  updates, until they are. When they're ready, they book a viewing or valuation themselves.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Matching properties sent as they come on</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Viewings and valuations booked into negotiators' diaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Reminders to cut no-shows</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Ads and content that win instructions</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Local Google and Meta campaigns aimed at vendors and landlords, backed by property videos and
                  valuation ads from our AI Content Studio, with tracking from click to instruction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Valuation campaigns by postcode</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Property and area videos produced monthly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Budget moved towards campaigns that bring valuations</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Breakdown */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">How the three parts work together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Bring leads in</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">Search & Paid Media:</span> local ads for vendors and landlords</li>
                <li><span className="font-medium">Landing pages</span> built to book valuations</li>
                <li><span className="font-medium">Tracking</span> from click to instruction</li>
              </ul>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Win the instruction</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">AI Content Studio:</span> property and area videos</li>
                <li><span className="font-medium">Valuation ads</span> that show why to list with you</li>
                <li><span className="font-medium">Voiceovers</span> without a studio day</li>
              </ul>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Answer every lead</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">AI Agents & Automation:</span> instant replies to every lead</li>
                <li><span className="font-medium">Qualification</span> and booking without the phone tag</li>
                <li><span className="font-medium">CRM updates</span> made automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Want a system like this for your agency?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review your portal leads, ads, content and follow-up,
            and give you a prioritised plan with quick wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/industries/real-estate">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                AI for estate agents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateLeadSystem;
