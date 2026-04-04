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

        {/* Waving hand — bold white silhouette like the reference image */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 16, -10, 16, -6, 12, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.85 }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              {/* Bold raised/waving hand silhouette — white on colored circle */}
              <path
                d="M9.5 16.5C9 19 9.5 22.5 10.8 25C12 27 14.5 28.5 17.5 28C20.5 27.5 22 25.5 22 23V17C22 16.3 21.3 16 20.5 16H12C11.2 16 9.8 16 9.5 16.5Z"
                fill="#1A1A1A"
              />
              {/* Wrist */}
              <rect x="12.5" y="26" width="7" height="4" rx="2" fill="#1A1A1A" />
              {/* Index finger */}
              <rect x="9.5" y="4" width="4" height="13" rx="2" fill="#1A1A1A" />
              {/* Middle finger */}
              <rect x="14" y="2.5" width="4" height="14.5" rx="2" fill="#1A1A1A" />
              {/* Ring finger */}
              <rect x="18.5" y="4.5" width="4" height="12.5" rx="2" fill="#1A1A1A" />
              {/* Pinky */}
              <rect x="23" y="7.5" width="3.5" height="10" rx="1.75" fill="#1A1A1A" />
              {/* Thumb */}
              <path
                d="M9.5 17.5C9 16.5 7.5 14 6.5 12C5.8 10.5 6 9.5 7 9.5C8 9.5 9 11 9.5 13C9.8 14.5 10 16.5 10 17"
                fill="#1A1A1A"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
