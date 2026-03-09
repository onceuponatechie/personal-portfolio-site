import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Palette, Rocket } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description: "Understanding the problem space, audience, and goals through research and curiosity-driven exploration.",
    icon: Lightbulb,
    rotate: -3,
  },
  {
    num: "02",
    title: "Design",
    description: "Translating insights into visual stories — wireframes, prototypes, and brand experiences that feel alive.",
    icon: Palette,
    rotate: 2,
  },
  {
    num: "03",
    title: "Build",
    description: "Bringing it all together with code, automation, and a relentless focus on craft and user delight.",
    icon: Rocket,
    rotate: -1,
  },
];

const ProcessSteps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          {/* SVG connector line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 300"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 150 150 C 250 50, 350 250, 500 150 C 650 50, 750 250, 850 150"
              stroke="hsl(18 78% 57%)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
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
                className="bg-card rounded-2xl p-8 shadow-sm border border-border relative overflow-hidden"
              >
                {/* Watermark Number */}
                <span className="absolute top-4 right-4 font-serif text-[64px] text-foreground/[0.06] leading-none">
                  {step.num}
                </span>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
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
