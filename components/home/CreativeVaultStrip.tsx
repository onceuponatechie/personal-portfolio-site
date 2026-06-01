"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Folder } from "lucide-react";
import Link from "next/link";

interface ResourceCard {
  title: string;
  category: string;
  price: string;
  image: string;
  description?: string;
}

const ScrollColumn = ({
  cards,
  speed,
  reverse = false,
  className = "",
}: {
  cards: ResourceCard[];
  speed: number;
  reverse?: boolean;
  className?: string;
}) => (
  <div className={`min-w-0 flex-1 overflow-hidden ${className}`} style={{ height: "100%" }}>
    <div
      className="flex flex-col gap-2.5 md:gap-3"
      style={{
        animation: `scroll-up ${speed}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...cards, ...cards].map((card, i) => (
        <article
          key={i}
          className="group relative overflow-hidden rounded-xl border border-black/[0.05] bg-white shadow-[0_6px_18px_-12px_rgba(0,0,0,0.15)]"
        >
          <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-foreground shadow-sm backdrop-blur">
              {card.price}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="font-sans text-[9px] font-medium uppercase tracking-[0.08em] text-white/65">
                {card.category}
              </p>
              <p className="font-sans text-[13px] font-medium leading-snug text-white">
                {card.title}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const CreativeVaultStrip = ({ resources = [] }: { resources?: ResourceCard[] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const col1 = resources.slice(0, 4);
  const col2 = resources.slice(4, 7);
  const col3 = resources.slice(7, 10);

  // Progressive fade, weighted to the top: content dissolves into the page
  // background as it scrolls out the top; the bottom only kisses the edge.
  const dimMask =
    "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 5%, hsl(var(--background) / 0) 34%, hsl(var(--background) / 0) 93%, hsl(var(--background) / 0.65) 100%)";
  // Blur is strongest at the very top and eases off by ~38%.
  const blurMask =
    "linear-gradient(to bottom, black 0%, black 6%, transparent 38%, transparent 100%)";

  return (
    <section className="relative py-12 md:py-20">
      <div ref={ref} className="mx-auto max-w-5xl px-4">
        {/* Single hairline white-gradient border — no second frame */}
        <div className="rounded-[1.75rem] bg-gradient-to-b from-white via-white/45 to-white/15 p-px shadow-[0_30px_70px_-48px_rgba(0,0,0,0.22)]">
          {/* Restrained padding in the page colour, so cards float without a 2nd border */}
          <div className="overflow-hidden rounded-[1.7rem] bg-background p-2.5 md:p-3">
            <div
              className="relative overflow-hidden rounded-[1.4rem]"
              style={{ height: "clamp(480px, 64vh, 640px)" }}
            >
              {/* Mosaic — two columns on mobile, three from md up */}
              <div className="absolute inset-0 flex gap-2.5 md:gap-3">
                <ScrollColumn cards={col1} speed={42} />
                <ScrollColumn cards={col2} speed={34} reverse />
                <ScrollColumn cards={col3} speed={48} className="hidden md:block" />
              </div>

              {/* Progressive top-weighted dim mask → fades into page background */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{ background: dimMask }}
              />
              {/* Progressive top-weighted blur */}
              <div
                className="pointer-events-none absolute inset-0 z-10 backdrop-blur-[7px]"
                style={{ WebkitMaskImage: blurMask, maskImage: blurMask }}
              />

              {/* Centre call-to-action */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="relative mb-5 rounded-full bg-foreground px-4 py-2 font-sans text-sm text-background shadow-lg"
                  >
                    The Creative Vault
                    <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] bg-foreground" />
                  </motion.div>
                  <Link href="/resources" data-cursor="pointer" aria-label="Explore the Creative Vault">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-[104px] w-[104px] items-center justify-center rounded-full border border-black/[0.06] bg-white shadow-[0_16px_36px_-14px_rgba(0,0,0,0.28)] transition-colors hover:bg-surface-light"
                    >
                      <Folder className="h-7 w-7 text-foreground" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeVaultStrip;
