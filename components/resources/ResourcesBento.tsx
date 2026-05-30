"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Wrench,
  Zap,
  Library,
  Brain,
  ArrowUpRight,
  Plus,
  LayoutGrid,
  Workflow,
  BarChart3,
} from "lucide-react";
import {
  JournalArt,
  TemplatesArt,
  BookshelfArt,
  ResearchArt,
} from "@/components/resources/CardArt";

export interface RecentPost {
  title: string;
  slug: string;
  date: string;
  category: string;
}

// Concave "pinched" shape for the centre hero card — scales responsively.
const TOOLS_CLIP = "url(#toolsCardShape)";

const ease = [0.25, 0.1, 0.25, 1] as const;

const CardShell = ({
  children,
  index,
  className = "",
  style,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.08, duration: 0.6, ease }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

const CardHeading = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-2.5">
    <span className="text-foreground/80">{icon}</span>
    <h3 className="font-serif text-xl md:text-2xl text-foreground">{title}</h3>
  </div>
);

// Soft white sheen layered on every card.
const Sheen = () => (
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background:
        "radial-gradient(120% 80% at 100% 0%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 55%)",
    }}
  />
);

const GREEN_SOFT =
  "linear-gradient(155deg, hsl(155 42% 88%) 0%, hsl(150 40% 94%) 48%, #ffffff 100%)";
const GREEN_RICH =
  "linear-gradient(165deg, hsl(152 40% 80%) 0%, hsl(150 42% 88%) 55%, hsl(150 45% 95%) 100%)";
const LAVENDER_SOFT =
  "linear-gradient(155deg, hsl(255 45% 90%) 0%, hsl(260 42% 95%) 48%, #ffffff 100%)";

const ToolRow = ({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) => (
  <div className="flex items-center gap-3">
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
      style={{ background: color }}
    >
      {icon}
    </span>
    <span className="font-sans text-sm font-medium leading-tight text-foreground/90">
      {label}
    </span>
  </div>
);

const ResourcesBento = ({ recentPosts }: { recentPosts: RecentPost[] }) => {
  return (
    <section className="pt-32 pb-24">
      {/* SVG defs: responsive concave clip for the centre card */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="toolsCardShape" clipPathUnits="objectBoundingBox">
            <path d="M0.05,0 L0.95,0 Q1,0 1,0.04 C0.93,0.32 0.93,0.68 1,0.96 Q1,1 0.95,1 L0.05,1 Q0,1 0,0.96 C0.07,0.68 0.07,0.32 0,0.04 Q0,0 0.05,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            My Creative Lab
          </p>
          <h1 className="relative inline-block font-serif text-[56px] leading-none text-foreground md:text-[80px]">
            <span className="relative z-10 lowercase">resources</span>
            {/* gold hand-drawn ellipse */}
            <svg
              viewBox="0 0 400 130"
              fill="none"
              className="absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "118%", height: "150%", overflow: "visible" }}
              preserveAspectRatio="none"
            >
              <ellipse
                cx="200"
                cy="65"
                rx="188"
                ry="52"
                stroke="hsl(44 85% 60%)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                transform="rotate(-4 200 65)"
              />
            </svg>
            {/* purple sparkle */}
            <svg
              viewBox="0 0 40 40"
              className="absolute -right-6 -top-3 h-7 w-7 md:-right-9 md:h-9 md:w-9"
              fill="none"
            >
              <path
                d="M20 2 C22 13 27 18 38 20 C27 22 22 27 20 38 C18 27 13 22 2 20 C13 18 18 13 20 2 Z"
                fill="hsl(255 45% 64%)"
              />
            </svg>
          </h1>
          <p className="mt-5 font-sans text-lg leading-relaxed text-foreground/80">
            Stuff I actually use, hoard, and recommend. Steal it. Use it.{" "}
            <span className="font-semibold text-[hsl(40_72%_46%)]">
              Build cooler things
            </span>
            .
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[minmax(0,1fr)]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 md:col-span-1">
            {/* Build Diary */}
            <CardShell index={0} className="flex-1">
              <div
                className="group relative h-full overflow-hidden rounded-3xl p-6"
                style={{ background: GREEN_SOFT }}
              >
                <Sheen />
                <div className="relative flex h-full flex-col">
                  <Link href="/blog" data-cursor="pointer" className="flex items-center justify-between">
                    <CardHeading icon={<BookOpen className="h-5 w-5" />} title="Build Diary" />
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-white transition-colors group-hover:bg-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <div className="relative my-4">
                    <JournalArt className="mx-auto w-[78%]" />
                    {/* recent post mini-cards */}
                    <div className="absolute bottom-0 right-0 w-[62%] space-y-2">
                      {recentPosts.slice(0, 2).map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          data-cursor="pointer"
                          className="block rounded-xl bg-white/90 px-3 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                        >
                          <p className="truncate font-sans text-[11px] font-semibold text-foreground">
                            {post.title}
                          </p>
                          <p className="truncate font-sans text-[10px] text-muted-foreground">
                            {post.date} · {post.category}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <p className="mt-auto font-sans text-sm text-foreground/70">
                    Field notes from building in public — shipping logs, lessons, and the messy middle.
                  </p>
                </div>
              </div>
            </CardShell>

            {/* Templates */}
            <CardShell index={1} className="flex-1">
              <Link
                href="/resources/templates"
                data-cursor="pointer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
                style={{ background: GREEN_SOFT }}
              >
                <Sheen />
                <div className="relative flex items-center justify-between">
                  <CardHeading icon={<Wrench className="h-5 w-5" />} title="Templates" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-white transition-colors group-hover:bg-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative mt-3">
                  <TemplatesArt className="w-full" />
                </div>
                <p className="relative mt-3 font-sans text-sm text-foreground/70">
                  UI component libraries & miniature landing-page frameworks, ready to remix.
                </p>
              </Link>
            </CardShell>
          </div>

          {/* CENTRE — Tools & Tech (concave hero) */}
          <CardShell index={2} className="md:col-span-1" style={{ filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.10))" }}>
            <Link
              href="/resources/tools-tech"
              data-cursor="pointer"
              className="group relative block h-full min-h-[420px] overflow-hidden p-7"
              style={{ background: GREEN_RICH, clipPath: TOOLS_CLIP, WebkitClipPath: TOOLS_CLIP }}
            >
              <Sheen />
              <div className="relative flex items-center gap-2.5">
                <Zap className="h-5 w-5 text-foreground/80" />
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">Tools &amp; Tech</h3>
              </div>

              {/* portrait */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[58%]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop"
                  alt="Creator at work"
                  className="h-full w-full object-cover object-top"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(120% 100% at 70% 60%, #000 55%, transparent 88%)",
                    maskImage:
                      "radial-gradient(120% 100% at 70% 60%, #000 55%, transparent 88%)",
                  }}
                />
              </div>

              {/* tool list */}
              <div className="relative mt-10 max-w-[62%] space-y-4">
                <ToolRow icon={<LayoutGrid className="h-5 w-5" />} label="Claude, Google, & AI" color="hsl(196 55% 52%)" />
                <ToolRow icon={<Workflow className="h-5 w-5" />} label="Automations & Workflows" color="hsl(18 78% 57%)" />
                <ToolRow icon={<BarChart3 className="h-5 w-5" />} label="Design Tools" color="hsl(255 45% 64%)" />
              </div>

              <span className="absolute bottom-7 left-7 flex items-center gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-white transition-transform group-hover:scale-110">
                  <Plus className="h-5 w-5" />
                </span>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
                  Explore
                </span>
              </span>
            </Link>
          </CardShell>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 md:col-span-1">
            {/* Bookshelf */}
            <CardShell index={3} className="flex-1">
              <Link
                href="/resources/bookshelf"
                data-cursor="pointer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
                style={{ background: LAVENDER_SOFT }}
              >
                <Sheen />
                <div className="relative flex items-center justify-between">
                  <CardHeading icon={<Library className="h-5 w-5" />} title="Bookshelf" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-white transition-colors group-hover:bg-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="relative mt-3">
                  <BookshelfArt className="w-full" />
                </div>
                <p className="relative mt-3 font-sans text-sm text-foreground/70">
                  The books that rewired how I think about design, product, and building.
                </p>
              </Link>
            </CardShell>

            {/* Research Vault */}
            <CardShell index={4} className="flex-1">
              <Link
                href="/resources/research-vault"
                data-cursor="pointer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
                style={{ background: LAVENDER_SOFT }}
              >
                <Sheen />
                <div className="relative flex items-start justify-between gap-3">
                  <CardHeading icon={<Brain className="h-5 w-5" />} title="Research Vault" />
                  <p className="hidden max-w-[44%] pt-1 text-right font-sans text-xs leading-snug text-foreground/70 sm:block">
                    Research templates, teardowns, frameworks
                  </p>
                </div>
                <div className="relative mt-2 flex items-end justify-between gap-3">
                  <ResearchArt className="w-[58%]" />
                  <span className="mb-2 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-4 pr-1.5 shadow-sm ring-1 ring-black/5">
                    <span className="font-sans text-sm font-medium text-foreground">Explore</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-white transition-transform group-hover:scale-110">
                      <Plus className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </Link>
            </CardShell>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesBento;
