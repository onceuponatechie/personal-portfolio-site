"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Headphones, Hammer, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import HeadingAccent from "@/components/shared/HeadingAccent";

const obsessions = [
  { label: "Figma", emoji: "🎨" },
  { label: "Notion", emoji: "📝" },
  { label: "React", emoji: "⚛️" },
  { label: "Tailwind CSS", emoji: "💨" },
  { label: "Python", emoji: "🐍" },
  { label: "Make / Zapier", emoji: "⚡" },
  { label: "Canva", emoji: "🖼️" },
  { label: "ChatGPT", emoji: "🤖" },
];

const currently = [
  { label: "Reading", value: "Thinking, Fast and Slow", icon: BookOpen, color: "hsl(255,35%,64%)" },
  { label: "Building", value: "This portfolio, obviously", icon: Hammer, color: "hsl(18,78%,57%)" },
  { label: "Listening to", value: "Lo-fi beats & podcasts", icon: Headphones, color: "hsl(196,83%,56%)" },
];

const paragraphs = [
  "I've always been fascinated by the space where technology meets storytelling. Not the cold, clinical kind of tech — the warm, human kind. The kind that makes you smile when you use it.",
  "My journey started with breaking things. Websites, apps, spreadsheets — if it had buttons, I was clicking them in the wrong order to see what would happen. Turns out, that curiosity is what makes a good product person.",
  "Today, I build digital products, design brand experiences, create automation workflows, and write about the creative process. I believe the best work happens at intersections — where design meets code, where data meets empathy, where structure meets play.",
  "When I'm not building, you'll find me deep in a book, experimenting with new tools, or curating playlists that match the energy of whatever I'm working on.",
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto md:mx-0"
              >
                <div className="absolute -inset-3 rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-brand-lavender/25 blur-xl" />
                <div className="relative w-48 h-48 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] overflow-hidden bg-surface-warm">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div>
                <p className="font-italic-display text-[20px] text-muted-foreground mb-6">About Me</p>
                <h1 className="font-display font-semibold text-[36px] md:text-[44px] lg:text-[64px] text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
                  Hey, I&apos;m <HeadingAccent variant="circle" color="hsl(255,35%,64%)">Essy</HeadingAccent>
                </h1>
                <p className="font-sans text-[20px] font-normal text-muted-foreground leading-[1.6] max-w-xl">
                  A product storyteller and creative builder turning ideas into experiences people love — through design, automation, and a whole lot of curiosity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-[80px] md:pb-[120px]">
        <div className="max-w-2xl mx-auto px-6">
          {paragraphs.map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <p className="font-sans text-[18px] font-normal text-foreground/90 leading-[1.7] mb-6">{para}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Obsessed With */}
      <section className="pb-[80px] md:pb-[120px]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-italic-display text-[20px] text-muted-foreground mb-3">Favorites</p>
              <h2 className="font-display font-semibold text-[32px] md:text-[40px] text-foreground leading-[1.15] tracking-[-0.015em]">
                Currently <HeadingAccent variant="doubleCurve" color="hsl(18,78%,57%)">obsessed</HeadingAccent> with
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {obsessions.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform"
                style={{ backgroundColor: "#fdfcfa" }}
              >
                <span className="text-3xl mb-2 block">{item.emoji}</span>
                <span className="font-sans text-[14px] font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="pb-[80px] md:pb-[120px]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-8">
              <p className="font-italic-display text-[20px] text-muted-foreground mb-3">In the air</p>
              <h2 className="font-display font-semibold text-[32px] md:text-[40px] text-foreground leading-[1.15] tracking-[-0.015em]">
                Right <span className="font-italic-display text-muted-foreground">now</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {currently.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{ backgroundColor: "#fdfcfa" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] leading-none text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="font-display font-semibold text-[22px] leading-[1.3] tracking-[-0.005em] text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[80px] md:pb-[160px]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div
              className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              style={{ backgroundColor: "#fbfaf7" }}
            >
              <div>
                <p className="font-italic-display text-[20px] text-muted-foreground mb-3">Your turn</p>
                <h2 className="font-display font-semibold text-[32px] md:text-[40px] text-foreground leading-[1.15] tracking-[-0.015em]">
                  Want to build <span className="font-italic-display">something together?</span>
                </h2>
                <p className="font-sans text-[14px] text-muted-foreground mt-4 max-w-md leading-[1.5]">
                  I&apos;m always open to collaborations, freelance projects, and quiet experiments.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-6 py-3.5 font-sans text-[15px] font-medium leading-none hover:bg-primary transition-colors"
                data-cursor="pointer"
              >
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
