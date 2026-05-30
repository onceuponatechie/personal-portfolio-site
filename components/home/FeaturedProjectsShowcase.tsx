"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

export interface FeaturedProject {
  category: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

const ProjectCard = ({
  project,
  index,
  total,
  progress,
}: {
  project: FeaturedProject;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // Each card recedes as the next one scrolls up and covers it.
  const rangeStart = index / total;
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  // Successive cards pin a little lower so the stack "peeks" at the top.
  const stackOffset = index * 26;

  return (
    <div className="sticky top-0 flex min-h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: stackOffset }}
        className="gradient-border relative w-full overflow-hidden rounded-3xl"
      >
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View case study: ${project.title}`}
          data-cursor="pointer"
          className="group relative block overflow-hidden rounded-3xl bg-dark-bg"
          style={{ height: "clamp(440px, 74vh, 720px)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Readability wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

          {/* Centered content block */}
          <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center md:pb-20">
            <span className="mb-5 inline-flex rounded-full bg-brand-lavender px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20">
              {project.category}
            </span>

            <h3 className="font-serif text-[clamp(1.75rem,4vw,3.25rem)] leading-tight text-white">
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/75 md:text-base">
              {project.description}
            </p>

            {/* Circular arrow CTA, below the title and description */}
            <span className="mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-brand-lavender text-white shadow-xl shadow-black/30 transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

const FeaturedProjectsShowcase = ({
  projects,
}: {
  projects: FeaturedProject[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (projects.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <p className="mb-3 font-display text-sm italic text-muted-foreground">
              Featured Work
            </p>
            <h2 className="font-serif text-[34px] leading-tight text-foreground md:text-[44px]">
              Featured{" "}
              <span
                className="relative inline-block font-display italic"
                style={{ padding: "0 0.15em" }}
              >
                Projects
                <svg
                  viewBox="0 0 200 100"
                  fill="none"
                  className="absolute"
                  style={{
                    top: "-20%",
                    left: "-8%",
                    width: "116%",
                    height: "140%",
                    overflow: "visible",
                  }}
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="100"
                    cy="50"
                    rx="95"
                    ry="42"
                    stroke="#5dcbf1"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-3 100 50)"
                    style={{ strokeDasharray: "4 0" }}
                  />
                </svg>
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Sticky-stacking scroll showcase */}
        <div ref={containerRef} className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 flex justify-center">
            <Link
              href="/projects"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3.5 font-sans text-sm font-light tracking-wide text-foreground transition-colors hover:border-brand-lavender hover:text-brand-lavender"
            >
              Browse All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedProjectsShowcase;
