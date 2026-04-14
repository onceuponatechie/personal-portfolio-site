"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmileyGreeting from "@/components/shared/SmileyGreeting";

const thumbnails = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=260&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=260&h=400&fit=crop",
  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=260&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=260&h=400&fit=crop",
];

const MediaBox = ({ offset = 0 }: { offset?: number }) => {
  const [idx, setIdx] = useState(offset);
  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % thumbnails.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex align-middle mx-1.5 relative" style={{ width: 72, height: 44 }}>
      <span className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 shadow-lg"
        style={{ background: "hsl(0 0% 12%)" }}>
        {thumbnails.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === idx ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </span>
    </span>
  );
};

// Reveal helpers — tight staggered timings for a "felt" cascade
const EASE = [0.25, 0.1, 0.25, 1] as const;

const mediaReveal = (delay: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, delay, ease: EASE },
});

const textReveal = (delay: number) => ({
  initial: { opacity: 0, filter: "blur(6px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.5, delay, ease: EASE },
});

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-surface-warm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/60 rounded-full blur-[120px]" />

      <motion.div style={{ y }} className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-6 pb-16">
        {/* Smiley — icons appear first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <SmileyGreeting />
        </motion.div>

        {/* Badge — icons appear first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <div className="glassmorphism rounded-full px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="font-sans text-xs font-medium text-text-custom-secondary">
              Open to Collaborations
            </span>
          </div>
        </motion.div>

        {/* Headline — media appears with icons, then each line cascades */}
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.15] text-foreground mb-6">
          {/* Line 1 */}
          <motion.span {...textReveal(0.4)}>
            <span className="font-display italic">Products,</span>{" "}
            <span className="font-display italic">people,</span> and the
          </motion.span>
          <br className="hidden sm:block" />

          {/* Line 2 — media in with icons, then text */}
          <motion.span {...mediaReveal(0.14)} style={{ display: "inline-flex" }}>
            <MediaBox offset={0} />
          </motion.span>
          <motion.span {...textReveal(0.62)}>
            {" "}<span className="font-display italic">stories</span> that connect
          </motion.span>
          <br className="hidden sm:block" />

          {/* Line 3 — media in with icons, then text */}
          <motion.span {...mediaReveal(0.18)} style={{ display: "inline-flex" }}>
            <MediaBox offset={2} />
          </motion.span>
          <motion.span {...textReveal(0.84)}>
            {" "}them.
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: 1.06, ease: EASE }}
          className="font-sans text-base md:text-lg font-light text-text-custom-secondary tracking-wide mb-10"
        >
          Creator &middot; Builder &middot; Storyteller
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.24, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/projects"
            className="bg-primary text-primary-foreground rounded-full px-8 py-4 font-sans text-sm font-medium hover:opacity-90 transition-opacity"
            data-cursor="pointer"
          >
            Explore My Work &rarr;
          </a>
          <a
            href="/resources"
            className="font-sans text-sm text-text-custom-secondary hover:text-primary transition-colors underline underline-offset-4"
            data-cursor="pointer"
          >
            Or grab a freebie &rarr;
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
