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
}: {
  cards: ResourceCard[];
  speed: number;
  reverse?: boolean;
}) => (
  <div className="flex-1 min-w-0 overflow-hidden" style={{ height: "100%" }}>
    <div
      className="flex flex-col gap-3 md:gap-4"
      style={{
        animation: `scroll-up ${speed}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...cards, ...cards].map((card, i) => (
        <article
          key={i}
          className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.18)]"
        >
          <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* legibility scrim for the label */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            {/* price chip */}
            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur">
              {card.price}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/70">
                {card.category}
              </p>
              <p className="font-sans text-sm font-medium leading-snug text-white">
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

  const half = Math.ceil(resources.length / 2);
  const columnA = resources.slice(0, half);
  const columnB = resources.slice(half);

  // White fade-to-background at the top & bottom edges; fully transparent
  // through the centre so cards land in a crisp, well-lit focal band.
  const dimMask =
    "linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0) 22%, hsl(var(--background) / 0) 78%, hsl(var(--background)) 100%)";
  // Blur only the top & bottom bands, leaving the centre sharp.
  const blurBandMask =
    "linear-gradient(to bottom, black 0%, transparent 17%, transparent 83%, black 100%)";

  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-4">
        {/* White gradient border frame */}
        <div className="rounded-[2.25rem] bg-gradient-to-b from-white/90 via-white/40 to-white/70 p-[1.5px] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.28)]">
          {/* Ample white-gradient padding around the viewport */}
          <div className="rounded-[2.2rem] bg-gradient-to-b from-surface-light to-background p-3 sm:p-4 md:p-5">
            <div
              className="relative overflow-hidden rounded-[1.75rem] bg-background"
              style={{ height: "clamp(560px, 88vh, 820px)" }}
            >
              {/* Two-column mosaic — stays two-column at every breakpoint */}
              <div className="absolute inset-0 flex gap-3 p-3 md:gap-4 md:p-4">
                <ScrollColumn cards={columnA} speed={40} />
                <ScrollColumn cards={columnB} speed={33} reverse />
              </div>

              {/* White dim mask — fades content into the background at the edges */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{ background: dimMask }}
              />

              {/* White blur mask — softens incoming/outgoing cards at the edges */}
              <div
                className="pointer-events-none absolute inset-0 z-10 backdrop-blur-[6px]"
                style={{ WebkitMaskImage: blurBandMask, maskImage: blurBandMask }}
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
                    {/* speech-bubble tail */}
                    <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] bg-foreground" />
                  </motion.div>
                  <Link href="/resources" data-cursor="pointer" aria-label="Explore the Creative Vault">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-[112px] w-[112px] items-center justify-center rounded-full border border-black/[0.06] bg-white shadow-[0_18px_40px_-14px_rgba(0,0,0,0.3)] transition-colors hover:bg-surface-light"
                    >
                      <Folder className="h-8 w-8 text-foreground" />
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
