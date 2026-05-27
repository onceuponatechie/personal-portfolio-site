"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const PREMIUM_EASE = "power3.out";
export const SMOOTH_EASE = "power2.inOut";

export const defaultScrollTrigger = {
  start: "top 85%",
  end: "bottom 20%",
  toggleActions: "play none none none" as const,
};
