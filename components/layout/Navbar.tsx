"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Build Diary", href: "/blog" },
      { label: "Templates", href: "/resources/templates" },
      { label: "Tools & Tech", href: "/resources/tools-tech" },
      { label: "Bookshelf", href: "/resources/bookshelf" },
      { label: "Research Vault", href: "/resources/research-vault" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Stories", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
            className="font-serif text-base font-semibold text-foreground hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.children && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(link.href)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <Link
                        href={link.href}
                        className="relative flex items-center gap-1 font-sans text-[13px] text-text-custom-secondary hover:text-brand-lavender transition-colors"
                        data-cursor="pointer"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            openMenu === link.href ? "rotate-180" : ""
                          }`}
                        />
                        {active && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-4 h-[2px] bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>

                      <AnimatePresence>
                        {openMenu === link.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                          >
                            <div className="min-w-[180px] rounded-2xl border border-white/50 bg-white/90 p-1.5 shadow-xl backdrop-blur-2xl">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block rounded-xl px-3.5 py-2 font-sans text-[13px] transition-colors hover:bg-brand-lavender/10 ${
                                    pathname === child.href
                                      ? "text-brand-lavender"
                                      : "text-text-custom-secondary hover:text-foreground"
                                  }`}
                                  data-cursor="pointer"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-sans text-[13px] text-text-custom-secondary hover:text-brand-lavender transition-colors"
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
                );
              })}
            </div>

            <Link
              href="/contact"
              className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 font-sans text-[13px] font-medium hover:bg-[#5dcbf1] transition-colors"
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
              <span className="font-serif text-base font-semibold text-foreground">
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
                  className="border-b border-foreground/8"
                >
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex-1"
                    >
                      <span className="font-serif text-2xl text-foreground group-hover:text-brand-lavender transition-colors">
                        {link.label}
                      </span>
                    </Link>
                    {link.children ? (
                      <button
                        onClick={() =>
                          setMobileExpanded((cur) => (cur === link.href ? null : link.href))
                        }
                        aria-label={`Toggle ${link.label} submenu`}
                        className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5"
                      >
                        <ChevronDown
                          className={`h-4 w-4 text-foreground transition-transform duration-200 ${
                            mobileExpanded === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <span className="font-sans text-xs text-muted-foreground/50 uppercase tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {link.children && (
                    <AnimatePresence initial={false}>
                      {mobileExpanded === link.href && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1 pb-4 pl-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="py-2 font-sans text-base text-text-custom-secondary hover:text-brand-lavender transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
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
                className="block w-full bg-primary text-primary-foreground rounded-full px-8 py-4 font-sans text-sm font-semibold text-center hover:bg-[#5dcbf1] transition-colors"
              >
                Build With Me
              </Link>
              <p className="text-center text-xs text-muted-foreground/40 font-sans mt-4">
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
