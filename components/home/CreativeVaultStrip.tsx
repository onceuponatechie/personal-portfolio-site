"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderSparkle } from "@/components/icons/BrandIcons";
import Link from "next/link";

const column1 = [
  { title: "Canva Pitch Deck", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=560&fit=crop" },
  { title: "Social Media Kit", image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=480&fit=crop" },
  { title: "Brand Guidelines", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=520&fit=crop" },
  { title: "Landing Page Mockup", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=600&fit=crop" },
  { title: "Email Template", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=450&fit=crop" },
  { title: "Investor Deck", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop" },
  { title: "Resume Template", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=550&fit=crop" },
  { title: "Notion Dashboard", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=480&fit=crop" },
];

const column2 = [
  { title: "Product Playbook", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop" },
  { title: "Content Calendar", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=560&fit=crop" },
  { title: "Design System Guide", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=480&fit=crop" },
  { title: "Automation Workflow", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=540&fit=crop" },
  { title: "Webflow Template", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=520&fit=crop" },
  { title: "Podcast Kit", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=450&fit=crop" },
  { title: "Analytics Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop" },
  { title: "Startup Toolkit", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=560&fit=crop" },
];

const column3 = [
  { title: "SEO Checklist", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=520&fit=crop" },
  { title: "UI Component Kit", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=480&fit=crop" },
  { title: "E-commerce Template", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=560&fit=crop" },
  { title: "Newsletter Guide", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop" },
  { title: "Pricing Page", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=540&fit=crop" },
  { title: "Portfolio Theme", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=450&fit=crop" },
  { title: "Icon Set", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop" },
  { title: "SaaS Landing", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=520&fit=crop" },
];

const ScrollColumn = ({ cards, speed, reverse = false }: { cards: typeof column1; speed: number; reverse?: boolean }) => (
  <div className="flex-1 overflow-hidden relative" style={{ height: "100%" }}>
    <div
      className="flex flex-col gap-2"
      style={{
        animation: `scroll-up ${speed}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {[...cards, ...cards].map((card, i) => (
        <div key={i} className="rounded-2xl overflow-hidden shadow-sm">
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-sans text-[10px] font-medium text-white/80">{card.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CreativeVaultStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-0">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <div className="bg-dark-bg rounded-3xl p-[2px] overflow-hidden">
          <div className="bg-dark-bg rounded-3xl overflow-hidden relative" style={{ height: "1200px" }}>
            <div className="absolute inset-0 flex gap-2 py-2 px-6">
              <ScrollColumn cards={column1} speed={35} />
              <ScrollColumn cards={column2} speed={28} />
              <div className="hidden md:flex flex-1">
                <ScrollColumn cards={column3} speed={35} reverse />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30 pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="bg-dark-bg text-white rounded-full px-4 py-2 text-sm font-sans mb-4 whitespace-nowrap"
                >
                  The Creative Vault
                </motion.div>
                <Link href="/resources" data-cursor="pointer">
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)" }}
                    className="w-[120px] h-[120px] rounded-full glassmorphism flex items-center justify-center transition-all"
                  >
                    <FolderSparkle size={32} />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeVaultStrip;
