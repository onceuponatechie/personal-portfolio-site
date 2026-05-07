"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

const words = [
  { text: "I", green: false }, { text: "build", green: false }, { text: "products,", green: false },
  { text: "tell", green: false }, { text: "stories,", green: false }, { text: "and", green: false },
  { text: "craft", green: true }, { text: "experiences", green: false }, { text: "that", green: false },
  { text: "connect", green: false }, { text: "with", green: false }, { text: "people", green: false },
  { text: "through", green: false }, { text: "thoughtful", green: true }, { text: "design,", green: false },
  { text: "honest", green: false }, { text: "writing,", green: false }, { text: "and", green: false },
  { text: "creative", green: true }, { text: "problem-solving.", green: false },
];

const SAGE_GREEN = "#7C9A72";

/* ── SVG icons for the rotating badge ── */
const CreatorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21L11 7L15 14L19 9L21 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="11" cy="7" r="2" fill="white" opacity="0.7" />
    <path d="M5 24H23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BuilderIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="14" width="6" height="10" rx="1" stroke="white" strokeWidth="1.8" fill="none" />
    <rect x="11" y="9" width="6" height="15" rx="1" stroke="white" strokeWidth="1.8" fill="none" />
    <rect x="17" y="4" width="6" height="20" rx="1" stroke="white" strokeWidth="1.8" fill="none" />
  </svg>
);

const StorytellerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5H17C18.1 5 19 5.9 19 7V19C19 20.1 18.1 21 17 21H5V5Z" stroke="white" strokeWidth="1.8" fill="none" />
    <path d="M19 8H21C22.1 8 23 8.9 23 10V22C23 23.1 22.1 24 21 24H9C7.9 24 7 23.1 7 22V21" stroke="white" strokeWidth="1.8" fill="none" />
    <line x1="8" y1="10" x2="16" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="13.5" x2="14" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="17" x2="12" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const roleIcons = [
  { icon: <CreatorIcon />, label: "Creator" },
  { icon: <BuilderIcon />, label: "Builder" },
  { icon: <StorytellerIcon />, label: "Storyteller" },
];

function RotatingBadge() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % roleIcons.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute -bottom-5 -right-5 z-10">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white"
        style={{ backgroundColor: "#8B7EC8" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-center"
          >
            {roleIcons[idx].icon}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ScrollRevealWord({ word, index, green, progress }: { word: string; index: number; green: boolean; progress: ReturnType<typeof useTransform> }) {
  const color = useTransform(progress, (latest: number) => {
    if (latest >= index + 1) return green ? SAGE_GREEN : "#1A1A1A";
    if (latest > index) {
      const t = latest - index;
      if (green) {
        const r = Math.round(180 + t * (124 - 180));
        const g = Math.round(180 + t * (154 - 180));
        const b = Math.round(180 + t * (114 - 180));
        return `rgb(${r},${g},${b})`;
      }
      const v = Math.round(180 - t * 154);
      return `rgb(${v},${v},${v})`;
    }
    return "rgb(180,180,180)";
  });

  return (
    <motion.span className={green ? "font-display" : undefined} style={{ color, fontWeight: green ? 500 : undefined, fontStyle: green ? "italic" : undefined }}>
      {word}
    </motion.span>
  );
}

const AboutParagraph = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "center center"] });
  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6"
            >
              <SectionLabel>Who I Am</SectionLabel>
            </motion.div>

            <motion.p
              className="font-serif text-xl md:text-[28px] leading-relaxed font-light"
              style={{ display: "flex", flexWrap: "wrap", gap: "0 0.35em" }}
            >
              {words.map((word, i) => (
                <ScrollRevealWord key={i} word={word.text} index={i} green={word.green} progress={revealProgress} />
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 font-sans text-sm font-medium hover:opacity-90 transition-opacity"
                data-cursor="pointer"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="shrink-0 w-[260px] sm:w-[280px] lg:w-[300px]"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-warm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450&h=600&fit=crop&crop=face"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <RotatingBadge />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutParagraph;
