import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const categories = ["All", "Templates", "Design", "Automation", "Freebies"];

const resources = [
  { title: "Notion Dashboard Template", category: "Templates", price: "Free", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", description: "A clean, minimal Notion workspace for tracking projects and goals." },
  { title: "Brand Style Guide Kit", category: "Design", price: "$12", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop", description: "Everything you need to build a cohesive brand identity from scratch." },
  { title: "Email Automation Playbook", category: "Automation", price: "Free", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop", description: "Step-by-step workflows for automating your email marketing." },
  { title: "Social Media Canva Pack", category: "Design", price: "$8", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop", description: "50+ customizable templates for Instagram, Twitter, and LinkedIn." },
  { title: "React Component Library", category: "Templates", price: "Free", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop", description: "A starter kit of reusable, accessible React components." },
  { title: "Zapier Workflow Templates", category: "Automation", price: "Free", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop", description: "Pre-built Zapier workflows for creators and small teams." },
  { title: "Portfolio Wireframe Kit", category: "Design", price: "$15", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop", description: "Figma wireframes for building a standout portfolio site." },
  { title: "Content Calendar Notion", category: "Freebies", price: "Free", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop", description: "Plan your content across platforms with this free Notion template." },
  { title: "Icon Pack — Minimal Line", category: "Freebies", price: "Free", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop", description: "200+ minimal line icons in SVG format, free for personal use." },
  { title: "Landing Page Figma Template", category: "Templates", price: "$10", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", description: "A conversion-optimized landing page template built in Figma." },
];

const Resources = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? resources : resources.filter((r) => r.category === active);

  return (
    <PageLayout>
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Resources</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                The Creative <span className="italic">Vault</span>
              </h1>
              <p className="font-sans text-base text-muted-foreground mt-4 max-w-lg mx-auto">
                Templates, tools, and freebies to help you build faster and better.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  data-cursor="pointer"
                  className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid bg-surface-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground">{resource.category}</span>
                    <span className={`font-sans text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      resource.price === "Free" ? "bg-brand-green/10 text-brand-green" : "bg-brand-orange/10 text-brand-orange"
                    }`}>
                      {resource.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-base text-foreground mb-2">{resource.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">{resource.description}</p>
                  <button
                    data-cursor="pointer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-sans font-medium hover:opacity-90 transition-opacity"
                  >
                    {resource.price === "Free" ? <Download className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                    {resource.price === "Free" ? "Download" : "Get it"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;
