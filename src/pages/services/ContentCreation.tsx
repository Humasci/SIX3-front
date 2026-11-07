import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Video } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";

gsap.registerPlugin(ScrollTrigger);

const ContentCreation = () => {
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
        title="AI Video Production & Content Studio | SIX³ Agency"
        description="AI video ads, explainers, avatar presenters, voiceovers and translations on a monthly plan for UK businesses, made with consent. Start with an AI Growth Audit."
        canonical="https://six3.agency/services/content-creation"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12 grid lg:grid-cols-[minmax(0,1fr)_400px] gap-x-12 gap-y-8 items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gradient w-fit pb-1 lg:col-start-1">
              AI Content Studio
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full lg:col-start-1 -mt-4" />
            <div className="media-frame aspect-[4/3] w-full max-w-md lg:max-w-none lg:col-start-2 lg:row-start-1 lg:row-span-3">
              <ServiceVisual kind="video" label="AI Content Studio" className="w-full h-full" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl lg:col-start-1">
              Video, voice and ad content that makes people pick you. Ads, explainers and social clips with AI
              presenters, voiceovers and translations, produced every month in your brand's look and voice.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm lg:col-start-1">
              <div>
                <p className="text-muted-foreground mb-1">Format</p>
                <p>Monthly content packs</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Output</p>
                <p>Video, voice, ad creative</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Avatars & voices</p>
                <p>Only with consent</p>
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
            A monthly content plan, not a one-off shoot
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Plan the month</h3>
              <p className="text-muted-foreground">
                We agree a content plan around your offers, audiences and ad campaigns: which videos, for which
                channels, in which languages. We write the scripts and you approve them.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Set up your look and voice</h3>
              <p className="text-muted-foreground">
                We set up your brand style, presenters and voices. Choose a stock AI presenter, or an avatar or voice
                clone of someone on your team, which we only create with that person's written consent and only use
                for your brand.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Produce & review</h3>
              <p className="text-muted-foreground">
                We produce the pack: video ads, explainers, social clips and voiceovers. A person checks every piece
                for accuracy, brand and tone, and nothing goes out without your sign-off.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Version, test & refresh</h3>
              <p className="text-muted-foreground">
                We cut each piece for every channel, size and language, test it in your ads and use the results to
                shape next month's pack, so the budget goes to the creative that works.
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
            The video you need, without the filming days
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Most businesses know they need more video but never have the time to film it. Shoots are slow and
            costly, and a single video soon wears out in an ad account. Our AI Content Studio gives you a steady
            supply of video, voice and ad content in your brand's look and voice, so you can explain what you do,
            build trust before the first call and keep your ads fresh.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• AI video ads, explainers and social clips</li>
            <li>• Avatar presenters and voiceovers, with your consent and branding</li>
            <li>• Translations and versions for every channel and language</li>
            <li>• Creative testing linked to your ad results</li>
            <li>• Scripts written for your customers and approved by you</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Monthly</div>
            <p className="text-xl text-muted-foreground">New content packs, planned around your campaigns</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">Consent</div>
            <p className="text-xl text-muted-foreground">Given before we create any avatar or voice clone</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Why it works <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" />
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Creative that earns<br />its budget
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Presenters and voices, with consent</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Presenters and voiceovers that look and sound like your brand. We only make an avatar or voice clone
                of a real person with that person's explicit consent, and we only use it for content you approve.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Every channel, every language</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                One script becomes versions for YouTube, Meta, TikTok, LinkedIn and your website, in the sizes each
                one needs and in the languages your customers speak.
              </p>
            </div>

            <div className="advantage-card border-t-gradient pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Linked to your ads and enquiries</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                With Get Found, every piece is tested in your campaigns and the winners get the budget. With Get It
                Done, the people your content wins over are answered and booked straight away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Find out where better content would win you more customers
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

export default ContentCreation;
