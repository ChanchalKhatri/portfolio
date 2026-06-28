"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function StatItem({ number, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.7, 0, 0.3, 1] }}
      className="flex flex-col"
    >
      <span className="text-[clamp(3.25em,5vw,4.5em)] leading-[1.065] font-[450] text-[#1C1D20] tracking-[-0.02em]">
        {number}
      </span>
      <span className="text-[clamp(16px,1.2vw,19px)] text-[#999D9E] mt-1 font-[450]">
        {label}
      </span>
    </motion.div>
  );
}
