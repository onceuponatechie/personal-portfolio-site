import { useState } from "react";
import { Send, Star } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const testimonialAvatars = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=80&h=80&fit=crop",
];

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          {/* Badge */}
          <div className="flex justify-center md:justify-start mb-10">
            <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold uppercase tracking-widest rounded-full px-5 py-2">
              Join the Community
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Left — Text Content */}
            <div className="flex-1">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
                Subscribe to
                <br />
                <span className="italic">LifeNotes</span>
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
                Each week, I share actionable productivity tips, practical life
                advice, and highlights from my favourite books, directly to your
                inbox. It's free, and always will be.
              </p>

              {/* Social proof */}
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {testimonialAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">
                    The tools I love
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Subscribe Card */}
            <div className="w-full md:w-[420px] shrink-0">
              <div
                className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 p-8"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full bg-surface-warm/60 border border-gray-200/60 px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 mb-4"
                />
                <button
                  className="w-full bg-primary text-primary-foreground rounded-full px-6 py-4 font-sans text-base font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  data-cursor="pointer"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4 font-sans">
                  By submitting this form, you'll be signed up to my free
                  newsletter. No spam, just value.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
