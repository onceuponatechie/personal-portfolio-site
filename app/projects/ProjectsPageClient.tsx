"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import HeadingAccent from "@/components/shared/HeadingAccent";
import FilterPills from "@/components/shared/FilterPills";
import type { ProjectFrontmatter } from "@/lib/content";

const filters = ["All", "Web App", "Mobile", "E-Commerce"];

const ProjectCard = ({ project, index }: { project: ProjectFrontmatter; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block rounded-3xl overflow-hidden group"
        data-cursor="pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ backgroundColor: "#fdfcfa" }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-2.5">
          <img
            src={project.coverImage}
            alt={project.title}
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
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5"
              >
                <p className="font-sans text-sm text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute top-4 left-4">
            <span className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/90 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>

        <div className="px-4 pb-5 pt-1">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-serif text-lg md:text-xl text-foreground leading-snug">
              {project.title}
            </h3>
            <div
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5 transition-colors"
              style={{ backgroundColor: hovered ? "hsl(18,78%,57%)" : "#1A1A1A" }}
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(project.tags ?? []).slice(0, 3).map((t) => (
              <span
                key={t}
                className="bg-white/70 border border-black/5 rounded-full px-2.5 py-0.5 text-[10px] font-sans text-foreground/70"
              >
                {t}
              </span>
            ))}
            {(project.tags?.length ?? 0) > 3 && (
              <span className="font-sans text-[10px] text-muted-foreground self-center">
                +{(project.tags?.length ?? 0) - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ProjectsPageClient({ projects }: { projects: ProjectFrontmatter[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((b) => b.category === active);

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          label="Featured Work"
          description="A living archive of the things I've designed, built, and shipped — each one a small experiment in what technology can feel like."
        >
          The <HeadingAccent variant="circle">Projects</HeadingAccent>
        </PageHeader>

        <FilterPills options={filters} active={active} onChange={setActive} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
