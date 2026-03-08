import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const builds = [
  { slug: "streamline-dashboard", category: "Web App", title: "Streamline Dashboard", description: "A real-time analytics dashboard with AI-powered insights for growing startups.", tools: ["React", "Tailwind", "Supabase"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop", body: "Streamline was born from a simple frustration: existing analytics tools were either too complex or too basic. I set out to create something that felt intuitive from the first click.\n\nThe dashboard uses real-time data streaming to display metrics as they happen. The AI layer analyzes patterns and surfaces actionable insights — no more digging through spreadsheets.\n\nDesigned mobile-first with a focus on readability, the interface uses generous whitespace and a carefully curated color system to make data feel approachable.", gallery: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"] },
  { slug: "artisan-marketplace", category: "E-Commerce", title: "Artisan Marketplace", description: "A curated marketplace for independent creators to sell handmade goods.", tools: ["Next.js", "Stripe", "Sanity"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop", body: "Artisan Marketplace connects independent makers with buyers who value craftsmanship. Every product page tells the maker's story alongside their work.\n\nBuilt with Next.js for performance and SEO, integrated with Stripe for seamless payments, and powered by Sanity CMS for easy product management by non-technical sellers.\n\nThe design emphasizes texture and warmth — earth tones, handwritten-style fonts for accents, and plenty of product photography space.", gallery: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop"] },
  { slug: "wellness-tracker", category: "Mobile", title: "Wellness Tracker", description: "A mindful daily tracker for habits, moods, and gratitude journaling.", tools: ["React Native", "Firebase", "Figma"], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop", body: "Wellness Tracker is a personal project that became a daily companion. It combines habit tracking, mood logging, and gratitude journaling into one calming interface.\n\nThe app was designed with mindfulness in mind — soft colors, gentle animations, and no notification overload. Built with React Native for cross-platform reach.\n\nFirebase handles sync and authentication, making it effortless for users to pick up where they left off on any device.", gallery: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"] },
  { slug: "recipe-social", category: "Web App", title: "Recipe Social", description: "A social platform for home cooks to share and discover recipes.", tools: ["React", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=700&fit=crop", body: "Recipe Social reimagines recipe sharing as a social experience. Users create visual recipe cards, follow their favorite home cooks, and build personalized cookbooks.\n\nThe platform prioritizes beautiful food photography and clean ingredient lists. Search is powered by tags and dietary filters.\n\nBuilt with a React frontend and Node.js API, with PostgreSQL for relational data like followers, likes, and collections.", gallery: ["https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop"] },
  { slug: "fintrack-app", category: "Mobile", title: "FinTrack", description: "Personal finance tracking with smart budgeting and expense categorization.", tools: ["Flutter", "Firebase", "Charts"], image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=700&fit=crop", body: "FinTrack makes personal finance less intimidating. The app auto-categorizes expenses, visualizes spending trends, and helps users set realistic budgets.\n\nBuilt with Flutter for a native feel on both platforms. Firebase provides real-time sync and secure authentication.\n\nThe chart system was custom-built to feel approachable — rounded edges, warm colors, and animations that make checking your finances almost enjoyable.", gallery: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"] },
  { slug: "vintage-store", category: "E-Commerce", title: "Vintage Store", description: "An online vintage clothing store with curated collections and lookbooks.", tools: ["Shopify", "Liquid", "Figma"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=700&fit=crop", body: "Vintage Store is a boutique e-commerce experience for curated second-hand fashion. Each collection is styled as a lookbook with editorial photography.\n\nBuilt on Shopify with custom Liquid templates, the store prioritizes visual storytelling over traditional product grids.\n\nThe design draws from vintage magazine layouts — editorial typography, film-grain textures, and a muted color palette.", gallery: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop"] },
];

const BuildDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const idx = builds.findIndex((b) => b.slug === slug);
  const build = builds[idx];
  const prev = idx > 0 ? builds[idx - 1] : null;
  const next = idx < builds.length - 1 ? builds[idx + 1] : null;

  if (!build) {
    return (
      <PageLayout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-3xl text-foreground">Project not found</h1>
          <Link to="/builds" className="font-sans text-sm text-primary mt-4 inline-block">← Back to Ship Log</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={build.image} alt={build.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs text-white/60 uppercase tracking-wider">{build.category}</span>
            <h1 className="font-serif text-4xl md:text-5xl text-white mt-2 mb-4">{build.title}</h1>
            <div className="flex flex-wrap gap-2">
              {build.tools.map((t) => (
                <span key={t} className="glassmorphism-dark rounded-full px-3 py-1 text-[11px] font-sans text-white/80">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">{build.description}</p>
          </ScrollReveal>
          {build.body.split("\n\n").map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">{para}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {build.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[70vw] md:w-[500px] rounded-2xl overflow-hidden"
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev/Next */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 flex justify-between">
          {prev ? (
            <Link to={`/builds/${prev.slug}`} className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <ArrowLeft className="w-4 h-4" /> {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/builds/${next.slug}`} className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              {next.title} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </section>
    </PageLayout>
  );
};

export default BuildDetail;
