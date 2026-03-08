import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const mockCards = [
  { title: "Brand Identity Kit", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=400&fit=crop", h: "h-[250px]" },
  { title: "Dashboard Redesign", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop", h: "h-[320px]" },
  { title: "Mobile App Concept", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop", h: "h-[280px]" },
  { title: "E-commerce Template", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=400&fit=crop", h: "h-[350px]" },
  { title: "Portfolio Redesign", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=400&fit=crop", h: "h-[260px]" },
  { title: "SaaS Landing Page", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop", h: "h-[300px]" },
  { title: "Newsletter Template", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=400&fit=crop", h: "h-[270px]" },
  { title: "Icon Pack", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=400&fit=crop", h: "h-[310px]" },
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
        <div className="bg-dark-bg rounded-3xl p-[2px] overflow-hidden">
          <div className="bg-dark-bg rounded-3xl overflow-hidden relative" style={{ height: "clamp(500px, 80vh, 1100px)" }}>
            {/* Scrolling Grid */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="flex flex-wrap gap-3 p-6 justify-center" style={{
                animation: "scroll-up 40s linear infinite",
              }}>
                {[...mockCards, ...mockCards].map((card, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden shadow-sm ${card.h} flex-shrink-0`}
                    style={{ width: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 320 }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-sans text-xs font-medium text-white/80">
                          {card.title}
                        </p>
                      </div>
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
