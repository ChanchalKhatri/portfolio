"use client";

import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ChanchalKhatri",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khatrichanchal19/",
    Icon: FaLinkedin,
  },
];

export default function FooterSocials({ isContactPage }) {
  const socialsRef = useRef(null);
  const socialsLabelRef = useRef(null);

  const socialsInView = useInView(socialsRef, { once: true, margin: "-30px" });
  const socialsLabelInView = useInView(socialsLabelRef, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={socialsRef}
      initial={{ opacity: 0, y: 20 }}
      animate={socialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 order-1 md:order-2 w-full md:w-auto mb-10 md:mb-0"
    >
      <motion.span
        ref={socialsLabelRef}
        initial={{ opacity: 0, y: 15 }}
        animate={
          socialsLabelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
        }
        transition={{
          duration: 0.4,
          delay: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`text-[10px] uppercase tracking-widest font-semibold mb-2 md:mb-1 ${
          isContactPage ? "text-white/30" : "text-muted-foreground"
        }`}
      >
        Socials
      </motion.span>
      <ul className={`flex flex-wrap gap-6 md:gap-8 text-sm md:text-base tracking-wide ${
        isContactPage ? "text-white/80" : "text-foreground"
      }`}>
        {socials.map((social, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.4,
              delay: 0.7 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button
              variant="ghost"
              asChild
              className={`p-0 h-auto bg-transparent hover:bg-transparent transition-colors ${
                isContactPage ? "text-white hover:text-white/85" : "text-foreground hover:text-foreground"
              }`}
            >
              <a
                href={social.href}
                className={`flex items-center gap-2 hover:underline underline-offset-4 ${
                  isContactPage ? "decoration-white/20" : "decoration-muted-foreground/30"
                }`}
              >
                <social.Icon className="w-4 h-4 md:w-5 md:h-5" />
                {social.name}
              </a>
            </Button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
