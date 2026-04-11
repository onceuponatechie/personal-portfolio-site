"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import type { ProjectFrontmatter } from "@/lib/content";

const filters = ["All", "Web App", "Mobile", "E-Commerce"];

export default function ProjectsPageClient({ projects }: { projects: ProjectFrontmatter[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((b) => b.category === active);

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">
              Ship <span className="italic">Log</span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-cursor="pointer"
                className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                  active === f ? "bg-primary text-primary-foreground" : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                style={{ backgroundColor: "#fdfcfa" }}
                data-cursor="pointer"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">{project.category}</span>
                  <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{project.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.map((t) => (
                      <span key={t} className="bg-white/50 backdrop-blur-md border border-gray-300/50 rounded-full px-3 py-1 text-[10px] font-sans text-foreground">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-primary">
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
