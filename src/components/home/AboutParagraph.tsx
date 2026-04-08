import { useRef, useState, useEffect } from "react";
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
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!textRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setTextHeight(entry.contentRect.height);
    });
    observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

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
          className="font-serif italic text-sm text-muted-foreground mb-6"
        >
          Who I Am
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left — Scroll-reveal paragraph */}
          <div className="flex-1" ref={textRef}>
            <motion.p
              className="font-serif text-xl md:text-[28px] leading-relaxed font-light"
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
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 font-sans text-sm font-medium hover:opacity-90 transition-opacity"
                data-cursor="pointer"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right — Feminine character SVG animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block shrink-0"
            style={{ height: textHeight || "auto" }}
          >
            <svg
              viewBox="0 0 280 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "100%", width: "auto" }}
            >
              {/* Hair — long flowing */}
              <motion.path
                d="M100 72C95 45 115 25 140 22C165 25 185 45 180 72C182 75 186 80 188 90C192 105 194 125 190 145C188 155 182 162 178 165C178 170 176 175 172 178C172 178 175 185 174 195C173 210 165 225 160 228L162 232C168 228 178 220 188 218C200 215 218 220 228 240C236 258 230 285 228 295L225 310L218 308C220 298 224 275 220 258C216 242 206 232 192 230C180 228 168 235 162 240L158 244C155 248 148 255 140 258C132 255 125 248 122 244L118 240C112 235 100 228 88 230C74 232 64 242 60 258C56 275 60 298 62 308L55 310L52 295C50 285 44 258 52 240C62 220 80 215 92 218C102 220 112 228 118 232L120 228C115 225 107 210 106 195C105 185 108 178 108 178C104 175 102 170 102 165C98 162 92 155 90 145C86 125 88 105 92 90C94 80 98 75 100 72Z"
                fill="#1A1A1A"
              />

              {/* Face */}
              <ellipse cx="140" cy="115" rx="38" ry="45" fill="#F5D0B0" />

              {/* Eyes */}
              <motion.ellipse
                cx="126" cy="108" rx="3.5" ry="4.5"
                fill="#1A1A1A"
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.47, 0.49, 1] }}
              />
              <ellipse cx="154" cy="108" rx="3.5" ry="4.5" fill="#1A1A1A" />
              {/* Eye highlights */}
              <circle cx="127.5" cy="106" r="1.2" fill="white" opacity="0.85" />
              <circle cx="155.5" cy="106" r="1.2" fill="white" opacity="0.85" />

              {/* Eyebrows */}
              <path d="M118 98C121 95 126 94 131 96" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M149 96C154 94 159 95 162 98" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none" />

              {/* Nose */}
              <path d="M138 118C139 121 141 121 142 118" stroke="#C4956A" strokeWidth="1" strokeLinecap="round" fill="none" />

              {/* Smile */}
              <path d="M128 128Q140 138 152 128" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Blush */}
              <circle cx="117" cy="122" r="6" fill="#F4A0A0" opacity="0.25" />
              <circle cx="163" cy="122" r="6" fill="#F4A0A0" opacity="0.25" />

              {/* Neck */}
              <rect x="132" y="155" width="16" height="18" rx="4" fill="#F5D0B0" />

              {/* Top / blouse */}
              <path d="M95 178C95 172 110 165 140 165C170 165 185 172 185 178L192 280L88 280L95 178Z" fill="#7C9A72" />
              {/* Collar detail */}
              <path d="M125 168C130 178 140 182 140 182C140 182 150 178 155 168" stroke="#6B8A62" strokeWidth="1.5" fill="none" />

              {/* Arms */}
              <path d="M95 185C85 192 72 210 68 230C64 250 68 268 72 275" stroke="#F5D0B0" strokeWidth="14" strokeLinecap="round" fill="none" />
              <path d="M185 185C195 192 208 210 212 230C216 250 212 268 208 275" stroke="#F5D0B0" strokeWidth="14" strokeLinecap="round" fill="none" />
              {/* Sleeves */}
              <path d="M95 178C85 185 78 195 76 205" stroke="#7C9A72" strokeWidth="16" strokeLinecap="round" fill="none" />
              <path d="M185 178C195 185 202 195 204 205" stroke="#7C9A72" strokeWidth="16" strokeLinecap="round" fill="none" />

              {/* Hands */}
              <circle cx="72" cy="278" r="8" fill="#F5D0B0" />
              <circle cx="208" cy="278" r="8" fill="#F5D0B0" />

              {/* Laptop */}
              <rect x="80" y="268" rx="4" width="120" height="8" fill="#444" />
              <path d="M85 268L92 238H188L195 268Z" fill="#555" />
              <rect x="96" y="242" rx="2" width="88" height="22" fill="#8BC6EC" opacity="0.6" />

              {/* Skirt */}
              <path d="M88 280C85 310 82 350 78 380L202 380C198 350 195 310 192 280L88 280Z" fill="#1A1A1A" />

              {/* Floating elements — creative sparkles */}
              <motion.g
                animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <circle cx="55" cy="180" r="3" fill="#7C9A72" opacity="0.6" />
                <circle cx="48" cy="195" r="2" fill="#7C9A72" opacity="0.4" />
              </motion.g>
              <motion.g
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <circle cx="228" cy="175" r="3" fill="hsl(18 78% 57%)" opacity="0.6" />
                <circle cx="235" cy="192" r="2" fill="hsl(18 78% 57%)" opacity="0.4" />
              </motion.g>
              <motion.g
                animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <path d="M222 155L226 148L230 155L226 152Z" fill="hsl(44 88% 57%)" opacity="0.5" />
              </motion.g>
              <motion.g
                animate={{ y: [0, -6, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <path d="M52 155L56 148L60 155L56 152Z" fill="hsl(255 35% 64%)" opacity="0.5" />
              </motion.g>
            </svg>
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
