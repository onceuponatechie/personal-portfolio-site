import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
  <span
    className={`inline-block bg-surface-muted text-foreground font-display italic font-medium text-sm leading-none rounded-md px-3 py-1.5 ${className}`}
  >
    {children}
  </span>
);

export default SectionLabel;
