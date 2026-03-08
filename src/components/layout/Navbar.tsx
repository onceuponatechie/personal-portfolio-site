import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Builds", href: "/builds" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
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
        <div className="glassmorphism rounded-full px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="font-serif text-base font-medium text-foreground hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative font-sans text-[13px] text-text-custom-secondary hover:text-foreground transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                  {location.pathname === link.href && (
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
              to="/contact"
              className="bg-primary text-primary-foreground rounded-full px-5 py-2 font-sans text-[13px] font-medium hover:opacity-90 transition-opacity"
              data-cursor="pointer"
            >
              Build With Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden glassmorphism rounded-full w-10 h-10 flex items-center justify-center"
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
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 glassmorphism rounded-full w-10 h-10 flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-sans text-base font-medium mt-4"
            >
              Build With Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
