import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaGithub, FaOm } from "react-icons/fa";

const socials = [
  { label: "Facebook",  handle: "sachin.nihc",    href: "https://www.facebook.com/sachin.nihc",    Icon: FaFacebook,  color: "#1877f2" },
  { label: "Instagram", handle: "@whoisssachinn", href: "https://www.instagram.com/whoisssachinn", Icon: FaInstagram, color: "#e1306c" },
  { label: "GitHub",    handle: "sachinpantha",   href: "https://github.com/sachinpantha",         Icon: FaGithub,    color: "#6e5494" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            Contact
          </span>
          <h2 className="section-title mb-4">
            Have an idea or project?<br />
            <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="text-sm mb-12 sm:mb-16 max-w-md" style={{ color: "var(--text-muted)" }}>
            Open to collaborations, conversations, and opportunities across web development, design, blockchain, AI research, and mathematics. Reach out and let's connect.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {socials.map((s, i) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card p-5 sm:p-6 flex items-center gap-4 group"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = s.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${s.color}15` }}>
                <s.Icon size={20} style={{ color: s.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{s.handle}</p>
              </div>
              <ArrowRight size={15} style={{ color: "var(--text-muted)" }} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-3">
          <FaOm size={15} style={{ color: "var(--accent)", opacity: 0.6 }} />
          <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>
            "The mind is everything. What you think, you become." — Buddha
          </p>
          <FaOm size={15} style={{ color: "var(--accent)", opacity: 0.6 }} />
        </motion.div>
      </div>
    </section>
  );
}
