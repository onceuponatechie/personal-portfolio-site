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

        {/* Waving hand — realistic human hand */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 20, -12, 20, -8, 16, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: 0.55, originY: 0.95 }}
          >
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Palm base */}
              <path
                d="M22 36C21 39 21.5 44 24 48C26.5 51.5 30 53 35 52.5C40 52 42 49 42.5 45L43 36C43 34.5 41.5 33 39.5 33H25C23.5 33 22 34 22 36Z"
                fill="#E8B68C"
              />
              {/* Wrist */}
              <path
                d="M24 48C24 48 27 54 32 54C37 54 40 48 40 48L40 52C40 52 38 56 32 56C26 56 24 52 24 52L24 48Z"
                fill="#D4A07A"
              />
              {/* Thumb */}
              <path
                d="M22 36.5C21.5 35 19.5 31.5 18 29C16.8 27 16 25.5 17 24.5C18 23.5 19.5 24.5 20.5 26.5C21.5 28.5 22 31 22.2 33"
                fill="#E8B68C"
                stroke="#D4A07A"
                strokeWidth="0.5"
              />
              {/* Index finger */}
              <path
                d="M24.5 33C24 29 23 23 23.5 18.5C23.8 15.5 25 14 26.5 14.2C28 14.4 28.5 16 28.3 18.5C28 22 27 27 26.5 33"
                fill="#E8B68C"
                stroke="#D4A07A"
                strokeWidth="0.5"
              />
              {/* Middle finger — tallest */}
              <path
                d="M28 33C28 28 27.8 21 28.5 15.5C29 12.5 30 11 31.5 11.2C33 11.4 33.5 13 33.3 15.5C33 20 32.5 26 32 33"
                fill="#E8B68C"
                stroke="#D4A07A"
                strokeWidth="0.5"
              />
              {/* Ring finger */}
              <path
                d="M33 33C33.5 28.5 34 22 35 16.5C35.7 13.5 36.8 12.5 38 12.8C39.2 13.1 39.5 15 39 17.5C38.3 21.5 37 27 36 33"
                fill="#E8B68C"
                stroke="#D4A07A"
                strokeWidth="0.5"
              />
              {/* Pinky finger */}
              <path
                d="M37 34C37.5 30.5 38.5 25 39.5 21C40.2 18.5 41.2 17.5 42.2 18C43.2 18.5 43 20.5 42.3 23C41.5 26 40.5 30 39.5 34"
                fill="#E8B68C"
                stroke="#D4A07A"
                strokeWidth="0.5"
              />
              {/* Finger creases */}
              <path d="M25 33.5C25.5 33 26.5 33 27 33.5" stroke="#D4A07A" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M29 33.5C29.5 33 30.5 33 31 33.5" stroke="#D4A07A" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M33 33.5C33.5 33 34.5 33 35 33.5" stroke="#D4A07A" strokeWidth="0.4" strokeLinecap="round" />
              <path d="M37 34C37.5 33.5 38.5 33.5 39 34" stroke="#D4A07A" strokeWidth="0.4" strokeLinecap="round" />
              {/* Palm line details */}
              <path d="M24 38C27 36 34 36 41 38" stroke="#D4A07A" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
              <path d="M23 41C26 39.5 33 39.5 41 41" stroke="#D4A07A" strokeWidth="0.4" strokeLinecap="round" opacity="0.4" />
              {/* Fingernails */}
              <ellipse cx="26" cy="15.5" rx="1.5" ry="1" fill="#F2C9A8" opacity="0.7" />
              <ellipse cx="31" cy="12.5" rx="1.5" ry="1" fill="#F2C9A8" opacity="0.7" />
              <ellipse cx="36.5" cy="14" rx="1.5" ry="1" fill="#F2C9A8" opacity="0.7" />
              <ellipse cx="41" cy="19" rx="1.3" ry="0.9" fill="#F2C9A8" opacity="0.7" />
              {/* Motion lines */}
              <path d="M14 16L11 14" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
              <path d="M13 21L10 20" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
              <path d="M14 26L11 26" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" opacity="0.1" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
