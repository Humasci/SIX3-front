import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Phone, Users, TrendingUp, MessageSquare, Calendar } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const realEstateSolutions = [
  {
    icon: Phone,
    title: "AI Lead Qualification",
    description: "Intelligent lead scoring and automated follow-up sequences that nurture prospects 24/7",
    benefits: ["45% increase in lead conversion", "70% reduction in manual follow-up", "24/7 lead capture"]
  },
  {
    icon: MessageSquare,
    title: "Property Matching AI",
    description: "Smart property recommendation system that matches buyers with ideal properties automatically",
    benefits: ["Faster property matches", "Improved buyer satisfaction", "Reduced search time"]
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "AI-powered booking system for property viewings and client consultations",
    benefits: ["Automated viewing coordination", "Calendar optimization", "No-show reduction"]
  },
  {
    icon: TrendingUp,
    title: "Google Ads for Realtors",
    description: "AI-optimized PPC campaigns targeting local buyers and sellers with real-time bid adjustments",
    benefits: ["Higher quality leads", "Lower cost per lead", "Local market domination"]
  }
];

const caseStudyStats = [
  { label: "Lead Conversion Increase", value: "45%" },
  { label: "Manual Follow-up Reduction", value: "70%" },
  { label: "Annual Revenue Increase", value: "$200K" },
  { label: "Response Time Improvement", value: "90%" }
];

const RealEstate = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".realestate-hero", {
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
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="realestate-hero grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-accent" />
                <span className="text-accent font-medium">Real Estate</span>
              </div>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-light mb-6">
                AI-Powered Lead Generation for Real Estate Professionals
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your real estate business with intelligent lead qualification, automated property matching, 
                and AI-optimized marketing campaigns that convert prospects into clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="px-8 py-4 text-lg">
                    Get More Qualified Leads
                  </Button>
                </Link>
                <Link to="/use-cases/real-estate-lead-system">
                  <Button variant="outline" className="px-8 py-4 text-lg">
                    View Success Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={icons.realEstate}
                alt="Real Estate"
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Common Real Estate Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Lead Follow-up Overload</h3>
              <p className="text-muted-foreground">Spending hours manually following up with leads instead of closing deals</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Unqualified Prospects</h3>
              <p className="text-muted-foreground">Wasting time on leads who aren't ready to buy or don't match your market</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-3">Scheduling Chaos</h3>
              <p className="text-muted-foreground">Back-and-forth coordination for property viewings and client meetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            AI Solutions for Real Estate Success
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {realEstateSolutions.map((solution, index) => {
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

      {/* Success Story Stats */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Real Estate Agency Success Story</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-light mb-4 text-accent">{stat.value}</div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Mid-sized real estate agency with 15 agents specializing in residential sales
            </p>
            <Link to="/use-cases/real-estate-lead-system">
              <Button variant="outline">View Complete Case Study</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Market Focus */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Dominate Your Local Market
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI-powered Google Ads campaigns are specifically designed for real estate professionals 
                who want to capture more local buyers and sellers in their market area.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Geo-Targeted Campaigns</h3>
                  <p className="text-muted-foreground">Precise targeting of buyers and sellers in your specific neighborhoods and zip codes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">High-Intent Keywords</h3>
                  <p className="text-muted-foreground">Capture prospects searching for "homes for sale," "realtor near me," and local property searches.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Automated Bid Optimization</h3>
                  <p className="text-muted-foreground">AI adjusts bids in real-time based on lead quality and conversion probability.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Close More Deals?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join successful real estate professionals who have increased their lead conversion by 45% 
            and boosted annual revenue by $200K with our AI automation systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Get Your Lead Generation Strategy
              </Button>
            </Link>
            <Link to="/services/search-marketing-ppc">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                View Google Ads Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstate;