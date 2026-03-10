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

        {/* Waving Hand — soft, emoji-style */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.85 }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              {/* Palm — soft rounded shape */}
              <ellipse cx="18" cy="22" rx="7" ry="8" fill="hsl(0 0% 15%)" />
              {/* Thumb — soft curve */}
              <path d="M11 22 Q9 20 9.5 17 Q10 14.5 11.5 15.5 Q13 16.5 12 19" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 15%)" strokeWidth="0.5" strokeLinejoin="round" />
              {/* Index */}
              <path d="M13.5 16 Q13 12 14 9.5 Q15 7.5 16.5 9.5 Q17.5 11.5 16.5 15.5" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 15%)" strokeWidth="0.3" strokeLinejoin="round" />
              {/* Middle */}
              <path d="M16.5 15 Q16.5 10 17.5 7.5 Q18.5 5.5 19.5 7.5 Q20.5 10 19.5 15" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 15%)" strokeWidth="0.3" strokeLinejoin="round" />
              {/* Ring */}
              <path d="M19.5 15.5 Q19.5 11 20.5 9 Q21.5 7 22.5 9 Q23.5 11 22.5 15.5" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 15%)" strokeWidth="0.3" strokeLinejoin="round" />
              {/* Pinky */}
              <path d="M22.5 16.5 Q23 13 23.5 11.5 Q24 10 25 11.5 Q25.5 13 24.5 16.5" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 15%)" strokeWidth="0.3" strokeLinejoin="round" />
              {/* Wrist */}
              <ellipse cx="18" cy="29" rx="4.5" ry="3" fill="hsl(0 0% 15%)" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
