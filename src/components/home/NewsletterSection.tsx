import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Tool/brand circles ── */
const tools = [
  { label: "Notion", color: "#1A1A1A", text: "N" },
  { label: "Figma", color: "#A259FF", text: "F" },
  { label: "Canva", color: "#00C4CC", text: "C" },
  { label: "Framer", color: "#0055FF", text: "Fr" },
  { label: "Webflow", color: "#4353FF", text: "W" },
];

const NewsletterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

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
            boxShadow:
              "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <div className="flex flex-col items-center text-center px-6 py-16 md:py-20">
            {/* Tool circles */}
            <div className="flex items-center -space-x-2 mb-6">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-sans font-semibold border-2 border-[#fbfaf7]"
                  style={{ backgroundColor: tool.color }}
                  title={tool.label}
                >
                  {tool.text}
                </div>
              ))}
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 max-w-lg">
              Stay in the <span className="italic">loop</span>
            </h2>

            {/* Subtext */}
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-8">
              Templates, tools, behind-the-scenes breakdowns, and creative
              resources — delivered to your inbox every week.
            </p>

            {/* Email form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 w-full sm:w-auto rounded-full px-5 py-3 text-sm font-sans bg-white border border-gray-200 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-sans text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                  data-cursor="pointer"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-sans text-sm text-[#7C9A72] font-medium"
              >
                You're in! Check your inbox soon.
              </motion.div>
            )}

            {/* Fine print */}
            <p className="font-sans text-[11px] text-muted-foreground/50 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
