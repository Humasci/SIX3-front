import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParticleCloud } from "@/components/ParticleCloud";
import { reduceMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLElement | null)[]>([]);

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
      if (!reduceMotion) gsap.to(visualRef.current, {
        yPercent: -15,
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
          // Letters animate one by one; each word stays in one piece so lines never break mid-word
          // Lines marked hero-title-gradient get each letter coloured along the brand gradient
          const stops = [[168, 85, 247], [249, 115, 22], [253, 231, 176]];
          const gradient = title.classList.contains("hero-title-gradient");
          const letters = text.replace(/ /g, "").length;
          let n = 0;
          const colour = () => {
            const t = letters > 1 ? n++ / (letters - 1) : 0;
            const seg = t < 0.6 ? 0 : 1;
            const k = seg === 0 ? t / 0.6 : (t - 0.6) / 0.4;
            const c = stops[seg].map((v, j) => Math.round(v + (stops[seg + 1][j] - v) * k));
            return gradient ? ` color: rgb(${c.join(",")});` : "";
          };
          title.innerHTML = text
            .split(" ")
            .map((word) =>
              `<span style="display: inline-block; white-space: nowrap;">${word
                .split("")
                .map((char) => `<span class="char" style="display: inline-block; transform: translateY(100px) rotateX(-90deg); opacity: 0;${colour()}">${char}</span>`)
                .join("")}</span>`
            )
            .join(" ");

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
        <div ref={visualRef} className="absolute inset-0">
          <ParticleCloud className="w-full h-full" />
        </div>
        {/* Soft shade behind the copy keeps the text in front of the full-width cloud */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </div>
      
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-7xl w-full">
          <div className="mb-12">
            <p className="hero-subtitle mb-6 text-sm md:text-base font-medium tracking-[0.25em] uppercase text-gradient w-fit">
              AI marketing &amp; automation agency · Brighton, UK
            </p>
            <h1>
              <span
                ref={(el) => (titleRefs.current[0] = el)}
                className="hero-title block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2"
              >
                Scale Your Business,
              </span>
              <span
                ref={(el) => (titleRefs.current[1] = el)}
                className="hero-title hero-title-gradient block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none pb-2"
              >
                Not Your Headcount.
              </span>
            </h1>
            <div className="hero-subtitle h-1 w-full max-w-3xl bg-brand-gradient-glow rounded-full mt-10" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl">
            <div>
              <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-foreground max-w-xl">
                We build AI-powered marketing engines, custom AI agents, and automated workflows that generate leads and
                cut operational costs 24/7.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/contact">
                <Button variant="outline" className="hero-cta rounded-full px-8 py-6 text-base border-foreground hover:bg-brand-gradient-button hover:text-white hover:border-transparent hover:shadow-[0_0_32px_-10px_rgba(249,115,22,0.6)] group">
                  <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Get Your Custom AI Strategy
                </Button>
              </Link>
              <Link to="/portfolio" className="hero-cta whitespace-nowrap text-base font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                See Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer relative flex items-center justify-between px-6 pb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-gradient animate-pulse" />
          <span className="text-sm text-muted-foreground">Brighton, UK · {time}</span>
        </div>
        
        <div className="scroll-indicator flex items-center gap-2 text-sm text-muted-foreground">
          <ChevronDown className="w-4 h-4" />
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};
