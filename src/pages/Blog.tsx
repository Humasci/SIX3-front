import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing PPC Campaign Management in 2025",
    excerpt: "Discover the latest AI technologies transforming paid advertising and how they're delivering unprecedented ROI for businesses of all sizes.",
    author: "SIX3 Team",
    date: "November 25, 2025",
    readTime: "8 min read",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Complete Guide to Voice Cloning for Business Marketing",
    excerpt: "Learn how voice cloning technology can create personalized customer experiences and scale your content production.",
    author: "SIX3 Team",
    date: "November 22, 2025",
    readTime: "12 min read",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "5 AI Automation Workflows Every Legal Firm Should Implement",
    excerpt: "Streamline client intake, case management, and document processing with these proven AI automation strategies.",
    author: "SIX3 Team",
    date: "November 20, 2025",
    readTime: "10 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Real Estate Lead Generation: AI vs Traditional Methods",
    excerpt: "Compare the effectiveness of AI-powered lead generation against traditional real estate marketing approaches.",
    author: "SIX3 Team",
    date: "November 18, 2025",
    readTime: "7 min read",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Machine Learning Models: When to Fine-Tune vs Train from Scratch",
    excerpt: "A technical guide to choosing the right approach for your ML project and maximizing performance efficiently.",
    author: "SIX3 Team",
    date: "November 15, 2025",
    readTime: "15 min read",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Healthcare AI: Improving Patient Communication and Scheduling",
    excerpt: "How AI chatbots and automation are transforming patient experiences in healthcare practices.",
    author: "SIX3 Team",
    date: "November 12, 2025",
    readTime: "9 min read",
    category: "Healthcare AI",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "AI Marketing", "Content Creation", "Automation", "Lead Generation", "Machine Learning", "Healthcare AI"];

const Blog = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".blog-post-card", {
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="blog-hero text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Insights, strategies, and the latest trends in AI-powered marketing, 
              automation, and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.id} className="py-16 px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Featured</span>
                  <span className="bg-secondary px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button className="group">
                  Read Full Article
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full transition-all ${
                  category === "All" 
                    ? "bg-accent text-background" 
                    : "bg-secondary hover:bg-accent hover:text-background"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="blog-post-card group cursor-pointer">
                <div className="bg-background border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-accent" />
                      <span className="text-sm text-accent">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest insights on AI marketing and automation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-background border border-border rounded-full focus:outline-none focus:border-accent"
            />
            <Button className="px-8 py-4 rounded-full">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;