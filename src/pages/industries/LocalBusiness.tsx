import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Calendar, TrendingUp, Wrench, Droplets } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const localBusinessSolutions = [
  {
    icon: Phone,
    title: "24/7 AI Phone Answering",
    description: "Never miss an emergency call or booking opportunity with intelligent call screening and routing",
    benefits: ["Capture after-hours emergencies", "Instant quote generation", "Appointment scheduling"]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling System",
    description: "Automated booking system that manages technician calendars, route optimization, and customer confirmations",
    benefits: ["Optimized route planning", "Reduced travel time", "Automated confirmations"]
  },
  {
    icon: TrendingUp,
    title: "Local Google Ads",
    description: "Hyper-local PPC campaigns targeting emergency services and scheduled maintenance in your service area",
    benefits: ["Emergency call capture", "Local market dominance", "High-intent lead generation"]
  },
  {
    icon: MapPin,
    title: "Service Area Optimization",
    description: "AI-powered geographic targeting and service area expansion recommendations",
    benefits: ["Maximize coverage efficiency", "Identify growth opportunities", "Competitive analysis"]
  }
];

const businessTypes = [
  {
    title: "Plumbing Services",
    icon: "🔧",
    description: "Emergency call handling, maintenance scheduling, and customer follow-up automation",
    benefits: ["24/7 emergency response", "Maintenance reminders", "Customer retention"],
    emergencyFeatures: ["Burst pipe emergency routing", "After-hours call capture", "Priority scheduling"]
  },
  {
    title: "Commercial Cleaning", 
    icon: "🏢",
    description: "Contract management, scheduling optimization, and quality assurance automation",
    benefits: ["Contract renewal automation", "Quality reporting", "Crew scheduling"],
    emergencyFeatures: ["Emergency cleanup dispatch", "Facility management alerts", "Compliance tracking"]
  },
  {
    title: "Industrial Cleaning",
    icon: "🏭", 
    description: "Safety compliance, equipment tracking, and specialized service coordination",
    benefits: ["Safety protocol automation", "Equipment maintenance", "Compliance reporting"],
    emergencyFeatures: ["Hazmat response protocols", "Safety incident reporting", "Emergency crew dispatch"]
  },
  {
    title: "Pool Services",
    icon: "🏊",
    description: "Seasonal scheduling, chemical monitoring, and maintenance automation",
    benefits: ["Seasonal optimization", "Chemical tracking", "Equipment maintenance"],
    emergencyFeatures: ["Equipment failure alerts", "Chemical emergency response", "Leak detection services"]
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
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="local-business-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Local Service Businesses</span>
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-light mb-6">
                AI Automation for Service-Based Local Businesses
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Never miss an emergency call, optimize your service routes, and dominate your local market 
                with AI-powered automation designed for plumbers, cleaners, and service professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Get More Service Calls
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    View Local Business Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={icons.localBusiness}
                alt="Local Service Business"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="business-types-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Specialized Solutions by Business Type
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
                  <h4 className="font-medium mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {businessType.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-red-600">Emergency Features:</h4>
                  <ul className="space-y-2">
                    {businessType.emergencyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
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
            Common Local Business Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Missed Emergency Calls</h3>
              <p className="text-muted-foreground">Lost revenue from after-hours emergencies when customers can't reach you</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Inefficient Routing</h3>
              <p className="text-muted-foreground">Wasted time and fuel from poor scheduling and route planning</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Manual Scheduling</h3>
              <p className="text-muted-foreground">Time-consuming booking process affecting customer experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            AI-Powered Local Business Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {localBusinessSolutions.map((solution, index) => {
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

      {/* Emergency Response Features */}
      <section className="py-16 px-6 bg-red-50 dark:bg-red-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-red-600" />
                <span className="text-red-600 font-medium">Emergency Response</span>
              </div>
              <h2 className="text-4xl font-light mb-6">Never Miss an Emergency Call</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI system recognizes emergency situations and immediately routes urgent calls to 
                available technicians, ensuring you capture high-value emergency service revenue 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Intelligent emergency call detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Automatic technician routing by proximity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Premium pricing for emergency services</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Real-time customer communication</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20 rounded-2xl flex items-center justify-center">
                <Phone className="w-32 h-32 text-red-600/40" />
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
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <MapPin className="w-32 h-32 text-accent/40" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-light mb-6">Dominate Your Local Market</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our hyper-local Google Ads campaigns target customers in your exact service area 
                who need immediate help, ensuring maximum ROI and market penetration.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Emergency Keywords</h3>
                  <p className="text-muted-foreground">Target "emergency plumber," "24/7 cleaning," and urgent service searches</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Geo-Radius Targeting</h3>
                  <p className="text-muted-foreground">Precise targeting within your service radius for maximum efficiency</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Competitor Conquest</h3>
                  <p className="text-muted-foreground">Capture customers searching for your competitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Local Business Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">85%</div>
              <p className="text-lg text-muted-foreground">Emergency Call Capture Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">30%</div>
              <p className="text-lg text-muted-foreground">Reduction in Drive Time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">2x</div>
              <p className="text-lg text-muted-foreground">Increase in Bookings</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light mb-4 text-accent">95%</div>
              <p className="text-lg text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Grow Your Local Business?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join local service businesses who have doubled their bookings and captured 85% 
            of emergency calls with our AI automation and local marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Get More Local Customers
              </Button>
            </Link>
            <Link to="/services/search-marketing-ppc">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                View Local Google Ads
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