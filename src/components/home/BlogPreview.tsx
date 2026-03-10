import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const posts = [
  {
    title: "Why I Stopped Chasing Perfection in Design",
    category: "Design",
    readTime: "5 min",
    excerpt: "The moment I embraced imperfection, my work became more authentic, faster, and way more fun.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop",
    slug: "perfection-design",
  },
  {
    title: "Building in Public: What I Learned in 30 Days",
    category: "Building",
    readTime: "7 min",
    excerpt: "A raw look at shipping daily, dealing with feedback, and finding your voice as a creator.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    slug: "building-in-public",
  },
  {
    title: "The Automation Stack That Runs My Life",
    category: "Automation",
    readTime: "4 min",
    excerpt: "From email workflows to content scheduling — here's how I automate the boring stuff.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
    slug: "automation-stack",
  },
  {
    title: "How Storytelling Makes Better Products",
    category: "Product",
    readTime: "6 min",
    excerpt: "Every great product has a narrative. Here's how to find yours and make it unforgettable.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop",
    slug: "storytelling-products",
  },
];

const categoryIcons: Record<string, JSX.Element> = {
  Design: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs><linearGradient id="bi-design" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(255 35% 64%)" /><stop offset="1" stopColor="hsl(255 35% 84%)" /></linearGradient></defs>
      <path d="M12 19l7-7 3 3-7 7H12v-3z" fill="url(#bi-design)" />
      <path d="M2 21l3.5-1L18 7.5 16.5 6 4 18.5 2 21z" fill="url(#bi-design)" opacity="0.7" />
    </svg>
  ),
  Building: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs><linearGradient id="bi-build" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(18 78% 50%)" /><stop offset="1" stopColor="hsl(18 78% 72%)" /></linearGradient></defs>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill="url(#bi-build)" />
    </svg>
  ),
  Automation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs><linearGradient id="bi-auto" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(155 40% 25%)" /><stop offset="1" stopColor="hsl(155 40% 50%)" /></linearGradient></defs>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#bi-auto)" />
    </svg>
  ),
  Product: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs><linearGradient id="bi-product" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(213 60% 50%)" /><stop offset="1" stopColor="hsl(213 60% 72%)" /></linearGradient></defs>
      <path d="M9 18h6M12 2a7 7 0 015 11.9V17a1 1 0 01-1 1H8a1 1 0 01-1-1v-3.1A7 7 0 0112 2z" fill="url(#bi-product)" />
    </svg>
  ),
};

const BlogCard = ({ post, index }: { post: typeof posts[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="block bg-white rounded-2xl p-6 relative overflow-hidden group border border-gray-100"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="pointer"
        style={{ minHeight: 280, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
      >
        <motion.div
          initial={{ x: 80, y: -60, opacity: 0, rotate: 6 }}
          animate={hovered ? { x: 0, y: 0, opacity: 1, rotate: 3 } : { x: 80, y: -60, opacity: 0, rotate: 6 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="absolute top-4 right-4 w-48 h-40 rounded-xl overflow-hidden shadow-lg z-10"
        >
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          animate={hovered ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
          className="w-12 h-12 rounded-full bg-card flex items-center justify-center mb-5"
        >
          {categoryIcons[post.category]}
        </motion.div>

        <span className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
          {post.category}
        </span>
        <div className="flex items-center gap-2 mt-1 mb-3">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="font-sans text-[11px] text-muted-foreground">{post.readTime}</span>
        </div>

        <h3 className="font-serif text-lg text-foreground mb-2 leading-snug pr-20 group-hover:pr-32 transition-all">
          {post.title}
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 pr-8">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 bg-foreground text-white rounded-full px-4 py-2 text-xs font-sans font-medium hover:bg-brand-blue transition-colors">
          Read more
        </span>
      </Link>
    </motion.div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-serif italic text-sm text-muted-foreground mb-3">
              From the Blog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Storyteller's <span className="italic">Log</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link
              to="/blog"
              className="border-2 border-foreground text-foreground rounded-full px-6 py-2.5 text-sm font-sans font-medium hover:bg-foreground hover:text-white transition-all"
              data-cursor="pointer"
            >
              Read all posts
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogPreview;
