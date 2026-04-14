"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Maximize2 } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    category: "Web App",
    title: "Streamline Dashboard",
    description: "A real-time analytics dashboard with AI-powered insights for growing startups.",
    tools: ["React", "Tailwind", "Supabase"],
    liveUrl: "https://streamline-demo.example.com",
    slug: "streamline-dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",
    thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=240&h=340&fit=crop",
  },
  {
    category: "E-Commerce",
    title: "Artisan Marketplace",
    description: "A curated marketplace for independent creators to sell handmade goods.",
    tools: ["Next.js", "Stripe", "Sanity"],
    liveUrl: "https://artisan-demo.example.com",
    slug: "artisan-marketplace",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop",
    thumb: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=240&h=340&fit=crop",
  },
  {
    category: "Mobile App",
    title: "Wellness Tracker",
    description: "A mindful daily tracker for habits, moods, and gratitude journaling.",
    tools: ["React Native", "Firebase", "Figma"],
    liveUrl: "https://wellness-demo.example.com",
    slug: "wellness-tracker",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop",
    thumb: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=240&h=340&fit=crop",
  },
];

const FeaturedProjectsShowcase = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % projects.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[active];

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-display italic text-sm text-muted-foreground mb-3">
              Featured Work
            </p>
            <h2 className="font-serif text-[34px] md:text-[44px] text-foreground">
              The <span className="relative inline-block font-display italic" style={{ padding: "0 0.15em" }}>Projects<svg viewBox="0 0 200 100" fill="none" className="absolute" style={{ top: "-20%", left: "-8%", width: "116%", height: "140%", overflow: "visible" }} preserveAspectRatio="none"><ellipse cx="100" cy="50" rx="95" ry="42" stroke="#5dcbf1" strokeWidth="5.5" strokeLinecap="round" fill="none" transform="rotate(-3 100 50)" style={{ strokeDasharray: "4 0" }} /></svg></span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="gradient-border rounded-3xl overflow-hidden">
          <div className="bg-dark-bg rounded-3xl overflow-hidden relative" style={{ height: "clamp(400px, 60vh, 600px)" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-md"
                >
                  <span className="font-sans text-xs text-white/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-white/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-1.5 bg-foreground text-white rounded-full px-4 py-1.5 text-[11px] font-sans font-medium hover:bg-brand-blue transition-colors"
                    >
                      View Case Study
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="hidden md:flex flex-row gap-3 items-end">
                {projects.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    data-cursor="pointer"
                    className={`w-[120px] h-[80px] rounded-xl overflow-hidden border-2 transition-all ${
                      i === active ? "border-white/60 scale-105" : "border-white/20 opacity-60 hover:opacity-80"
                    }`}
                  >
                    <img src={p.thumb} alt={p.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className="absolute top-6 right-6 glassmorphism-dark rounded-full w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              data-cursor="pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </Link>

            <div className="absolute bottom-8 right-8 md:hidden">
              <span className="font-sans text-xs text-white/60">
                {active + 1} / {projects.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsShowcase;
