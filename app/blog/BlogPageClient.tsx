"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHeader from "@/components/shared/PageHeader";
import HeadingAccent from "@/components/shared/HeadingAccent";
import FilterPills from "@/components/shared/FilterPills";
import type { PostFrontmatter } from "@/lib/content";

const tags = ["All", "Design", "Building", "Automation", "Product", "Life"];

const categoryColors: Record<string, string> = {
  Design: "text-[hsl(255,35%,64%)]",
  Building: "text-[hsl(18,78%,57%)]",
  Automation: "text-[hsl(155,40%,30%)]",
  Product: "text-[hsl(213,60%,57%)]",
  Life: "text-[hsl(44,80%,50%)]",
};

const formatDate = (value?: string) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const BlogCard = ({ post, index }: { post: PostFrontmatter; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-2xl overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="pointer"
        style={{ backgroundColor: "#fdfcfa" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-2.5 sm:m-3">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            loading="lazy"
          />
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 bg-black/50 flex items-end p-5"
              >
                <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-3 sm:px-4 pt-2 pb-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif text-base md:text-lg text-foreground leading-snug">
              {post.title}
            </h3>
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-colors"
              style={{ backgroundColor: hovered ? "hsl(18,78%,57%)" : "#1A1A1A" }}
            >
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-1.5">
            <span className={`font-sans text-[11px] ${categoryColors[post.category] || "text-muted-foreground"}`}>
              {post.category}
            </span>
            {post.publishedAt && (
              <>
                <span className="text-muted-foreground/40 text-[10px]">&bull;</span>
                <span className="font-sans text-[11px] text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </span>
              </>
            )}
            <span className="text-muted-foreground/40 text-[10px]">&bull;</span>
            <span className="font-sans text-[11px] text-muted-foreground">
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogPageClient({ posts }: { posts: PostFrontmatter[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader label="Stories" description="Field notes from building products, shipping in public, and staying curious — written in my own voice, no corporate filter.">
          The Build <HeadingAccent variant="doubleCurve">Chapters</HeadingAccent>
        </PageHeader>

        <FilterPills options={tags} active={active} onChange={setActive} />

        {featured && (
          <ScrollReveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-12 relative rounded-3xl overflow-hidden"
              data-cursor="pointer"
              style={{ height: "clamp(340px, 50vh, 500px)" }}
            >
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/90 uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between gap-6">
                <div className="max-w-xl">
                  <span className={`font-sans text-xs uppercase tracking-wider ${categoryColors[featured.category] || "text-white/70"}`}>
                    {featured.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-4xl text-white mt-2 mb-3 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 group-hover:bg-[hsl(18,78%,57%)] group-hover:border-[hsl(18,78%,57%)] transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
