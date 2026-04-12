"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BookQuillIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.15))" }}>
    <defs>
      <linearGradient id="book-face" x1="8" y1="14" x2="56" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9F5A" /><stop offset="1" stopColor="#E8784A" />
      </linearGradient>
      <linearGradient id="book-side" x1="8" y1="44" x2="8" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4613A" /><stop offset="1" stopColor="#B8512E" />
      </linearGradient>
      <linearGradient id="page-grad" x1="14" y1="18" x2="50" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFDF7" /><stop offset="1" stopColor="#F5EDE3" />
      </linearGradient>
    </defs>
    <path d="M10 48L32 52L54 48L54 45L32 49L10 45Z" fill="url(#book-side)" />
    <path d="M8 15C8 13.3 9.3 12 11 12H29C30.7 12 32 13.3 32 15V49L10 45C8.9 44.8 8 43.8 8 42.7V15Z" fill="url(#book-face)" />
    <path d="M56 15C56 13.3 54.7 12 53 12H35C33.3 12 32 13.3 32 15V49L54 45C55.1 44.8 56 43.8 56 42.7V15Z" fill="url(#book-face)" />
    <rect x="12" y="16" width="18" height="28" rx="2" fill="url(#page-grad)" />
    <rect x="34" y="16" width="18" height="28" rx="2" fill="url(#page-grad)" />
    <line x1="15" y1="21" x2="27" y2="21" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <line x1="15" y1="25" x2="27" y2="25" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <line x1="15" y1="29" x2="27" y2="29" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <line x1="37" y1="21" x2="49" y2="21" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <line x1="37" y1="25" x2="49" y2="25" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <line x1="37" y1="29" x2="49" y2="29" stroke="#D4C5B5" strokeWidth="1" opacity="0.5" />
    <path d="M32 12V49" stroke="#C85A30" strokeWidth="1.5" opacity="0.4" />
    <path d="M44 36L50 10C50 10 52 8 53 9.5C53.5 10.5 52 12 52 12L46 38L44 36Z" fill="#FDE68A" />
    <path d="M44 36L42 40L46 38" fill="#1A1A1A" />
    <path d="M12 14C12 14 14 12 20 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const WrenchBoltIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.15))" }}>
    <defs>
      <linearGradient id="wrench-grad" x1="10" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C4B5FD" /><stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="bolt-grad" x1="30" y1="6" x2="42" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" /><stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <path d="M38 6L27 28H37L28 58L50 26H38L44 6H38Z" fill="url(#bolt-grad)" />
    <path d="M38 6L27 28H37L28 58L50 26H38L44 6H38Z" fill="white" opacity="0.25" />
    <g transform="rotate(-25, 32, 32)">
      <path d="M20 24C20 18.5 24 14 29 14C30.5 14 32 14.6 33.3 15.5L28 21V27H34L39.3 21.5C40.2 23 40.5 24.5 40.5 26C40.5 31.5 36 36 31 36C29.5 36 28 35.5 26.7 34.8L16 45.5C14.8 46.7 12.9 46.7 11.7 45.5L10.3 44.1C9.1 42.9 9.1 41 10.3 39.8L21 29.1C20.4 27.8 20 26 20 24Z" fill="url(#wrench-grad)" />
      <path d="M10.3 39.8L16 45.5C14.8 46.7 12.9 46.7 11.7 45.5L10.3 44.1C9.1 42.9 9.1 41 10.3 39.8Z" fill="#7C3AED" opacity="0.5" />
      <path d="M24 18C24 18 26 15 30 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </g>
  </svg>
);

const LightbulbPlayIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.15))" }}>
    <defs>
      <linearGradient id="bulb-grad" x1="18" y1="6" x2="46" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#86EFAC" /><stop offset="1" stopColor="#22C55E" />
      </linearGradient>
      <linearGradient id="bulb-base" x1="24" y1="42" x2="40" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D1D5DB" /><stop offset="1" stopColor="#9CA3AF" />
      </linearGradient>
      <radialGradient id="bulb-glow" cx="32" cy="24" r="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE68A" stopOpacity="0.35" /><stop offset="1" stopColor="#FDE68A" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="32" cy="24" r="24" fill="url(#bulb-glow)" />
    <path d="M32 6C22.6 6 15 13.6 15 23C15 28.8 18 33.8 22.5 36.8V42C22.5 43.7 23.8 45 25.5 45H38.5C40.2 45 41.5 43.7 41.5 42V36.8C46 33.8 49 28.8 49 23C49 13.6 41.4 6 32 6Z" fill="url(#bulb-grad)" />
    <path d="M22.5 36.8V42C22.5 43.7 23.8 45 25.5 45H38.5C40.2 45 41.5 43.7 41.5 42V36.8C41.5 36.8 37 39 32 39C27 39 22.5 36.8 22.5 36.8Z" fill="#16A34A" opacity="0.35" />
    <rect x="24" y="45" width="16" height="4" rx="1" fill="url(#bulb-base)" />
    <rect x="26" y="49" width="12" height="3" rx="1.5" fill="url(#bulb-base)" />
    <line x1="24" y1="47" x2="40" y2="47" stroke="#6B7280" strokeWidth="0.8" opacity="0.5" />
    <path d="M28 18L41 25.5L28 33V18Z" fill="white" opacity="0.85" />
    <path d="M22 16C22 16 25 10 33 10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const AdventureCurve = ({ animate }: { animate: boolean }) => (
  <motion.svg viewBox="0 0 200 14" fill="none" className="absolute -bottom-2 left-0 w-full" style={{ overflow: "visible" }} preserveAspectRatio="none">
    <motion.path
      d="M0 10 C50 0, 100 0, 100 7 C100 14, 150 14, 200 4"
      stroke="hsl(44,88%,67%)" strokeWidth="5.5" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={animate ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
    />
  </motion.svg>
);

interface CardData {
  icon: React.ReactNode | null;
  heading: string;
  body: string;
  link: string;
  linkText: string;
  hoverColor: string;
  column: "left" | "right";
  half?: boolean;
}

const cards: CardData[] = [
  { icon: <BookQuillIcon />, heading: "Tell Better Stories", body: "Frameworks, resources, and builds for writers, storytellers, and anyone with something worth saying.", link: "/blog", linkText: "Explore →", hoverColor: "#FDE68A", column: "left" },
  { icon: <WrenchBoltIcon />, heading: "Build a Thing", body: "Building in public, frontend experiments, no-code tools, and resources for people who make things.", link: "/projects", linkText: "Explore →", hoverColor: "#E9D5FF", column: "left" },
  { icon: <LightbulbPlayIcon />, heading: "Think Like a Creator", body: "Insights on the creator economy, tools that work, and builds made for people who make things online.", link: "/resources", linkText: "Explore →", hoverColor: "#D5FDD8", column: "right" },
  { icon: null, heading: "And more!", body: "Stories, resources, projects, and graphics — all in one place for the curious and the creative.", link: "/blog", linkText: "Explore all →", hoverColor: "#5DCDF1", column: "right", half: true },
];

function AdventureCard({ card, inView, delay }: { card: CardData; inView: boolean; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-[20px] p-9 flex flex-col ${card.half ? "" : "min-h-[320px]"}`}
      style={{
        backgroundColor: hovered ? card.hoverColor : "#fdfcfa",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.04)",
        transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {card.icon && (
        <motion.div
          animate={hovered ? { rotate: [0, -5, 5, 0], transition: { duration: 0.4, ease: "easeInOut" } } : { rotate: 0 }}
          className="mb-6 flex-shrink-0"
        >
          {card.icon}
        </motion.div>
      )}
      <h3 className={`font-serif text-[#1A1A1A] leading-[1.2] ${card.half ? "text-[22px] md:text-[24px] mb-2" : "text-[28px] md:text-[32px] mb-4"}`}>
        {card.heading}
      </h3>
      <p className={`font-sans text-[15px] text-[#1A1A1A]/70 leading-[1.7] ${card.half ? "mb-3" : "mb-6"}`}>
        {card.body}
      </p>
      <Link href={card.link} className="mt-auto self-end">
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: hovered ? "hsl(18,78%,57%)" : "#1A1A1A" }}
        >
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </div>
      </Link>
    </motion.div>
  );
}

const ChooseYourAdventure = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const leftCards = cards.filter((c) => c.column === "left");
  const rightCards = cards.filter((c) => c.column === "right");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 lg:mb-10 text-center"
        >
          <p className="font-display italic text-sm text-muted-foreground mb-6">Can I Help?</p>
          <h2 className="font-serif text-[34px] md:text-[44px] text-[#1A1A1A] leading-[1.1]">
            Choose Your{" "}
            <span className="relative inline-block font-display italic">
              Adventure
              <AdventureCurve animate={inView} />
            </span>
          </h2>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-x-6 mt-10">
          <div className="flex flex-col gap-5">
            {leftCards.map((card, i) => (
              <AdventureCard key={card.heading} card={card} inView={inView} delay={0.1 + i * 0.1} />
            ))}
          </div>
          <div className="flex flex-col gap-5" style={{ marginTop: 60 }}>
            {rightCards.map((card, i) => (
              <AdventureCard key={card.heading} card={card} inView={inView} delay={0.35 + i * 0.1} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:hidden mt-10">
          {cards.map((card, i) => (
            <AdventureCard key={card.heading} card={card} inView={inView} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourAdventure;
