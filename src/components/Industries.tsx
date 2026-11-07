import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scale, Stethoscope, Building, Store, ShoppingCart, Home } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Legal & Law Firms",
    description: "Answer every enquiry, qualify new matters and take the admin out of intake",
    icon: Scale,
    path: "/industries/legal"
  },
  {
    title: "E-commerce",
    description: "Ads and product content that sell, plus automated follow-ups that bring buyers back",
    icon: ShoppingCart,
    path: "/contact"
  },
  {
    title: "Healthcare",
    description: "Fewer no-shows and phone queues, with booking and reminders that run themselves",
    icon: Stethoscope,
    path: "/industries/healthcare"
  },
  {
    title: "Professional Services",
    description: "More qualified consultations, and onboarding that doesn't eat billable hours",
    icon: Building,
    path: "/industries/professional-services"
  },
  {
    title: "Local Businesses",
    description: "Get found locally, reply in seconds and fill the diary, even after hours",
    icon: Store,
    path: "/industries/local-business"
  },
  {
    title: "Real Estate",
    description: "Reply to portal leads in under a minute and book more valuations and viewings",
    icon: Home,
    path: "/industries/real-estate"
  }
];

export const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industries-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".industry-card", {
        scrollTrigger: {
          trigger: ".industries-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="industries-title text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Built for businesses that run on enquiries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with UK small and mid-sized businesses, and know these sectors best
          </p>
        </div>

        <div className="industries-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Link
                key={industry.title}
                to={industry.path}
                className="industry-card group"
              >
                <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-accent transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 icon-gradient" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-gradient transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};