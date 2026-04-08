import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const words = [
  { text: "I", green: false },
  { text: "build", green: false },
  { text: "products,", green: false },
  { text: "tell", green: false },
  { text: "stories,", green: false },
  { text: "and", green: false },
  { text: "craft", green: true },
  { text: "experiences", green: false },
  { text: "that", green: false },
  { text: "connect", green: false },
  { text: "with", green: false },
  { text: "people", green: false },
  { text: "through", green: false },
  { text: "thoughtful", green: true },
  { text: "design,", green: false },
  { text: "honest", green: false },
  { text: "writing,", green: false },
  { text: "and", green: false },
  { text: "creative", green: true },
  { text: "problem-solving.", green: false },
];

const SAGE_GREEN = "#7C9A72";

const AboutParagraph = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center center"],
  });
  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Mini header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-8"
        >
          About Me
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left — Scroll-reveal paragraph */}
          <div className="flex-1">
            <motion.p
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.3] font-normal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0 0.35em",
              }}
            >
              {words.map((word, i) => (
                <ScrollRevealWord
                  key={i}
                  word={word.text}
                  index={i}
                  green={word.green}
                  progress={revealProgress}
                />
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sans text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2596be" }}
                data-cursor="pointer"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right — Personal photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[380px] shrink-0"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                alt="Personal portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function ScrollRevealWord({
  word,
  index,
  green,
  progress,
}: {
  word: string;
  index: number;
  green: boolean;
  progress: ReturnType<typeof useTransform>;
}) {
  const color = useTransform(progress, (latest: number) => {
    if (latest >= index + 1) {
      return green ? SAGE_GREEN : "#1A1A1A";
    }
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
    <motion.span
      style={{
        color,
        fontWeight: green ? 500 : undefined,
        fontStyle: green ? "italic" : undefined,
      }}
    >
      {word}
    </motion.span>
  );
}

export default AboutParagraph;
