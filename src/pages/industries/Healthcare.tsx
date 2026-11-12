import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Calendar, Phone, Users, Clock, Shield } from "lucide-react";
import icons from "@/utils/iconGenerator";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const healthcareSolutions = [
  {
    icon: Calendar,
    title: "Online booking and reminders",
    description: "Patients book, move and cancel appointments at any hour. Reminders go out automatically and freed-up slots are offered to the waiting list.",
    benefits: ["Booking open 24/7", "Automatic reminders by SMS and email", "Cancelled slots offered to the next patient"]
  },
  {
    icon: Phone,
    title: "AI receptionist",
    description: "An AI receptionist answers calls, chat and email, handles routine questions and books appointments, so your front desk isn't stuck in a phone queue.",
    benefits: ["Shorter phone queues at peak times", "Routine questions answered on the spot", "Clinical or urgent calls passed straight to your team"]
  },
  {
    icon: Shield,
    title: "AI Content Studio",
    description: "Treatment explainers, clinician introductions and ads produced each month, so patients understand what you offer and trust you before they book.",
    benefits: ["Treatment and aftercare videos", "AI voiceovers and translations for diverse patient groups", "Content that stays within advertising rules"]
  },
  {
    icon: Users,
    title: "Search & Paid Media",
    description: "Google Ads and paid social for the treatments you want to grow, aimed at people near your clinic, with tracking from search to booking.",
    benefits: ["Campaigns by treatment and location", "Landing pages that lead to a booking", "Monthly reporting on cost per new patient"]
  }
];

const specialties = [
  {
    title: "Dental Practices",
    icon: "🦷",
    description: "Recall reminders, new patient enquiries and private treatment campaigns for implants, aligners and whitening",
    benefits: ["Fewer missed appointments", "Automatic recall and hygiene reminders", "Emergency appointment requests handled out of hours"]
  },
  {
    title: "Private Clinics",
    icon: "🏥",
    description: "Enquiry handling, online booking and follow-up for private GP, physio, aesthetics and specialist clinics",
    benefits: ["Every enquiry answered quickly", "Online booking that patients use", "Follow-up after each appointment"]
  },
  {
    title: "Specialist & Surgical Practices",
    icon: "⚕️",
    description: "Consultation booking, pre-appointment information and aftercare messages for higher-value treatments",
    benefits: ["Consultation requests qualified before they reach you", "Pre-op information sent on time", "Aftercare check-ins sent automatically"]
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
      <PageSEO
        title="AI Marketing & Automation for Clinics | SIX³ Agency"
        description="AI marketing and automation for clinics and dental practices: fewer no-shows, shorter phone queues and ads that fill the diary with the right patients."
        canonical="https://six3.agency/industries/healthcare"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="healthcare-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 icon-gradient" />
                <span className="text-gradient font-medium">Clinics & Healthcare Practices</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6 text-gradient w-fit pb-1">
                AI marketing and automation for clinics: fewer no-shows, shorter phone queues
              </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your front desk shouldn't spend the morning on hold music and reminder calls. We bring in
                patients for the treatments you want to grow, help them choose you, and handle booking,
                reminders and routine questions automatically.
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
                src={icons.healthcare}
                alt="Healthcare Technology"
                className="media-frame w-full max-w-lg ml-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Built around how your practice runs
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
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
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
            Where clinics lose time and patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Phone queues</h3>
              <p className="text-muted-foreground">Reception spends the day on calls about opening times, prices and rebooking, while patients wait on hold.</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">No-shows</h3>
              <p className="text-muted-foreground">Missed and late-cancelled appointments leave gaps in the diary that nobody has time to fill.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Too few of the right patients</h3>
              <p className="text-muted-foreground">Private treatments need steady new enquiries, and many of those arrive when the clinic is closed.</p>
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
            {healthcareSolutions.map((solution, index) => {
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

      {/* Data Protection */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-16 h-16 icon-gradient mb-6" />
              <h2 className="text-4xl font-light mb-6">Patient data handled with care</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Health data needs more care than most. We design every build around data protection law (such as GDPR) and your
                clinic's own policies, and our AI never gives medical advice: it books, reminds and
                passes clinical questions to your team.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 icon-gradient" />
                  <span>Only the data each task needs is collected</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 icon-gradient" />
                  <span>A clear record of every automated message</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 icon-gradient" />
                  <span>Private AI option: models deployed privately for strict data rules</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <Shield className="w-24 h-24 icon-gradient" />
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
              <p className="text-lg text-muted-foreground">Booking and enquiries answered, evenings and weekends included</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">&lt;1 min</div>
              <p className="text-lg text-muted-foreground">First reply to a new patient enquiry</p>
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Free up your front desk
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review how patients find you, book and turn up,
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

export default Healthcare;
