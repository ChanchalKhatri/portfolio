"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, useInView } from "motion/react";

export default function GetInTouchButton({ isContactPage }) {
  const getInTouchRef = useRef(null);
  const getInTouchInView = useInView(getInTouchRef, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={getInTouchRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        getInTouchInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-4 sm:right-12 md:right-[20%] top-1/2 -translate-y-1/2 z-20"
    >
      <Magnetic intensity={1.2}>
        <Button
          variant="default"
          className={`w-32 h-32 md:w-44 md:h-44 rounded-full transition-colors duration-300 cursor-pointer shadow-xl ${
            isContactPage 
              ? "bg-[#455CE9] text-white hover:bg-[#344bc9]" 
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          <Magnetic intensity={0.9}>
            <span className="text-sm md:text-base font-light tracking-wide">
              Get in touch
            </span>
          </Magnetic>
        </Button>
      </Magnetic>
    </motion.div>
  );
}
