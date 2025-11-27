import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

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
      // Parallax video effect
      gsap.to(videoRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Split text animation for headlines
      titleRefs.current.forEach((title, index) => {
        if (title) {
          const text = title.textContent || "";
          title.innerHTML = text.split("").map((char, i) => 
            `<span class="char" style="display: inline-block; transform: translateY(100px) rotateX(-90deg); opacity: 0;">${char}</span>`
          ).join("");

          gsap.to(title.querySelectorAll(".char"), {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.3 + (index * 0.2),
            stagger: 0.02,
            ease: "power3.out",
          });
        }
      });

      // Magnetic effect for CTA button
      const ctaButton = document.querySelector('.hero-cta');
      if (ctaButton) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = ctaButton.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(ctaButton, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(ctaButton, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        };

        ctaButton.addEventListener('mousemove', handleMouseMove);
        ctaButton.addEventListener('mouseleave', handleMouseLeave);
      }

      // Subheadline - fade in + slide up with blur effect
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        filter: "blur(20px)",
        duration: 1,
        delay: 1.4,
        ease: "power3.out",
      });

      // CTA button - scale + fade in with bounce
      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1.8,
        ease: "back.out(1.7)",
      });

      // Time and scroll indicator with stagger
      gsap.from(".hero-footer > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 2,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Floating animation for scroll indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-7xl w-full">
          <div className="mb-12">
            <h1 
              ref={(el) => (titleRefs.current[0] = el)}
              className="hero-title text-4xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4"
            >
              AI-POWERED
            </h1>
            <h1 
              ref={(el) => (titleRefs.current[1] = el)}
              className="hero-title text-4xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 relative"
            >
              <span className="inline-block relative">
                MARKETING
                <div className="absolute -bottom-2 left-0 w-32 md:w-64 h-px bg-foreground/30" />
              </span>
            </h1>
            <h1 
              ref={(el) => (titleRefs.current[2] = el)}
              className="hero-title text-4xl md:text-7xl lg:text-8xl font-light tracking-tight"
            >
              AGENCY
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl">
            <div>
              <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-md">
                AI-driven search marketing, generative content creation, and custom automation solutions
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

      <div className="hero-footer relative flex items-center justify-between px-6 pb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">London, {time}</span>
        </div>
        
        <div className="scroll-indicator flex items-center gap-2 text-sm text-muted-foreground">
          <ChevronDown className="w-4 h-4" />
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};
