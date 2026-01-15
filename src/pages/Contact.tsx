import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    services: [] as string[],
    painPoints: "",
    goals: "",
  });

  const services = t('contact.services', { returnObjects: true }) as string[];

  // Validation functions
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const steps = [
    {
      title: t('contact.steps.step1.title'),
      subtitle: t('contact.steps.step1.subtitle'),
    },
    {
      title: t('contact.steps.step2.title'),
      subtitle: t('contact.steps.step2.subtitle'),
    },
    {
      title: t('contact.steps.step3.title'),
      subtitle: t('contact.steps.step3.subtitle'),
    },
    {
      title: t('contact.steps.step4.title'),
      subtitle: t('contact.steps.step4.subtitle'),
    }
  ];

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

  useEffect(() => {
    // Ensure content is immediately visible, then animate
    gsap.set(".step-content", { opacity: 1, x: 0 });
    gsap.fromTo(".step-content", 
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.3, 
        ease: "power2.out",
        clearProps: "all" // Clear GSAP properties after animation
      }
    );
  }, [currentStep]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() && 
               formData.email.trim() && 
               isValidEmail(formData.email);
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.painPoints.trim().length > 0;
      case 3:
        return formData.goals.trim().length > 0;
      default:
        return false;
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          website: "",
          services: [],
          painPoints: "",
          goals: "",
        });
        setCurrentStep(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success screen when form is submitted successfully
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <section className="pt-32 pb-24 px-6 flex items-center justify-center min-h-[80vh]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <Button
                onClick={() => {
                  setSubmitStatus('idle');
                  setCurrentStep(0);
                }}
                className="px-8 py-3 rounded-full"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-24 px-6 mt-5">
        <div className="max-w-4xl mx-auto">
          <div className="contact-title mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <div className="w-full bg-secondary/30 rounded-full h-1 mb-8">
              <div
                className="bg-accent h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              {steps[currentStep].title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {steps[currentStep].subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form min-h-[400px] flex flex-col">
            <div className="step-content flex-1">
              {currentStep === 0 && (
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name*"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address*"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full bg-transparent border-0 border-b text-lg py-4 px-0 focus:outline-none transition-colors placeholder:text-muted-foreground ${
                          formData.email && !isValidEmail(formData.email) 
                            ? "border-red-500 focus:border-red-500" 
                            : "border-border focus:border-accent"
                        }`}
                      />
                      {formData.email && !isValidEmail(formData.email) && (
                        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        placeholder="Website (optional)"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`p-4 text-left border border-border rounded-lg hover:border-accent transition-colors ${
                          formData.services.includes(service)
                            ? "border-accent bg-accent/5"
                            : ""
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{service}</span>
                          {formData.services.includes(service) && (
                            <Check className="w-4 h-4 text-accent" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <textarea
                    placeholder="Tell us about your main challenges and pain points..."
                    value={formData.painPoints}
                    onChange={(e) => handleInputChange("painPoints", e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground resize-none h-32"
                    rows={4}
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <textarea
                    placeholder="What are your main goals and where do you want to be in 6 months?"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-border text-lg py-4 px-0 focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground resize-none h-32"
                    rows={4}
                  />
                </div>
              )}
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-8 p-6 border border-red-500/20 rounded-lg bg-red-500/5">
                <p className="text-foreground">Sorry, there was an error sending your message. Please try again or email us directly at <a href="mailto:hello@six3.agency" className="text-accent hover:underline">hello@six3.agency</a></p>
              </div>
            )}

            <div className="flex items-center justify-between mt-12">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-0 ${
                  currentStep === 0 ? "opacity-0" : ""
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 px-8 py-3 rounded-full"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!canProceed() || isSubmitting}
                  className="px-8 py-3 rounded-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
