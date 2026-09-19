import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaBrain, FaCalculator, FaLink, FaBolt } from "react-icons/fa";

const interests = [
  {
    Icon: FaBrain,
    symbol: "∑",
    title: "Artificial Intelligence",
    subtitle: "Modern AI Systems",
    body: "Exploring large language models, neural architectures, and the theoretical frameworks that underpin machine learning. Particularly interested in the mathematical structures that make intelligence computable.",
    tags: ["LLMs", "Neural Networks", "ML Theory"],
    color: "#ec4899",
  },
  {
    Icon: FaCalculator,
    symbol: "∂",
    title: "Mathematics & Computing",
    subtitle: "Foundations",
    body: "The relationship between mathematical abstraction and computational systems. From discrete mathematics and logic to calculus and linear algebra, understanding how math shapes the way we build and reason about software.",
    tags: ["Discrete Math", "Linear Algebra", "Logic"],
    color: "#10b981",
  },
  {
    Icon: FaLink,
    symbol: "⛓",
    title: "Blockchain & Decentralization",
    subtitle: "Distributed Systems",
    body: "Cryptographic protocols, consensus mechanisms, and the design of trustless systems. Interested in both the technical architecture and the broader implications of decentralized infrastructure.",
    tags: ["Cryptography", "Consensus", "Web3"],
    color: "#8b5cf6",
  },
  {
    Icon: FaBolt,
    symbol: "◈",
    title: "Emerging Technologies",
    subtitle: "Frontier Computing",
    body: "Tracking developments at the frontier of computing, from new programming paradigms and hardware architectures to the evolving intersection of AI, cryptography, and distributed systems.",
    tags: ["Edge Computing", "New Paradigms", "Research"],
    color: "#f59e0b",
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-20 sm:py-28" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            Research &amp; Interests
          </span>
          <h2 className="section-title mb-4">What I'm thinking about</h2>
          <p className="text-sm mb-12 sm:mb-16 max-w-lg" style={{ color: "var(--text-muted)" }}>
            A window into the ideas, questions, and fields that occupy my intellectual attention. More personal research journal than skills list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {interests.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="card p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}15`, color: item.color }}>
                  {item.symbol}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: item.color }}>{item.subtitle}</p>
                      <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                    </div>
                    <ArrowUpRight size={16} className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: item.color }} />
                  </div>
                  <p className="text-sm leading-relaxed mt-2 mb-4" style={{ color: "var(--text-secondary)" }}>{item.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${item.color}12`, color: item.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
