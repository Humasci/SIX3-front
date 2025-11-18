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
    <div ref={ref} className="text-8xl md:text-9xl font-light tracking-tight">
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
      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
      });

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="about-label text-sm text-muted-foreground mb-8 tracking-wider">Who we are -</p>
          <h2 className="about-title text-4xl md:text-5xl font-light mb-8 max-w-3xl">
            Transforming your digital Brand with an impactful design branding to drive success.
          </h2>
          <p className="about-description text-lg text-muted-foreground max-w-2xl mb-12">
            We specialize in transforming your digital brand through impactful design and strategic branding. 
            Our creative approach ensures your brand stands out, connects, and converts.
          </p>
          <Link to="/about">
            <Button variant="outline" className="about-description rounded-full px-8 py-6 text-base border-foreground hover:bg-foreground hover:text-background group">
              <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              About Us
            </Button>
          </Link>
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-lg text-muted-foreground mb-12">
            Successfully built brands experience that drives real success.
          </p>
          <div className="flex flex-col items-start gap-4">
            <AnimatedCounter end={654321} />
            <p className="text-xl text-muted-foreground">Successful Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};
