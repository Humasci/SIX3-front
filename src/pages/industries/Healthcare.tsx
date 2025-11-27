import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Calendar, Phone, Users, Clock, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const healthcareSolutions = [
  {
    icon: Calendar,
    title: "AI Patient Scheduling",
    description: "Intelligent appointment booking system that handles patient scheduling, reminders, and rescheduling 24/7",
    benefits: ["40% faster patient processing", "Reduced no-show rates", "24/7 booking availability"]
  },
  {
    icon: Phone,
    title: "AI Phone Screening",
    description: "Automated patient intake and triage system that collects symptoms and medical history",
    benefits: ["Streamlined check-in process", "Better appointment preparation", "Reduced wait times"]
  },
  {
    icon: Shield,
    title: "Insurance Verification",
    description: "Automated insurance verification and pre-authorization processing",
    benefits: ["Faster claim processing", "Reduced billing errors", "Improved cash flow"]
  },
  {
    icon: Users,
    title: "Patient Lead Generation",
    description: "AI-optimized Google Ads targeting patients seeking specific treatments in your area",
    benefits: ["Higher quality patient leads", "Treatment-specific targeting", "Local market reach"]
  }
];

const specialties = [
  {
    title: "Dental Practices",
    icon: "🦷",
    description: "Automated appointment scheduling, patient reminders, and treatment follow-up sequences",
    benefits: ["Reduce missed appointments", "Automated treatment reminders", "Emergency scheduling"]
  },
  {
    title: "Medical Clinics", 
    icon: "🏥",
    description: "Patient intake automation, insurance verification, and care coordination",
    benefits: ["Streamlined patient flow", "Faster check-in process", "Better care coordination"]
  },
  {
    title: "Surgical Practices",
    icon: "⚕️", 
    description: "Pre-op coordination, patient education, and post-surgical care automation",
    benefits: ["Improved pre-op preparation", "Better patient outcomes", "Reduced complications"]
  }
];

const Healthcare = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".healthcare-hero", {
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

      gsap.from(".specialty-card", {
        scrollTrigger: {
          trigger: ".specialties-section",
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
          <div className="healthcare-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Healthcare</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6">
                AI Automation for Healthcare Practices
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Streamline patient care, reduce administrative burden, and improve patient satisfaction 
                with intelligent automation designed specifically for healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Improve Patient Experience
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    View Healthcare Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
                alt="Healthcare Technology"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Specialized Solutions by Practice Type
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card bg-card border border-border p-8 rounded-lg text-center">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-2xl font-medium mb-4">{specialty.title}</h3>
                <p className="text-muted-foreground mb-6">{specialty.description}</p>
                <ul className="space-y-2">
                  {specialty.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Common Healthcare Practice Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Administrative Overload</h3>
              <p className="text-muted-foreground">Staff spending too much time on scheduling, paperwork, and phone calls</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Missed Appointments</h3>
              <p className="text-muted-foreground">No-shows and last-minute cancellations affecting practice revenue</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Patient Acquisition</h3>
              <p className="text-muted-foreground">Difficulty attracting new patients in competitive healthcare markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            AI-Powered Healthcare Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {healthcareSolutions.map((solution, index) => {
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

      {/* HIPAA Compliance */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-4xl font-light mb-6">HIPAA Compliant & Secure</h2>
              <p className="text-lg text-muted-foreground mb-6">
                All our healthcare AI solutions are built with HIPAA compliance at the core, ensuring 
                patient data privacy and security while delivering exceptional automation capabilities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>End-to-end encryption for all patient communications</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Secure data storage with audit trails</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Regular security assessments and compliance updates</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <Shield className="w-32 h-32 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Healthcare Practice Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">40%</div>
              <p className="text-lg text-muted-foreground">Faster Patient Processing</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">30%</div>
              <p className="text-lg text-muted-foreground">Reduction in No-Shows</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">24/7</div>
              <p className="text-lg text-muted-foreground">Patient Support Availability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">95%</div>
              <p className="text-lg text-muted-foreground">Patient Satisfaction Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Transform Your Healthcare Practice
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join healthcare providers who have improved patient satisfaction by 95% and 
            reduced administrative overhead by 40% with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Schedule Healthcare Consultation
              </Button>
            </Link>
            <Link to="/services/ai-dev-automation">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                View AI Automation Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;