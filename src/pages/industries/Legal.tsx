import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Users, Phone, FileText, TrendingUp, Clock } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const legalSolutions = [
  {
    icon: TrendingUp,
    title: "Search & Paid Media",
    description: "Google Ads and paid social for the matters you want more of, with landing pages and call tracking so you know which enquiries became instructions.",
    benefits: ["Campaigns by practice area and location", "SRA-aware ad copy and landing pages", "Monthly reporting from click to instruction"]
  },
  {
    icon: Users,
    title: "AI Content Studio",
    description: "Short videos, explainers and ads that answer the questions clients ask before they pick a solicitor, produced on a monthly content plan.",
    benefits: ["\"What happens next\" videos for each practice area", "AI presenters and voiceovers in your firm's style", "Content you can reuse on your site, ads and social"]
  },
  {
    icon: Phone,
    title: "AI receptionist and intake",
    description: "An AI receptionist answers calls, chat and email, asks your intake questions and books consultations straight into fee earners' diaries.",
    benefits: ["Every enquiry answered, day and night", "Qualified against your own criteria", "Urgent matters passed to a person straight away"]
  },
  {
    icon: FileText,
    title: "Case workflows",
    description: "Automations that move client details into your case management system, chase missing documents and keep clients updated without manual re-keying.",
    benefits: ["Client details logged once, not three times", "Document requests and reminders sent automatically", "Private AI option for firms with strict data rules"]
  }
];

const caseStudyStats = [
  { label: "Every enquiry answered, evenings and weekends included", value: "24/7" },
  { label: "First reply to a new enquiry", value: "<1 min" },
  { label: "Ad channels managed: Google, Meta, LinkedIn, TikTok", value: "4" },
  { label: "Team running your ads, content and automation", value: "1" }
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
      <PageSEO
        title="AI Automation for Law Firms | SIX³ Agency"
        description="AI automation for law firms: ads that bring the right matters, content that wins trust and an AI receptionist that answers and books every enquiry."
        canonical="https://six3.agency/industries/legal"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6 mt-5">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="legal-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-8 h-8 icon-gradient" />
                <span className="text-gradient font-medium">Law Firms</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6 text-gradient w-fit pb-1">
                AI automation for law firms: answer, qualify and book every enquiry
              </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Most firms don't lack enquiries. They lose them to missed calls, slow replies and intake that
                waits for someone to be free. We bring in the right matters, help clients choose you, and make
                sure every enquiry is answered and booked, day and night.
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
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <Scale className="w-24 h-24 icon-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Where law firms lose new clients
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Slow intake</h3>
              <p className="text-muted-foreground">Enquiries wait in a shared inbox until a fee earner has time. By then the client has called another firm.</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Missed calls</h3>
              <p className="text-muted-foreground">People look for a solicitor in the evening and at weekends. If nobody answers, they move on.</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Admin that eats fee-earning time</h3>
              <p className="text-muted-foreground">Re-keying client details, chasing documents and sending updates take hours that should be billed.</p>
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
            {legalSolutions.map((solution, index) => {
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

      {/* Case Study Stats */}
      <section className="stats-section py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">What you can count on</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyStats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">{stat.value}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              We built client intake automation for a UK law firm in 2024. They're under NDA, so we don't name them or publish their figures.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            How we work with your firm
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gradient">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">AI Growth Audit</h3>
              <p className="text-muted-foreground text-sm">Two weeks reviewing your search, ads, content and intake to find where enquiries leak</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gradient">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Build</h3>
              <p className="text-muted-foreground text-sm">We launch the campaigns, content and intake automation the audit prioritises</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gradient">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Connect</h3>
              <p className="text-muted-foreground text-sm">We link everything to your case management system, diaries and phone line</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-light text-gradient">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Compound</h3>
              <p className="text-muted-foreground text-sm">We improve it every month and report on enquiries, consultations and instructions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Find out where your firm is losing enquiries
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks you get a clear view of your ads, content and intake, and a prioritised plan to fix the gaps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/use-cases/law-firm-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                See the law firm project
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
