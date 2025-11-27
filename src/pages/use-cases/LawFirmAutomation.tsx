import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";

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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/industries/legal" className="text-accent hover:underline">Legal Industry</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-8">
              Legal Firm AI Automation Case Study
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  How a mid-sized personal injury and family law firm reduced administration time by 60% 
                  and increased qualified leads by 40% through AI automation.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Client:</span>
                    <p className="text-lg">Regional Law Firm (25 attorneys)</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Practice Areas:</span>
                    <p className="text-lg">Personal Injury, Family Law, Estate Planning</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Implementation Time:</span>
                    <p className="text-lg">8 weeks</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
                  alt="Legal office"
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
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">60%</div>
              <p className="text-muted-foreground">Reduction in intake administration time</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">40%</div>
              <p className="text-muted-foreground">Increase in qualified leads</p>
            </div>
            <div className="text-center">
              <Scale className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">$150K</div>
              <p className="text-muted-foreground">Annual savings in staff costs</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">25%</div>
              <p className="text-muted-foreground">Improvement in client satisfaction</p>
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
                The firm was experiencing rapid growth but struggling with operational efficiency. 
                Their intake process was entirely manual, requiring attorneys and paralegals to spend 
                significant time on initial client consultations that often didn't convert.
              </p>
              <div className="space-y-6">
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Manual Intake Bottleneck</h3>
                  <p className="text-muted-foreground">Staff spent 3-4 hours daily on initial client screenings, reducing billable hour capacity.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">Inconsistent Lead Qualification</h3>
                  <p className="text-muted-foreground">No standardized process for evaluating case viability led to time wasted on low-value prospects.</p>
                </div>
                <div className="challenge-item">
                  <h3 className="text-xl font-medium mb-2">After-Hours Lead Loss</h3>
                  <p className="text-muted-foreground">Potential clients calling outside business hours had no way to provide case details or schedule consultations.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Before AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Daily intake hours:</span>
                    <span className="font-medium">3-4 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion rate:</span>
                    <span className="font-medium">22%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Response time:</span>
                    <span className="font-medium">24-48 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours capture:</span>
                    <span className="font-medium">0%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">After AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Daily intake hours:</span>
                    <span className="font-medium text-accent">1-1.5 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion rate:</span>
                    <span className="font-medium text-accent">31%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Response time:</span>
                    <span className="font-medium text-accent">Immediate</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours capture:</span>
                    <span className="font-medium text-accent">85%</span>
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
                  <h3 className="text-2xl font-medium">AI-Powered Client Intake System</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Developed a conversational AI system that guides potential clients through an intelligent intake process, 
                  collecting case details and determining viability based on the firm's criteria.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">24/7 availability for client inquiries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Automated case evaluation and scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Integration with existing case management system</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Scale className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI Intake System</p>
                </div>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Lead Scoring System</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">Intelligent Lead Qualification</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implemented machine learning algorithms trained on the firm's historical case data 
                  to automatically score and prioritize leads based on case strength and potential value.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Automatic lead scoring and prioritization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Integration with CRM and calendar systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Automated follow-up sequences</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="solution-step grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Automated Google Ads Optimization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Deployed AI-driven Google Ads campaigns targeting high-intent legal keywords with 
                  automatic bid optimization and ad copy testing for maximum ROI.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Real-time bid optimization based on lead quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">A/B testing of ad copy and landing pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Compliance-focused legal advertising</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-accent/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Ads AI</p>
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
                <h3 className="font-medium mb-2">Discovery & Planning</h3>
                <p className="text-muted-foreground">Analyzed existing intake processes, interviewed staff, and designed custom AI workflows.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Weeks 3-5</div>
              <div>
                <h3 className="font-medium mb-2">AI Development & Training</h3>
                <p className="text-muted-foreground">Built and trained the AI intake system using historical case data and firm-specific criteria.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Weeks 6-7</div>
              <div>
                <h3 className="font-medium mb-2">Integration & Testing</h3>
                <p className="text-muted-foreground">Integrated with existing case management system and conducted comprehensive testing.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">Week 8</div>
              <div>
                <h3 className="font-medium mb-2">Launch & Training</h3>
                <p className="text-muted-foreground">Went live with full staff training and 30-day optimization period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Transform Your Legal Practice
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to achieve similar results? Let's discuss how AI automation can transform your firm's operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/industries/legal">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                Legal Industry Solutions
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