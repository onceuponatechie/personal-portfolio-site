"use client";

import type { ReactNode } from "react";

type Variant = "doubleCurve" | "circle" | "singleCurve" | "underline";

interface HeadingAccentProps {
  children: ReactNode;
  variant?: Variant;
  color?: string;
  className?: string;
}

/**
 * Wraps a word inside a heading with a hand-drawn SVG accent
 * (double S-curve, ellipse, single curve, or underline).
 * Used across page headers to create a cohesive, recognizable brand mark.
 */
const HeadingAccent = ({
  children,
  variant = "doubleCurve",
  color = "#5dcbf1",
  className = "",
}: HeadingAccentProps) => {
  if (variant === "circle") {
    return (
      <span className={`relative inline-block font-italic-display ${className}`} style={{ padding: "0 0.15em" }}>
        {children}
        <svg
          viewBox="0 0 200 100"
          fill="none"
          className="absolute"
          style={{ top: "-20%", left: "-8%", width: "116%", height: "140%", overflow: "visible" }}
          preserveAspectRatio="none"
        >
          <ellipse
            cx="100"
            cy="50"
            rx="95"
            ry="42"
            stroke={color}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            transform="rotate(-3 100 50)"
          />
        </svg>
      </span>
    );
  }

  if (variant === "singleCurve") {
    return (
      <span className={`relative inline-block font-italic-display ${className}`}>
        {children}
        <svg
          viewBox="0 0 200 14"
          fill="none"
          className="absolute -bottom-2 left-0 w-full"
          style={{ overflow: "visible" }}
        >
          <path
            d="M0 8 C50 -2, 100 -2, 100 5 C100 12, 150 12, 200 2"
            stroke={color}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }

  if (variant === "underline") {
    return (
      <span className={`relative inline-block font-italic-display ${className}`}>
        {children}
        <svg
          viewBox="0 0 200 10"
          fill="none"
          className="absolute -bottom-1.5 left-0 w-full"
          style={{ overflow: "visible" }}
        >
          <path
            d="M2 5 Q50 0 100 4 T198 3"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }

  // doubleCurve (default)
  return (
    <span className={`relative inline-block font-italic-display ${className}`}>
      {children}
      <svg
        viewBox="0 0 200 22"
        fill="none"
        className="absolute -bottom-3 left-0 w-full"
        style={{ overflow: "visible" }}
      >
        <path
          d="M0 6 C50 -4, 100 -4, 100 3 C100 10, 150 10, 200 0"
          stroke={color}
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 16 C50 6, 100 6, 100 13 C100 20, 150 20, 200 10"
          stroke={color}
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
};

export default HeadingAccent;
