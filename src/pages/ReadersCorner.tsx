import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, BookOpen } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const tabs = ["Books", "Articles", "Book Notes"];

const books = [
  { title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop", rating: 5 },
  { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop", rating: 4 },
  { title: "Show Your Work!", author: "Austin Kleon", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop", rating: 5 },
  { title: "Deep Work", author: "Cal Newport", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop", rating: 4 },
  { title: "Steal Like an Artist", author: "Austin Kleon", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop", rating: 5 },
  { title: "The Lean Startup", author: "Eric Ries", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop", rating: 4 },
  { title: "Creative Confidence", author: "Tom Kelley", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop", rating: 4 },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop", rating: 5 },
];

const articles = [
  { title: "The Arc of Design", source: "A List Apart", comment: "A beautiful essay on how design thinking evolves over a career.", url: "#" },
  { title: "Why We Sleep", source: "The Atlantic", comment: "Changed how I think about rest and creative output.", url: "#" },
  { title: "The Product-Minded Engineer", source: "Pragmatic Engineer", comment: "Every builder should read this. Product thinking is a superpower.", url: "#" },
  { title: "In Praise of Slow", source: "The New Yorker", comment: "A reminder that speed isn't always the answer.", url: "#" },
  { title: "How to Do Great Work", source: "Paul Graham", comment: "Dense, brilliant, and worth re-reading every quarter.", url: "#" },
];

const bookNotes = [
  { book: "Atomic Habits", note: "The 4 laws: make it obvious, attractive, easy, satisfying. Systems > goals. Identity-based habits stick longer." },
  { book: "Deep Work", note: "Schedule deep work blocks. Ritualize the start. Embrace boredom. Quit social media (or at least be intentional)." },
  { book: "Show Your Work!", note: "Share your process, not just finished work. Be findable. Teach what you know. Stick around long enough to matter." },
  { book: "The Lean Startup", note: "Build-Measure-Learn. MVP isn't about shipping garbage — it's about learning fast. Pivot or persevere, don't drift." },
];

const ReadersCorner = () => {
  const [activeTab, setActiveTab] = useState("Books");

  return (
    <PageLayout>
      <section className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Reader's Corner</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                What I'm <span className="italic">reading</span>
              </h1>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center gap-3 mb-12">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  data-cursor="pointer"
                  className={`rounded-full px-5 py-2 text-xs font-sans font-medium transition-all ${
                    activeTab === t ? "bg-primary text-primary-foreground" : "bg-white/50 backdrop-blur-md border border-gray-300/50 text-foreground hover:bg-white/70"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Books */}
          {activeTab === "Books" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {books.map((book, i) => (
                <motion.div key={book.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -12, rotate: -2, scale: 1.04 }} className="rounded-2xl border border-gray-100 p-4 shadow-sm" style={{ backgroundColor: "#fdfcfa" }}>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-surface-warm">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h4 className="font-serif text-sm text-foreground leading-tight mb-1">{book.title}</h4>
                  <p className="font-sans text-[11px] text-muted-foreground mb-2">{book.author}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`w-3 h-3 ${s < book.rating ? "text-brand-yellow fill-brand-yellow" : "text-muted"}`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Articles */}
          {activeTab === "Articles" && (
            <div className="space-y-4">
              {articles.map((article, i) => (
                <motion.a key={article.title} href={article.url} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="block rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all" style={{ backgroundColor: "#fdfcfa" }} data-cursor="pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-base text-foreground mb-1">{article.title}</h3>
                      <p className="font-sans text-[11px] text-muted-foreground mb-2">{article.source}</p>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{article.comment}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {/* Book Notes */}
          {activeTab === "Book Notes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {bookNotes.map((note, i) => (
                <motion.div key={note.book} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-gray-100 p-6" style={{ backgroundColor: "#fdfcfa" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h3 className="font-serif text-base text-foreground">{note.book}</h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{note.note}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default ReadersCorner;
