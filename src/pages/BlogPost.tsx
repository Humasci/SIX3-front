import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroWormhole } from "@/components/HeroWormhole";
import { ServiceVisual } from "@/components/ServiceVisual";
import { BlogCard } from "@/components/BlogCard";
import { WormholeCta } from "@/components/WormholeCta";
import { formatPostDate, publishedPosts } from "@/data/blogPosts";
import NotFound from "@/pages/NotFound";

// Renders article blocks: "## " and "### " headings, runs of "- " lines as a list, anything else as a paragraph
const ArticleBody = ({ blocks }: { blocks: string[] }) => {
  const out: JSX.Element[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.startsWith("## ")) out.push(<h2 key={i}>{b.slice(3)}</h2>);
    else if (b.startsWith("### ")) out.push(<h3 key={i}>{b.slice(4)}</h3>);
    else if (b.startsWith("- ")) {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].startsWith("- ")) items.push(blocks[i++].slice(2));
      i--;
      out.push(<ul key={i}>{items.map((it, k) => <li key={k}>{it}</li>)}</ul>);
    } else out.push(<p key={i}>{b}</p>);
  }
  return <>{out}</>;
};

const BlogPost = () => {
  const { slug } = useParams();
  const posts = publishedPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageSEO
        title={post.title.length > 46 ? post.title : `${post.title} | SIX³ Agency`}
        description={post.excerpt}
        canonical={`https://six3.agency/blog/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: "SIX³ Agency", url: "https://six3.agency" },
          publisher: { "@id": "https://six3.agency/#organization" },
          mainEntityOfPage: `https://six3.agency/blog/${post.slug}`,
          image: "https://six3.agency/og-image.jpg",
          articleSection: post.category,
        }}
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
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{formatPostDate(post.date)}</span>
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
              <div className="article-body">
                <ArticleBody blocks={post.body} />
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

      <WormholeCta buttonLabel="Book an AI Growth Audit" />
      <Footer />
    </div>
  );
};

export default BlogPost;
