"use client";

import { Sparkles, Hammer, Feather, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  hammer: Hammer,
  feather: Feather,
};

type IdentityShowcaseProps = {
  iconName: keyof typeof iconMap;
  headlineBefore: string;
  italicPhrase: string;
  headlineAfter: string;
  attribution: string;
  imageOverlayText: string;
  imageSrc: string;
  imageAlt: string;
  layout: "rectangle-left" | "image-left";
};

const IdentityShowcase = ({
  iconName,
  headlineBefore,
  italicPhrase,
  headlineAfter,
  attribution,
  imageOverlayText,
  imageSrc,
  imageAlt,
  layout,
}: IdentityShowcaseProps) => {
  const Icon = iconMap[iconName];
  const Rectangle = (
    <div className="relative bg-surface-warm rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[320px] md:min-h-[420px]">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-dark-bg flex items-center justify-center mb-8">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.75} />
      </div>

      <div>
        <p className="font-serif text-2xl md:text-3xl lg:text-[34px] leading-[1.2] text-foreground mb-6">
          {headlineBefore}
          <span className="font-display italic">{italicPhrase}</span>
          {headlineAfter}
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          {attribution}
        </p>
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="relative rounded-3xl overflow-hidden border-[6px] border-surface-warm aspect-square">
      {/* TODO: replace placeholder image with real photography */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-script text-white text-5xl md:text-6xl lg:text-7xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          {imageOverlayText}
        </span>
      </div>
    </div>
  );

  const imageLeft = layout === "image-left";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className={imageLeft ? "md:order-2" : "md:order-1"}>{Rectangle}</div>
            <div className={imageLeft ? "md:order-1" : "md:order-2"}>{ImageBlock}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IdentityShowcase;
