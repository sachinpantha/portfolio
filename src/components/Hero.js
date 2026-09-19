import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Flame } from "lucide-react";
import { FaFacebook, FaInstagram, FaGithub, FaCode, FaBrain, FaBook, FaPenNib } from "react-icons/fa";
import profileImg from "../assets/image.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const floatingCards = [
  { Icon: FaCode, label: "Web Dev", color: "#3b82f6", pos: { top: "-20px", right: "-72px" } },
  { Icon: FaBrain, label: "AI Research", color: "#8b5cf6", pos: { bottom: "8px", right: "-80px" } },
  { Icon: FaBook, label: "Math Tutor", color: "#10b981", pos: { bottom: "-20px", left: "-72px" } },
  { Icon: FaPenNib, label: "UI/UX", color: "#f59e0b", pos: { top: "8px", left: "-80px" } },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/sachin.nihc", Icon: FaFacebook, hoverColor: "#1877f2" },
  { label: "Instagram", href: "https://www.instagram.com/whoisssachinn", Icon: FaInstagram, hoverColor: "#e1306c" },
  { label: "GitHub", href: "https://github.com/sachinpantha", Icon: FaGithub, hoverColor: "#6e5494" },
];

const stats = [
  { to: 5, suffix: "+", label: "Years Experience" },
  { to: 1000, suffix: "+", label: "Students Taught" },
  { to: 5, suffix: "", label: "Disciplines" },
  { to: null, suffix: "∞", label: "Curiosity" },
];

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const val = useMotionValue(0);
  const rounded = useTransform(val, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView || to === null) return;
    const ctrl = animate(val, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return ctrl.stop;
  }, [inView, to, val]);

  if (to === null) return <span ref={ref}>∞</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--bg)" }}>

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full opacity-[0.18]"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", filter: "blur(72px)" }} />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-[380px] h-64 sm:h-[380px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-2 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
                Available for opportunities
              </div>
              <div className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                style={{ background: "var(--bg-2)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                <MapPin size={10} /> Nepal
              </div>
              <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                style={{ background: "var(--bg-2)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                <Flame size={10} style={{ color: "#f97316" }} /> Guided by Dharma
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.06] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}>
              Building at the<br />
              <span className="gradient-text">intersection</span><br />
              of tech &amp; math.
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--text-secondary)" }}>
              I'm Sachin — an IT graduate from Nepal with{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>5+ years</span> across{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>web development</span>,{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>blockchain</span>,{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>UI/UX</span>,{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>AI research</span>, and{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>mathematics education</span>.
              Rooted in curiosity, guided by purpose.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-8">
              <a href="#expertise" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex items-center gap-3">
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Find me on</span>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "var(--bg-2)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.hoverColor; e.currentTarget.style.color = s.hoverColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
                  <s.Icon size={14} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex items-center justify-center">
            {/* Outer wrapper clips floating cards on mobile, shows them on lg+ */}
            <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px]">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full" style={{ inset: "-24px", border: "1px dashed var(--border-2)" }} />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full" style={{ inset: "-46px", border: "1px dashed var(--border)" }} />

              <div className="relative z-10 w-full h-full rounded-full overflow-hidden"
                style={{ border: "3px solid var(--border)", boxShadow: "0 20px 60px color-mix(in srgb, var(--accent) 16%, transparent)" }}>
                <img src={profileImg} alt="Sachin Pantha" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating cards — hidden on small screens to prevent overflow */}
              {floatingCards.map((card, i) => (
                <motion.div key={card.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: 0.8 + i * 0.12, duration: 0.35 },
                    scale: { delay: 0.8 + i * 0.12, duration: 0.35 },
                    y: { delay: i * 0.2, duration: 3.2 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold shadow-lg"
                  style={{ ...card.pos, background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)", whiteSpace: "nowrap", zIndex: 20 }}>
                  <card.Icon size={11} style={{ color: card.color }} />
                  {card.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div {...fadeUp(0.65)}
          className="mt-14 sm:mt-20 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          style={{ borderTop: "1px solid var(--border)" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl sm:text-5xl font-bold mb-1.5 tabular-nums"
                style={{ color: "var(--accent)", letterSpacing: "-0.02em" }}>
                <Counter to={s.to} />{s.suffix}
              </p>
              <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
