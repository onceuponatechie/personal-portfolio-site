import { motion } from "framer-motion";

const SmileyGreeting = () => {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{
        width: 56,
        height: 56,
        backgroundColor: "hsl(44 88% 67%)",
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
            <circle cx="18" cy="18" r="16" fill="hsl(44 88% 67%)" />
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

        {/* Waving Hand — 3D open palm, dark skin, waving gesture */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 20, -10, 20, -5, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.9 }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <defs>
                <linearGradient id="wv-palm" x1="8" y1="6" x2="28" y2="34" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A3728" />
                  <stop offset="1" stopColor="#2C1E13" />
                </linearGradient>
              </defs>
              {/* Palm base */}
              <path d="M11 20C10.5 23 11 27 12.5 29.5C14 32 17 33.5 21 33C25 32.5 27 29.5 27 26V20.5C27 19.5 26 18.5 25 18.5H13C12 18.5 11 19.5 11 20Z" fill="url(#wv-palm)" />
              {/* Wrist */}
              <path d="M14 30C14 30 15 34 19 34C23 34 24 30 24 30" fill="url(#wv-palm)" />
              {/* Index — raised and spread */}
              <path d="M11 18C10.5 15 10.8 11 11.5 8.5C12.2 6 13 5 14 5.5C15 6 14.8 8 14.5 10.5C14.2 13 14 16 13.5 18.5" fill="url(#wv-palm)" />
              {/* Middle — tallest, upright */}
              <path d="M14 18.5C14 15 14 10 14.8 7C15.6 4 16.5 3 17.5 3.5C18.5 4 18.2 6.5 17.8 9.5C17.4 12.5 17.5 16 17.5 18.5" fill="url(#wv-palm)" />
              {/* Ring — slightly shorter */}
              <path d="M17.5 18.5C18 15.5 18.5 11 19.2 8C19.9 5 20.5 4.5 21.5 5C22.5 5.5 22 8 21.5 11C21 14 21 17 21 18.5" fill="url(#wv-palm)" />
              {/* Pinky — shortest, angled out */}
              <path d="M21 19C21.5 16.5 22.5 13 23 10.5C23.5 8 24 7.5 25 8C26 8.5 25.5 11 25 13.5C24.5 16 24 18 23.5 19.5" fill="url(#wv-palm)" />
              {/* Thumb — out to the left */}
              <path d="M11 21C10.5 20 9 18 8 16C7 14 7 12.5 8 12C9 11.5 10 13 10.5 15C11 17 11.5 19 11.5 20" fill="url(#wv-palm)" />
              {/* Palm line details */}
              <path d="M12.5 19.5 Q18 18 26 19.5" stroke="#1A1008" strokeWidth="0.5" opacity="0.3" fill="none" />
              {/* Finger separation lines */}
              <path d="M14 18.5L14 17" stroke="#1A1008" strokeWidth="0.3" opacity="0.25" />
              <path d="M17.5 18.5L17.5 17" stroke="#1A1008" strokeWidth="0.3" opacity="0.25" />
              <path d="M21 18.5L21 17.5" stroke="#1A1008" strokeWidth="0.3" opacity="0.25" />
              {/* Fingernails */}
              <ellipse cx="12.8" cy="6.5" rx="1" ry="0.8" fill="#5C4535" opacity="0.6" />
              <ellipse cx="16.5" cy="4.5" rx="1" ry="0.8" fill="#5C4535" opacity="0.6" />
              <ellipse cx="20.5" cy="6" rx="1" ry="0.8" fill="#5C4535" opacity="0.6" />
              <ellipse cx="24" cy="9" rx="0.9" ry="0.7" fill="#5C4535" opacity="0.6" />
              {/* Highlights */}
              <path d="M13 9C13 9 13.3 7 13.5 7" stroke="#6B5545" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
              <path d="M16.5 7C16.5 7 16.8 5 17 5" stroke="#6B5545" strokeWidth="0.7" strokeLinecap="round" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
