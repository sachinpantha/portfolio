import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGlobe, FaLink, FaPenNib, FaBrain, FaCalculator } from "react-icons/fa";

const areas = [
  {
    Icon: FaGlobe,
    num: "01",
    title: "Web Development",
    desc: "Modern Web 2.0 applications, frontend architecture, RESTful APIs, and scalable web experiences built with contemporary tooling and best practices.",
    tags: ["React", "JavaScript", "Node.js", "APIs"],
    color: "#3b82f6",
    bg: "#eff6ff",
    darkBg: "#1e2a3a",
  },
  {
    Icon: FaLink,
    num: "02",
    title: "Blockchain",
    desc: "Decentralized application development, Web3 technologies, smart contract exploration, and experimentation with distributed trustless systems.",
    tags: ["Web3", "DApps", "Smart Contracts"],
    color: "#8b5cf6",
    bg: "#f5f3ff",
    darkBg: "#2a1e3a",
  },
  {
    Icon: FaPenNib,
    num: "03",
    title: "UI/UX Design",
    desc: "Designing intuitive, accessible, and aesthetically refined digital interfaces that balance form and function with a focus on user experience.",
    tags: ["Figma", "Design Systems", "Accessibility"],
    color: "#f59e0b",
    bg: "#fffbeb",
    darkBg: "#3a2e1e",
  },
  {
    Icon: FaBrain,
    num: "04",
    title: "AI & Research",
    desc: "Exploring modern AI systems, their mathematical underpinnings, and their intersection with computer science and emerging technologies.",
    tags: ["Machine Learning", "Research", "Mathematics"],
    color: "#ec4899",
    bg: "#fdf2f8",
    darkBg: "#3a1e2a",
  },
  {
    Icon: FaCalculator,
    num: "05",
    title: "Mathematics Education",
    desc: "Teaching mathematics to engineering entrance aspirants, developing analytical reasoning, problem-solving, and conceptual depth.",
    tags: ["Calculus", "Algebra", "Problem Solving"],
    color: "#10b981",
    bg: "#ecfdf5",
    darkBg: "#1e3a2a",
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            What I Do
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
            <h2 className="section-title">Areas of expertise</h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
              Five disciplines I work across, each informing the others.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <motion.div key={area.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="card p-6 group cursor-default">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: area.bg }}>
                <area.Icon size={19} style={{ color: area.color }} />
              </div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{area.title}</h3>
                <span className="font-mono text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{area.num}</span>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{area.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
              <div className="mt-5 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: area.color }} />
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="card p-6 flex flex-col items-start justify-between group cursor-pointer"
            style={{ background: "var(--accent)", border: "none" }}>
            <div>
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-3">Collaborate</p>
              <h3 className="text-xl font-bold text-white mb-2">Have a project in mind?</h3>
              <p className="text-white/70 text-sm">Let's build something great together.</p>
            </div>
            <div className="mt-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
