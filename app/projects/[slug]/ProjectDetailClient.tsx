"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import type { ProjectFrontmatter } from "@/lib/content";

interface ProjectDetailClientProps {
  frontmatter: ProjectFrontmatter;
  content: string;
  prev: ProjectFrontmatter | null;
  next: ProjectFrontmatter | null;
}

export default function ProjectDetailClient({ frontmatter, content, prev, next }: ProjectDetailClientProps) {
  const paragraphs = content.trim().split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={frontmatter.coverImage} alt={frontmatter.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs text-white/60 uppercase tracking-wider">{frontmatter.category}</span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-4">{frontmatter.title}</h1>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tools.map((t) => (
                <span key={t} className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/80">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">{frontmatter.description}</p>
          </ScrollReveal>
          {paragraphs.map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">{para}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {frontmatter.gallery && frontmatter.gallery.length > 0 && (
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {frontmatter.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-shrink-0 w-[70vw] md:w-[500px] rounded-2xl overflow-hidden"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 flex justify-between">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <ArrowLeft className="w-4 h-4" /> {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              {next.title} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
