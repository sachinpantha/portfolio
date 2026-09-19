import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DURATION = 2000;

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;

  const bg = isDark ? "#0f0e0c" : "#fafaf8";
  const text = isDark ? "#f0ece4" : "#1a1814";
  const muted = isDark ? "#6a6258" : "#8a8480";
  const accent = isDark ? "#e4a83a" : "#d4891e";
  const track = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => { setExit(true); setTimeout(onDone, 650); }, 150);
    };
    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed", inset: 0, background: bg,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 9999, padding: "0 24px",
          }}
        >
          {/* Name */}
          <div style={{ overflow: "hidden", marginBottom: 12 }}>
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
              style={{
                fontSize: "clamp(2.8rem, 12vw, 7rem)",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: text,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                lineHeight: 1,
                margin: 0,
              }}
            >
              SACHIN
            </motion.h1>
          </div>

          {/* Tagline */}
          <div style={{ overflow: "hidden", marginBottom: 52 }}>
            <motion.p
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              style={{
                fontSize: "clamp(0.6rem, 2vw, 0.72rem)",
                letterSpacing: "0.42em",
                textTransform: "uppercase",
                color: muted,
                fontFamily: "'DM Sans', system-ui, sans-serif",
                margin: 0,
              }}
            >
              Portfolio &nbsp;·&nbsp; 2025
            </motion.p>
          </div>

          {/* Progress */}
          <div style={{ width: "min(220px, 52vw)", position: "relative" }}>
            <div style={{ height: 1, background: track, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, width: `${progress * 100}%`, background: accent, transition: "none" }} />
            </div>
            {/* Leading dot */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: `${progress * 100}%`,
              transform: "translate(-50%, -50%)",
              width: 4, height: 4,
              borderRadius: "50%",
              background: accent,
              opacity: progress > 0.01 && progress < 0.99 ? 1 : 0,
              transition: "opacity 0.2s",
            }} />
          </div>

          {/* Counter */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: 14,
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              color: muted,
              fontFamily: "monospace",
              minWidth: "3ch",
              textAlign: "right",
              display: "block",
            }}
          >
            {Math.round(progress * 100)}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
