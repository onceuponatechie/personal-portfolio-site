import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const mockCards = [
  { title: "Brand Identity Kit", color: "from-brand-orange/30 to-brand-yellow/20", h: "h-[250px]" },
  { title: "Dashboard Redesign", color: "from-brand-blue/30 to-brand-lavender/20", h: "h-[320px]" },
  { title: "Mobile App Concept", color: "from-brand-green/30 to-brand-blue/20", h: "h-[280px]" },
  { title: "E-commerce Template", color: "from-brand-lavender/30 to-brand-orange/20", h: "h-[350px]" },
  { title: "Portfolio Redesign", color: "from-brand-yellow/30 to-brand-green/20", h: "h-[260px]" },
  { title: "SaaS Landing Page", color: "from-brand-blue/20 to-brand-yellow/20", h: "h-[300px]" },
  { title: "Newsletter Template", color: "from-brand-orange/20 to-brand-green/20", h: "h-[270px]" },
  { title: "Icon Pack", color: "from-brand-lavender/20 to-brand-blue/20", h: "h-[310px]" },
];

const categories = [
  { label: "Templates", color: "bg-brand-orange/10 text-brand-orange" },
  { label: "Design", color: "bg-brand-lavender/10 text-brand-lavender" },
  { label: "Automation", color: "bg-brand-green/10 text-brand-green" },
  { label: "Freebies", color: "bg-brand-blue/10 text-brand-blue" },
];

const CreativeVaultStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-0 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        {/* Main Container */}
        <div className="relative gradient-border rounded-3xl overflow-hidden">
          <div className="bg-background rounded-3xl overflow-hidden relative" style={{ height: "clamp(500px, 80vh, 1100px)" }}>
            {/* Scrolling Grid */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="animate-scroll-up flex flex-wrap gap-4 p-6 justify-center" style={{
                animation: "scroll-up 40s linear infinite",
              }}>
                {/* Duplicate cards for seamless loop */}
                {[...mockCards, ...mockCards].map((card, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-sm ${card.h} flex-shrink-0`}
                    style={{ width: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 320 }}
                  >
                    <div className="p-4 h-full flex flex-col justify-end">
                      <p className="font-sans text-xs font-medium text-foreground/60">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30 pointer-events-none" />

            {/* Center Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="bg-dark-bg text-white rounded-full px-4 py-2 text-sm font-sans mb-4 whitespace-nowrap"
                >
                  See Recent Work
                </motion.div>
                <Link
                  to="/resources"
                  data-cursor="pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)" }}
                    className="w-[120px] h-[120px] rounded-full glassmorphism flex items-center justify-center transition-all"
                  >
                    <Folder className="w-8 h-8 text-foreground" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <span
                key={cat.label}
                className={`${cat.color} rounded-full px-4 py-2 text-xs font-sans font-medium`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CreativeVaultStrip;
