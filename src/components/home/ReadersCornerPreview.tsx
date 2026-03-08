import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    rating: 5,
    excerpt: "Small changes, remarkable results. This one reshaped how I think about systems.",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    rating: 4,
    excerpt: "A masterclass in why good design is invisible — and bad design is everywhere.",
  },
  {
    title: "Show Your Work!",
    author: "Austin Kleon",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    rating: 5,
    excerpt: "The book that convinced me to build in public and share the messy middle.",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    rating: 4,
    excerpt: "Focus is a superpower. This book taught me how to protect it.",
  },
];

const ReadersCornerPreview = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Reader's Corner
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              What I'm <span className="italic">reading</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, rotate: -2, scale: 1.04 }}
              className="bg-surface-light rounded-2xl p-4 shadow-sm"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-surface-warm">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-sm text-foreground leading-tight mb-1">
                {book.title}
              </h4>
              <p className="font-sans text-[11px] text-muted-foreground mb-2">
                {book.author}
              </p>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`w-3 h-3 ${s < book.rating ? "text-brand-yellow fill-brand-yellow" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="font-sans text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                {book.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              to="/resources/readers-corner"
              className="font-sans text-sm font-medium text-primary hover:underline"
              data-cursor="pointer"
            >
              Explore the full corner →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReadersCornerPreview;
