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
      <div className={`${alignment} max-w-2xl mb-20 ${className}`}>
        <p className="section-label mb-5">{label}</p>
        <h1 className="font-serif text-display-xl text-foreground">
          {children}
        </h1>
        {description && (
          <p className="font-sans text-body-lg text-muted-foreground leading-relaxed mt-8 max-w-lg mx-auto">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default PageHeader;
