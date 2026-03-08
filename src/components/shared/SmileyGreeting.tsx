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
            {/* Rosy cheeks */}
            <circle cx="8" cy="20" r="3.5" fill="hsl(0 60% 80%)" opacity="0.5" />
            <circle cx="28" cy="20" r="3.5" fill="hsl(0 60% 80%)" opacity="0.5" />
            {/* Left eye - winking */}
            <motion.ellipse
              cx="12"
              cy="14"
              rx="2.2"
              ry="2.8"
              fill="hsl(0 0% 15%)"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                times: [0, 0.2, 0.22, 0.24, 0.39],
              }}
            />
            {/* Right eye */}
            <ellipse cx="24" cy="14" rx="2.2" ry="2.8" fill="hsl(0 0% 15%)" />
            {/* Eye shine */}
            <circle cx="13" cy="12.5" r="1" fill="white" opacity="0.8" />
            <circle cx="25" cy="12.5" r="1" fill="white" opacity="0.8" />
            {/* Smile */}
            <path
              d="M11 22 Q18 28 25 22"
              stroke="hsl(0 0% 15%)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Waving Hand */}
        <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: 0.7, originY: 0.9 }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 4c1 0 2 .8 2 2v10h-4V6c0-1.2 1-2 2-2z"
                fill="hsl(0 0% 15%)"
              />
              <path
                d="M13 8c1-.5 2.2 0 2.5 1l3 9-3.5 1.2-3-9c-.3-1 .2-1.8 1-2.2z"
                fill="hsl(0 0% 15%)"
              />
              <path
                d="M23 8c-1-.5-2.2 0-2.5 1l-3 9 3.5 1.2 3-9c.3-1-.2-1.8-1-2.2z"
                fill="hsl(0 0% 15%)"
              />
              <path
                d="M10 16c.8-.8 2-.6 2.5.2l4 7-3 2-4-7c-.5-.8-.3-1.5.5-2.2z"
                fill="hsl(0 0% 15%)"
              />
              <path
                d="M12 24c0 0 2 8 6 8s6-8 6-8l-2-1c0 0-1.5 5-4 5s-4-5-4-5l-2 1z"
                fill="hsl(0 0% 15%)"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SmileyGreeting;
