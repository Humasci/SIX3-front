import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scale, Home, Stethoscope, Building, Store, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Legal & Law Firms",
    description: "Client intake automation, case management, and compliance tracking",
    icon: Scale,
    path: "/industries/legal"
  },
  {
    title: "Real Estate",
    description: "Lead nurturing, property marketing, and client communication",
    icon: Home,
    path: "/industries/real-estate"
  },
  {
    title: "Healthcare",
    description: "Patient scheduling, automated follow-ups, and communication",
    icon: Stethoscope,
    path: "/industries/healthcare"
  },
  {
    title: "Professional Services",
    description: "Consultation booking, client management, and service delivery",
    icon: Building,
    path: "/industries/professional-services"
  },
  {
    title: "Local Businesses",
    description: "Customer engagement, appointment booking, and local marketing",
    icon: Store,
    path: "/industries/local-business"
  },
  {
    title: "Ecommerce",
    description: "Product marketing automation, customer retention, and sales optimization",
    icon: ShoppingCart,
    path: "/industries/ecommerce"
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
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="industries-title text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Industries We Specialize In
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We cater to all SMEs, with specialized expertise in these key industries
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
                <div className="bg-background border border-border p-8 h-full hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
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