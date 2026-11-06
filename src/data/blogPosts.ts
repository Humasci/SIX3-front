import type { ServiceVisualKind } from "@/components/ServiceVisual";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  visual: ServiceVisualKind;
  featured?: boolean;
  // Article paragraphs; posts without a body show their summary and a "coming soon" note
  body?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-ppc-campaign-management-2025",
    title: "How AI is Revolutionizing PPC Campaign Management in 2025",
    excerpt: "Discover the latest AI technologies transforming paid advertising and how they're delivering unprecedented ROI for businesses of all sizes.",
    author: "SIX³ Team",
    date: "November 25, 2025",
    readTime: "8 min read",
    category: "AI Marketing",
    visual: "search",
    featured: true,
  },
  {
    slug: "voice-cloning-business-marketing-guide",
    title: "The Complete Guide to Voice Cloning for Business Marketing",
    excerpt: "Learn how voice cloning technology can create personalized customer experiences and scale your content production.",
    author: "SIX³ Team",
    date: "November 22, 2025",
    readTime: "12 min read",
    category: "Content Creation",
    visual: "video",
  },
  {
    slug: "ai-automation-workflows-legal-firms",
    title: "5 AI Automation Workflows Every Legal Firm Should Implement",
    excerpt: "Streamline client intake, case management, and document processing with these proven AI automation strategies.",
    author: "SIX³ Team",
    date: "November 20, 2025",
    readTime: "10 min read",
    category: "Automation",
    visual: "agents",
  },
  {
    slug: "real-estate-lead-generation-ai-vs-traditional",
    title: "Real Estate Lead Generation: AI vs Traditional Methods",
    excerpt: "Compare the effectiveness of AI-powered lead generation against traditional real estate marketing approaches.",
    author: "SIX³ Team",
    date: "November 18, 2025",
    readTime: "7 min read",
    category: "Lead Generation",
    visual: "search",
  },
  {
    slug: "healthcare-ai-patient-communication-scheduling",
    title: "Healthcare AI: Improving Patient Communication and Scheduling",
    excerpt: "How AI chatbots and automation are transforming patient experiences in healthcare practices.",
    author: "SIX³ Team",
    date: "November 12, 2025",
    readTime: "9 min read",
    category: "Healthcare AI",
    visual: "ml",
  },
];
