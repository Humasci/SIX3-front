import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const [time, setTime] = useState("");

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

  return (
    <section className="relative min-h-screen flex flex-col">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-24">
        <div className="max-w-7xl w-full">
          <div className="mb-12">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4">
              FULL-SERVICE
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4 relative">
              <span className="inline-block relative">
                DIGITAL
                <div className="absolute -bottom-2 left-0 w-64 h-px bg-foreground/30" />
              </span>
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
              AGENCY
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-5xl">
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
                Transforming your digital presence with innovative web design
              </p>
            </div>
            
            <Button variant="outline" className="rounded-full px-8 py-6 text-base border-foreground hover:bg-foreground hover:text-background group">
              <ArrowDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Contact Us
            </Button>
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
