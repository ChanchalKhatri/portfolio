"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import RevealLine from "./RevealLine";

export default function AboutHero() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={heroRef}
      className="pt-[clamp(7em,15vh,14em)] pb-[clamp(5em,10vh,10em)] px-[clamp(2.5em,8vw,8em)]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="flex justify-between items-start mb-[clamp(2em,6vh,5em)]"
        >
          <span className="text-[clamp(16px,1.2vw,19px)] text-[#999D9E] font-[450] tracking-[0.01em]">
            © {new Date().getFullYear()}
          </span>
          <span className="text-[clamp(16px,1.2vw,19px)] text-[#999D9E] font-[450]">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Two-column grid: heading + image */}
        <div className="grid grid-cols-[1fr_auto] gap-[clamp(2em,5vw,5em)] items-start about-hero-grid">
          {/* LEFT — Heading + tagline */}
          <div>
            <h1 className="text-[calc(clamp(3.25em,7vw,8em)*.875)] leading-[1.065] font-[450] text-[#1C1D20] tracking-[-0.02em] m-0 mb-[0.6em]">
              <RevealLine delay={0.1}>About me</RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.7, 0, 0.3, 1] }}
              className="text-[clamp(16px,1.2vw,19px)] text-[#999D9E] italic leading-[1.6] font-[450] max-w-[38em] m-0"
            >
              Helping brands thrive in the digital world. From my desk in
              India I help companies and individuals with Full-Stack
              Development, UI&nbsp;/&nbsp;UX Design &amp; Interaction.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
