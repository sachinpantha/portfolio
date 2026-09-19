import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLightbulb, FaBullseye, FaChartLine, FaTrophy, FaUsers, FaBookOpen } from "react-icons/fa";

const pillars = [
  { Icon: FaLightbulb,  title: "Conceptual Clarity",  desc: "Building deep understanding over rote memorization. Students learn the why behind every formula.", color: "#f59e0b" },
  { Icon: FaBullseye,   title: "Problem Solving",      desc: "Structured, step-by-step approaches to complex mathematical problems that build lasting skills.", color: "#3b82f6" },
  { Icon: FaChartLine,  title: "Analytical Thinking",  desc: "Developing rigorous reasoning from first principles, a skill that extends far beyond mathematics.", color: "#10b981" },
  { Icon: FaTrophy,     title: "Exam Preparation",     desc: "Targeted, strategic preparation for engineering entrance examinations with proven techniques.", color: "#ec4899" },
];

const mathFormulas = [
  { formula: "∫₀^∞ e^(-x²) dx = √π/2", label: "Gaussian Integral" },
  { formula: "e^(iπ) + 1 = 0",          label: "Euler's Identity" },
  { formula: "∇²φ = ρ/ε₀",             label: "Poisson's Equation" },
  { formula: "∑ 1/n² = π²/6",           label: "Basel Problem" },
];

export default function Teaching() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="teaching" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            Teaching
          </span>
          <h2 className="section-title mb-4">Mathematics for engineering aspirants.</h2>
          <p className="text-sm mb-12 sm:mb-16 max-w-lg" style={{ color: "var(--text-muted)" }}>
            I work as a mathematics lecturer and tutor, helping students build genuine mathematical intuition for engineering entrance examinations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card p-5 group">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}15` }}>
                  <p.Icon size={16} style={{ color: p.color }} />
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Right panel */}
          <div className="space-y-5">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-light)" }}>
                  <FaBookOpen size={17} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>Mathematics Lecturer</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Engineering Entrance Preparation</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                Strong mathematical foundations are essential not just for passing exams, but for thinking clearly about complex systems in engineering, computer science, and beyond.
              </p>
              <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                <FaUsers size={13} style={{ color: "var(--accent)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>1000+</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>students taught across Nepal</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
                Beautiful Mathematics
              </p>
              <div className="grid grid-cols-2 gap-3">
                {mathFormulas.map((f, i) => (
                  <motion.div key={f.label}
                    initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-3 rounded-xl text-center" style={{ background: "var(--bg-2)" }}>
                    <p className="font-mono text-xs mb-1" style={{ color: "var(--accent)" }}>{f.formula}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{f.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
