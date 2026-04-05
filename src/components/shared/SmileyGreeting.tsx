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

        {/* Waving hand — organic curved silhouette */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 18, -10, 18, -6, 14, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.55, originY: 0.9 }}
          >
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              {/* Organic open palm with naturally curved fingers */}
              {/* Palm */}
              <path d="M11 19C10.5 21.5 11 25 12.5 27.5C14 30 16.5 31 20 30.5C23.5 30 25 28 25 25.5V19C25 18 24 17.5 23 17.5H13C12 17.5 11 18 11 19Z" fill="#1A1A1A" />
              {/* Wrist */}
              <path d="M13.5 28C13.5 28 15 31.5 18.5 31.5C22 31.5 23.5 28 23.5 28" fill="#1A1A1A" />
              {/* Index — slightly curved outward */}
              <path d="M11.5 17.5C11 14.5 10.5 10 11.5 7C12.2 5 13.2 4.5 14.2 5.5C15 6.3 14.5 9 14 12C13.6 14.5 13 16.5 12.5 17.8" fill="#1A1A1A" />
              {/* Middle — tallest, gentle curve */}
              <path d="M14 17.5C14 14 13.8 9 14.8 5.5C15.5 3.5 16.5 3 17.5 4C18.3 4.8 17.8 8 17.3 11.5C16.9 14 16.8 16.5 17 17.8" fill="#1A1A1A" />
              {/* Ring — natural arc */}
              <path d="M17 17.8C17.5 15 18 10.5 19 7.5C19.8 5.5 20.8 5 21.7 6C22.4 6.8 21.8 9.5 21.2 12.5C20.7 15 20.3 17 20 17.8" fill="#1A1A1A" />
              {/* Pinky — short, angled outward */}
              <path d="M20 18C20.5 16 21.5 12.5 22.3 10.5C23 9 23.8 8.8 24.3 9.8C24.8 10.8 24.2 13 23.5 15.5C23 17 22.5 18 22 18.5" fill="#1A1A1A" />
              {/* Thumb — curved out to the left */}
              <path d="M11 19.5C10.5 18.5 9 16 8 14C7.2 12.5 7.5 11.5 8.5 11.5C9.3 11.5 10 13 10.5 15C10.8 16.5 11 18.5 11 19.5" fill="#1A1A1A" />
              {/* Motion lines — subtle wave indicators */}
              <path d="M6.5 8L4.5 6.5" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
              <path d="M5.5 12L3.5 11.5" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
