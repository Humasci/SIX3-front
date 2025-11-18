import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.from(".contact-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".contact-form", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="contact-title text-6xl md:text-7xl lg:text-8xl font-light mb-8">
            Get In Touch
          </h1>
          <p className="contact-title text-xl md:text-2xl text-muted-foreground mb-16">
            Let's discuss how we can transform your digital presence
          </p>

          <form ref={formRef} className="contact-form space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <Input placeholder="Your name" className="bg-secondary/30" />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-secondary/30" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm mb-2">Subject</label>
              <Input placeholder="Project inquiry" className="bg-secondary/30" />
            </div>
            
            <div>
              <label className="block text-sm mb-2">Message</label>
              <Textarea 
                placeholder="Tell us about your project..." 
                className="bg-secondary/30 min-h-[200px]" 
              />
            </div>

            <Button 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base border-foreground hover:bg-foreground hover:text-background"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
