"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface Resource {
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const categories = ["All", "Templates", "Design", "Automation", "Freebies"];

export default function ResourcesPageClient({ resources }: { resources: Resource[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? resources : resources.filter((r: Resource) => r.category === active);

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Resources</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">
              The Creative <span className="font-display italic">Vault</span>
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg mx-auto">
              Templates, tools, and freebies to help you build faster and better.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="pointer"
                className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((resource: Resource, i: number) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              style={{ backgroundColor: "#fdfcfa" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">{resource.category}</span>
                  <span className={`font-sans text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    resource.price === "Free" ? "bg-brand-green/10 text-brand-green" : "bg-brand-orange/10 text-brand-orange"
                  }`}>
                    {resource.price}
                  </span>
                </div>
                <h3 className="font-serif text-base text-foreground mb-2">{resource.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">{resource.description}</p>
                {resource.price === "Free" ? (
                  <button
                    data-cursor="pointer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-sans font-medium hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-3 h-3" />
                    Download Free
                  </button>
                ) : (
                  <a
                    href="https://gumroad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-sans font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Get on Gumroad
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
