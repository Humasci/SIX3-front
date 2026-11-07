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





  "dui-guide": {
    title: "dui.guide — Legal Guidance Platform",
    category: "AI Agents & Automation",
    year: "2025–2026",
    client: "dui.guide — Media Law Group LLC",
    duration: "10 weeks",
    description: "AI-powered DUI procedural guidance platform delivering state and county-specific legal navigation, automated deadline tracking, and intelligent attorney matching across all 50 states.",
    challenge: "DUI cases are intensely jurisdiction-specific. Users had to navigate fragmented government websites, could easily miss critical deadlines, and had no way to identify the right attorney for their specific charge and county.",
    solution: "We built a conversational AI guidance agent with county-level jurisdiction detection, an automated deadline tracking and alert system synced to court calendars, and an AI-powered attorney and service provider matching layer over their existing directory.",
    results: [],
    image: "/images/use-cases/media-publisher-directory-dui-guide.webp",
  },
  "media-publisher-directory": {
    title: "Media Publisher & Directory Platform",
    category: "AI Content & SEO Automation",
    year: "2025–2026",
    client: "Digital media publisher",
    duration: "12 weeks",
    description: "An AI-assisted publishing pipeline for a media publisher running a large online directory: listing pages generated from structured data, editorial content refreshed on a schedule, and every page built to be found in search.",
    challenge: "Thousands of directory listings and editorial pages were created and updated by hand. Content went stale, new categories took weeks to launch, and internal linking and structured data were inconsistent across the site.",
    solution: "We built a content pipeline that generates and refreshes listing pages from the publisher's data, an editorial workflow with human review before anything goes live, and a technical SEO layer that adds schema markup and internal links to every page automatically.",
    results: ["Listing pages generated and refreshed automatically from source data", "Human editorial review built into every publish", "Consistent schema markup and internal linking across the directory"],
    image: "/images/use-cases/media-publisher-directory-dui-guide.webp",
  },
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
