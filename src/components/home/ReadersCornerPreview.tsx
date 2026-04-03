import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ── Book card data ──────────────────────────────────────── */

const books = [
  { color: "#C4714A", title: "Book 1", rotate: -18, x: -40, y: 16 },
  { color: "#7A8C6E", title: "Book 2", rotate: -10, x: -16, y: 6 },
  { color: "#5B9EA0", title: "Book 3", rotate: -3, x: 4, y: 0 },
  { color: "#A89CC8", title: "Book 4", rotate: 5, x: 24, y: 4 },
  { color: "#C4BCE8", title: "Book 5", rotate: 12, x: 44, y: 10 },
];

/* ── Book Fan Component ──────────────────────────────────── */

const BookFan = ({ inView }: { inView: boolean }) => {
  const [fanned, setFanned] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="relative mx-auto lg:mx-0"
      style={{ width: 300, height: 280 }}
      onMouseEnter={() => setFanned(true)}
      onMouseLeave={() => setFanned(false)}
      onTouchStart={() => setFanned((v) => !v)}
    >
      {books.map((book, i) => {
        const spreadExtra = fanned ? (book.rotate > 0 ? 4 : -4) : 0;
        const xExtra = fanned ? (book.x > 0 ? 12 : book.x < 0 ? -12 : 0) : 0;

        return (
          <motion.div
            key={i}
            className="absolute rounded-xl"
            style={{
              width: 160,
              height: 220,
              backgroundColor: book.color,
              left: "50%",
              top: "50%",
              marginLeft: -80,
              marginTop: -110,
              boxShadow: "4px 6px 20px rgba(0,0,0,0.12)",
              /* Spine depth — inner shadow on left edge */
              borderLeft: "3px solid rgba(0,0,0,0.1)",
            }}
            initial={{ rotate: 0, x: 0, y: 0, opacity: 0 }}
            animate={
              inView
                ? {
                    rotate: book.rotate + spreadExtra,
                    x: book.x + xExtra,
                    y: book.y,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.7 + i * 0.08,
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
          >
            {/* Show faint title on the frontmost card */}
            {i === books.length - 1 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif italic text-white/40 text-sm text-center px-4 leading-snug"
                  style={{ fontSize: 14 }}
                >
                  {book.title}
                </span>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

/* ── Main Component ──────────────────────────────────────── */

const ReadersCornerPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[100px]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[60px]">
          {/* Left — Book Fan (45%) */}
          <div className="lg:w-[45%] flex justify-center">
            <BookFan inView={inView} />
          </div>

          {/* Right — Text Content (55%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-[55%] text-center lg:text-left"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#1A1A1A] leading-[1.1] mb-5">
              The Reader's
              <br />
              <span className="italic">Corner</span>
            </h2>

            <p
              className="font-sans text-[15px] leading-[1.75] mb-6 mx-auto lg:mx-0"
              style={{ color: "#6B6B6B", maxWidth: 420 }}
            >
              A curated collection of the books that shaped my thinking on
              design, tech, creativity, and life. Each one comes with personal
              thoughts and takeaways.
            </p>

            <Link
              to="/resources/readers-corner"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full font-sans text-sm font-medium hover:opacity-90 transition-opacity"
              data-cursor="pointer"
              style={{ height: 52, paddingLeft: 28, paddingRight: 28 }}
            >
              Explore the shelf →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadersCornerPreview;
