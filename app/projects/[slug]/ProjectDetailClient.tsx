"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import type { ProjectFrontmatter } from "@/lib/content";

interface ProjectDetailClientProps {
  frontmatter: ProjectFrontmatter;
  prev: ProjectFrontmatter | null;
  next: ProjectFrontmatter | null;
  children: React.ReactNode;
}

export default function ProjectDetailClient({ frontmatter, prev, next, children }: ProjectDetailClientProps) {
  const isCaseStudy = frontmatter.slug === "cowrywise-teardown";

  return (
    <>
      {/* Header: back link + centered title block */}
      <section className="pt-[120px] md:pt-[160px]">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors mb-12"
            data-cursor="pointer"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display font-semibold text-[36px] md:text-[44px] lg:text-[64px] text-foreground leading-[1.1] tracking-[-0.02em] max-w-2xl mx-auto">
              {frontmatter.title}
            </h1>

            <p className="font-sans text-[20px] font-normal text-muted-foreground leading-[1.6] mt-6 max-w-2xl mx-auto">
              {frontmatter.description}
            </p>

            {frontmatter.tools && frontmatter.tools.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
                {frontmatter.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1.5 text-[12px] font-sans font-medium text-foreground bg-[hsl(var(--surface-warm))] border border-black/5"
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
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-sans font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    View Live <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cover image — matches blog cover dimensions exactly */}
      <section className="pt-[80px] md:pt-[120px] pb-[48px]">
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

      {/* Body — matches cover image max-width */}
      <section className="pb-[80px] md:pb-[120px]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="prose-portfolio">{children}</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery (kept for projects that ship with one) */}
      {frontmatter.gallery && frontmatter.gallery.length > 0 && (
        <section className="pb-[80px] md:pb-[120px]">
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <div className="mb-8">
                <p className="font-italic-display text-[20px] text-muted-foreground mb-3">Snapshots</p>
                <h3 className="font-display font-semibold text-[24px] md:text-[28px] leading-[1.25] tracking-[-0.01em] text-foreground">The gallery</h3>
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

      {/* Closing — case studies get a clean back link; placeholders keep prev/next */}
      {isCaseStudy ? (
        <section className="pb-[80px] md:pb-[160px]">
          <div className="max-w-5xl mx-auto px-4">
            <hr className="border-0 border-t border-black/10 mb-12" />
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-sans text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                data-cursor="pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to all projects
              </Link>
            </div>
          </div>
        </section>
      ) : (
        (prev || next) && (
          <section className="pb-[80px] md:pb-[160px]">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {prev ? (
                  <Link
                    href={`/projects/${prev.slug}`}
                    className="group block rounded-3xl p-8 transition-colors"
                    style={{ backgroundColor: "#fbfaf7" }}
                    data-cursor="pointer"
                  >
                    <div className="flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] leading-none text-muted-foreground mb-4">
                      <ArrowLeft className="w-3.5 h-3.5" /> Previous
                    </div>
                    <p className="font-display font-semibold text-[22px] leading-[1.3] tracking-[-0.005em] text-foreground group-hover:text-[hsl(18,78%,57%)] transition-colors">
                      {prev.title}
                    </p>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    href={`/projects/${next.slug}`}
                    className="group block rounded-3xl p-8 transition-colors text-right"
                    style={{ backgroundColor: "#fbfaf7" }}
                    data-cursor="pointer"
                  >
                    <div className="flex items-center justify-end gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] leading-none text-muted-foreground mb-4">
                      Next <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-display font-semibold text-[22px] leading-[1.3] tracking-[-0.005em] text-foreground group-hover:text-[hsl(18,78%,57%)] transition-colors">
                      {next.title}
                    </p>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
}
