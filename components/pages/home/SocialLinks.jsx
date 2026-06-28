"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const LINKS = [
  { label: "GitHub", href: "https://github.com/ChanchalKhatri/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khatrichanchal19/" },
];

export default function SocialLinks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}
    >
      {LINKS.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.4,
            delay: 0.1 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            fontSize: 11.5,
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.08em",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            paddingBottom: 2,
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
          }}
        >
          {link.label}
        </motion.a>
      ))}
    </motion.div>
  );
}
