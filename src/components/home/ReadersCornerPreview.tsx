import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ── Book data for the fan ── */
const books = [
  { title: "Deep Work", author: "Cal Newport", color: "#C4785A", spine: "#A35F45" },
  { title: "Show Your Work", author: "Austin Kleon", color: "#7C9A72", spine: "#5E7D54" },
  { title: "Steal Like an Artist", author: "Austin Kleon", color: "#5BA4B5", spine: "#3F8A9C" },
  { title: "The Creative Act", author: "Rick Rubin", color: "#9B8EC4", spine: "#7D6FB0" },
  { title: "Atomic Habits", author: "James Clear", color: "#C48BBF", spine: "#A66DA1" },
];

/* ── Single Book Card ── */
const BookCard = ({
  book,
  index,
  total,
  hovered,
}: {
  book: (typeof books)[0];
  index: number;
  total: number;
  hovered: boolean;
}) => {
  const mid = (total - 1) / 2;
  const baseAngle = (index - mid) * 8;
  const spreadAngle = (index - mid) * 14;
  const angle = hovered ? spreadAngle : baseAngle;
  const yShift = hovered ? -Math.abs(index - mid) * 6 : Math.abs(index - mid) * 2;

  return (
    <motion.div
      className="absolute rounded-xl shadow-lg"
      style={{
        width: 140,
        height: 200,
        backgroundColor: book.color,
        transformOrigin: "bottom center",
        zIndex: total - Math.abs(Math.round(mid) - index),
      }}
      animate={{
        rotate: angle,
        y: yShift,
        transition: { type: "spring", stiffness: 200, damping: 20 },
      }}
    >
      {/* Spine shadow */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 rounded-l-xl"
        style={{ backgroundColor: book.spine }}
      />
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4 pl-6">
        <div>
          <p className="font-serif text-white text-sm leading-snug font-medium">
            {book.title}
          </p>
          <p className="font-sans text-white/70 text-[10px] mt-1">{book.author}</p>
        </div>
        {/* Decorative lines */}
        <div className="space-y-1.5">
          <div className="h-[1px] bg-white/20 w-3/4" />
          <div className="h-[1px] bg-white/20 w-1/2" />
        </div>
      </div>
    </motion.div>
  );
};

/* ── Book Fan Container ── */
const BookFan = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: 320, width: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative" style={{ width: 140, height: 200 }}>
        {books.map((book, i) => (
          <BookCard
            key={book.title}
            book={book}
            index={i}
            total={books.length}
            hovered={hovered}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main Component ── */
const ReadersCornerPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden"
          style={{
            backgroundColor: "#fbfaf7",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left — Text Content (45%) */}
            <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-center">
              <p className="font-serif italic text-sm text-muted-foreground mb-3">
                Reader's Corner
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                A cozy corner for{" "}
                <span className="italic">curious minds</span>
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Thoughts on books, excerpts from articles, random notes, and
                everything that inspires the creative process. A space for
                readers, thinkers, and the endlessly curious.
              </p>
              <Link
                to="/resources/readers-corner"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-sans text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                data-cursor="pointer"
              >
                Explore the Corner
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — Book Fan (55%) */}
            <div className="md:w-[55%] flex items-center justify-center py-10 md:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : {}
                }
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              >
                <BookFan />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadersCornerPreview;
