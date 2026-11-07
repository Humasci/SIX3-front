import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Phone, Users, TrendingUp, MessageSquare, Calendar } from "lucide-react";
import icons from "@/utils/iconGenerator";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const realEstateSolutions = [
  {
    icon: Phone,
    title: "Get it done: instant lead follow-up",
    description: "An AI agent replies to every Rightmove, Zoopla and website enquiry within a minute, asks the right questions and books the viewing or valuation.",
    benefits: ["First reply in under a minute, day and night", "Buyer, seller and landlord questions asked every time", "Hot leads passed to the right negotiator"]
  },
  {
    icon: MessageSquare,
    title: "Get chosen: AI Content Studio",
    description: "Property videos, area guides and valuation ads produced every month, so vendors and landlords see why they should list with you.",
    benefits: ["Video walk-throughs and voiceovers for listings", "Valuation and instruction-winning ads", "Local area content for your site and social"]
  },
  {
    icon: Calendar,
    title: "Get it done: viewings and valuations booked",
    description: "Viewings and valuation appointments booked straight into negotiators' diaries, with confirmations and reminders sent automatically.",
    benefits: ["No back-and-forth to find a time", "Reminders that cut wasted trips", "Every lead and booking logged in your CRM"]
  },
  {
    icon: TrendingUp,
    title: "Get found: Search & Paid Media",
    description: "Google Ads and Meta campaigns aimed at vendors and landlords in your patch, with tracking from click to instruction.",
    benefits: ["Valuation campaigns by postcode", "Google, Meta, LinkedIn and TikTok managed in one place", "Monthly reporting on cost per valuation"]
  }
];

const caseStudyStats = [
  { label: "First reply to a new portal or website lead", value: "<1 min" },
  { label: "Every enquiry answered, evenings and weekends included", value: "24/7" },
  { label: "Ad channels managed: Google, Meta, LinkedIn, TikTok", value: "4" },
  { label: "Team running your ads, content and automation", value: "1" }
];

const RealEstate = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".realestate-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".solution-card", {
        scrollTrigger: {
          trigger: ".solutions-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="AI Marketing for Estate Agents | SIX³ Agency"
        description="AI marketing for estate agents: valuation ads, property video and an AI agent that replies to every portal lead in under a minute and books the viewing."
        canonical="https://six3.agency/industries/real-estate"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="realestate-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 icon-gradient" />
                <span className="text-gradient font-medium">Estate & Letting Agents</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6 text-gradient w-fit pb-1">
                AI marketing for estate agents: reply to every lead in under a minute
              </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Portal leads go cold in hours. Buyers enquire with three agents and book with whoever
                replies first. We win more valuations, help vendors choose you, and answer every enquiry
                before your competitors see it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Book an AI Growth Audit
                  </Button>
                </Link>
                <Link to="/use-cases/real-estate-lead-system">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    See an example system
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src={icons.realEstate}
                alt="Real Estate"
                className="media-frame w-full max-w-lg ml-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Where agencies lose instructions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Slow portal follow-up</h3>
              <p className="text-muted-foreground">Rightmove and Zoopla leads arrive in the evening and get a reply the next day, after another agent has called.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Time spent on the wrong leads</h3>
              <p className="text-muted-foreground">Negotiators chase browsers while vendors ready to sell wait for a call back.</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Booking ping-pong</h3>
              <p className="text-muted-foreground">Calls and emails back and forth to arrange viewings and valuations, then no-shows on the day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            More leads in, every lead answered
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {realEstateSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="solution-card bg-card border border-border p-8 rounded-lg">
                  <IconComponent className="w-12 h-12 icon-gradient mb-6" />
                  <h3 className="text-2xl font-medium mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">What the system does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">{stat.value}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              See how we'd build a lead system for an independent sales and lettings agency, step by step.
            </p>
            <Link to="/use-cases/real-estate-lead-system">
              <Button variant="outline">See the example system</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Market Focus */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Win more valuations in your patch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get Found: Search & Paid Media puts your agency in front of local vendors and landlords
                when they're deciding who to call, and tracks which campaigns lead to instructions.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Postcode targeting</h3>
                  <p className="text-muted-foreground">Campaigns aimed at the streets and postcodes you cover, not the whole county.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">High-intent searches</h3>
                  <p className="text-muted-foreground">Reach people searching "estate agents near me", "free valuation" and "letting agents" in your area.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Spend that follows results</h3>
                  <p className="text-muted-foreground">We move budget towards the campaigns that bring valuations, not just clicks, and report on it every month.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <TrendingUp className="w-24 h-24 icon-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Stop losing leads to the agent who replied first
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review your ads, content and lead handling,
            and give you a prioritised plan with quick wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/services/search-marketing-ppc">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                See Search & Paid Media
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstate;
