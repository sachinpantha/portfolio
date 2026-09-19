import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#expertise" },

  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Name only — no logo box */}
          <a href="#hero" className="font-bold text-base tracking-tight" style={{ color: "var(--text-primary)" }}>
            Sachin<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                  style={{ color: active === l.href ? "var(--accent)" : "var(--text-muted)" }}
                  onMouseEnter={(e) => { if (active !== l.href) e.currentTarget.style.color = "var(--text-primary)"; }}
                  onMouseLeave={(e) => { if (active !== l.href) e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--accent-light)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <a href="#contact" className="hidden md:flex btn-primary text-xs px-4 py-2">
              Let's Talk
            </a>

            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-3 right-3 z-40 rounded-2xl p-4 shadow-2xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      color: active === l.href ? "var(--accent)" : "var(--text-secondary)",
                      background: active === l.href ? "var(--accent-light)" : "transparent",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: active === l.href ? "var(--accent)" : "var(--border-2)" }} />
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
              <a href="#contact" className="btn-primary w-full justify-center text-sm" onClick={() => setMenuOpen(false)}>
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
