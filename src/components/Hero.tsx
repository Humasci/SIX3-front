import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export const Hero = () => {
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1.2,
        ease: "back.out(1.7)",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-7xl w-full">
          <div className="mb-12">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4">
              FULL-SERVICE
            </h1>
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 relative">
              <span className="inline-block relative">
                DIGITAL
                <div className="absolute -bottom-2 left-0 w-64 h-px bg-foreground/30" />
              </span>
            </h1>
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
              AGENCY
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl">
            <div>
              <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-md">
                Transforming your digital presence with innovative web design
              </p>
            </div>
            
            <Link to="/contact">
              <Button variant="outline" className="hero-cta rounded-full px-8 py-6 text-base border-foreground hover:bg-foreground hover:text-background group">
                <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between px-6 pb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">New York, {time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ChevronDown className="w-4 h-4 animate-bounce" />
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};
