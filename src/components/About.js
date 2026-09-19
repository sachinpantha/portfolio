import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaLink, FaPenNib, FaBrain, FaCalculator, FaChartLine, FaFlask, FaOm } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const interests = [
  { Icon: FaCode,       label: "Software Development",  color: "#3b82f6" },
  { Icon: FaLink,       label: "Blockchain & Web3",     color: "#8b5cf6" },
  { Icon: FaPenNib,     label: "UI/UX Design",          color: "#f59e0b" },
  { Icon: FaBrain,      label: "Artificial Intelligence",color: "#ec4899" },
  { Icon: FaCalculator, label: "Mathematics",           color: "#10b981" },
  { Icon: FaChartLine,  label: "Economics",             color: "#f97316" },
  { Icon: FaFlask,      label: "Research",              color: "#6366f1" },
  { Icon: FaOm,         label: "Spirituality",          color: "#e11d48" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>

          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <span className="section-label mb-3 block">
              <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
              About Me
            </span>
            <h2 className="section-title max-w-2xl">
              A technologist shaped by curiosity, rigor, and a love for building.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-3 space-y-5">
              <motion.p variants={itemVariants} className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I'm Sachin Pantha, an IT graduate from Nepal with 5+ years of experience spanning Computer Science, Science, and Economics. My work sits at the crossroads of engineering, design, and mathematical thinking.
              </motion.p>
              <motion.p variants={itemVariants} className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I build web and blockchain applications, design digital experiences, and research the evolving landscape of artificial intelligence, all while teaching mathematics to the next generation of engineers.
              </motion.p>
              <motion.p variants={itemVariants} className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Beyond technology, I am deeply rooted in spiritual values. I believe that true wisdom comes from the union of knowledge and inner stillness. The best code, like the best life, is written with clarity, intention, and purpose.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { label: "Location",   value: "Nepal" },
                  { label: "Experience", value: "5+ Years" },
                  { label: "Students",   value: "1000+ Taught" },
                  { label: "Status",     value: "Open to Work" },
                ].map((f) => (
                  <div key={f.label} className="p-3 rounded-xl"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{f.label}</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{f.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <div className="lg:col-span-2">
              <motion.p variants={itemVariants} className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--text-muted)" }}>
                Interests &amp; Disciplines
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-5">
                {interests.map((item) => (
                  <motion.div key={item.label} variants={itemVariants} whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium cursor-default"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    <item.Icon size={12} style={{ color: item.color }} />
                    {item.label}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="p-4 sm:p-5 rounded-2xl font-mono text-xs leading-loose"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent)" }}>const</span> sachin = {"{"}<br />
                &nbsp;&nbsp;exp: <span style={{ color: "#10b981" }}>"5+ years"</span>,<br />
                &nbsp;&nbsp;students: <span style={{ color: "#10b981" }}>"1000+"</span>,<br />
                &nbsp;&nbsp;location: <span style={{ color: "#10b981" }}>"Nepal"</span>,<br />
                &nbsp;&nbsp;spirit: <span style={{ color: "#10b981" }}>"Dharma"</span>,<br />
                &nbsp;&nbsp;learning: <span style={{ color: "#10b981" }}>"Always"</span><br />
                {"}"}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
