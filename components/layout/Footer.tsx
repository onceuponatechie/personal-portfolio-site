"use client";

import { useRef } from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const footerLinks = [
  { label: "FREEBIES", href: "/resources" },
  { label: "STORIES", href: "/blog" },
  { label: "PROJECTS", href: "/projects" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const footerWords = [
  { text: "Let's" }, { text: "build" }, { text: "an" },
];

function FooterRevealWord({ word, index, progress }: { word: string; index: number; progress: ReturnType<typeof useTransform> }) {
  const color = useTransform(progress, (latest: number) => {
    if (latest >= index + 1) return "rgb(255,255,255)";
    if (latest > index) {
      const t = latest - index;
      const v = Math.round(100 + t * 155);
      return `rgb(${v},${v},${v})`;
    }
    return "rgb(100,100,100)";
  });

  return (
    <motion.span style={{ color }}>
      {word}
    </motion.span>
  );
}

function ExperienceReveal({ progress }: { progress: ReturnType<typeof useTransform> }) {
  const color = useTransform(progress, (latest: number) => {
    const wordCount = 3;
    if (latest >= wordCount + 1) return "rgb(255,255,255)";
    if (latest > wordCount) {
      const t = latest - wordCount;
      const v = Math.round(100 + t * 155);
      return `rgb(${v},${v},${v})`;
    }
    return "rgb(100,100,100)";
  });

  return (
    <motion.span style={{ color }}>
      Experience
    </motion.span>
  );
}

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.5"] });
  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, 4]);

  return (
    <footer className="relative bg-dark-bg rounded-t-[40px] overflow-hidden">
      {/* Gradient border glow at top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-white/5 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12" ref={ref}>
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-2xl md:text-3xl" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.35em" }}>
            {footerWords.map((word, i) => (
              <FooterRevealWord key={i} word={word.text} index={i} progress={revealProgress} />
            ))}
          </h2>
          <h2 className="font-serif text-6xl md:text-8xl font-semibold mt-1">
            <ExperienceReveal progress={revealProgress} />
          </h2>

          {/* CTA */}
          <div className="mt-12">
            <div className="inline-block rounded-full p-1.5" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.16)" }}>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm font-sans font-medium hover:bg-[#5dcbf1] transition-colors inline-block"
                data-cursor="pointer"
              >
                Build With Me
              </Link>
            </div>
          </div>
        </div>

        {/* Social + Links — single row */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all"
                  data-cursor="pointer"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-[11px] font-sans tracking-wider transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs font-sans">
            &copy; Essy Udeme, 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
