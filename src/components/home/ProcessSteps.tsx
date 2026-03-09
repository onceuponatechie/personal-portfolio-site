import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Understanding the problem space, audience, and goals through research and curiosity-driven exploration.",
    rotate: -3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="ps-bulb" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="hsl(18 78% 52%)" />
            <stop offset="1" stopColor="hsl(18 78% 72%)" />
          </linearGradient>
        </defs>
        <path d="M16 4a9 9 0 016 15.7V23a2 2 0 01-2 2h-8a2 2 0 01-2-2v-3.3A9 9 0 0116 4z" fill="url(#ps-bulb)" />
        <path d="M12 27h8M13 29h6" stroke="hsl(18 78% 52%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <ellipse cx="16" cy="14" rx="3" ry="4" fill="white" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    description: "Translating insights into visual stories — wireframes, prototypes, and brand experiences that feel alive.",
    rotate: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="ps-palette" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="hsl(255 35% 64%)" />
            <stop offset="1" stopColor="hsl(255 35% 84%)" />
          </linearGradient>
        </defs>
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3.6 0 6.6-3 6.6-6.6C28 8.6 22.6 4 16 4z" fill="url(#ps-palette)" />
        <circle cx="11" cy="13" r="2" fill="hsl(18 78% 57%)" />
        <circle cx="16" cy="10" r="2" fill="hsl(44 88% 67%)" />
        <circle cx="21" cy="13" r="2" fill="hsl(155 40% 40%)" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    description: "Bringing it all together with code, automation, and a relentless focus on craft and user delight.",
    rotate: -1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="ps-rocket" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="hsl(213 60% 50%)" />
            <stop offset="1" stopColor="hsl(213 60% 72%)" />
          </linearGradient>
        </defs>
        <path d="M16 4c0 0-8 6-8 16l4 4 4-2 4 2 4-4c0-10-8-16-8-16z" fill="url(#ps-rocket)" />
        <circle cx="16" cy="16" r="2.5" fill="white" fillOpacity="0.4" />
        <path d="M12 24l-3 4M20 24l3 4" stroke="hsl(18 78% 57%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
];

const ProcessSteps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-serif italic text-sm text-muted-foreground mb-3">
              My Process, Explained
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Here's how I <span className="italic">build</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards + SVG Lines */}
        <div className="relative">
          {/* SVG squiggly connector line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 320"
            fill="none"
            preserveAspectRatio="none"
            style={{ zIndex: 0 }}
          >
            <motion.path
              d="M 80 160 C 130 60, 180 260, 250 160 C 320 60, 370 200, 420 140 C 470 80, 520 240, 580 160 C 640 80, 680 220, 740 160 C 800 100, 850 240, 920 160"
              stroke="hsl(18 78% 57%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
              style={{ pathLength }}
            />
            <motion.path
              d="M 80 170 C 140 280, 200 40, 270 170 C 340 300, 400 80, 460 170 C 520 260, 570 60, 640 170 C 710 280, 770 80, 840 170 C 880 230, 900 100, 920 170"
              stroke="hsl(255 35% 74%)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.2"
              style={{ pathLength }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={inView ? { opacity: 1, y: 0, rotate: step.rotate } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ rotate: 0, y: -4, transition: { duration: 0.3 } }}
                className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-8 relative overflow-hidden"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)" }}
              >
                {/* Watermark Number */}
                <span className="absolute top-4 right-4 font-serif text-[64px] text-foreground/[0.06] leading-none">
                  {step.num}
                </span>

                <div className="w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-6"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  {step.icon}
                </div>

                <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
