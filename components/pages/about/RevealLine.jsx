"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function RevealLine({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, delay, ease: [0.7, 0, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
