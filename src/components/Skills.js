import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5,
  SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiFigma,
  SiPython, SiSolidity, SiWeb3Dotjs,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    color: "#3b82f6",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 70 },
      { name: "HTML & CSS", level: 92 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend & Tools",
    color: "#10b981",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "REST APIs", level: 80 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    category: "Blockchain & Web3",
    color: "#8b5cf6",
    skills: [
      { name: "Web3 Concepts", level: 70 },
      { name: "DApp Development", level: 65 },
      { name: "Smart Contracts", level: 60 },
    ],
  },
  {
    category: "Design",
    color: "#f59e0b",
    skills: [
      { name: "Figma", level: 78 },
      { name: "UI/UX Principles", level: 82 },
      { name: "Design Systems", level: 72 },
    ],
  },
  {
    category: "AI & Research",
    color: "#ec4899",
    skills: [
      { name: "ML Concepts", level: 68 },
      { name: "Research Methodology", level: 75 },
      { name: "Data Analysis", level: 65 },
    ],
  },
  {
    category: "Mathematics",
    color: "#f97316",
    skills: [
      { name: "Calculus", level: 92 },
      { name: "Linear Algebra", level: 88 },
      { name: "Discrete Math", level: 85 },
      { name: "Statistics", level: 80 },
    ],
  },
];

const techMarquee = [
  { Icon: SiReact, name: "React", color: "#61dafb" },
  { Icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { Icon: SiHtml5, name: "HTML5", color: "#e34f26" },

  { Icon: SiTailwindcss, name: "Tailwind", color: "#06b6d4" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiGit, name: "Git", color: "#f05032" },
  { Icon: SiGithub, name: "GitHub", color: "#6e5494" },
  { Icon: SiFigma, name: "Figma", color: "#f24e1e" },
  { Icon: SiPython, name: "Python", color: "#3776ab" },
  { Icon: SiSolidity, name: "Solidity", color: "#363636" },
  { Icon: SiWeb3Dotjs, name: "Web3.js", color: "#f16822" },
  { Icon: FaBrain, name: "AI / ML", color: "#ec4899" },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-3)" }}>
        <motion.div className="h-full rounded-full" style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            Skills
          </span>
          <h2 className="section-title mb-4">Technologies &amp; tools</h2>
          <p className="text-sm mb-12 max-w-md" style={{ color: "var(--text-muted)" }}>
            A snapshot of my technical proficiency across different domains.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden mb-12 py-4" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="flex animate-marquee gap-4" style={{ width: "max-content" }}>
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shrink-0"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                <t.Icon size={15} style={{ color: t.color }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="p-5 rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                  {group.category}
                </p>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level}
                  color={group.color} delay={gi * 0.1 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
