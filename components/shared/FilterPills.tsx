"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";

interface FilterPillsProps {
  options: string[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Filter tag row used on listing pages (blog, projects, resources).
 * Active pill: dark #1A1A1A. Inactive: warm off-white with hairline border.
 */
const FilterPills = ({ options, active, onChange, className = "" }: FilterPillsProps) => {
  return (
    <ScrollReveal delay={0.1}>
      <div className={`flex flex-wrap justify-center gap-2.5 mb-14 ${className}`}>
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              data-cursor="pointer"
              className={`rounded-full px-5 py-2 text-xs font-sans font-medium tracking-wide transition-all ${
                isActive
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-white/70 backdrop-blur-md border border-black/5 text-foreground hover:bg-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </ScrollReveal>
  );
};

export default FilterPills;
