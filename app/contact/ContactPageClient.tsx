"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Twitter, Instagram, Linkedin, Github, Mail, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHeader from "@/components/shared/PageHeader";
import HeadingAccent from "@/components/shared/HeadingAccent";
import { toast } from "@/hooks/use-toast";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const perks = [
  {
    icon: Clock,
    label: "Quick reply",
    value: "Usually within 48 hours",
    color: "hsl(18,78%,57%)",
  },
  {
    icon: Mail,
    label: "Direct email",
    value: "hi@onceuponatechie.com",
    color: "hsl(196,83%,66%)",
  },
  {
    icon: Sparkles,
    label: "Open to",
    value: "Collaborations & freelance",
    color: "hsl(255,35%,64%)",
  },
];

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          label="Say Hi"
          description="Got an idea, a question, or just want to trade notes? Drop a line — I actually read everything."
        >
          Let&apos;s build something <HeadingAccent variant="doubleCurve" color="hsl(44,88%,67%)">together</HeadingAccent>
        </PageHeader>

        <ScrollReveal>
          <div
            className="rounded-3xl p-6 md:p-10 lg:p-12"
            style={{ backgroundColor: "#fbfaf7" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
              {/* Left — info column */}
              <div>
                <span className="inline-block bg-brand-lavender/20 text-brand-lavender text-xs font-sans font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6">
                  The Details
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-[1.15] mb-5">
                  Tell me about your <span className="font-display italic text-muted-foreground">idea</span>
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                  Whether it&apos;s a product, a brand, or a quiet experiment, I&apos;d love to hear what you&apos;re working on. Share a few details and I&apos;ll follow up with thoughts, questions, or a plan.
                </p>

                <div className="space-y-3">
                  {perks.map((p) => (
                    <div
                      key={p.label}
                      className="flex items-start gap-4 rounded-2xl p-4 bg-white"
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}
                    >
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${p.color}18` }}
                      >
                        <p.icon className="w-4 h-4" style={{ color: p.color }} />
                      </div>
                      <div>
                        <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                          {p.label}
                        </p>
                        <p className="font-serif text-base text-foreground mt-0.5">{p.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="font-sans text-xs text-muted-foreground mr-1">Elsewhere</span>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/60 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                      data-cursor="pointer"
                      aria-label={s.label}
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right — form card */}
              <div
                className="rounded-3xl bg-white p-7 md:p-9"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 2px 12px rgba(0,0,0,0.03)" }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-wider font-medium text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-2xl border-0 px-5 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      style={{ backgroundColor: "#fbf9f5" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-wider font-medium text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-2xl border-0 px-5 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      style={{ backgroundColor: "#fbf9f5" }}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] uppercase tracking-wider font-medium text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={6}
                      className="w-full rounded-2xl border-0 px-5 py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      style={{ backgroundColor: "#fbf9f5" }}
                      placeholder="Tell me about your project, timeline, or whatever's on your mind…"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-primary text-primary-foreground rounded-full py-4 font-sans text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                    data-cursor="pointer"
                  >
                    {sending ? "Sending..." : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-xs text-muted-foreground/60 font-sans mt-4 leading-relaxed">
                    Your details stay private. No lists, no spam, just a real reply.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
