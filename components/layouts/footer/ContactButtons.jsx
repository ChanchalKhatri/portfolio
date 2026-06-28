"use client";

import React, { useRef } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, useInView } from "motion/react";

export default function ContactButtons({ isContactPage }) {
  const buttonsRef = useRef(null);
  const emailButtonRef = useRef(null);

  const buttonsInView = useInView(buttonsRef, { once: true, margin: "-50px" });
  const emailButtonInView = useInView(emailButtonRef, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={buttonsRef}
      initial={{ opacity: 0, y: 30 }}
      animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row gap-4 mt-20 md:mt-24 w-full max-w-[1400px] mx-auto"
    >
      <motion.div
        ref={emailButtonRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Magnetic intensity={1.2}>
          <Button
            variant="outline"
            asChild
            className={`w-full sm:w-fit px-8 py-7 md:px-10 md:py-8 rounded-full text-sm md:text-base transition-all tracking-wide ${
              isContactPage 
                ? "border-white/15 hover:bg-white/10 hover:text-white text-white bg-transparent" 
                : "border-border hover:bg-accent hover:text-accent-foreground text-foreground bg-background"
            }`}
          >
            <a
              href="mailto:khatrichanchal1910@gmail.com"
              className="flex items-center justify-center gap-3 w-full"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              khatrichanchal1910@gmail.com
            </a>
          </Button>
        </Magnetic>
      </motion.div>
    </motion.div>
  );
}
