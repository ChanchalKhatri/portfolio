"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ScrollBaseAnimation from "@/components/uilayouts/scroll-text-marque";
import HeroOrb3D from "@/components/uilayouts/HeroOrb3D";
import HeroText from "./HeroText";
import MobileHeroText from "./MobileHeroText";

/* ─── Data ─────────────────────────────────────────────── */
const TYPED_LINES = [
  "const developer = {",
  '  name: "Chanchal Khatri",',
  '  stack: ["MERN", "Next.js"],',
  '  passion: "UI/UX + Code",',
  "  available: true,",
  "};",
];

const FLOAT_BADGES = [
  { label: "TypeScript", color: "#3178c6", delay: 0.2, x: "18%", y: "22%" },
  { label: "Tailwind CSS", color: "#38bdf8", delay: 0.5, x: "62%", y: "18%" },
  { label: "REST API", color: "#ff6b6b", delay: 0.8, x: "75%", y: "68%" },
  { label: "Git & GitHub", color: "#f0883e", delay: 1.1, x: "10%", y: "72%" },
];

/* ─── Sub-components ─────────────────────────────────────── */
function TerminalCard() {
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const headerInView = useInView(headerRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[rgba(12,14,24,0.85)] border border-[rgba(255,255,255,0.09)] rounded-xl backdrop-blur-[20px] p-3 sm:p-[14px_18px] w-full max-w-[260px] sm:max-w-[280px] mt-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      {/* Traffic lights */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -10 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 12,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.85, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.3,
              delay: 0.45 + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginLeft: 8,
            fontSize: 9.5,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            letterSpacing: "0.06em",
          }}
        >
          portfolio.js
        </motion.span>
      </motion.div>

      {/* Code lines */}
      {TYPED_LINES.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            delay: 0.65 + i * 0.12,
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: "10px",
            lineHeight: 1.7,
            whiteSpace: "pre",
            color:
              line.startsWith("  name") || line.startsWith("  stack")
                ? "#79c0ff"
                : line.startsWith("  passion")
                  ? "#ffa657"
                  : line.startsWith("  available")
                    ? "#56d364"
                    : line === "};"
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(255,255,255,0.7)",
          }}
          className="sm:text-[11px]"
        >
          {line}
        </motion.div>
      ))}

      {/* Blinking cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.3, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
          style={{
            display: "inline-block",
            width: 6,
            height: 12,
            background: "#79c0ff",
            marginTop: 2,
            borderRadius: 1,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function StatsRow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2+", label: "Years Exp." },
    { value: "15+", label: "Projects" },
    { value: "∞", label: "Curiosity" },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-4 sm:gap-7 mt-3.5 pl-1"
    >
      {stats.map((s, index) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.4,
            delay: 1.3 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ textAlign: "center" }}
        >
          <div className="text-base sm:text-xl font-bold text-white leading-none tracking-tight">
            {s.value}
          </div>
          <div className="text-[8px] sm:text-[9px] text-white/40 mt-1 tracking-[0.12em] uppercase">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── Floating ambient badges (scattered across void) ─── */
function FloatingBadge({ label, color, delay, x, y }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: delay + 0.5,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: 99,
        border: `1px solid ${color}44`,
        background: `${color}11`,
        backdropFilter: "blur(10px)",
        pointerEvents: "none",
        zIndex: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.4,
          delay: delay + 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          boxShadow: `0 0 6px ${color}`,
        }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.4,
          delay: delay + 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          fontSize: 10.5,
          fontWeight: 600,
          color,
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

/* ─── Vertical glowing line divider ─── */
function VerticalDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        left: "50%",
        top: "10%",
        bottom: "22%",
        width: 1,
        background:
          "linear-gradient(to bottom, transparent, rgba(120,140,255,0.35) 30%, rgba(120,140,255,0.35) 70%, transparent)",
        transformOrigin: "top",
        zIndex: 5,
      }}
    />
  );
}

/* ─── Horizontal scan line effect ─── */
function ScanLine() {
  return (
    <motion.div
      animate={{ top: ["10%", "80%", "10%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        left: "10%",
        right: "10%",
        height: 1,
        background:
          "linear-gradient(90deg, transparent, rgba(120,140,255,0.25), transparent)",
        zIndex: 4,
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── Main hero ─────────────────────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden"
      style={{
        backgroundColor: "#08090f",
        backgroundImage: `
          radial-gradient(ellipse 70% 55% at 25% 45%, rgba(50,65,180,0.25) 0%, transparent 65%),
          radial-gradient(ellipse 55% 50% at 75% 35%, rgba(90,50,180,0.18) 0%, transparent 60%)
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient floating badges - hidden on mobile */}
      <div className="hidden md:block">
        {FLOAT_BADGES.map((b) => (
          <FloatingBadge key={b.label} {...b} />
        ))}
      </div>

      {/* Scan line */}
      <ScanLine />

      {/* Vertical divider - desktop only */}
      <VerticalDivider />

      {/* ── DESKTOP: proper 2-col grid layout ── */}
      <div
        className="hidden md:grid absolute inset-x-0"
        style={{ top: 0, bottom: "18%", gridTemplateColumns: "1fr 1fr" }}
      >
        {/* LEFT COLUMN — centered */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center"
          style={{ paddingLeft: "8%", paddingRight: "4%" }}
        >
          <HeroOrb3D />
          <TerminalCard />
          <StatsRow />
        </motion.div>

        {/* RIGHT COLUMN — original text position feel, centered vertically at ~34% from top */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-center text-white"
          style={{ paddingRight: "12%", paddingLeft: "6%", paddingTop: "4%" }}
        >
          <HeroText />
        </motion.div>
      </div>

      {/* ── MOBILE: stacked layout ── */}
      <div className="md:hidden flex flex-col items-center justify-center px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <HeroOrb3D />
          <TerminalCard />
          <StatsRow />
        </motion.div>
      </div>

      {/* ── Bottom Marquee ── */}
      <div className="w-full pb-6 md:pb-10 relative z-10">
        <ScrollBaseAnimation
          baseVelocity={3}
          scrollDependent
          textClassName="
            text-[26vw]
            sm:text-[20vw]
            md:text-[12vw]
            font-medium
            tracking-[-0.07em]
            leading-none
            text-white
            whitespace-nowrap
          "
        >
          Chanchal Khatri -
        </ScrollBaseAnimation>

        {/* Mobile: Arrow + text */}
        <MobileHeroText />
      </div>
    </section>
  );
}
