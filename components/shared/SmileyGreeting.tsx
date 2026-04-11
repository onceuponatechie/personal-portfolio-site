"use client";

import { motion } from "framer-motion";

const SmileyGreeting = () => {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{
        width: 56,
        height: 56,
        backgroundColor: "#fef08a",
      }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: [0, 0, -56, -56, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          times: [0, 0.39, 0.5, 0.89, 1],
          ease: "easeInOut",
        }}
      >
        {/* Smiley Face */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#fef08a" />
            <circle cx="8" cy="20" r="3.5" fill="hsl(0 60% 80%)" opacity="0.5" />
            <circle cx="28" cy="20" r="3.5" fill="hsl(0 60% 80%)" opacity="0.5" />
            <motion.ellipse
              cx="12" cy="14" rx="2.2" ry="2.8"
              fill="hsl(0 0% 15%)"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, times: [0, 0.2, 0.22, 0.24, 0.39] }}
            />
            <ellipse cx="24" cy="14" rx="2.2" ry="2.8" fill="hsl(0 0% 15%)" />
            <circle cx="13" cy="12.5" r="1" fill="white" opacity="0.8" />
            <circle cx="25" cy="12.5" r="1" fill="white" opacity="0.8" />
            <path d="M11 22 Q18 28 25 22" stroke="hsl(0 0% 15%)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Waving hand */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 20, -12, 20, -8, 16, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.85 }}
          >
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 44C22 44 21 50 23 54C25 57 29 58 33 58C37 58 40 56 41 53C42 50 41 44 41 44" fill="#111" />
              <path d="M19 28C18 32 18.5 38 20 42C21.5 46 25 48 32 47.5C39 47 42 43 42 38C42 34 41 28 41 28C40 27 38 26.5 36 27C34 27.5 34 28 34 28C34 28 33 27 31 27C29 27 28 28 28 28C28 28 27 26.5 25 27C23 27.5 22 28 22 28L19 28Z" fill="#111" />
              <path d="M19 28C19 28 17.5 22 17 17C16.6 13 17 10 18.5 8.5C20 7 21.5 7.5 22 9.5C22.5 11.5 22 17 22 21C22 24 22 28 22 28" fill="#111" />
              <path d="M25 27C25 27 24.5 20 24.5 15C24.5 11 25 7 26.5 5.5C28 4 29.5 4.5 30 6.5C30.5 8.5 30 14 29.5 19C29 23 28 28 28 28" fill="#111" />
              <path d="M31 27C31 27 31.5 21 32 16C32.4 12 33 8.5 34.5 7.5C36 6.5 37 7.5 37 9.5C37 11.5 36.5 16 36 20.5C35.5 24 34 28 34 28" fill="#111" />
              <path d="M36 27.5C36 27.5 37.5 23 38.5 18.5C39.3 15 40 12 41.5 11.5C43 11 43.5 12.5 43 14.5C42.5 16.5 41.5 20 40.5 24C39.8 27 39 29 39 29" fill="#111" />
              <path d="M19 30C19 30 16 28 13.5 25.5C11.5 23.5 10 21 10 19C10 17 11.5 16.5 13 17.5C14.5 18.5 16.5 21.5 18 24.5C19 26.5 19.5 28.5 19.5 30" fill="#111" />
              <path d="M22.5 27.5C22.5 27.5 23 25 24 23" stroke="#333" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
              <path d="M28.5 27C28.5 27 29 25 29.5 23" stroke="#333" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
              <path d="M34 27.5C34 27.5 34.5 25.5 35 23.5" stroke="#333" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
              <path d="M8 12C8 12 6 9 5 7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
              <path d="M7 17C7 17 5 15.5 3.5 14" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.18" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
