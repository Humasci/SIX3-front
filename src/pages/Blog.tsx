import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";
import { BlogCard } from "@/components/BlogCard";
import { WormholeCta } from "@/components/WormholeCta";
import { Button } from "@/components/ui/button";
import { formatPostDate, publishedPosts } from "@/data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState("All");
  const all = useMemo(() => publishedPosts(), []);
  // The newest post marked featured leads the page; otherwise the newest post
  const featured = all.find((p) => p.featured) ?? all[0];
  const categories = useMemo(() => ["All", ...Array.from(new Set(all.map((p) => p.category)))], [all]);
  const posts = all.filter((p) => p !== featured && (category === "All" || p.category === category));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
      gsap.from(".blog-featured", {
        scrollTrigger: { trigger: ".blog-featured", start: "top 85%" },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <PageSEO
        title="AI Marketing & Automation Blog | SIX³ Agency"
        description="Practical guides on AI marketing and automation for UK businesses: paid media, AI video, AI receptionists, speed to lead and using AI safely."
        canonical="https://six3.agency/blog"
      />
      <Header />

      {/* Hero */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-20 px-6">
        <HeroWormhole centered />
        <div className="blog-hero max-w-4xl mx-auto text-center">
          <p className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-gradient w-fit mx-auto">Insights</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-gradient w-fit pb-1 mx-auto">Blog</h1>
          <div className="h-1 w-40 bg-brand-gradient rounded-full mb-8 mx-auto" />
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Practical guides on getting found, getting chosen and getting more done with AI.
          </p>
          <p className="text-lg text-muted-foreground">
            Written for owners and managers of UK service businesses and e-commerce brands by the team that builds these systems: paid media
            that brings in the right customers, AI video and voice content, AI receptionists, and using AI safely with
            customer data. New articles every Tuesday.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-24 px-6">
          <div className="blog-featured max-w-7xl mx-auto">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-[#a855f7]/50 hover:shadow-[0_30px_80px_-35px_rgba(124,58,237,0.7)]"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-[#0e0e2a]">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                ) : (
                  <ServiceVisual kind={featured.visual} label={featured.title} className="w-full h-full" />
                )}
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-brand-gradient-button px-3 py-1 font-medium text-white">Featured</span>
                  <span className="rounded-full border border-[#a855f7]/40 px-3 py-1 text-gradient">{featured.category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground">{featured.title}</h2>
                <div className="h-1 w-24 rounded-full bg-brand-gradient-glow" />
                <p className="text-lg text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{formatPostDate(featured.date)}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{featured.readTime}</span>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/60 px-6 py-3 font-medium transition-all duration-300 group-hover:border-transparent group-hover:bg-brand-gradient-button group-hover:text-white">
                  Read article
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter + grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Latest articles</h2>
            <div className="h-1 w-24 rounded-full bg-brand-gradient mx-auto" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center my-12" role="tablist" aria-label="Filter by category">
            {categories.map((c) => (
              <Button
                key={c}
                role="tab"
                aria-selected={category === c}
                variant="outline"
                onClick={() => setCategory(c)}
                className={`rounded-full px-6 py-2 ${
                  category === c ? "border-transparent bg-brand-gradient-button text-white" : "border-border bg-transparent text-muted-foreground"
                }`}
              >
                {c}
              </Button>
            ))}
          </div>
          {posts.length > 0 ? (
            <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No other articles in this category yet.</p>
          )}
        </div>
      </section>

      <WormholeCta buttonLabel="Book an AI Growth Audit" />
      <Footer />
    </div>
  );
};

export default Blog;
