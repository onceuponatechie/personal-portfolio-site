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

        {/* Waving Hand — 3D realistic black hand */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.85 }}
          >
            <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
              <defs>
                <linearGradient id="hand-skin" x1="12" y1="8" x2="36" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3D2B1F" />
                  <stop offset="1" stopColor="#2A1D14" />
                </linearGradient>
                <linearGradient id="hand-highlight" x1="16" y1="10" x2="32" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5C4033" />
                  <stop offset="1" stopColor="#3D2B1F" />
                </linearGradient>
                <radialGradient id="palm-depth" cx="22" cy="30" r="10" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A3628" />
                  <stop offset="1" stopColor="#2A1D14" />
                </radialGradient>
              </defs>
              {/* Palm — 3D shape */}
              <path d="M16 28C15 32 15.5 36 17 39C18.5 42 22 44 26 43C30 42 32 39 32 35V28C32 27 31 26 30 26H18C17 26 16 27 16 28Z" fill="url(#palm-depth)" />
              {/* Wrist */}
              <rect x="18" y="39" width="10" height="6" rx="3" fill="url(#hand-skin)" />
              {/* Fingers with 3D roundness */}
              {/* Index finger */}
              <path d="M15 26C15 26 14 22 14.5 17C15 12 15.5 9 17 9C18.5 9 18.5 12 18.5 14V26" fill="url(#hand-highlight)" />
              <path d="M15.5 18C15.5 18 16 15 17 15" stroke="#5C4033" strokeWidth="0.4" opacity="0.6" />
              {/* Middle finger */}
              <path d="M18.5 26C18.5 26 18 20 18.5 14C19 8 19.5 6 21 6C22.5 6 22.5 9 22.5 12V26" fill="url(#hand-highlight)" />
              <path d="M19.5 15C19.5 15 20 12 21 12" stroke="#5C4033" strokeWidth="0.4" opacity="0.6" />
              {/* Ring finger */}
              <path d="M22.5 26C22.5 26 22 21 22.5 15C23 9 23.5 8 25 8C26.5 8 26.5 11 26 14V26" fill="url(#hand-highlight)" />
              <path d="M23.5 16C23.5 16 24 13 25 13" stroke="#5C4033" strokeWidth="0.4" opacity="0.6" />
              {/* Pinky finger */}
              <path d="M26 27C26 27 26.5 23 27 18C27.5 13 27.5 11 29 11C30.5 11 30.5 14 30 17V27" fill="url(#hand-highlight)" />
              {/* Thumb — extends out to left */}
              <path d="M15 28C15 28 12 26 11 23C10 20 10.5 17 12 17C13.5 17 14 19 14.5 21C15 23 15.5 25 15.5 27" fill="url(#hand-highlight)" />
              {/* Knuckle creases for realism */}
              <path d="M16 26.5 Q22 25 30 26.5" stroke="#221811" strokeWidth="0.6" opacity="0.4" fill="none" />
              {/* Fingernail hints */}
              <ellipse cx="16.5" cy="10.5" rx="1.2" ry="1" fill="#4A3628" opacity="0.5" />
              <ellipse cx="20.5" cy="7.5" rx="1.2" ry="1" fill="#4A3628" opacity="0.5" />
              <ellipse cx="24.5" cy="9.5" rx="1.2" ry="1" fill="#4A3628" opacity="0.5" />
              <ellipse cx="28.5" cy="12.5" rx="1.2" ry="1" fill="#4A3628" opacity="0.5" />
              {/* 3D highlight on fingers */}
              <path d="M17 12C17 12 17.2 10 17.5 10" stroke="#6B5344" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
              <path d="M21 10C21 10 21.2 8 21.5 8" stroke="#6B5344" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
              <path d="M25 11C25 11 25.2 9.5 25.5 9.5" stroke="#6B5344" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
