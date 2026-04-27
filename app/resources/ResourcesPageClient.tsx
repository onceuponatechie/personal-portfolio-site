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
    <section className="pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px] lg:pb-[160px]">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          label="The Vault"
          description="A hand-picked collection of templates, tools, and freebies — the same ones I reach for when building my own work."
        >
          The Creative <HeadingAccent variant="singleCurve" color="hsl(155,40%,30%)">Toolkit</HeadingAccent>
        </PageHeader>

        <FilterPills options={categories} active={active} onChange={setActive} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((resource: Resource, i: number) => {
            const isFree = resource.price === "Free";
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
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
                      className={`font-sans text-[12px] font-semibold uppercase tracking-[0.08em] leading-none px-2.5 py-1.5 rounded-full ${
                        isFree
                          ? "bg-[hsl(155,40%,30%)] text-white"
                          : "bg-[hsl(18,78%,57%)] text-white"
                      }`}
                    >
                      {resource.price}
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-5 pt-2">
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] leading-none text-muted-foreground mb-2">
                    {resource.category}
                  </p>
                  <h3 className="font-display font-semibold text-[22px] leading-[1.3] tracking-[-0.005em] text-foreground mb-3">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-[14px] font-normal text-muted-foreground leading-[1.5] mb-6">
                    {resource.description}
                  </p>
                  {isFree ? (
                    <button
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white rounded-full px-4 py-2.5 text-[15px] font-sans font-medium leading-none hover:bg-primary transition-colors"
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
                      className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white rounded-full px-4 py-2.5 text-[15px] font-sans font-medium leading-none hover:bg-primary transition-colors"
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
