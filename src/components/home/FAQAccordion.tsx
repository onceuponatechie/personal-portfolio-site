import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const faqs = [
  { q: "What kind of work do you do?", a: "I build digital products, design brand experiences, create automation workflows, and write about the intersection of creativity and technology." },
  { q: "Are you available for freelance work?", a: "Yes! I take on select projects that align with my skills and interests. The best way to start is through the contact page." },
  { q: "What tools do you use?", a: "My core stack includes React, Tailwind CSS, Figma, Python, and various automation tools like Make and Zapier. I also use AI tools extensively." },
  { q: "Do you offer free resources?", a: "Absolutely. Check out the Creative Vault for templates, guides, and tools — many of them free." },
  { q: "Can I collaborate with you on content?", a: "I love collaborating! Whether it's a guest post, a joint project, or a creative experiment — reach out and let's talk." },
  { q: "How can I stay updated?", a: "Subscribe to my newsletter for weekly insights, or follow me on social media for daily behind-the-scenes updates." },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-serif italic text-sm text-muted-foreground mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Your questions, <span className="italic">answered</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div
                layout
                className={`border border-white/40 bg-white/60 backdrop-blur-xl overflow-hidden transition-all ${
                  openIndex === i ? "rounded-2xl" : "rounded-full"
                }`}
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  data-cursor="pointer"
                >
                  <span className="font-sans text-sm font-medium text-foreground pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 font-sans text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Card — dark theme */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 bg-dark-bg rounded-2xl p-8 text-center">
            <p className="font-serif text-lg text-white mb-2">
              Still have questions?
            </p>
            <p className="font-sans text-sm text-white/60 mb-6">
              I'd love to hear from you. Let's chat!
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground rounded-full px-6 py-3 font-sans text-sm font-medium hover:opacity-90 transition-opacity"
              data-cursor="pointer"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQAccordion;
