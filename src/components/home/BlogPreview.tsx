import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
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

const categoryColors: Record<string, string> = {
  Design: "text-brand-lavender",
  Building: "text-brand-orange",
  Automation: "text-brand-green",
  Product: "text-brand-blue",
};

const BlogCard = ({ post, index }: { post: typeof posts[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="block bg-surface-light rounded-2xl p-6 relative overflow-hidden group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="pointer"
        style={{ minHeight: 280 }}
      >
        {/* Hover image */}
        <motion.div
          initial={{ x: 80, y: -60, opacity: 0, rotate: 6 }}
          animate={hovered ? { x: 0, y: 0, opacity: 1, rotate: 3 } : { x: 80, y: -60, opacity: 0, rotate: 6 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="absolute top-4 right-4 w-28 h-28 rounded-xl overflow-hidden shadow-lg z-10"
        >
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Default circle icon */}
        <motion.div
          animate={hovered ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
          className="w-12 h-12 rounded-full bg-card flex items-center justify-center mb-5"
        >
          <span className={`font-serif text-lg italic ${categoryColors[post.category] || "text-primary"}`}>
            {post.category[0]}
          </span>
        </motion.div>

        <span className={`font-sans text-[11px] uppercase tracking-wider ${categoryColors[post.category] || "text-primary"}`}>
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

        <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-primary">
          Read more <ArrowRight className="w-3 h-3" />
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
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              to="/blog"
              className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-cursor="pointer"
            >
              Read all posts →
            </Link>
            <Link
              to="/resources/readers-corner"
              className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
              data-cursor="pointer"
            >
              Reader's Corner →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogPreview;
