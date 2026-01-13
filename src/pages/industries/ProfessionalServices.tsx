import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calculator, TrendingUp, Users, FileText, Phone } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const professionalSolutions = [
  {
    icon: Calculator,
    title: "Client Onboarding Automation",
    description: "Streamlined client intake process with automated document collection and compliance checks",
    benefits: ["Faster client setup", "Reduced paperwork errors", "Compliance automation"]
  },
  {
    icon: Phone,
    title: "AI Lead Qualification",
    description: "Intelligent screening system that qualifies prospects based on service needs and budget",
    benefits: ["Higher quality leads", "Time savings on consultations", "Better client matching"]
  },
  {
    icon: FileText,
    title: "Document Processing AI",
    description: "Automated review and processing of financial documents, applications, and reports",
    benefits: ["Faster document review", "Error reduction", "Improved accuracy"]
  },
  {
    icon: TrendingUp,
    title: "Google Ads for Professionals",
    description: "AI-optimized campaigns targeting high-value clients seeking professional services",
    benefits: ["Premium client acquisition", "Local market targeting", "ROI optimization"]
  }
];

const serviceTypes = [
  {
    title: "Accounting Firms",
    icon: "📊",
    description: "Automated bookkeeping, tax preparation workflows, and client communication systems",
    benefits: ["Streamlined tax season", "Automated client updates", "Document management"],
    useCases: ["Tax preparation automation", "Bookkeeping client onboarding", "Compliance tracking"]
  },
  {
    title: "Financial Advisors", 
    icon: "💰",
    description: "Investment portfolio management, client risk assessment, and advisory automation",
    benefits: ["Portfolio optimization", "Risk analysis automation", "Client reporting"],
    useCases: ["Investment advisory automation", "Retirement planning workflows", "Client risk profiling"]
  },
  {
    title: "Immigration Consultants",
    icon: "🌍", 
    description: "Visa application processing, document verification, and client status tracking",
    benefits: ["Application tracking", "Document verification", "Status updates"],
    useCases: ["Visa application automation", "Document checklist management", "Client communication"]
  },
  {
    title: "Business Consultants",
    icon: "💼",
    description: "Client assessment automation, proposal generation, and project management",
    benefits: ["Faster assessments", "Automated proposals", "Project tracking"],
    useCases: ["Business analysis automation", "Client assessment workflows", "Proposal generation"]
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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="professional-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Professional Services</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6">
                AI Automation for Professional Service Firms
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline client operations, automate routine tasks, and focus on high-value advisory work 
                with intelligent automation tailored for accounting, consulting, and financial advisory firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Automate Your Practice
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    View Our Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={icons.professionalServices}
                alt="Professional Services"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="service-types-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Specialized Solutions by Service Type
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
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {serviceType.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Common Use Cases:</h4>
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
            Common Professional Service Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Manual Documentation</h3>
              <p className="text-muted-foreground">Time-consuming document review, data entry, and client file management</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Client Communication</h3>
              <p className="text-muted-foreground">Constant status updates, appointment scheduling, and follow-up communications</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Lead Qualification</h3>
              <p className="text-muted-foreground">Difficulty identifying high-value prospects and qualifying client needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            AI-Powered Professional Service Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {professionalSolutions.map((solution, index) => {
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

      {/* Compliance Focus */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FileText className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-4xl font-light mb-6">Compliance & Security First</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our professional service AI solutions are built with industry compliance standards in mind, 
                ensuring your client data remains secure while automating complex workflows.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span>SOC 2 Type II compliant data handling</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span>Encrypted client communications and file storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span>Audit trails for all automated processes</span>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span>Industry-specific compliance monitoring</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-32 h-32 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Professional Service Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">50%</div>
              <p className="text-lg text-muted-foreground">Reduction in Admin Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">35%</div>
              <p className="text-lg text-muted-foreground">Increase in Billable Hours</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">80%</div>
              <p className="text-lg text-muted-foreground">Faster Client Onboarding</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">90%</div>
              <p className="text-lg text-muted-foreground">Client Satisfaction Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Calculator className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-medium mb-2">Tax & Accounting</h3>
              <p className="text-sm text-muted-foreground">CPA firms, tax preparers, bookkeeping services</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-medium mb-2">Financial Advisory</h3>
              <p className="text-sm text-muted-foreground">Investment advisors, wealth management, insurance</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-medium mb-2">Immigration Services</h3>
              <p className="text-sm text-muted-foreground">Visa consultants, immigration lawyers, document services</p>
            </div>
            <div className="text-center p-6">
              <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-medium mb-2">Business Consulting</h3>
              <p className="text-sm text-muted-foreground">Strategy consultants, management advisory, business coaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Scale Your Professional Practice?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join professional service firms who have reduced administrative time by 50% and 
            increased billable hours by 35% with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Schedule Professional Services Consultation
              </Button>
            </Link>
            <Link to="/services/ai-dev-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                View Automation Services
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