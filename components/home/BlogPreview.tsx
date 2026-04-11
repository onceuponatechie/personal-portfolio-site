"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const posts = [
  {
    title: "Why I Stopped Chasing Perfection in Design",
    category: "Design",
    readTime: "5 min",
    excerpt: "The moment I embraced imperfection, my work became more authentic, faster, and way more fun.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=450&fit=crop",
    slug: "perfection-design",
  },
  {
    title: "Building in Public: What I Learned in 30 Days",
    category: "Building",
    readTime: "7 min",
    excerpt: "A raw look at shipping daily, dealing with feedback, and finding your voice as a creator.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop",
    slug: "building-in-public",
  },
  {
    title: "The Automation Stack That Runs My Life",
    category: "Automation",
    readTime: "4 min",
    excerpt: "From email workflows to content scheduling — here's how I automate the boring stuff.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=450&fit=crop",
    slug: "automation-stack",
  },
  {
    title: "How Storytelling Makes Better Products",
    category: "Product",
    readTime: "6 min",
    excerpt: "Every great product has a narrative. Here's how to find yours and make it unforgettable.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=450&fit=crop",
    slug: "storytelling-products",
  },
];

const categoryColors: Record<string, string> = {
  Design: "text-[hsl(255,35%,64%)]",
  Building: "text-[hsl(18,78%,57%)]",
  Automation: "text-[hsl(155,40%,30%)]",
  Product: "text-[hsl(213,60%,57%)]",
};

const BlogCard = ({ post, index }: { post: (typeof posts)[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-2xl overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="pointer"
        style={{ backgroundColor: "#fefefd" }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-2.5 sm:m-3">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            loading="lazy"
          />

          {/* Hover excerpt overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-black/50 flex items-end p-4 sm:p-5"
              >
                <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Text content */}
        <div className="px-3 sm:px-4 pt-2 pb-3 sm:pb-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-sm sm:text-base md:text-lg text-foreground leading-snug">
              {post.title}
            </h3>
            <div
              className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 transition-colors"
              style={{ backgroundColor: hovered ? "#1A1A1A" : "hsl(18,78%,57%)" }}
            >
              <ArrowUpRight
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`font-sans text-[10px] sm:text-[11px] ${categoryColors[post.category] || "text-muted-foreground"}`}>
              {post.category}
            </span>
            <span className="text-muted-foreground/40 text-[10px]">&bull;</span>
            <span className="font-sans text-[10px] sm:text-[11px] text-muted-foreground">
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-serif italic text-sm text-muted-foreground mb-3">
              From the Blog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              The Storyteller&apos;s <span className="italic">Log</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link
              href="/blog"
              className="font-sans text-sm font-medium text-foreground underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
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
