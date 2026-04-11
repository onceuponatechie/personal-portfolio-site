"use client";

import Link from "next/link";
import { ArrowLeft, Copy, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import type { PostFrontmatter } from "@/lib/content";

interface BlogPostClientProps {
  frontmatter: PostFrontmatter;
  content: string;
  related: PostFrontmatter[];
}

export default function BlogPostClient({ frontmatter, content, related }: BlogPostClientProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!" });
  };

  const paragraphs = content.trim().split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-cursor="pointer">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs uppercase tracking-wider text-primary">{frontmatter.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4 leading-tight">{frontmatter.title}</h1>
            <span className="font-sans text-sm text-muted-foreground">{frontmatter.readTime} read</span>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden">
            <img src={frontmatter.coverImage} alt={frontmatter.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {paragraphs.map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">{para}</p>
            </ScrollReveal>
          ))}

          {/* Share */}
          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-border">
            <span className="font-sans text-xs text-muted-foreground">Share:</span>
            <button onClick={copyLink} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <Copy className="w-3.5 h-3.5" />
            </button>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all" style={{ backgroundColor: "#fdfcfa" }} data-cursor="pointer">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-primary">{r.category}</span>
                  <h4 className="font-serif text-base text-foreground mt-1 leading-snug">{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
