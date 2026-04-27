"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Projects", href: "/projects" },
  { label: "Stories", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-4 z-50 mx-auto max-w-4xl transition-all duration-300 ${
          scrolled ? "top-3" : "top-4"
        }`}
      >
        <div
          className="rounded-full pl-6 pr-1.5 py-1.5 flex items-center justify-between bg-white/80 backdrop-blur-2xl border border-white/50"
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-display text-[16px] font-semibold text-foreground hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-sans text-[15px] font-medium leading-none text-text-custom-secondary hover:text-brand-lavender transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-sans text-[15px] font-medium leading-none hover:bg-[#5dcbf1] transition-colors"
              data-cursor="pointer"
            >
              Build With Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden rounded-full w-10 h-10 flex items-center justify-center bg-white/60 backdrop-blur-xl border border-white/40"
            onClick={() => setMobileOpen(true)}
            data-cursor="pointer"
          >
            <Menu className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            {/* Top bar — brand + close */}
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-[16px] font-semibold text-foreground">
                Once Upon a Techie
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/60 backdrop-blur-xl border border-white/40"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col px-6 mt-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between py-4 border-b border-foreground/8"
                  >
                    <span className="font-display font-semibold text-[24px] leading-[1.25] tracking-[-0.01em] text-foreground group-hover:text-brand-lavender transition-colors">
                      {link.label}
                    </span>
                    <span className="font-sans text-[12px] font-semibold text-muted-foreground/50 uppercase tracking-[0.08em] leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 px-6 pb-10"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-primary text-primary-foreground rounded-full px-8 py-4 font-sans text-[15px] font-medium leading-none text-center hover:bg-[#5dcbf1] transition-colors"
              >
                Build With Me
              </Link>
              <p className="text-center text-[14px] text-muted-foreground/40 font-sans mt-4">
                &copy; Essy Udeme, 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
