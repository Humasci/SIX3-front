import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, TrendingUp, Users, Phone, ArrowRight } from "lucide-react";
import icons from "@/utils/iconGenerator";

gsap.registerPlugin(ScrollTrigger);

const RealEstateLeadSystem = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-study-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".result-item", {
        scrollTrigger: {
          trigger: ".results-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
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
          <div className="case-study-hero">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/industries/real-estate" className="text-accent hover:underline">Real Estate</Link>
              <ArrowRight className="w-4 h-4" />
              <span>Case Study</span>
            </div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-light mb-8">
              Real Estate Lead Management Case Study
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl text-muted-foreground mb-8">
                  How a regional real estate agency increased lead conversion by 45%, reduced manual follow-up by 70%, 
                  and generated $200K in additional annual revenue through AI automation.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Client:</span>
                    <p className="text-lg">Regional Real Estate Agency (15 agents)</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Market Focus:</span>
                    <p className="text-lg">Residential Sales & Luxury Properties</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Implementation Time:</span>
                    <p className="text-lg">6 weeks</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={icons.realEstate}
                  alt="Real estate office"
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="results-section py-16 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Key Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="result-item text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">45%</div>
              <p className="text-muted-foreground">Increase in lead conversion</p>
            </div>
            <div className="result-item text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">70%</div>
              <p className="text-muted-foreground">Reduction in manual follow-up</p>
            </div>
            <div className="result-item text-center">
              <Home className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">$200K</div>
              <p className="text-muted-foreground">Additional annual revenue</p>
            </div>
            <div className="result-item text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-light mb-2">24/7</div>
              <p className="text-muted-foreground">Lead capture availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This growing real estate agency was struggling with lead management in a competitive market. 
                Agents were spending too much time on unqualified leads while missing opportunities 
                with serious buyers and sellers.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Lead Follow-up Overwhelm</h3>
                  <p className="text-muted-foreground">Agents spending 4-5 hours daily on manual follow-up calls and emails.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Poor Lead Qualification</h3>
                  <p className="text-muted-foreground">No system to prioritize high-intent buyers versus tire-kickers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">After-Hours Loss</h3>
                  <p className="text-muted-foreground">Missing leads from evening and weekend property searches.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Before AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Lead response time:</span>
                    <span className="font-medium">4-6 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion rate:</span>
                    <span className="font-medium">18%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Follow-up time per agent:</span>
                    <span className="font-medium">4-5 hours daily</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours capture:</span>
                    <span className="font-medium">10%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">After AI Implementation</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Lead response time:</span>
                    <span className="font-medium text-accent">Under 5 minutes</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion rate:</span>
                    <span className="font-medium text-accent">26%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Follow-up time per agent:</span>
                    <span className="font-medium text-accent">1-1.5 hours daily</span>
                  </li>
                  <li className="flex justify-between">
                    <span>After-hours capture:</span>
                    <span className="font-medium text-accent">90%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12">The AI Solution</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">1</div>
                  <h3 className="text-2xl font-medium">Intelligent Lead Scoring</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI system analyzes lead behavior, budget indicators, and timeline signals to automatically 
                  score and prioritize prospects based on buying probability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Automatic lead scoring (1-100)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Budget qualification through conversation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Timeline assessment and urgency detection</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <Users className="w-16 h-16 text-accent/40" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <Phone className="w-16 h-16 text-accent/40" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">2</div>
                  <h3 className="text-2xl font-medium">24/7 Lead Nurturing</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Automated follow-up sequences with personalized property recommendations and 
                  market insights that keep prospects engaged until they're ready to buy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Personalized property matching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Market update automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Appointment scheduling automation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-medium">3</div>
                  <h3 className="text-2xl font-medium">Google Ads Optimization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  AI-powered local Google Ads campaigns targeting high-intent keywords with automatic 
                  bid adjustments based on lead quality and conversion probability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Local area targeting optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">High-intent keyword focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm">Quality-based bid adjustments</span>
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Breakdown */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">6-Month Results Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Lead Quality Improvement</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">45%</span> higher conversion rate</li>
                <li><span className="font-medium">60%</span> more qualified leads</li>
                <li><span className="font-medium">90%</span> after-hours capture rate</li>
              </ul>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Operational Efficiency</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">70%</span> reduction in manual follow-up</li>
                <li><span className="font-medium">5 min</span> average response time</li>
                <li><span className="font-medium">3 hrs</span> saved per agent daily</li>
              </ul>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Financial Impact</h3>
              <ul className="space-y-3">
                <li><span className="font-medium">$200K</span> additional annual revenue</li>
                <li><span className="font-medium">40%</span> increase in deals closed</li>
                <li><span className="font-medium">25%</span> higher average sale price</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Transform Your Real Estate Business
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to achieve similar results? Let's discuss how AI automation can revolutionize your lead generation and conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Get Your Real Estate Strategy
              </Button>
            </Link>
            <Link to="/industries/real-estate">
              <Button variant="outline" className="px-8 py-4 text-lg border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                Real Estate Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateLeadSystem;