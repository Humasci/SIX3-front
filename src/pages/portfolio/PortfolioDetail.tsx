import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { HeroWormhole } from "@/components/HeroWormhole";
import { PageSEO } from "@/components/PageSEO";
import NotFound from "@/pages/NotFound";

const projects = {







  "ecommerce-ai-campaign": {
    title: "E-commerce AI Marketing Campaign",
    category: "Search & Paid Media",
    year: "2026",
    client: "Online retailer",
    duration: "Ongoing",
    description: "Paid media across search and social for an online retailer, consolidated into one budget with AI-assisted bidding, audience targeting and sales tracking.",
    challenge: "Spend was spread across several ad platforms with manual bidding and no shared view of which campaigns actually drove sales.",
    solution: "We consolidated the campaigns, introduced AI bid optimization and audience segmentation on each platform, and set up attribution reporting with automated performance alerts.",
    results: ["One budget and one reporting view across every ad platform", "Sales tracked back to the ad that drove them", "Automated alerts on campaign performance"],
    image: "/images/use-cases/ecommerce-noovit.webp",
  },

};

const PortfolioDetail = () => {
  const { id } = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  
  const project = projects[id as keyof typeof projects];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from(".project-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".project-info", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".project-section", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title={`${project.title} | SIX³ Agency`}
        description={project.description.length > 160 ? `${project.description.slice(0, 157).trimEnd()}…` : project.description}
        canonical={`https://six3.agency/portfolio/${id}`}
      />
      <Header />
      
      <div ref={contentRef}>
      <section className="theme-light relative isolate overflow-hidden pt-32 pb-12 px-6">
        <HeroWormhole />
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio">
            <Button variant="ghost" className="project-hero mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="project-hero">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-gradient w-fit pb-1">
              {project.title}
            </h1>
            <div className="h-1 w-40 bg-brand-gradient rounded-full" />
          </div>
        </div>
      </section>

      <div className="pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="project-hero media-frame aspect-[2/1] w-full max-w-5xl mx-auto mb-16">
            <img
              decoding="async"
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Client</h3>
              <p className="text-xl">{project.client}</p>
            </div>
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Duration</h3>
              <p className="text-xl">{project.duration}</p>
            </div>
            <div className="project-info">
              <h3 className="text-sm text-muted-foreground mb-2">Year</h3>
              <p className="text-xl">{project.year}</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="project-section">
              <h2 className="text-3xl font-light mb-4">Our Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {project.results.length > 0 && (
            <div className="project-section">
              <h2 className="text-3xl font-light mb-6">Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div key={index} className="border border-border p-6">
                    <p className="text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            )}

          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

// Used by the prerender to build a page for each project
export const portfolioIds = Object.keys(projects);

export default PortfolioDetail;
