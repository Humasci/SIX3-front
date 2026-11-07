import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroWormhole } from "@/components/HeroWormhole";
import { WormholeCta } from "@/components/WormholeCta";
import { ArrowUpRight, Bot, Briefcase, Clapperboard, Home, Scale, Search, ShoppingBag, Stethoscope, Store } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Search, title: "Search & Paid Media", to: "/services/search-marketing-ppc", text: "Campaigns across Google, Meta, LinkedIn and TikTok that bring in the right customers, with every sale and lead tracked back to the ad." },
  { icon: Clapperboard, title: "AI Content Studio", to: "/services/content-creation", text: "AI-produced video, voice and ad content that gives people a reason to choose you, made on a monthly plan." },
  { icon: Bot, title: "AI Agents & Automation", to: "/services/ai-dev-automation", text: "AI agents that answer customers, qualify leads and book them in, plus automations that take the admin off your team." },
];

const principles = [
  ["Senior people", "The people you meet are the people who do the work."],
  ["Operators, not theorists", "We run our own digital properties, like dui.guide, so we build what we'd use ourselves."],
  ["Practical AI", "We use AI where it saves time or wins customers, and every build has a clear job to do."],
  ["Plain-English reporting", "One monthly report covering ads, content and automation, in language your whole team understands."],
];

const sectors = [
  { icon: ShoppingBag, title: "E-commerce brands", text: "Ads and product content that sell, and automated follow-ups that bring buyers back for a second order." },
  { icon: Scale, title: "Law firms", text: "Every new client answered, new matters qualified, and intake admin taken off fee earners." },
  { icon: Stethoscope, title: "Healthcare practices", text: "Booking and reminders that run themselves, fewer no-shows and shorter phone queues." },
  { icon: Home, title: "Estate agents", text: "Portal leads answered in under a minute, and more valuations and viewings booked." },
  { icon: Briefcase, title: "Professional services", text: "More qualified consultations, and client onboarding that doesn't eat billable hours." },
  { icon: Store, title: "Local businesses", text: "Found in local search, replying in seconds and filling the diary, even after hours." },
];

// Eyebrow label, heading and gradient rule used by every section on the page
const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="about-content mb-12 text-center">
    <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gradient w-fit mx-auto">{eyebrow}</p>
    <h2 className="text-4xl md:text-5xl font-light mb-6">{title}</h2>
    <div className="h-1 w-24 rounded-full bg-brand-gradient mx-auto" />
  </div>
);

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
              A Brighton-based agency bringing search, content and AI automation together, so service businesses and
              e-commerce brands win more customers and never let a lead go cold.
            </p>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(124,58,237,0.22),transparent_55%),radial-gradient(ellipse_at_85%_90%,rgba(249,115,22,0.14),transparent_55%)]" aria-hidden="true" />
        <div className="about-content relative max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Our story" title="Why SIX³" />
          <p className="text-lg text-muted-foreground mb-6">
            Most small and mid-sized businesses buy ads from one supplier, content from another and software from a
            third. Nobody owns the whole journey, so value leaks between the click and the customer: the ad works but
            nobody follows up the lead, or the reply is fast but the content doesn't convince.
          </p>
          <p className="text-lg text-muted-foreground">
            We started SIX³ to fix that. One team plans, builds and measures the whole system, and each part makes the
            others work harder.
          </p>
          <p className="mt-10 text-3xl md:text-4xl font-light leading-snug text-foreground">
            That's the <span className="text-gradient">cubed</span> in our name: growth that compounds instead of
            adding up.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Services" title="What we do" />
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map(({ icon: Icon, title, text, to }) => (
              <Link
                key={title}
                to={to}
                className="about-content group relative overflow-hidden rounded-2xl border border-[#a855f7]/25 bg-card/60 p-8 transition-[border-color,box-shadow] duration-300 hover:border-[#a855f7]/60 hover:shadow-[0_24px_60px_-28px_rgba(124,58,237,0.7)]"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-gradient-glow opacity-60 transition-opacity group-hover:opacity-100" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a855f7]/40 bg-[#7c3aed]/10">
                  <Icon className="icon-gradient h-7 w-7" />
                </div>
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-muted-foreground mb-6">{text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gradient">
                  Learn more <ArrowUpRight className="h-4 w-4 text-[#f97316] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="stats-section relative overflow-hidden py-24 px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(249,115,22,0.14),transparent_50%),radial-gradient(ellipse_at_10%_90%,rgba(168,85,247,0.2),transparent_55%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading eyebrow="Principles" title="How we work" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map(([title, text], i) => (
              <div key={title} className="stat-item rounded-2xl border border-border bg-background/40 p-7 backdrop-blur-sm">
                <div className="mb-5 text-4xl font-light text-gradient w-fit">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Sectors" title="Who we work with" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="about-content group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-[#a855f7]/50"
              >
                <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[#7c3aed] via-[#f97316] to-glow opacity-50 transition-opacity group-hover:opacity-100" />
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="icon-gradient h-6 w-6" />
                  <h3 className="text-xl font-medium">{title}</h3>
                </div>
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