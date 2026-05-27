"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { BrandArrow } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    category: "Web App",
    title: "Streamline Dashboard",
    description:
      "A real-time analytics dashboard with AI-powered insights for growing startups. Built for founders who need clarity without complexity.",
    tools: ["React", "Tailwind", "Supabase"],
    slug: "streamline-dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    accent: "hsl(196, 83%, 66%)",
  },
  {
    category: "E-Commerce",
    title: "Artisan Marketplace",
    description:
      "A curated marketplace for independent creators to sell handmade goods. Clean, fast, and designed to put the craft first.",
    tools: ["Next.js", "Stripe", "Sanity"],
    slug: "artisan-marketplace",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    accent: "hsl(18, 78%, 57%)",
  },
  {
    category: "Mobile App",
    title: "Wellness Tracker",
    description:
      "A mindful daily tracker for habits, moods, and gratitude journaling. Calm design that helps people build better routines.",
    tools: ["React Native", "Firebase", "Figma"],
    slug: "wellness-tracker",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    accent: "hsl(155, 40%, 30%)",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 1;

  useGSAP(
    () => {
      if (!cardRef.current || !imageRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="rounded-3xl overflow-hidden opacity-0"
      style={{ backgroundColor: "#faf9f6" }}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
          isEven ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${isEven ? "lg:order-2" : ""}`}
        >
          <div className="p-4 lg:p-6">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center px-8 py-8 lg:px-14 lg:py-16 ${
            isEven ? "lg:order-1" : ""
          }`}
        >
          <span
            className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] mb-6"
            style={{ color: project.accent }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            {project.category}
          </span>

          <h3 className="font-serif text-display-md text-foreground mb-5">
            {project.title}
          </h3>

          <p className="font-sans text-body-lg text-text-custom-secondary mb-8 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full px-4 py-1.5 text-[12px] font-sans font-medium text-foreground/80"
                style={{
                  backgroundColor: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 bg-foreground text-white rounded-full px-6 py-3 font-sans text-sm font-medium hover:bg-primary transition-colors w-fit"
            data-cursor="pointer"
          >
            View Case Study
            <BrandArrow size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjectsShowcase = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="section-label mb-5">Featured Work</p>
            <h2 className="font-serif text-display-lg text-foreground">
              The{" "}
              <span
                className="relative inline-block font-display italic"
                style={{ padding: "0 0.15em" }}
              >
                Projects
                <svg
                  viewBox="0 0 200 100"
                  fill="none"
                  className="absolute"
                  style={{
                    top: "-20%",
                    left: "-8%",
                    width: "116%",
                    height: "140%",
                    overflow: "visible",
                  }}
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="100"
                    cy="50"
                    rx="95"
                    ry="42"
                    stroke="#5dcbf1"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-3 100 50)"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-foreground text-white rounded-full px-8 py-4 font-sans text-sm font-medium hover:bg-primary transition-colors"
              data-cursor="pointer"
            >
              See All Projects
              <BrandArrow size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturedProjectsShowcase;
