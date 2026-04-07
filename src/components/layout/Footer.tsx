import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const footerLinks = [
  { label: "FREEBIES", href: "/resources" },
  { label: "BLOG", href: "/blog" },
  { label: "APPS", href: "/builds" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-dark-bg rounded-t-[40px] overflow-hidden">
      {/* Gradient border glow at top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-white/5 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Main CTA */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-serif italic text-white/40 text-sm mb-4">
              Don't be a stranger
            </p>
            <h2 className="font-serif text-foreground">
              <span className="text-white/40 text-2xl md:text-3xl">Let's</span>{" "}
              <span className="text-white text-2xl md:text-3xl">build</span>{" "}
              <span className="text-white/40 text-2xl md:text-3xl">an</span>
            </h2>
            <h2 className="font-serif text-6xl md:text-8xl text-white font-bold mt-1">
              Experience
            </h2>

            {/* Newsletter */}
            <div id="newsletter" className="mt-12 max-w-md mx-auto">
              <div className="glassmorphism-dark rounded-full p-1 flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 px-5 py-3 text-sm focus:outline-none font-sans"
                />
                <button
                  className="bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-sans font-medium hover:opacity-90 transition-opacity shrink-0"
                  data-cursor="pointer"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Social + Links — single row */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all"
                  data-cursor="pointer"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/40 hover:text-white text-[11px] font-sans tracking-wider transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs font-sans">
            © Once Upon a Techie, 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
