import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const filters = ["All", "Web App", "Mobile", "E-Commerce"];

const builds = [
  { slug: "streamline-dashboard", category: "Web App", title: "Streamline Dashboard", description: "A real-time analytics dashboard with AI-powered insights for growing startups.", tools: ["React", "Tailwind", "Supabase"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { slug: "artisan-marketplace", category: "E-Commerce", title: "Artisan Marketplace", description: "A curated marketplace for independent creators to sell handmade goods.", tools: ["Next.js", "Stripe", "Sanity"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" },
  { slug: "wellness-tracker", category: "Mobile", title: "Wellness Tracker", description: "A mindful daily tracker for habits, moods, and gratitude journaling.", tools: ["React Native", "Firebase", "Figma"], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" },
  { slug: "recipe-social", category: "Web App", title: "Recipe Social", description: "A social platform for home cooks to share and discover recipes.", tools: ["React", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop" },
  { slug: "fintrack-app", category: "Mobile", title: "FinTrack", description: "Personal finance tracking with smart budgeting and expense categorization.", tools: ["Flutter", "Firebase", "Charts"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" },
  { slug: "vintage-store", category: "E-Commerce", title: "Vintage Store", description: "An online vintage clothing store with curated collections and lookbooks.", tools: ["Shopify", "Liquid", "Figma"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
];

const Builds = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? builds : builds.filter((b) => b.category === active);

  return (
    <PageLayout>
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Portfolio</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                Ship <span className="italic">Log</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  data-cursor="pointer"
                  className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                    active === f ? "bg-primary text-primary-foreground" : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((build, i) => (
              <motion.div
                key={build.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/builds/${build.slug}`}
                  className="block rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                  style={{ backgroundColor: "#fdfcfa" }}
                  data-cursor="pointer"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={build.image} alt={build.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">{build.category}</span>
                    <h3 className="font-serif text-lg text-foreground mt-1 mb-2">{build.title}</h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">{build.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {build.tools.map((t) => (
                        <span key={t} className="bg-white/50 backdrop-blur-md border border-gray-300/50 rounded-full px-3 py-1 text-[10px] font-sans text-foreground">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-primary">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Builds;
