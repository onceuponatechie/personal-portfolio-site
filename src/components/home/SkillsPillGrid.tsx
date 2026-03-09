import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    label: "Product Building",
    side: "left" as const,
    gradient: ["hsl(18 78% 57%)", "hsl(18 78% 72%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-cube" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(18 78% 57%)" /><stop offset="1" stopColor="hsl(18 78% 72%)" /></linearGradient></defs>
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="url(#g-cube)" opacity="0.9" />
        <path d="M12 22V12M3 7l9 5 9-5" stroke="white" strokeWidth="1.2" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Automation",
    side: "left" as const,
    gradient: ["hsl(155 40% 30%)", "hsl(155 40% 50%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-gear" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(155 40% 30%)" /><stop offset="1" stopColor="hsl(155 40% 50%)" /></linearGradient></defs>
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="url(#g-gear)" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="url(#g-gear)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "Python",
    side: "left" as const,
    gradient: ["hsl(213 60% 57%)", "hsl(213 60% 72%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-code" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(213 60% 57%)" /><stop offset="1" stopColor="hsl(213 60% 72%)" /></linearGradient></defs>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="url(#g-code)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Storytelling",
    side: "right" as const,
    gradient: ["hsl(255 35% 74%)", "hsl(255 35% 84%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-chat" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(255 35% 74%)" /><stop offset="1" stopColor="hsl(255 35% 84%)" /></linearGradient></defs>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="url(#g-chat)" opacity="0.85" />
      </svg>
    ),
  },
  {
    label: "Research",
    side: "right" as const,
    gradient: ["hsl(213 60% 57%)", "hsl(213 60% 72%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-search" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(213 60% 57%)" /><stop offset="1" stopColor="hsl(213 60% 72%)" /></linearGradient></defs>
        <circle cx="11" cy="11" r="8" stroke="url(#g-search)" strokeWidth="2" fill="none" />
        <path d="M21 21l-4.35-4.35" stroke="url(#g-search)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Design",
    side: "right" as const,
    gradient: ["hsl(44 88% 67%)", "hsl(44 88% 77%)"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <defs><linearGradient id="g-pen" x1="0" y1="0" x2="1" y2="1"><stop stopColor="hsl(44 88% 67%)" /><stop offset="1" stopColor="hsl(44 88% 77%)" /></linearGradient></defs>
        <path d="M12 19l7-7 3 3-7 7H12v-3zM18 13l-1.5-1.5M2 21l3.5-1L18 7.5 16.5 6 4 18.5 2 21z" fill="url(#g-pen)" opacity="0.85" />
      </svg>
    ),
  },
];

const paragraphLines = [
  "I'm a product storyteller and creative builder",
  "who turns ideas into experiences people love —",
  "through design, automation, and a whole lot",
  "of curiosity.",
];

const SkillsPillGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const leftSkills = skills.filter((s) => s.side === "left");
  const rightSkills = skills.filter((s) => s.side === "right");

  const rotations = {
    left: [-3, 2, -1],
    right: [2, -2, 1],
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <div className="relative flex items-center justify-center gap-8">
          {/* Left pills - desktop */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {leftSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full px-4 py-2.5 flex items-center gap-2"
                style={{ transform: `rotate(${rotations.left[i]}deg)` }}
              >
                {skill.icon}
                <span className="font-sans text-xs font-medium text-foreground whitespace-nowrap">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Paragraph */}
          <div className="text-center max-w-xl">
            {paragraphLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.4, duration: 0.5 }}
                className="font-sans text-xl md:text-[28px] leading-relaxed text-foreground font-light"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Right pills - desktop */}
          <div className="hidden lg:flex flex-col gap-4 items-start">
            {rightSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full px-4 py-2.5 flex items-center gap-2"
                style={{ transform: `rotate(${rotations.right[i]}deg)` }}
              >
                {skill.icon}
                <span className="font-sans text-xs font-medium text-foreground whitespace-nowrap">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 lg:hidden">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full px-3 py-2 flex items-center gap-2"
            >
              {skill.icon}
              <span className="font-sans text-[11px] font-medium text-foreground">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPillGrid;
