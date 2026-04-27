"use client";

import type { ReactNode } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface PageHeaderProps {
  label: string;
  children: ReactNode; // the heading content (can include <HeadingAccent>)
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Consistent page hero used across all inner pages.
 * Italic tag ("label") sits above a big serif heading, optionally followed by a description.
 * Matches the pattern established by home-page section headings.
 */
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
      <div className={`${alignment} max-w-2xl mb-12 ${className}`}>
        <p className="font-italic-display text-[20px] text-muted-foreground mb-6">{label}</p>
        <h1 className="font-display font-semibold text-[36px] md:text-[44px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] text-foreground">
          {children}
        </h1>
        {description && (
          <p className="font-sans text-[20px] font-normal text-muted-foreground leading-[1.6] mt-6 max-w-lg mx-auto">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default PageHeader;
