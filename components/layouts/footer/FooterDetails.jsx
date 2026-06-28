"use client";

import React, { useRef } from "react";
import { Copy } from "lucide-react";
import { motion, useInView } from "motion/react";

const footerDetails = [
  {
    label: "Copyright",
    value: `© ${new Date().getFullYear()} Edition`,
    Icon: Copy,
  },
];

export default function FooterDetails({ isContactPage }) {
  const copyrightRef = useRef(null);
  const copyrightInView = useInView(copyrightRef, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={copyrightRef}
      initial={{ opacity: 0, y: 20 }}
      animate={
        copyrightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-16 md:gap-24 order-3 md:order-1 w-full md:w-auto justify-between md:justify-start"
    >
      {footerDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.4,
            delay: 0.85 + index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-2 md:gap-3"
        >
          <span className={`text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2 ${
            isContactPage ? "text-white/30" : "text-muted-foreground"
          }`}>
            <detail.Icon className="w-3 h-3" />
            {detail.label}
          </span>
          <span className={`text-sm md:text-base tracking-wide ${
            isContactPage ? "text-white" : "text-foreground"
          }`}>
            {detail.value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
