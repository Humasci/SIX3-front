import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Users, Phone, FileText, TrendingUp, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const legalSolutions = [
  {
    icon: Users,
    title: "Client Intake Automation",
    description: "AI-powered client screening and qualification system that processes initial inquiries 24/7",
    benefits: ["60% reduction in manual intake time", "40% increase in qualified leads", "24/7 availability"]
  },
  {
    icon: Phone,
    title: "AI Phone Screening",
    description: "Intelligent call routing and initial consultation scheduling with natural language processing",
    benefits: ["Instant response to client calls", "Automated appointment scheduling", "Lead qualification scoring"]
  },
  {
    icon: FileText,
    title: "Case Management Automation", 
    description: "Streamlined document processing, case tracking, and client communication workflows",
    benefits: ["Automated document generation", "Case progress tracking", "Client update notifications"]
  },
  {
    icon: TrendingUp,
    title: "Google Ads for Legal",
    description: "AI-optimized PPC campaigns targeting high-intent legal keywords and local search",
    benefits: ["Higher quality leads", "Lower cost per acquisition", "Compliance-focused ad copy"]
  }
];

const caseStudyStats = [
  { label: "Administration Time Reduction", value: "60%" },
  { label: "Increase in Qualified Leads", value: "40%" },
  { label: "Annual Savings", value: "$150K" },
  { label: "Client Satisfaction Improvement", value: "25%" }
];

const Legal = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".legal-hero", {
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
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="legal-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Legal & Law Firms</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6">
                AI-Powered Solutions for Legal Practices
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your legal practice with intelligent automation that reduces administrative burden, 
                increases client satisfaction, and drives qualified lead generation through AI-optimized marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <Scale className="w-32 h-32 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Common Challenges in Legal Practices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Time-Consuming Intake</h3>
              <p className="text-muted-foreground">Manual client screening and initial consultations consume valuable attorney time</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Missed Opportunities</h3>
              <p className="text-muted-foreground">Potential clients call outside business hours with no way to get immediate response</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Administrative Overhead</h3>
              <p className="text-muted-foreground">Repetitive paperwork and case management tasks reduce billable hour efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            AI Solutions Built for Legal Professionals
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {legalSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="solution-card bg-card border border-border p-8 rounded-lg">
                  <IconComponent className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-medium mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
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

      {/* Case Study Stats */}
      <section className="stats-section py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyStats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-5xl md:text-6xl font-light mb-4 text-accent">{stat.value}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Based on our case study with a mid-sized law firm specializing in personal injury and family law
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-accent">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Discovery Call</h3>
              <p className="text-muted-foreground text-sm">Understand your practice needs and current challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-accent">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Custom Solution</h3>
              <p className="text-muted-foreground text-sm">Design AI systems tailored to your practice areas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-accent">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Integration</h3>
              <p className="text-muted-foreground text-sm">Seamless setup with your existing case management system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-accent">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Training & Launch</h3>
              <p className="text-muted-foreground text-sm">Team training and go-live support with ongoing optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join leading law firms who have automated their client intake and increased qualified leads by 40%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/use-cases/law-firm-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                View Case Study
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;