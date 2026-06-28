"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import StatItem from "./StatItem";

export default function AboutStats() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={statsRef}
      className="pt-[clamp(4em,10vh,8em)] pb-[clamp(4em,10vh,8em)] px-[clamp(2.5em,8vw,8em)]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 gap-[clamp(2em,5vw,5em)]">
        <StatItem number="1+" label="Years of experience" delay={0} />
        <StatItem number="10+" label="Projects completed" delay={0.1} />
        <StatItem number="∞" label="Curiosity" delay={0.2} />
      </div>
    </section>
  );
}
