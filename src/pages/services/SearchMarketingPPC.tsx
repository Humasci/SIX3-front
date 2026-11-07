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

const SearchMarketingPPC = () => {
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
        title="Google Ads & Paid Media Management | SIX³ Agency"
        description="Google Ads, Meta, LinkedIn and TikTok run as one budget, with landing pages and call tracking for UK service businesses. Start with an AI Growth Audit."
        canonical="https://six3.agency/services/search-marketing-ppc"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              Search & Paid Media
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <ServiceVisual kind="search" label="Search & Paid Media" className="w-full h-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:col-start-1">
              Campaigns that bring in the right enquiries, not just more clicks. Google Ads, Meta, LinkedIn and
              TikTok run as one budget, with landing pages and tracking that show what every enquiry costs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
              <div>
                <p className="text-muted-foreground mb-1">Format</p>
                <p>Monthly</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Channels</p>
                <p>4 on one budget</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Reporting</p>
                <p>Cost per enquiry</p>
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
            Audit, build, then improve every month
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Audit & plan</h3>
              <p className="text-muted-foreground">
                We start with your AI Growth Audit: what you spend, what it brings in, where enquiries leak and which
                searches your competitors are winning. You get a channel plan and a budget split you can see the
                reasoning behind.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Build & track</h3>
              <p className="text-muted-foreground">
                We set up or rebuild your campaigns, write the ads, build landing pages around one clear offer, and
                install conversion and call tracking so every enquiry traces back to the ad that brought it in.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Launch & test</h3>
              <p className="text-muted-foreground">
                Campaigns go live with tests built in: headlines, offers, audiences and creative. Search terms and
                placements that waste money are cut early, before they eat the budget.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Optimise & report</h3>
              <p className="text-muted-foreground">
                Every month we move budget towards what produces enquiries, refresh the creative and send a
                plain-English report: what you spent, what it bought and what we're changing next.
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
            Know what your ad spend is buying
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Most service businesses already spend on ads. The money leaks after the click: campaigns nobody
            optimises, landing pages that don't convert, and no clear line from spend to enquiries. We plan Google
            Ads, Meta, LinkedIn and TikTok as one budget, fix the path from the search to the enquiry form, and
            track every lead back to the ad that brought it in.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Campaign strategy, build and management across Google Ads, Meta, LinkedIn and TikTok</li>
            <li>• Landing pages and offers designed to convert</li>
            <li>• Conversion and call tracking so you can see cost per enquiry</li>
            <li>• Monthly optimisation, testing and reporting</li>
          </ul>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Why it works <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            One budget.<br />One system.
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Four channels, one budget</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                We plan Google, Meta, LinkedIn and TikTok together and move money to whichever channel is producing
                enquiries, instead of defending four separate budgets. Senior people run your account and explain
                every change.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Every lead answered</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                An ad is only as good as the reply. Add Get It Done and every enquiry your campaigns bring in is
                answered by an AI receptionist in under a minute, qualified and booked into your calendar, day or
                night.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Fresh creative every month</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Ads wear out. With Get Chosen, our AI Content Studio supplies new video and ad creative every month,
                and your campaign results decide which versions earn more of the budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Start with a two-week audit of your ads and enquiries
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

export default SearchMarketingPPC;
