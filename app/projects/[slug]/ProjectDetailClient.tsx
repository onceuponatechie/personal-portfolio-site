"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
      {/* Back link */}
      <div className="pt-28">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-cursor="pointer"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-dark-bg"
            style={{ height: "clamp(420px, 60vh, 620px)" }}
          >
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/90 uppercase tracking-wider">
                {frontmatter.category}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-5 max-w-3xl">
                {frontmatter.title}
              </h1>
              <p className="font-sans text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-6">
                {frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {frontmatter.tools.map((t) => (
                  <span
                    key={t}
                    className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/90"
                  >
                    {t}
                  </span>
                ))}
                {frontmatter.liveUrl && (
                  <a
                    href={frontmatter.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-[12px] font-sans font-medium hover:bg-[#5dcbf1] transition-colors ml-1"
                  >
                    View Live <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
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
        </div>
      </section>

      {/* Gallery */}
      {frontmatter.gallery && frontmatter.gallery.length > 0 && (
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <div className="mb-8">
                <p className="font-display italic text-sm text-muted-foreground mb-1">Snapshots</p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground">The gallery</h3>
              </div>
            </ScrollReveal>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
              {frontmatter.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08 }}
                  className="snap-start flex-shrink-0 w-[80vw] md:w-[520px] aspect-[4/3] rounded-3xl overflow-hidden"
                  style={{ backgroundColor: "#fdfcfa" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next */}
      {(prev || next) && (
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group block rounded-3xl p-6 transition-colors"
                  style={{ backgroundColor: "#fbfaf7" }}
                  data-cursor="pointer"
                >
                  <div className="flex items-center gap-2 font-sans text-xs text-muted-foreground mb-3">
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </div>
                  <p className="font-serif text-lg md:text-xl text-foreground group-hover:text-[hsl(18,78%,57%)] transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group block rounded-3xl p-6 transition-colors text-right"
                  style={{ backgroundColor: "#fbfaf7" }}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-end gap-2 font-sans text-xs text-muted-foreground mb-3">
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <p className="font-serif text-lg md:text-xl text-foreground group-hover:text-[hsl(18,78%,57%)] transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
