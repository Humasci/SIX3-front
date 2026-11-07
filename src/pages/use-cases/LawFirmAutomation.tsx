import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const LawFirmAutomation = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        title="Law Firm Intake Automation Case Study | SIX³ Agency"
        description="How SIX³ built AI client intake automation for a UK law firm: every enquiry answered, qualified against the firm's criteria and booked, day and night."
        canonical="https://six3.agency/use-cases/law-firm-automation"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/industries/legal" className="text-gradient hover:underline">Law Firms</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-8 text-gradient w-fit pb-1">
              Client intake automation for a UK law firm
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  A growing UK firm was losing potential clients between the first call and the first
                  consultation. We built an AI intake system that answers every enquiry, asks the firm's own
                  questions and books qualified clients in, day and night.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Client:</span>
                    <p className="text-lg">UK law firm (under NDA)</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Project:</span>
                    <p className="text-lg">Client intake automation (Get It Done: AI Agents & Automation)</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Year:</span>
                    <p className="text-lg">2024</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/use-cases/law-firm-automation.webp"
                  alt="SIX³ Agency × confidential legal client"
                  className="media-frame w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">What the system does</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">24/7</div>
              <p className="text-muted-foreground">Enquiries captured, evenings and weekends included</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">Same</div>
              <p className="text-muted-foreground">Qualifying questions asked of every enquiry</p>
            </div>
            <div className="text-center">
              <Scale className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">Direct</div>
              <p className="text-muted-foreground">Consultations booked into fee earners' diaries</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">Once</div>
              <p className="text-muted-foreground">Client details entered once and passed to case management</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="challenges-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The challenge</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The firm was growing, but intake hadn't kept up. Every enquiry was handled by hand, so
                solicitors and paralegals spent time on first conversations that often went nowhere,
                and enquiries that came in after hours waited until the next day.
              </p>
              <div className="space-y-6">
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Manual intake</h3>
                  <p className="text-muted-foreground">Initial screening calls took fee earners away from client work.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Inconsistent qualification</h3>
                  <p className="text-muted-foreground">There was no standard way to judge whether a matter was a fit, so time went on enquiries the firm couldn't take on.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">After-hours enquiries lost</h3>
                  <p className="text-muted-foreground">People who called in the evening or at weekends had no way to give their details or book a consultation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Before</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Intake:</span>
                    <span className="font-medium">By hand, staff-led</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-medium">Varied by who answered</span>
                  </li>
                  <li className="flex justify-between">
                    <span>First response:</span>
                    <span className="font-medium">When someone was free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After hours:</span>
                    <span className="font-medium">Voicemail</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">After</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Intake:</span>
                    <span className="font-medium text-gradient">Guided by an AI assistant</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Qualification:</span>
                    <span className="font-medium text-gradient">The firm's criteria, every time</span>
                  </li>
                  <li className="flex justify-between">
                    <span>First response:</span>
                    <span className="font-medium text-gradient">Immediate</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After hours:</span>
                    <span className="font-medium text-gradient">Captured and booked</span>
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
          <h2 className="text-4xl md:text-5xl font-light mb-12">What we built</h2>
          <div className="space-y-12">
            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">1</div>
                  <h3 className="text-2xl font-medium">AI intake assistant</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A conversational assistant that guides potential clients through the firm's intake questions
                  in plain English and collects the details a fee earner needs before the first call.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Open for enquiries day and night</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Questions set by the firm for each practice area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Connected to the firm's case management system</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Scale className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI intake assistant</p>
                </div>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Lead qualification</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">Consistent qualification</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Each enquiry is checked against the firm's own criteria, so fee earners see the matters they
                  can take on first, and the rest get a clear, polite answer.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Enquiries sorted by fit and urgency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Urgent matters passed to a person straight away</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Automatic follow-up for incomplete enquiries</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Booking and hand-off</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Qualified clients book a consultation straight into the right fee earner's diary, and their
                  details arrive in the case management system ready for the first meeting.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Consultations booked without back-and-forth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">Confirmations and reminders sent automatically</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                    <span className="text-sm">No re-keying of client details</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Booking and hand-off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">How the project ran</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Discover</div>
              <div>
                <h3 className="font-medium mb-2">Mapping intake</h3>
                <p className="text-muted-foreground">We reviewed how enquiries arrived and were handled, spoke to the team and agreed the qualifying questions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Build</div>
              <div>
                <h3 className="font-medium mb-2">Building the assistant</h3>
                <p className="text-muted-foreground">We built the intake assistant and qualification rules around the firm's own criteria.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Connect</div>
              <div>
                <h3 className="font-medium mb-2">Integration and testing</h3>
                <p className="text-muted-foreground">We connected it to the case management system and diaries, then tested it with real scenarios.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Launch</div>
              <div>
                <h3 className="font-medium mb-2">Go-live and tuning</h3>
                <p className="text-muted-foreground">We trained the team, went live and refined the questions based on the enquiries that came in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Is your firm losing enquiries at intake?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review your search, ads, content and intake,
            and show you where enquiries are slipping through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/industries/legal">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                AI for law firms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LawFirmAutomation;
