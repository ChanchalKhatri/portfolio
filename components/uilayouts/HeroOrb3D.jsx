"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const SKILLS = [
  { label: "React", angle: 0, radius: 125, color: "#61dafb" },
  { label: "Node.js", angle: 72, radius: 125, color: "#68a063" },
  { label: "MongoDB", angle: 144, radius: 125, color: "#4db33d" },
  { label: "Express", angle: 216, radius: 125, color: "#ffffffcc" },
  { label: "Next.js", angle: 288, radius: 125, color: "#ffffff" },
];

// Wireframe rings data
const RINGS = [
  { rx: 1, ry: 0.28, rz: 0, offset: 0 },
  { rx: 0.6, ry: 0.8, rz: 0.2, offset: 1.2 },
  { rx: 0.2, ry: 1, rz: 0.4, offset: 2.4 },
  { rx: 0.8, ry: 0.2, rz: 0.9, offset: 3.6 },
  { rx: 0.4, ry: 0.6, rz: 0.7, offset: 4.8 },
];

function useMouseParallax(strength = 20) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(springX, [-1, 1], [-strength, strength]);
  const rotateX = useTransform(springY, [-1, 1], [strength, -strength]);

  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx);
      mouseY.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return { rotateX, rotateY };
}

function Ring({ rx, ry, rz, offset, time }) {
  const points = 60;
  const r = 73;
  const coords = Array.from({ length: points + 1 }, (_, i) => {
    const a = (i / points) * Math.PI * 2;
    // Ellipse on a tilted plane using rx/ry/rz as axis weights
    const x = r * Math.cos(a);
    const y = r * Math.sin(a) * ry + r * Math.cos(a) * rz * 0.3;
    return `${x},${y}`;
  });
  const d = `M ${coords.join(" L ")}`;

  return (
    <motion.polyline
      points={coords.join(" ")}
      fill="none"
      stroke="rgba(255,255,255,0.18)"
      strokeWidth="0.8"
      animate={{ rotate: 360 }}
      transition={{
        duration: 8 + offset * 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ originX: "50%", originY: "50%" }}
    />
  );
}

export default function HeroOrb3D() {
  const { rotateX, rotateY } = useMouseParallax(18);
  const [time, setTime] = useState(0);
  const [mounted, setMounted] = useState(false);

  const PARTICLES = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        angle: (i / 28) * 360,
        r: 70 + Math.random() * 20,
        size: 1.2 + Math.random() * 1.8,
        speed: 0.15 + Math.random() * 0.3,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [],
  );

  useEffect(() => {
    setMounted(true);
    let raf;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      setTime((ts - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: 290, height: 290 }}
      />
    );
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 290, height: 290 }}
    >
      {/* Outer glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(100,120,255,0.18) 0%, rgba(0,0,0,0) 72%)",
          filter: "blur(18px)",
        }}
      />

      {/* Mouse-tracked 3D wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 800,
          position: "relative",
          width: 196,
          height: 196,
        }}
      >
        {/* Core SVG sphere wireframe */}
        <svg
          width="196"
          height="196"
          viewBox="-98 -98 196 196"
          style={{ overflow: "visible", position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(120,140,255,0.35)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          {/* Core glowing sphere */}
          <circle
            cx="0"
            cy="0"
            r="73"
            fill="url(#orbGlow)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          {/* Animated rings */}
          {RINGS.map((ring, i) => (
            <Ring key={i} {...ring} time={time} />
          ))}

          {/* Latitude lines */}
          {[-60, -30, 0, 30, 60].map((lat, i) => {
            const y = 73 * Math.sin((lat * Math.PI) / 180);
            const rx2 = 73 * Math.cos((lat * Math.PI) / 180);
            return (
              <ellipse
                key={i}
                cx="0"
                cy={y}
                rx={rx2}
                ry={rx2 * 0.22}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Vertical meridian */}
          <ellipse
            cx="0"
            cy="0"
            rx="1"
            ry="73"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.6"
          />
        </svg>

        {/* Orbiting particles */}
        {PARTICLES.map((p) => {
          const a = (p.angle + time * p.speed * 60) * (Math.PI / 180);
          const x = 98 + p.r * Math.cos(a) - 3;
          const y = 98 + p.r * Math.sin(a) * 0.4 - 3;
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: "#c8d0ff",
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size * 2}px #a0b0ff`,
              }}
            />
          );
        })}

        {/* Center inner glow dot */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 20,
            height: 20,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #fff 0%, #8899ff 60%, transparent 100%)",
            boxShadow: "0 0 24px 6px rgba(120,140,255,0.7)",
          }}
        />
      </motion.div>

      {/* Floating skill tags — positioned around the orb, outside the 3D wrapper */}
      {SKILLS.map((skill, i) => {
        const a = (skill.angle + time * 10) * (Math.PI / 180);
        const cx = 145;
        const cy = 145;
        const x = cx + skill.radius * Math.cos(a);
        const y = cy + skill.radius * Math.sin(a) * 0.45;
        return (
          <motion.div
            key={skill.label}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.08)",
              border: `1px solid ${skill.color}55`,
              backdropFilter: "blur(8px)",
              color: skill.color,
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              padding: "4px 10px",
              borderRadius: 99,
              whiteSpace: "nowrap",
              boxShadow: `0 0 12px ${skill.color}33`,
              pointerEvents: "none",
              userSelect: "none",
            }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {skill.label}
          </motion.div>
        );
      })}
    </div>
  );
}
