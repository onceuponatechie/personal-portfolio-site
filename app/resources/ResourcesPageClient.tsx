"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import HeadingAccent from "@/components/shared/HeadingAccent";
import FilterPills from "@/components/shared/FilterPills";

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
        <PageHeader
          label="The Vault"
          description="A hand-picked collection of templates, tools, and freebies — the same ones I reach for when building my own work."
        >
          The Creative <HeadingAccent variant="singleCurve" color="hsl(155,40%,30%)">Toolkit</HeadingAccent>
        </PageHeader>

        <FilterPills options={categories} active={active} onChange={setActive} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((resource: Resource, i: number) => {
            const isFree = resource.price === "Free";
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#fdfcfa" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl m-2.5">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-sans text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
                        isFree
                          ? "bg-[hsl(155,40%,30%)] text-white"
                          : "bg-[hsl(18,78%,57%)] text-white"
                      }`}
                    >
                      {resource.price}
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-5 pt-1">
                  <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    {resource.category}
                  </p>
                  <h3 className="font-serif text-lg text-foreground mb-2 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  {isFree ? (
                    <button
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white rounded-full px-4 py-2 text-xs font-sans font-medium hover:bg-primary transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  ) : (
                    <a
                      href="https://gumroad.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white rounded-full px-4 py-2 text-xs font-sans font-medium hover:bg-primary transition-colors"
                    >
                      Get it <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
