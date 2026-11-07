import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWormhole } from "@/components/HeroWormhole";
import { WormholeCta } from "@/components/WormholeCta";

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      });

      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef}>
      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-20 px-6">
        <HeroWormhole centered />
        <div className="max-w-7xl mx-auto">
          <div className="about-hero text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-gradient w-fit pb-1 mx-auto">
              About SIX³
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8 mx-auto" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              A London agency that brings search, content and AI automation together, so service businesses get
              found, get chosen and never miss an enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="about-content max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Why SIX³</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Most small and mid-sized businesses buy ads from one supplier, content from another and software from a
            third. Nobody owns the whole journey, so value leaks between the click and the customer: the ad works but
            nobody answers the enquiry, or the reply is fast but the content doesn't convince.
          </p>
          <p className="text-lg text-muted-foreground">
            We started SIX³ to fix that. One team plans, builds and measures the whole system, and each part makes the
            others work harder. That's the ³ in our name: growth that compounds instead of adding up.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-content text-4xl md:text-5xl font-light mb-12 text-center">What we do</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Get found</h3>
              <p className="text-muted-foreground">
                Search and paid media across Google, Meta, LinkedIn and TikTok that bring in the right enquiries, tracked back to the ad.
              </p>
            </div>
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Get chosen</h3>
              <p className="text-muted-foreground">
                AI-produced video, voice and ad content that gives people a reason to pick you, made on a monthly plan.
              </p>
            </div>
            <div className="about-content">
              <h3 className="text-xl font-medium mb-4">Get it done</h3>
              <p className="text-muted-foreground">
                AI agents that answer, qualify and book every enquiry, and automations that take the admin off your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="stats-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">How we work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["Senior people", "The people you meet are the people who do the work."],
              ["Operators, not theorists", "We run our own digital properties, like dui.guide, so we build what we'd use ourselves."],
              ["Practical AI", "We use AI where it saves time or wins customers, and every build has a clear job to do."],
              ["Plain-English reporting", "One monthly report covering ads, content and automation, in language your whole team understands."],
            ].map(([title, text]) => (
              <div key={title} className="stat-item text-center">
                <div className="text-2xl md:text-3xl font-light mb-4">{title}</div>
                <p className="text-lg text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="about-content text-4xl md:text-5xl font-light mb-12 text-center">Who we work with</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Law firms", "Every enquiry answered, new matters qualified, and intake admin taken off fee earners."],
              ["Healthcare practices", "Booking and reminders that run themselves, fewer no-shows and shorter phone queues."],
              ["Estate agents", "Portal leads answered in under a minute, and more valuations and viewings booked."],
              ["Professional services", "More qualified consultations, and client onboarding that doesn't eat billable hours."],
              ["Local businesses", "Found in local search, replying in seconds and filling the diary, even after hours."],
              ["E-commerce brands", "Ads and product content that sell, and automated follow-ups that bring buyers back."],
            ].map(([title, text]) => (
              <div key={title} className="about-content border border-border p-6">
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WormholeCta buttonLabel="Book an AI Growth Audit" />
    </div>
  );
};