import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Search Marketing / PPC",
    description: "Drive targeted traffic and maximize ROI with data-driven paid advertising campaigns across Google, social media, and display networks.",
    path: "/services/search-marketing-ppc",
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Craft compelling content that engages your audience and elevates your brand through strategic storytelling and visual design.",
    path: "/services/content-creation",
  },
  {
    number: "03",
    title: "AI Dev / Automation",
    description: "Streamline operations and boost efficiency with custom AI solutions that automate workflows and enhance business processes.",
    path: "/services/ai-dev-automation",
  },
  {
    number: "04",
    title: "ML Fine Tuning",
    description: "Optimize machine learning models for peak performance with specialized fine-tuning techniques tailored to your specific use cases.",
    path: "/services/ml-fine-tuning",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="services-header mb-16">
          <p className="text-sm text-muted-foreground mb-8 tracking-wider">Services We Provide -</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
              Expert Services<br />
              to Drive Success
            </h2>
            <div className="text-6xl md:text-7xl font-light text-muted-foreground/30">
              67890
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.number} to={service.path}>
              <div className="service-card group border border-border p-8 hover:bg-card transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl font-light text-muted-foreground/50">
                    {service.number}
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
