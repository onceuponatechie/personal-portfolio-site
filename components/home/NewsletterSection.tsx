"use client";

import { useState } from "react";
import { Send, Star } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="rounded-3xl p-10 md:p-14" style={{ backgroundColor: "#fbfaf7" }}>
            <div className="flex justify-start mb-10">
              <span className="inline-block bg-brand-lavender/20 text-brand-lavender text-xs font-sans font-semibold uppercase tracking-widest rounded-full px-4 py-1.5">
                Join the Community
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              <div className="flex-1">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] text-foreground leading-[1.15] mb-6">
                  Subscribe to
                  <br />
                  <span className="font-display italic text-muted-foreground">QuietNotes</span>
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg">
                  Just a quiet corner of the internet for builders. Biweekly notes on products, tech, ambition, and the invisible systems that run them. It&apos;s free forever.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-2.5">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face" alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                      ))}
                    </div>
                    <p className="font-sans text-sm font-medium text-foreground">My fave brands</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[420px] shrink-0">
                <div className="rounded-3xl bg-white p-8 md:p-10" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 2px 12px rgba(0,0,0,0.03)" }}>
                  <div className="mb-5">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-full border-0 px-6 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      style={{ backgroundColor: "#fefefd" }}
                    />
                  </div>
                  <button
                    className="w-full bg-primary text-primary-foreground rounded-full px-6 py-4 text-sm font-sans font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    data-cursor="pointer"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground/60 font-sans mt-5 leading-relaxed">
                    By submitting this form, you&apos;ll be signed up to my free newsletter. No spam, just value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
