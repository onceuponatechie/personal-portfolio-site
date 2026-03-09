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

        {/* Waving Hand — open palm with 5 fingers */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.5, originY: 0.85 }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              {/* Palm */}
              <path d="M12 28 C12 28 10 22 11 18 C12 14 14 14 15 14 L21 14 C22 14 24 14 25 18 C26 22 24 28 24 28 Z" fill="hsl(0 0% 15%)" />
              {/* Thumb */}
              <path d="M11 18 C10 17 8.5 15.5 9 13.5 C9.5 11.5 11 12 11.5 13 C12 14 12 16 12 17" fill="hsl(0 0% 15%)" />
              {/* Index finger */}
              <path d="M14 14 C14 14 13.5 9 14 7 C14.5 5 16 5 16.5 7 C17 9 16.5 14 16.5 14" fill="hsl(0 0% 15%)" />
              {/* Middle finger */}
              <path d="M16.5 14 C16.5 14 16.5 8 17 5.5 C17.5 3 19 3 19.5 5.5 C20 8 19.5 14 19.5 14" fill="hsl(0 0% 15%)" />
              {/* Ring finger */}
              <path d="M19.5 14 C19.5 14 19.5 9 20 7 C20.5 5 22 5 22.5 7 C23 9 22.5 14 22.5 14" fill="hsl(0 0% 15%)" />
              {/* Pinky finger */}
              <path d="M22.5 15 C22.5 15 23 11 23.5 9.5 C24 8 25.5 8.5 25.5 10 C25.5 11.5 25 15 25 15" fill="hsl(0 0% 15%)" />
              {/* Wrist */}
              <rect x="14" y="27" width="8" height="5" rx="2" fill="hsl(0 0% 15%)" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
