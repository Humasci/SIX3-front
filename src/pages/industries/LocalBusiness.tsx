import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Calendar, TrendingUp, Wrench, Droplets } from "lucide-react";
import icons from "@/utils/iconGenerator";
import { HeroWormhole } from "@/components/HeroWormhole";

gsap.registerPlugin(ScrollTrigger);

const localBusinessSolutions = [
  {
    icon: Phone,
    title: "Get it done: AI receptionist",
    description: "An AI receptionist answers every call, message and web enquiry while you're on a job, takes the details and books the work in.",
    benefits: ["Out-of-hours emergencies captured", "Job details and photos collected up front", "Bookings and callbacks logged automatically"]
  },
  {
    icon: Calendar,
    title: "Get it done: booking and reminders",
    description: "Jobs booked into your team's calendars with confirmations, reminders and follow-ups sent automatically.",
    benefits: ["Fewer wasted trips and no-shows", "Confirmations and reminders by SMS", "Review requests sent after every job"]
  },
  {
    icon: TrendingUp,
    title: "Get found: Search & Paid Media",
    description: "Local Google Ads and Meta campaigns for the jobs you want, shown to people in your service area when they need help.",
    benefits: ["Emergency and planned-work campaigns", "Ads shown only in the areas you cover", "Monthly reporting on cost per booked job"]
  },
  {
    icon: MapPin,
    title: "Get chosen: AI Content Studio",
    description: "Short videos, before-and-after content and local ads produced every month, so people trust you before they pick up the phone.",
    benefits: ["Video ads that show your team and your work", "Content for Google, Facebook and Instagram", "AI voiceovers without a studio day"]
  }
];

const businessTypes = [
  {
    title: "Plumbing & Heating",
    icon: "🔧",
    description: "Emergency calls answered, boiler services booked and customers reminded when they're due",
    benefits: ["Every call answered, even under a sink", "Annual service reminders", "More repeat customers"],
    emergencyFeatures: ["Burst pipe and leak calls flagged as urgent", "After-hours calls captured", "On-call engineer alerted straight away"]
  },
  {
    title: "Commercial Cleaning",
    icon: "🏢",
    description: "Quote requests handled quickly, contracts renewed on time and clients kept informed",
    benefits: ["Quotes followed up automatically", "Contract renewal reminders", "Crew schedules shared automatically"],
    emergencyFeatures: ["Urgent clean-up requests routed fast", "Facilities manager updates", "Site access details collected up front"]
  },
  {
    title: "Specialist Cleaning",
    icon: "🏭",
    description: "Urgent call-outs triaged, site details collected and the right crew sent",
    benefits: ["Job details captured before you quote", "Safety information collected up front", "Reports sent to clients automatically"],
    emergencyFeatures: ["Spill and incident calls flagged as urgent", "Incident details recorded", "Emergency crew alerted"]
  },
  {
    title: "Electrical & Trades",
    icon: "⚡",
    description: "Calls answered while you're on the tools, quotes followed up and jobs booked in",
    benefits: ["No more missed calls on site", "Quote follow-ups sent automatically", "Reviews requested after each job"],
    emergencyFeatures: ["Power-loss calls flagged as urgent", "After-hours enquiries captured", "Callbacks booked for the next free slot"]
  }
];

const LocalBusiness = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".local-business-hero", {
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

      gsap.from(".business-type-card", {
        scrollTrigger: {
          trigger: ".business-types-section",
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
        title="AI Marketing for Local Businesses | SIX³ Agency"
        description="AI marketing for local businesses and trades: local ads that bring the right jobs, and an AI receptionist that answers every call and books the work in."
        canonical="https://six3.agency/industries/local-business"
      />
      <Header />

      {/* Hero Section */}
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-16 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <div className="local-business-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 icon-gradient" />
                <span className="text-gradient font-medium">Local Service Businesses</span>
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-light mb-6 text-gradient w-fit pb-1">
                AI marketing for local businesses: answer every call, book every job
              </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When you're on a job, you can't answer the phone. That missed call is often the next
                customer. We bring in local jobs, help people choose you, and make sure every call and
                message is answered and booked.
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
                src={icons.localBusiness}
                alt="Local Service Business"
                className="media-frame w-full max-w-lg ml-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="business-types-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Built for the way your business runs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((businessType, index) => (
              <div key={index} className="business-type-card bg-card border border-border p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{businessType.icon}</div>
                  <h3 className="text-2xl font-medium">{businessType.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{businessType.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">What changes:</h4>
                  <ul className="space-y-2">
                    {businessType.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-[#f97316]">Urgent calls:</h4>
                  <ul className="space-y-2">
                    {businessType.emergencyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]/100" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
            Where local businesses lose jobs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Missed calls</h3>
              <p className="text-muted-foreground">Customers ring while you're on a job or after hours. If nobody answers, they call the next name on Google.</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Ads nobody manages</h3>
              <p className="text-muted-foreground">Local ads left running without checks spend money on the wrong areas and the wrong searches.</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Evenings spent on admin</h3>
              <p className="text-muted-foreground">Quotes, bookings and reminders get done late at night, or don't get done at all.</p>
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
            {localBusinessSolutions.map((solution, index) => {
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

      {/* Emergency Response Features */}
      <section className="py-16 px-6 bg-[#f97316]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-[#f97316]" />
                <span className="text-[#f97316] font-medium">Urgent calls</span>
              </div>
              <h2 className="text-4xl font-light mb-6">Never miss an emergency call</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Emergency jobs are often the most valuable, and they go to whoever answers first. The AI
                receptionist spots urgent calls, takes the details and alerts whoever is on call, day or night.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f97316]" />
                  <span>Urgent calls recognised and flagged</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f97316]" />
                  <span>On-call team member alerted straight away</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f97316]" />
                  <span>Your call-out rates explained up front</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f97316]" />
                  <span>Customer kept updated by text</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <Phone className="w-24 h-24 icon-gradient" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO & Google Ads */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="icon-tile aspect-[4/3] w-full max-w-lg ml-auto flex items-center justify-center">
                <MapPin className="w-24 h-24 icon-gradient" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-light mb-6">Get found by local customers</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get Found: Search & Paid Media puts you in front of people in your service area at the moment
                they need help, and tracks which ads turn into booked jobs.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Urgent searches</h3>
                  <p className="text-muted-foreground">Reach people searching "emergency plumber", "electrician near me" and other urgent local searches</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Your service area only</h3>
                  <p className="text-muted-foreground">Ads shown in the towns and postcodes you cover, so you don't pay for clicks you can't serve</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Spend that follows results</h3>
                  <p className="text-muted-foreground">Budget moved towards the campaigns that bring booked jobs, reported every month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">What you can count on</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-gradient">24/7</div>
              <p className="text-lg text-muted-foreground">Every call and message answered</p>
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-brand-gradient text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Stop losing jobs to missed calls
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Start with an AI Growth Audit. In two weeks we review your ads, online presence and how you handle
            enquiries, and give you a prioritised plan with quick wins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Book an AI Growth Audit
              </Button>
            </Link>
            <Link to="/services/search-marketing-ppc">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-glow hover:text-[#0d0d26] hover:border-glow">
                See Search & Paid Media
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalBusiness;
