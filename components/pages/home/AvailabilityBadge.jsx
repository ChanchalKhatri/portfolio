"use client";

import { motion } from "motion/react";

export default function AvailabilityBadge({ animated = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginTop: 28,
        padding: "8px 16px",
        borderRadius: 99,
        border: "1px solid rgba(74,222,128,0.35)",
        background: "rgba(74,222,128,0.07)",
      }}
    >
      {animated ? (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 8px #4ade80",
          }}
        />
      ) : (
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4ade80",
          }}
        />
      )}
      <span
        style={{
          fontSize: animated ? 12 : 11,
          color: "#4ade80",
          fontWeight: 500,
          letterSpacing: "0.08em",
        }}
      >
        Available for work
      </span>
    </motion.div>
  );
}
