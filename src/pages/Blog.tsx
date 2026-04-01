import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tags = ["All", "Design", "Building", "Automation", "Product", "Life"];

const posts = [
  { slug: "perfection-design", title: "Why I Stopped Chasing Perfection in Design", category: "Design", readTime: "5 min", excerpt: "The moment I embraced imperfection, my work became more authentic, faster, and way more fun.", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop", featured: true },
  { slug: "building-in-public", title: "Building in Public: What I Learned in 30 Days", category: "Building", readTime: "7 min", excerpt: "A raw look at shipping daily, dealing with feedback, and finding your voice as a creator.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop", featured: false },
  { slug: "automation-stack", title: "The Automation Stack That Runs My Life", category: "Automation", readTime: "4 min", excerpt: "From email workflows to content scheduling — here's how I automate the boring stuff.", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop", featured: false },
  { slug: "storytelling-products", title: "How Storytelling Makes Better Products", category: "Product", readTime: "6 min", excerpt: "Every great product has a narrative. Here's how to find yours and make it unforgettable.", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=300&fit=crop", featured: false },
  { slug: "creative-burnout", title: "Surviving Creative Burnout", category: "Life", readTime: "5 min", excerpt: "What I do when the ideas stop flowing and everything feels like a chore.", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=400&h=300&fit=crop", featured: false },
  { slug: "design-systems-solo", title: "Design Systems for Solo Creators", category: "Design", readTime: "8 min", excerpt: "You don't need a team of 10 to build a design system that scales.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop", featured: false },
];

const categoryColors: Record<string, string> = {
  Design: "text-brand-lavender",
  Building: "text-brand-orange",
  Automation: "text-brand-green",
  Product: "text-brand-blue",
  Life: "text-brand-yellow",
};

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <PageLayout>
      <section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Blog</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                The Storyteller's <span className="italic">Log</span>
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  data-cursor="pointer"
                  className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                    active === t ? "bg-primary text-primary-foreground" : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured */}
          {featured && (
            <ScrollReveal>
              <Link to={`/blog/${featured.slug}`} className="block mb-12 group" data-cursor="pointer">
                <div className="relative rounded-3xl overflow-hidden bg-dark-bg" style={{ height: "clamp(300px, 45vh, 450px)" }}>
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`font-sans text-xs uppercase tracking-wider ${categoryColors[featured.category] || "text-white/60"}`}>{featured.category}</span>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-2">{featured.title}</h2>
                    <p className="font-sans text-sm text-white/70 max-w-md">{featured.excerpt}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/blog/${post.slug}`} className="block rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group" data-cursor="pointer" style={{ minHeight: 220, backgroundColor: "#fdfcfa" }}>
                  <span className={`font-sans text-[11px] uppercase tracking-wider font-semibold ${categoryColors[post.category] || "text-primary"}`}>{post.category}</span>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="font-sans text-[11px] text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2 leading-snug">{post.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-primary">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
