"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const skills = [
  { label: "Product Building", side: "left" as const, yOffset: -20, rotation: -4, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-cube" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(18 78% 57%)" /><stop offset="1" stopColor="hsl(18 78% 72%)" /></linearGradient></defs><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="url(#sp-cube)" opacity="0.9" /><path d="M12 22V12M3 7l9 5 9-5" stroke="white" strokeWidth="1" opacity="0.5" /></svg>) },
  { label: "Automation", side: "left" as const, yOffset: 30, rotation: 3, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-gear" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(155 40% 30%)" /><stop offset="1" stopColor="hsl(155 40% 50%)" /></linearGradient></defs><circle cx="12" cy="12" r="3" fill="url(#sp-gear)" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="url(#sp-gear)" strokeWidth="1.2" fill="none" /></svg>) },
  { label: "Python", side: "left" as const, yOffset: -10, rotation: -2, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-code" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(213 60% 57%)" /><stop offset="1" stopColor="hsl(213 60% 72%)" /></linearGradient></defs><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="url(#sp-code)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
  { label: "Storytelling", side: "right" as const, yOffset: -25, rotation: 3, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-chat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(255 35% 64%)" /><stop offset="1" stopColor="hsl(255 35% 84%)" /></linearGradient></defs><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="url(#sp-chat)" opacity="0.85" /></svg>) },
  { label: "Research", side: "right" as const, yOffset: 20, rotation: -3, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-search" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(213 60% 50%)" /><stop offset="1" stopColor="hsl(213 60% 72%)" /></linearGradient></defs><circle cx="11" cy="11" r="8" stroke="url(#sp-search)" strokeWidth="2" fill="url(#sp-search)" fillOpacity="0.15" /><path d="M21 21l-4.35-4.35" stroke="url(#sp-search)" strokeWidth="2.5" strokeLinecap="round" /></svg>) },
  { label: "Design", side: "right" as const, yOffset: -5, rotation: 2, icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="sp-pen" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(44 88% 57%)" /><stop offset="1" stopColor="hsl(44 88% 72%)" /></linearGradient></defs><path d="M12 19l7-7 3 3-7 7H12v-3z" fill="url(#sp-pen)" /><path d="M2 21l3.5-1L18 7.5 16.5 6 4 18.5 2 21z" fill="url(#sp-pen)" opacity="0.7" /></svg>) },
];

const words = [
  { text: "Writing", green: false }, { text: "the", green: false }, { text: "unofficial", green: false },
  { text: "diary", green: false }, { text: "of", green: false }, { text: "a", green: false },
  { text: "techie", green: false }, { text: "building", green: true }, { text: "towards", green: false },
  { text: "products", green: true }, { text: "that", green: false }, { text: "don\u2019t", green: false },
  { text: "need", green: false }, { text: "explaining.", green: false },
];

const SAGE_GREEN = "#7C9A72";

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

const SkillsPillGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const leftSkills = skills.filter((s) => s.side === "left");
  const rightSkills = skills.filter((s) => s.side === "right");

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "center center"] });
  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="section-label mb-6 text-center"
        >
          What I Do
        </motion.p>

        <div className="relative flex items-center justify-center gap-12 lg:gap-16">
          <div className="hidden lg:flex flex-col gap-3 items-end" style={{ width: 180 }}>
            {leftSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -80, rotate: 0 }}
                animate={inView ? { opacity: 1, x: 0, rotate: skill.rotation } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white border border-gray-200/60 rounded-full px-5 py-3 flex items-center gap-2.5"
                style={{ marginTop: skill.yOffset, boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)" }}
              >
                {skill.icon}
                <span className="font-sans text-xs font-medium text-foreground whitespace-nowrap">{skill.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-lg">
            <motion.p
              className="font-serif text-xl md:text-[28px] leading-relaxed font-light"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.35em" }}
            >
              {words.map((word, i) => (
                <ScrollRevealWord key={i} word={word.text} index={i} green={word.green} progress={revealProgress} />
              ))}
            </motion.p>
          </div>

          <div className="hidden lg:flex flex-col gap-3 items-start" style={{ width: 180 }}>
            {rightSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: 80, rotate: 0 }}
                animate={inView ? { opacity: 1, x: 0, rotate: skill.rotation } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white border border-gray-200/60 rounded-full px-5 py-3 flex items-center gap-2.5"
                style={{ marginTop: skill.yOffset, boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)" }}
              >
                {skill.icon}
                <span className="font-sans text-xs font-medium text-foreground whitespace-nowrap">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="bg-white border border-gray-200/60 rounded-full px-4 py-2.5 flex items-center gap-2"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)" }}
            >
              {skill.icon}
              <span className="font-sans text-[11px] font-medium text-foreground">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPillGrid;
