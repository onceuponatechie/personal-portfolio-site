"use client";

import type { ReactNode } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionLabel from "@/components/shared/SectionLabel";

interface PageHeaderProps {
  label: string;
  children: ReactNode; // the heading content (can include <HeadingAccent>)
  description?: string;
  align?: "center" | "left";
  className?: string;
}

const PageHeader = ({
  label,
  children,
  description,
  align = "center",
  className = "",
}: PageHeaderProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal>
      <div className={`${alignment} max-w-4xl mb-14 ${className}`}>
        <div className="mb-5">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="font-sans font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance text-foreground">
          {children}
        </h1>
        {description && (
          <p className="font-sans text-base text-muted-foreground leading-relaxed mt-6 max-w-lg mx-auto">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default PageHeader;
