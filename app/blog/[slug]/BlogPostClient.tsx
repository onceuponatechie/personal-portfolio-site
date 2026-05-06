"use client";

import Link from "next/link";
import { ArrowLeft, Link2, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import type { PostFrontmatter } from "@/lib/content";

interface BlogPostClientProps {
  frontmatter: PostFrontmatter;
  content: string;
  related: PostFrontmatter[];
}

const categoryColors: Record<string, string> = {
  Design: "text-[hsl(255,35%,64%)]",
  Building: "text-[hsl(18,78%,57%)]",
  Automation: "text-[hsl(155,40%,30%)]",
  Product: "text-[hsl(213,60%,57%)]",
  Life: "text-[hsl(44,80%,50%)]",
};

const categoryBg: Record<string, string> = {
  Design: "bg-[hsl(255,35%,74%)]/15 text-[hsl(255,35%,46%)]",
  Building: "bg-[hsl(18,78%,57%)]/12 text-[hsl(18,78%,47%)]",
  Automation: "bg-[hsl(155,40%,30%)]/10 text-[hsl(155,40%,30%)]",
  Product: "bg-[hsl(213,60%,57%)]/12 text-[hsl(213,60%,47%)]",
  Life: "bg-[hsl(44,88%,67%)]/15 text-[hsl(44,70%,35%)]",
};

const formatDate = (value?: string) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export default function BlogPostClient({ frontmatter, content, related }: BlogPostClientProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!" });
  };

  const paragraphs = content.trim().split("\n\n");

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            data-cursor="pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Stories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-5 flex-wrap">
              <span
                className={`font-sans text-[11px] uppercase tracking-wider rounded-full px-3 py-1 ${
                  categoryBg[frontmatter.category] || "bg-primary/10 text-primary"
                }`}
              >
                {frontmatter.category}
              </span>
              {frontmatter.publishedAt && (
                <>
                  <span className="text-muted-foreground/40 text-[10px]">&bull;</span>
                  <span className="font-sans text-xs text-muted-foreground">
                    {formatDate(frontmatter.publishedAt)}
                  </span>
                </>
              )}
              <span className="text-muted-foreground/40 text-[10px]">&bull;</span>
              <span className="font-sans text-xs text-muted-foreground">
                {frontmatter.readTime} read
              </span>
            </div>
            <h1 className="font-serif text-[34px] md:text-[48px] text-foreground leading-[1.12] max-w-2xl mx-auto">
              {frontmatter.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-6">
          {paragraphs.map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <p className="font-sans text-[17px] text-foreground/90 leading-[1.8] mb-7">
                {para}
              </p>
            </ScrollReveal>
          ))}

          {/* Share */}
          <ScrollReveal>
            <div
              className="mt-16 rounded-3xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap"
              style={{ backgroundColor: "#fbfaf7" }}
            >
              <div>
                <p className="font-display italic text-lg text-foreground">
                  Enjoyed this piece?
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  Share it with someone who&apos;d enjoy it too.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyLink}
                  className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/70 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  data-cursor="pointer"
                  aria-label="Copy link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/70 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                  data-cursor="pointer"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <p className="section-label mb-1">More to read</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">Keep exploring</h3>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                  data-cursor="pointer"
                >
                  All stories <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group block rounded-2xl overflow-hidden"
                    style={{ backgroundColor: "#fdfcfa" }}
                    data-cursor="pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-2.5">
                      <img
                        src={r.coverImage}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-4 pb-4">
                      <span className={`font-sans text-[11px] ${categoryColors[r.category] || "text-muted-foreground"}`}>
                        {r.category}
                      </span>
                      <h4 className="font-serif text-base text-foreground mt-1 leading-snug">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
