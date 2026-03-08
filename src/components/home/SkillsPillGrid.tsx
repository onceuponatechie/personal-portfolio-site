import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Settings, Code, MessageCircle, Search, Pen } from "lucide-react";

const skills = [
  { label: "Product Building", icon: Box, color: "text-brand-orange", side: "left" as const },
  { label: "Automation", icon: Settings, color: "text-brand-green", side: "left" as const },
  { label: "Python", icon: Code, color: "text-brand-blue", side: "left" as const },
  { label: "Storytelling", icon: MessageCircle, color: "text-brand-lavender", side: "right" as const },
  { label: "Research", icon: Search, color: "text-brand-blue", side: "right" as const },
  { label: "Design", icon: Pen, color: "text-brand-yellow", side: "right" as const },
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

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Content with flanking pills */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Left pills - desktop only */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {leftSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full px-4 py-2.5 flex items-center gap-2"
                style={{ transform: `rotate(${[-3, 2, -1][i]}deg)` }}
              >
                <skill.icon className={`w-4 h-4 ${skill.color}`} />
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
                className="font-sans text-xl md:text-[28px] leading-relaxed text-foreground"
                style={{ fontWeight: 400 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Right pills - desktop only */}
          <div className="hidden lg:flex flex-col gap-4 items-start">
            {rightSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full px-4 py-2.5 flex items-center gap-2"
                style={{ transform: `rotate(${[2, -2, 1][i]}deg)` }}
              >
                <skill.icon className={`w-4 h-4 ${skill.color}`} />
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
              <skill.icon className={`w-3.5 h-3.5 ${skill.color}`} />
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
