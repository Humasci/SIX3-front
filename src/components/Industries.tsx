import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Scale, Stethoscope, Building, Store, ShoppingCart, Cloud } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Legal & Law Firms",
    description: "Automate client intake, streamline case management, and ensure compliance.",
    icon: Scale,
    path: "/industries/legal"
  },
  {
    title: "E-Commerce",
    description: "Drive retention, optimise sales, and scale product marketing automatically.",
    icon: ShoppingCart,
    path: "/contact"
  },
  {
    title: "Healthcare",
    description: "Modernise patient scheduling and manage automated, secure follow-ups.",
    icon: Stethoscope,
    path: "/industries/healthcare"
  },
  {
    title: "Professional Services",
    description: "Eliminate no-shows with automated booking and client management.",
    icon: Building,
    path: "/industries/professional-services"
  },
  {
    title: "Local Businesses",
    description: "Dominate local search, drive engagement, and manage appointments.",
    icon: Store,
    path: "/industries/local-business"
  },
  {
    title: "B2B SaaS",
    description: "Scale lead generation, automate onboarding, and drive customer success.",
    icon: Cloud,
    path: "/contact"
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
            Built for Ambitious SMEs
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