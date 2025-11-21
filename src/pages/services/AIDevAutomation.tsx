import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Workflow, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AIDevAutomation = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="hero-content mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              AI Dev / Automation
            </h1>
            <div className="aspect-video w-full bg-secondary mb-8 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop"
                alt="AI Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p>New York</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p>2025</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Lead</p>
                <p>AI Team</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Category</p>
                <p>Development</p>
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
              <Brain className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -01</p>
              <h3 className="text-2xl font-light mb-4">Discovery & Analysis</h3>
              <p className="text-muted-foreground">
                We analyze your workflows, identify automation opportunities, and map out AI solutions that will maximize efficiency and scale your operations.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Code2 className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -02</p>
              <h3 className="text-2xl font-light mb-4">Custom Development</h3>
              <p className="text-muted-foreground">
                Our expert developers build tailored AI solutions using cutting-edge technologies, ensuring seamless integration with your existing systems.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Workflow className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -03</p>
              <h3 className="text-2xl font-light mb-4">Testing & Optimization</h3>
              <p className="text-muted-foreground">
                Rigorous testing ensures accuracy and reliability. We refine algorithms and workflows until every automation performs flawlessly in real-world scenarios.
              </p>
            </div>

            <div className="step-card border border-border p-8 bg-background">
              <Rocket className="w-12 h-12 mb-6 text-accent" />
              <p className="text-sm text-muted-foreground mb-4">Step -04</p>
              <h3 className="text-2xl font-light mb-4">Deployment & Support</h3>
              <p className="text-muted-foreground">
                Smooth deployment with comprehensive training and ongoing support. We ensure your team maximizes the value of AI automation from day one.
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
            Intelligent Solutions That Scale Your Business Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Transform your business with custom AI development and intelligent automation. We design and build AI-powered solutions that streamline workflows, enhance decision-making, and unlock new capabilities — from chatbots and process automation to predictive analytics and custom machine learning applications.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground max-w-3xl">
            <li>• Automate repetitive tasks and free up valuable resources</li>
            <li>• Leverage AI for smarter, faster decision-making</li>
            <li>• Scale operations without proportional cost increases</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">85+</div>
            <p className="text-xl text-muted-foreground">AI Solutions Deployed</p>
          </div>
          <div>
            <div className="text-7xl md:text-8xl font-light mb-4">60%</div>
            <p className="text-xl text-muted-foreground">Average Time Saved</p>
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
            Where Innovation<br />Meets Practical Solutions
          </h2>

          <div className="space-y-12">
            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="text-3xl font-light mb-4">Custom AI Solutions</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                No generic templates — every solution is built specifically for your unique business needs, workflows, and goals. We create AI that fits your operation perfectly.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="text-3xl font-light mb-4">Seamless Integration</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our AI solutions integrate smoothly with your existing tech stack, preserving your current workflows while enhancing them with intelligent automation.
              </p>
            </div>

            <div className="advantage-card border-t border-border pt-8">
              <div className="text-5xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="text-3xl font-light mb-4">Continuous Evolution</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                AI that learns and improves over time. We provide ongoing optimization and updates to ensure your automation stays cutting-edge and delivers maximum value.
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
              Automate with AI
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDevAutomation;
