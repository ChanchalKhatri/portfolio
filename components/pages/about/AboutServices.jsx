"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Separator } from "@/components/ui/separator";
import ServiceRow from "./ServiceRow";

export default function AboutServices() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    margin: "-60px",
  });

  const services = [
    {
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using MERN stack and Next.js with clean, maintainable code.",
    },
    {
      title: "UI / UX Design",
      description:
        "Crafting intuitive, visually rich interfaces with a focus on micro-interactions and user delight.",
    },
    {
      title: "Interactive Experiences",
      description:
        "Bringing motion and life to digital products through animation, smooth scrolling and 3D effects.",
    },
    {
      title: "API Development",
      description:
        "Designing and building robust RESTful APIs and GraphQL endpoints with proper authentication and documentation.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, SEO, and accessibility through code splitting, lazy loading, and best practices.",
    },
    {
      title: "Cloud Deployment",
      description:
        "Deploying and managing applications on cloud platforms like AWS, Vercel, and Netlify with CI/CD pipelines.",
    },
  ];

  return (
    <section
      ref={servicesRef}
      className="bg-[#141517] pt-[clamp(5em,21vh,12em)] pb-[clamp(5em,21vh,12em)] px-[clamp(2.5em,8vw,8em)]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-end mb-[clamp(3em,8vh,6em)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="text-[calc(clamp(3.25em,5vw,4.5em)*.75)] leading-[1.065] font-[450] text-white tracking-[-0.02em] m-0"
          >
            Expertise
          </motion.h2>

          <motion.span
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.7, 0, 0.3, 1] }}
            className="text-[clamp(16px,1.2vw,19px)] text-white/40 font-[450]"
          >
            What I do
          </motion.span>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              index={i + 1}
              title={service.title}
              description={service.description}
              delay={i * 0.1}
            />
          ))}
          {/* Bottom border using shadcn Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={servicesInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.7, 0, 0.3, 1] }}
            className="origin-left"
          >
            <Separator className="bg-white/15" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
