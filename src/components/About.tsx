import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-8xl md:text-9xl font-light tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
      {count.toString().split('').map((digit, i) => (
        <span key={i} className="inline-block">
          {digit}
        </span>
      ))}
    </div>
  );
};

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible initially
      gsap.set([".about-label", ".about-title", ".about-description"], { opacity: 1 });
      
      // Simple animations without complex triggers
      gsap.fromTo(".about-label", 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(".about-title", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(".about-description", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="theme-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="about-label text-sm text-muted-foreground mb-8 tracking-wider">Who we are <span className="inline-block align-middle ml-3 h-0.5 w-12 bg-brand-gradient" /></p>
          <h2 className="about-title text-4xl md:text-5xl font-light mb-8 max-w-3xl">
            Most businesses buy ads, content and automation from three suppliers. We make them one system.
          </h2>
          <p className="about-description text-lg text-muted-foreground max-w-2xl mb-12">
            SIX³ is an AI marketing and automation agency in Brighton, UK. We bring in the right leads, give
            people a reason to choose you, and make sure every enquiry gets an answer, so each part makes the others
            work harder. That's the ³: growth that compounds instead of adding up.
          </p>
          <Link to="/about">
            <Button variant="outline" className="about-description rounded-full px-8 py-6 text-base border-foreground text-foreground bg-transparent hover:bg-brand-gradient-button hover:text-white hover:border-transparent hover:shadow-[0_0_32px_-10px_rgba(249,115,22,0.6)] group">
              <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              About Us
            </Button>
          </Link>
        </div>

        <div className="border-t-gradient pt-16">
          <p className="text-lg text-muted-foreground mb-12">
            Senior people on every account, and we run our own digital properties too, so we build what we'd use ourselves.
          </p>
          <div className="flex flex-col items-start gap-4">
            <AnimatedCounter end={2018} />
            <p className="text-xl text-muted-foreground">The year we started building growth for UK businesses</p>
          </div>
        </div>
      </div>
    </section>
  );
};
