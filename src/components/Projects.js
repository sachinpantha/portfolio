import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "[Project Title]",
    desc: "Replace this with your real project description. Explain what it does, the problem it solves, and what makes it interesting.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    category: "Web",
    github: "https://github.com/[YOUR_GITHUB]/[REPO]",
    live: null,
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "[Blockchain Project]",
    desc: "A placeholder for a blockchain or Web3 project. Describe the smart contracts, protocols, or decentralized systems you built.",
    tech: ["Web3", "Solidity", "JavaScript"],
    category: "Blockchain",
    github: "https://github.com/[YOUR_GITHUB]/[REPO]",
    live: null,
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "[Design Project]",
    desc: "A UI/UX design project placeholder. Describe the design system, user research, or interface you created.",
    tech: ["Figma", "React", "CSS"],
    category: "Design",
    github: "https://github.com/[YOUR_GITHUB]/[REPO]",
    live: "[LIVE_URL]",
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    title: "[Research / AI Project]",
    desc: "A placeholder for an AI or research project. Describe your experiments, findings, or tools you built.",
    tech: ["Python", "ML", "Research"],
    category: "AI",
    github: "https://github.com/[YOUR_GITHUB]/[REPO]",
    live: null,
    year: "2023",
    featured: false,
  },
];

const filters = ["All", "Web", "Blockchain", "Design", "AI"];

const categoryColors = {
  Web: "#3b82f6",
  Blockchain: "#8b5cf6",
  Design: "#f59e0b",
  AI: "#ec4899",
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="card p-6 flex flex-col group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${categoryColors[project.category]}18` }}
        >
          <Folder size={18} style={{ color: categoryColors[project.category] }} />
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-2 mb-2">
        <h3
          className="text-base font-bold transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        {project.featured && (
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: "var(--accent-light)", color: "var(--accent)" }}
          >
            Featured
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
        {project.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <span className="text-xs font-mono shrink-0 ml-2" style={{ color: "var(--text-muted)" }}>
          {project.year}
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <h2 className="section-title">Selected work</h2>
            <a
              href="https://github.com/sachinpantha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <FaGithub size={15} /> View all on GitHub
            </a>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: activeFilter === f ? "var(--accent)" : "var(--bg-2)",
                  color: activeFilter === f ? "#fff" : "var(--text-secondary)",
                  border: `1px solid ${activeFilter === f ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs text-center"
          style={{ color: "var(--text-muted)" }}
        >
          ✦ Project placeholders — replace with your real work in <code className="font-mono">Projects.js</code>
        </motion.p>
      </div>
    </section>
  );
}
