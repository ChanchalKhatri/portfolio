"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Separator } from "@/components/ui/separator";

export default function AboutBio() {
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });

  const skills = [
    ["React / Next.js", "Front-end framework"],
    ["Node.js / Express", "Back-end & APIs"],
    ["MongoDB / PostgreSQL", "Databases"],
    ["JavaScript / TypeScript", "Programming languages"],
    ["Tailwind CSS / Framer Motion", "Styling & Animation"],
    ["Git / GitHub / Vercel", "Tooling & Deployment"],
    ["REST APIs / GraphQL", "API Design"],
    ["Redux / Zustand", "State Management"],
    ["Docker / CI/CD", "DevOps"],
    ["AWS / Cloud Services", "Cloud Infrastructure"],
    ["Testing / Jest / Cypress", "Quality Assurance"],
  ];

  return (
    <section
      ref={contentRef}
      className="bg-[#1C1D20] pt-[clamp(5em,21vh,12em)] pb-[clamp(5em,21vh,12em)] px-[clamp(2.5em,8vw,8em)]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-[clamp(3em,7vw,7em)] items-start about-content-grid">
        {/* LEFT — Bio paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
        >
          <p className="text-[calc(clamp(1.55em,2.3vw,2.5em)*0.82)] text-white italic leading-[1.5] font-[450] m-0">
            I&rsquo;m a passionate full-stack developer based in India, obsessed
            with building digital products that are beautiful, fast and
            intuitive. I believe that the best websites sit at the intersection
            of thoughtful engineering and striking design.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.7, 0, 0.3, 1] }}
            className="text-[clamp(16px,1.2vw,19px)] text-white/55 leading-[1.6] font-[450] mt-[clamp(1.5em,4vw,2.5em)] m-0 mt-8"
          >
            My approach combines technical rigour with a designer&rsquo;s eye —
            whether that&rsquo;s crafting a pixel-perfect component in React,
            architecting a scalable Node.js API, or adding a subtle scroll
            animation that makes an interface feel alive.
          </motion.p>
        </motion.div>

        {/* RIGHT — Skills / stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.7, 0, 0.3, 1] }}
          className="flex flex-col gap-0"
        >
          {/* Section label */}
          <span className="text-[clamp(16px,1.2vw,19px)] text-white/40 font-[450] tracking-[0.06em] uppercase mb-[clamp(1.5em,4vw,2.5em)]">
            Skills &amp; Stack
          </span>

          {/* Skill rows */}
          {skills.map(([skill, category], i) => (
            <div key={skill}>
              <Separator className="bg-white/10 mb-[clamp(0.75em,2vw,1.25em)]" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.07,
                  ease: [0.7, 0, 0.3, 1],
                }}
                className="flex justify-between items-center pb-[clamp(0.75em,2vw,1.25em)]"
              >
                <span className="text-[clamp(16px,1.2vw,19px)] text-white font-[450]">
                  {skill}
                </span>
                <span className="text-[clamp(13px,1vw,16px)] text-white/40 font-[450]">
                  {category}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
