import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceDropdown } from "./ServiceDropdown";
import { IndustryDropdown } from "./IndustryDropdown";
import { MobileMenu } from "./MobileMenu";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation - slide down + fade in
      gsap.fromTo(headerRef.current, 
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
        }
      );

      // Stagger menu items
      gsap.fromTo(".nav-item",
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.4,
          ease: "power2.out",
        }
      );
    }, headerRef);

    // Scroll behavior - shrink header when scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-400 ease-out ${
        isScrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div className="flex items-center justify-between px-6">
        <Link to="/" className="flex items-center nav-item">
          <img 
            src={logo} 
            alt="SIX3 Agency" 
            className={`transition-all duration-400 ${
              isScrolled ? "h-[4.91rem] md:h-[7.02rem]" : "h-[4.91rem] md:h-[7.02rem]"
            }`}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-item text-base hover:text-accent transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/about" className="nav-item text-base hover:text-accent transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <div className="nav-item">
            <ServiceDropdown />
          </div>
          <div className="nav-item">
            <IndustryDropdown />
          </div>
          <Link to="/portfolio" className="nav-item text-base hover:text-accent transition-colors relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/contact" className="nav-item text-base hover:text-accent transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-4 nav-item">
          <ShoppingBag className="w-5 h-5" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
