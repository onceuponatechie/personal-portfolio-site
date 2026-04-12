"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { toast } from "@/hooks/use-toast";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
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
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Contact</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">
              Let&apos;s make something <span className="font-display italic">together</span>
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4">
              Got an idea, a question, or just want to say hi? I&apos;d love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-sans text-xs font-medium text-foreground mb-2 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-surface-light rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-sans text-xs font-medium text-foreground mb-2 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface-light rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border border-border"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-sans text-xs font-medium text-foreground mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-surface-light rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 border border-border resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground rounded-full py-4 font-sans text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              data-cursor="pointer"
            >
              {sending ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
            </motion.button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-3 mt-12">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all"
                data-cursor="pointer"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
