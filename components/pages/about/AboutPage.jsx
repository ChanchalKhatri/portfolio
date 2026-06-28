"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Separator } from "@/components/ui/separator";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutBio from "./AboutBio";
import AboutServices from "./AboutServices";
import AboutMarquee from "./AboutMarquee";

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  return (
    <main className="bg-white overflow-x-hidden">
      <AboutHero />

      {/* Horizontal stripe using shadcn Separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={heroInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.7, 0, 0.3, 1] }}
        className="origin-left mx-[clamp(2.5em,8vw,8em)]"
      >
        <Separator className="bg-[rgba(28,29,32,0.175)]" />
      </motion.div>

      <AboutStats />
      <AboutBio />
      <AboutServices />
      <AboutMarquee />

      {/* Responsive overrides */}
      <style jsx global>{`
        @media (max-width: 860px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-image-wrap {
            display: none !important;
          }
          .about-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
