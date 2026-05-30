"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const StickyWidget = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("widget-dismissed")) {
      setDismissed(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("widget-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-[140px]"
        >
          <div className="relative">
            {/* Dismiss — kept so users can remove the widget */}
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute -top-2 -left-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-card shadow-sm"
              data-cursor="pointer"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>

            {/* Screen card */}
            <div className="rounded-2xl bg-white p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/projects/cowrywise/01-cover.png"
                  alt="New resource preview"
                  className="h-[88px] w-full object-cover"
                />
                <span className="absolute right-1.5 top-1.5 rounded-full bg-primary px-1.5 py-0.5 font-sans text-[8px] font-bold uppercase text-primary-foreground shadow-sm">
                  NEW
                </span>
              </div>
            </div>

            {/* Action button */}
            <Link
              href="/resources"
              data-cursor="pointer"
              className="mt-2 block rounded-full bg-white px-3 py-2.5 text-center font-sans text-[11px] font-bold text-foreground shadow-lg transition-shadow hover:shadow-md"
            >
              Get new resource
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyWidget;
