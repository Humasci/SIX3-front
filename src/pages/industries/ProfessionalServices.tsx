import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calculator, TrendingUp, Users, FileText, Phone } from "lucide-react";
import icons from "@/utils/iconGenerator";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const professionalSolutions = [
  {
    icon: Calculator,
    title: "Get it done: client onboarding",
    description: "New clients complete their details, upload documents and pass your checks online, with reminders sent until everything is in.",
    benefits: ["Onboarding without the email chase", "Missing documents requested automatically", "Details sent straight to your practice software"]
  },
  {
    icon: Phone,
    title: "Get it done: AI receptionist and qualification",
    description: "An AI receptionist answers calls, chat and email, asks what the prospect needs and books a call with the right person.",
    benefits: ["Every enquiry answered, day and night", "Prospects qualified on service, size and timing", "Discovery calls booked into the right diary"]
  },
  {
    icon: FileText,
    title: "Get chosen: AI Content Studio",
    description: "Explainer videos, insight pieces and ads that show your expertise, produced every month so prospects know you before the first call.",
    benefits: ["Short videos on the questions clients ask", "AI presenters and voiceovers in your firm's voice", "Content for LinkedIn, your site and ads"]
  },
  {
    icon: TrendingUp,
    title: "Get found: Search & Paid Media",
    description: "Google Ads and LinkedIn campaigns aimed at the clients you want, with tracking from first click to signed engagement letter.",
    benefits: ["Campaigns by service line and sector", "LinkedIn targeting by role and company size", "Monthly reporting on cost per qualified enquiry"]
  }
];

const serviceTypes = [
  {
    title: "Accountancy Practices",
    icon: "📊",
    description: "Steady new-client enquiries, smooth onboarding and fewer chasers at year end and self-assessment deadlines",
    benefits: ["Calmer deadline seasons", "Automatic client reminders", "Documents collected in one place"],
    useCases: ["Self-assessment and year-end reminders", "New client onboarding and checks", "Ads for bookkeeping, payroll and tax services"]
  },
  {
    title: "Financial Advisers",
    icon: "💰",
    description: "Better-fit enquiries, fact-find collection before the first meeting and regular client contact, with advice left to you",
    benefits: ["Prospects qualified before the first meeting", "Fact-find details gathered in advance", "Review meetings booked automatically"],
    useCases: ["Enquiry qualification and booking", "Pre-meeting fact-find collection", "Annual review reminders"]
  },
  {
    title: "Immigration Consultants",
    icon: "🌍",
    description: "Enquiry handling in several languages, document checklists and case status updates for clients",
    benefits: ["Enquiries answered in the client's language", "Document checklists sent automatically", "Status updates without the phone calls"],
    useCases: ["Multilingual AI receptionist", "Document checklist management", "Case update messages"]
  },
  {
    title: "Business Consultants",
    icon: "💼",
    description: "Content that builds authority, qualified discovery calls and faster proposals",
    benefits: ["A steady flow of thought-leadership content", "Discovery calls with the right prospects", "Proposal drafts from your own templates"],
    useCases: ["LinkedIn content and ads", "Discovery call qualification", "Proposal drafting"]
  }
];

const ProfessionalServices = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".professional-hero", {
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

      gsap.from(".service-type-card", {
        scrollTrigger: {
          trigger: ".service-types-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.6,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="AI Marketing for Professional Services | SIX³ Agency"
        description="AI marketing for professional services firms: ads and content that attract better-fit clients, and automation that answers, qualifies and onboards them."
        canonical="https://six3.agency/industries/professional-services"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="professional-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 icon-gradient" />
                <span className="text-gradient font-medium">Professional Services</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6 text-gradient w-fit pb-1">
                AI marketing for professional services firms: better-fit clients, less admin
              </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your best people spend too long on enquiries that go nowhere and paperwork that should run itself.
                We bring in the clients you want, show them why to choose you, and automate the answering,
                qualifying and onboarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Book an AI Growth Audit
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    See our services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                src={icons.professionalServices}
                alt="Professional Services"
                className="media-frame w-full max-w-lg ml-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="service-types-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Built around how your firm works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((serviceType, index) => (
              <div key={index} className="service-type-card bg-card border border-border p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{serviceType.icon}</div>
                  <h3 className="text-2xl font-medium">{serviceType.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{serviceType.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">What changes:</h4>
                  <ul className="space-y-2">
                    {serviceType.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">What we typically build:</h4>
                  <ul className="space-y-2">
                    {serviceType.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                        <span className="text-sm text-muted-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Where firms lose time and clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Paperwork and chasing</h3>
              <p className="text-muted-foreground">Collecting documents, re-keying details and chasing clients take hours that should be billed.</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Slow replies</h3>
              <p className="text-muted-foreground">New enquiries wait until a partner is free, and good prospects sign with whoever answered first.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">The wrong enquiries</h3>
              <p className="text-muted-foreground">Too many calls from prospects who aren't a fit, and too few from the clients you want.</p>
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
            {professionalSolutions.map((solution, index) => {
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

      {/* Compliance Focus */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FileText className="w-16 h-16 icon-gradient mb-6" />
              <h2 className="text-4xl font-light mb-6">Client confidentiality comes first</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your clients trust you with sensitive information. We design every build around UK GDPR and
                your firm's own policies, and keep regulated advice with your people, not the AI.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 icon-gradient" />
                  <span>Only the data each task needs is collected</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 icon-gradient" />
                  <span>Access limited to the people who need it</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 icon-gradient" />
                  <span>A clear record of every automated step</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 icon-gradient" />
                  <span>Private AI: models trained on your own knowledge and deployed privately</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <Briefcase className="w-24 h-24 icon-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">What you can count on</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">24/7</div>
              <p className="text-lg text-muted-foreground">Every enquiry answered, evenings and weekends included</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">&lt;1 min</div>
              <p className="text-lg text-muted-foreground">First reply to a new enquiry</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">4</div>
              <p className="text-lg text-muted-foreground">Ad channels managed: Google, Meta, LinkedIn, TikTok</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">1</div>
              <p className="text-lg text-muted-foreground">Team running your ads, content and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Who we work with</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Calculator className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <h3 className="font-medium mb-2">Tax & Accounting</h3>
              <p className="text-sm text-muted-foreground">Accountancy practices, tax advisers, bookkeepers</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <h3 className="font-medium mb-2">Financial Advice</h3>
              <p className="text-sm text-muted-foreground">Financial advisers, wealth managers, insurance brokers</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <h3 className="font-medium mb-2">Immigration Services</h3>
              <p className="text-sm text-muted-foreground">Immigration advisers, immigration solicitors, document services</p>
            </div>
            <div className="text-center p-6">
              <Briefcase className="w-12 h-12 icon-gradient mx-auto mb-4" />
              <h3 className="font-medium mb-2">Consulting</h3>
              <p className="text-sm text-muted-foreground">Strategy consultants, management advisers, business coaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Spend your time on clients, not admin
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review your search, ads, content and lead handling,
            and give you a prioritised plan with quick wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/services/ai-dev-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                See AI Agents & Automation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalServices;
