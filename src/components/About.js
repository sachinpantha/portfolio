import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaCode, FaLink, FaPenNib, FaBrain, FaChartLine, FaFlask, FaOm } from "react-icons/fa";

const interests = [
  { Icon: FaCode,      label: "Software Dev",   color: "#3b82f6" },
  { Icon: FaLink,      label: "Blockchain",      color: "#8b5cf6" },
  { Icon: FaPenNib,    label: "UI/UX Design",    color: "#f59e0b" },
  { Icon: FaBrain,     label: "AI & ML",         color: "#ec4899" },
  { Icon: FaChartLine, label: "Economics",        color: "#f97316" },
  { Icon: FaFlask,     label: "Research",         color: "#6366f1" },
  { Icon: FaOm,        label: "Spirituality",     color: "#e11d48" },
];

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "var(--bg-2)" }}>

      {/* Ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div variants={fade(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-16">
          <span className="section-label mb-3 block">
            <span className="w-4 h-px" style={{ background: "var(--accent)" }} />
            About Me
          </span>

          {/* Typewriter headline */}
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight" style={{ color: "var(--text-primary)" }}>
            I'm a{" "}
            <span style={{ color: "var(--accent)" }}>
              <TypeAnimation
                sequence={[
                  "Builder.", 2000,
                  "Designer.", 2000,
                  "Educator.", 2000,
                  "Researcher.", 2000,
                  "Dreamer.", 2000,
                ]}
                wrapper="span"
                speed={40}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </span>
          </h2>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — story */}
          <div className="space-y-6">
            {[
              "Hey, I'm Sachin. I'm from Nepal and I've been building things on the web for 5+ years now. Started with curiosity, stayed for the craft.",
              "I work on web apps, blockchain stuff, and the occasional AI experiment. On the side I teach math to students preparing for engineering entrance — which honestly keeps me sharper than any tutorial ever could.",
              "I'm also into spirituality, not in a vague way, but in a \"sit down, think clearly, build something that actually matters\" kind of way.",
            ].map((text, i) => (
              <motion.p key={i} variants={fade(0.1 + i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {text}
              </motion.p>
            ))}

          </div>

          {/* Right — visual card stack */}
          <div className="space-y-5">

            {/* Glowing identity card */}
            <motion.div variants={fade(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative p-6 rounded-3xl overflow-hidden"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              {/* accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, var(--accent), #8b5cf6, #ec4899)" }} />

              <div className="flex items-center gap-4 mb-5">
                {/* Avatar ring */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-black text-white"
                    style={{ background: "linear-gradient(135deg, var(--accent), #8b5cf6)" }}>
                    SP
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 bg-green-400"
                    style={{ borderColor: "var(--surface)" }} />
                </div>
                <div>
                  <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>Sachin Pantha</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>Nepal · Open to Work</p>
                </div>
              </div>

              {/* Terminal block */}
              <div className="font-mono text-xs leading-6 p-4 rounded-xl"
                style={{ background: "var(--bg-3)", color: "var(--text-muted)" }}>
                <div className="flex gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span style={{ color: "var(--accent)" }}>const</span> sachin = {"{"}<br />
                &nbsp;&nbsp;role: <span style={{ color: "#10b981" }}>"Full-Stack + Blockchain"</span>,<br />
                &nbsp;&nbsp;exp: <span style={{ color: "#10b981" }}>"5+ years"</span>,<br />
                &nbsp;&nbsp;students: <span style={{ color: "#10b981" }}>"1000+"</span>,<br />
                &nbsp;&nbsp;spirit: <span style={{ color: "#10b981" }}>"Dharma"</span>,<br />
                &nbsp;&nbsp;mode: <span style={{ color: "#10b981" }}>"Always learning"</span><br />
                {"}"}
              </div>
            </motion.div>

            {/* Interest pills */}
            <motion.div variants={fade(0.35)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                Interests &amp; Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map(({ Icon, label, color }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium cursor-default select-none"
                    style={{ background: "var(--surface)", border: `1px solid ${color}30`, color: "var(--text-secondary)" }}>
                    <Icon size={11} style={{ color }} />
                    {label}
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
