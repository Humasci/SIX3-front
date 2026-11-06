import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { ServiceVisual } from "@/components/ServiceVisual";
import { formatPostDate, type BlogPost } from "@/data/blogPosts";

export const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.slug}`} className="blog-post-card group block h-full">
    <article className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/50 hover:shadow-[0_24px_60px_-28px_rgba(124,58,237,0.6)]">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-gradient-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="aspect-[16/10] bg-[#0e0e2a]">
        <ServiceVisual kind={post.visual} label={post.title} className="w-full h-full" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 w-fit rounded-full border border-[#a855f7]/40 px-3 py-1 text-xs font-medium tracking-wide text-gradient">
          {post.category}
        </span>
        <h3 className="mb-3 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-gradient">
          {post.title}
        </h3>
        <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatPostDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-glow" />
        </div>
      </div>
    </article>
  </Link>
);
