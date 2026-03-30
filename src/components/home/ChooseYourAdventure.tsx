import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ── SVG Icons ─────────────────────────────────────────────── */

const BookQuillIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Open book */}
    <path d="M8 16C8 14.9 8.9 14 10 14H28C30.2 14 32 15.8 32 18V50C32 48.3 30.7 47 29 47H10C8.9 47 8 46.1 8 45V16Z" fill="#F5E6D3" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M56 16C56 14.9 55.1 14 54 14H36C33.8 14 32 15.8 32 18V50C32 48.3 33.3 47 35 47H54C55.1 47 56 46.1 56 45V16Z" fill="#F5E6D3" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M32 18V50" stroke="#1A1A1A" strokeWidth="1.8" />
    {/* Faint ruled lines on left page */}
    <line x1="13" y1="22" x2="27" y2="22" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    <line x1="13" y1="27" x2="27" y2="27" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    <line x1="13" y1="32" x2="27" y2="32" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    <line x1="13" y1="37" x2="27" y2="37" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    {/* Faint ruled lines on right page */}
    <line x1="37" y1="22" x2="51" y2="22" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    <line x1="37" y1="27" x2="51" y2="27" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    <line x1="37" y1="32" x2="51" y2="32" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.15" />
    {/* Quill pen resting on right page */}
    <path d="M46 40L52 12C52 12 54 10 55 11C56 12 54.5 13.5 54.5 13.5L48 42L46 40Z" fill="#D4A574" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M46 40L44 44L48 42" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="1" strokeLinejoin="round" />
    {/* Ink drop at quill tip */}
    <circle cx="44.5" cy="45" r="1.5" fill="#1A1A1A" opacity="0.7" />
  </svg>
);

const WrenchBoltIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lightning bolt behind */}
    <path d="M36 8L26 30H36L28 56L48 28H36L42 8H36Z" fill="#FDE68A" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7" />
    {/* Wrench at ~30 degree angle */}
    <g transform="rotate(-30, 32, 32)">
      <path d="M18 24C18 18.5 22.5 14 28 14C29.5 14 31 14.4 32.3 15L27 20.3V26H32.7L38 20.7C38.6 22 39 23.5 39 25C39 30.5 34.5 35 29 35C27.5 35 26 34.6 24.7 34L14 44.7C12.8 45.9 10.9 45.9 9.7 44.7L8.3 43.3C7.1 42.1 7.1 40.2 8.3 39L19 28.3C18.4 27 18 25.5 18 24Z" fill="#B0B0B0" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Wrench jaw detail */}
      <path d="M27 20.3V26H32.7" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  </svg>
);

const LightbulbPlayIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Subtle radial glow */}
    <circle cx="32" cy="28" r="22" fill="#FDE68A" opacity="0.15" />
    {/* Lightbulb body */}
    <path d="M32 8C23.2 8 16 15.2 16 24C16 29.5 18.8 34.3 23 37.2V42C23 43.1 23.9 44 25 44H39C40.1 44 41 43.1 41 42V37.2C45.2 34.3 48 29.5 48 24C48 15.2 40.8 8 32 8Z" fill="#FFD166" stroke="#1A1A1A" strokeWidth="1.8" strokeLinejoin="round" />
    {/* Bulb base rings */}
    <path d="M25 48H39" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M27 52H37" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
    {/* Play button triangle inside bulb */}
    <path d="M28 20L40 28L28 36V20Z" fill="#1A1A1A" opacity="0.6" />
    {/* Glass highlight */}
    <path d="M24 18C24 18 26 14 32 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

/* ── Adventure Swirl SVG (hand-drawn line through "Adventure") ── */

const AdventureSwirl = ({ animate }: { animate: boolean }) => (
  <motion.svg
    viewBox="0 0 280 30"
    fill="none"
    className="absolute -bottom-2 left-0 w-full"
    style={{ overflow: "visible" }}
  >
    <motion.path
      d="M5 18 C40 4, 80 28, 120 14 C160 0, 200 26, 240 12 C255 8, 268 16, 275 14"
      stroke="#5DCDF1"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={animate ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
    />
  </motion.svg>
);

/* ── Card Data ─────────────────────────────────────────────── */

const cards = [
  {
    icon: <BookQuillIcon />,
    heading: "Tell Better Stories",
    body: "Frameworks, resources, and builds for writers, storytellers, and anyone with something worth saying.",
    link: "/storyteller",
    hoverColor: "#FDE68A",
    column: "left" as const,
  },
  {
    icon: <WrenchBoltIcon />,
    heading: "Build a Thing",
    body: "Building in public, frontend experiments, no-code tools, and resources for people who make things.",
    link: "/builder",
    hoverColor: "#E9D5FF",
    column: "left" as const,
  },
  {
    icon: <LightbulbPlayIcon />,
    heading: "Think Like a Creator",
    body: "Insights on the creator economy, tools that work, and builds made for people who make things online.",
    link: "/creator",
    hoverColor: "#D5FDD8",
    column: "right" as const,
  },
];

/* ── Main Component ────────────────────────────────────────── */

const ChooseYourAdventure = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const leftCards = cards.filter((c) => c.column === "left");
  const rightCards = cards.filter((c) => c.column === "right");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* ── Section Title (left-aligned, above left column) ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 lg:mb-0 lg:max-w-[46%]"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] leading-[1.1]">
            Choose Your{" "}
            <span className="relative inline-block italic">
              Adventure
              <AdventureSwirl animate={inView} />
            </span>
          </h2>
        </motion.div>

        {/* ── Desktop: Two-column staggered grid ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-6 mt-10">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            {leftCards.map((card, i) => (
              <AdventureCard
                key={card.heading}
                card={card}
                inView={inView}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>

          {/* Right column — offset down 300px */}
          <div className="flex flex-col gap-5" style={{ marginTop: 300 }}>
            {rightCards.map((card) => (
              <AdventureCard
                key={card.heading}
                card={card}
                inView={inView}
                delay={0.35}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile: Single column, no offset ── */}
        <div className="flex flex-col gap-5 lg:hidden mt-10">
          {cards.map((card, i) => (
            <AdventureCard
              key={card.heading}
              card={card}
              inView={inView}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Individual Card ───────────────────────────────────────── */

function AdventureCard({
  card,
  inView,
  delay,
}: {
  card: (typeof cards)[number];
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-[20px] p-9 min-h-[320px] flex flex-col"
      style={{
        backgroundColor: hovered ? card.hoverColor : "#f6f2ef",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.08)"
          : "none",
        transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Icon with wiggle on hover */}
      <motion.div
        animate={
          hovered
            ? {
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4, ease: "easeInOut" },
              }
            : { rotate: 0 }
        }
        className="mb-6"
      >
        {card.icon}
      </motion.div>

      {/* Heading */}
      <h3 className="font-serif text-[28px] md:text-[32px] text-[#1A1A1A] leading-[1.2] mb-4">
        {card.heading}
      </h3>

      {/* Body */}
      <p className="font-sans text-[15px] text-[#1A1A1A]/70 leading-[1.7] mb-6">
        {card.body}
      </p>

      {/* Link */}
      <Link
        to={card.link}
        className="mt-auto font-sans text-[15px] text-[#1A1A1A] underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
      >
        Explore &rarr;
      </Link>
    </motion.div>
  );
}

export default ChooseYourAdventure;
