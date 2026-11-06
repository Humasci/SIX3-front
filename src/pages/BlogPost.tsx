import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";
import { BlogCard } from "@/components/BlogCard";
import { WormholeCta } from "@/components/WormholeCta";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title={`${post.title} | SIX³ Agency Blog`}
        description={post.excerpt}
        canonical={`https://six3.agency/blog/${post.slug}`}
      />
      <Header />

      {/* Article header */}
      <section className="theme-light relative isolate overflow-hidden pt-40 pb-20 px-6">
        <HeroWormhole centered />
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gradient">
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>
          <span className="mx-auto mb-6 block w-fit rounded-full border border-[#a855f7]/40 px-3 py-1 text-xs font-medium tracking-wide text-gradient">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-gradient pb-1">{post.title}</h1>
          <div className="h-1 w-32 bg-brand-gradient rounded-full mb-8 mx-auto" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="media-frame aspect-[16/8] mb-16 bg-[#0e0e2a]">
            <ServiceVisual kind={post.visual} label={post.title} className="w-full h-full" />
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 mb-10">{post.excerpt}</p>
            {post.body?.length ? (
              <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-light prose-a:text-[#c084fc]">
                {post.body.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-brand-gradient-glow" />
                <p className="text-lg text-foreground mb-2">The full article is on its way.</p>
                <p className="text-muted-foreground">
                  Want to talk about this topic now?{" "}
                  <Link to="/contact" className="text-gradient underline-offset-4 hover:underline">Get in touch</Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Keep reading</h2>
            <div className="h-1 w-24 rounded-full bg-brand-gradient mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <WormholeCta buttonLabel="Start Your AI Journey" />
      <Footer />
    </div>
  );
};

export default BlogPost;
