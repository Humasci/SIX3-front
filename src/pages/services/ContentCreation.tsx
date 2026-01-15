import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Video, Bot, Mic } from "lucide-react";
import icons from "@/utils/iconGenerator";

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
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              Generative AI Video & Audio
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src={icons.video}
                alt="AI Generated Content"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p>London</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p>2025</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Lead</p>
                <p>AI Production Team</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Category</p>
                <p>AI Content Generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="steps-section py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Simple process -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Clear, & Effective Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="step-card border border-border p-8 bg-background">
              <User className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Creative Brief & Planning</h3>
              <p className="text-muted-foreground">
                Content strategy development with brand analysis and compliance, script development and approval, plus visual design and storyboarding.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Bot className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">AI Model Configuration</h3>
              <p className="text-muted-foreground">
                Avatar appearance customization, voice profile optimization, brand alignment verification, and technical setup completion for AI content generation.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Video className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Production & Generation</h3>
              <p className="text-muted-foreground">
                AI content generation with quality control and refinement, brand compliance review, client preview and feedback for optimal results.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Mic className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Post-Production & Delivery</h3>
              <p className="text-muted-foreground">
                Final editing and optimization, multiple format generation, usage guidelines documentation, and asset delivery with training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Overview -
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-8 max-w-3xl">
            AI Avatars and Generative Models for Unique Multimedia Content
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            AI avatar creation and animation, voice cloning and synthesis, custom video content generation, UGC campaign automation, and brand-aligned content production with multi-language content localization.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• AI avatar creation and realistic animation</li>
            <li>• Voice cloning and synthesis technology</li>
            <li>• UGC campaign automation and video ads</li>
            <li>• Multi-language content localization</li>
            <li>• Brand-aligned content production at scale</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">$1.5K+</div>
            <p className="text-xl text-muted-foreground">Starting Investment</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">4K</div>
            <p className="text-xl text-muted-foreground">Video Quality Standard</p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="advantages-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">
            Our Advantage -
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-2xl">
            Where Creativity<br />Meets Strategy
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">AI Avatar Technology</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Custom AI avatar creation with realistic animation, talking head presentations, product demos, and brand-aligned visual design for maximum impact.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Voice Cloning & Synthesis</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Advanced voice cloning technology for narration, voiceovers, podcast content, and UGC campaigns with studio-quality audio production.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">UGC Campaign Automation</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Automated creation of video ads and UGC campaigns for paid media, customer testimonials, reviews, and social content at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-12">
            Let's work Together
          </h2>
          <Link to="/contact">
            <Button variant="outline" className="rounded-full px-12 py-6 text-lg border-foreground hover:bg-foreground hover:text-background">
              Start AI Content Creation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentCreation;
