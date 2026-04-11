"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
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
          className="fixed bottom-6 right-6 z-50 max-w-[140px]"
        >
          <div className="glassmorphism rounded-2xl shadow-xl p-3 relative">
            <button
              onClick={dismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-card rounded-full flex items-center justify-center shadow-sm border border-border"
              data-cursor="pointer"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-1 mb-2">
              <span className="bg-primary text-primary-foreground text-[8px] font-sans font-bold uppercase px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </div>

            <div className="w-full h-16 bg-surface-light rounded-lg mb-2 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brand-lavender/20 to-brand-orange/20 flex items-center justify-center">
                <Gift className="w-4 h-4 text-primary" />
              </div>
            </div>

            <p className="text-[10px] font-sans font-medium text-foreground leading-tight mb-1">
              Free Resource Kit
            </p>
            <Link
              href="/resources"
              className="text-[10px] font-sans font-medium text-primary hover:underline"
              data-cursor="pointer"
            >
              Take a Peek &rarr;
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyWidget;
