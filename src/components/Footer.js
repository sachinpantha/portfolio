import { Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaGithub, FaOm } from "react-icons/fa";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Expertise",href: "#expertise" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact",  href: "#contact" },
];

const socials = [
  { Icon: FaFacebook,  href: "https://www.facebook.com/sachin.nihc",    label: "Facebook",  color: "#1877f2" },
  { Icon: FaInstagram, href: "https://www.instagram.com/whoisssachinn", label: "Instagram", color: "#e1306c" },
  { Icon: FaGithub,    href: "https://github.com/sachinpantha",         label: "GitHub",    color: "#6e5494" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="col-span-2">
            <p className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>
              Sachin Pantha<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <div className="flex items-center gap-1.5 mb-3">
              <FaOm size={11} style={{ color: "var(--accent)", opacity: 0.7 }} />
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Rooted in Dharma, building with purpose.</p>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "var(--text-secondary)" }}>
              IT Graduate from Nepal. 5+ years across technology, design, mathematics, and AI.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav 1 */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors duration-200" style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav 2 */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>More</p>
            <ul className="space-y-2.5">
              {navLinks.slice(4).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors duration-200" style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Sachin Pantha. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            Made with <Heart size={11} style={{ color: "var(--accent)" }} fill="var(--accent)" /> from Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
