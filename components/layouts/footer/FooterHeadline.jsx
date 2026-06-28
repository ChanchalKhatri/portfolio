"use client";

import React, { useRef } from "react";
import { ArrowDownLeft } from "lucide-react";
import { RiSingleQuotesR } from "react-icons/ri";
import { motion, useInView } from "motion/react";

export default function FooterHeadline({ isContactPage }) {
  const headlineRef = useRef(null);
  const headlineText1Ref = useRef(null);
  const headlineText2Ref = useRef(null);

  const headlineInView = useInView(headlineRef, {
    once: true,
    margin: "-50px",
  });
  const headlineText1InView = useInView(headlineText1Ref, {
    once: true,
    margin: "-30px",
  });
  const headlineText2InView = useInView(headlineText2Ref, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={headlineRef}
      initial={{ opacity: 0, y: 40 }}
      animate={headlineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 flex flex-col justify-center mt-24 md:mt-40 max-w-[1400px] mx-auto w-full relative z-10"
    >
      <div className="flex items-start md:items-center justify-between w-full pr-4 md:pr-24">
        <div className="flex flex-col w-full">
          <motion.div
            ref={headlineText1Ref}
            initial={{ opacity: 0, y: 30 }}
            animate={
              headlineText1InView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-4 md:gap-8"
          >
            <h1 className={`text-[3.5rem] sm:text-6xl md:text-[8rem] leading-[1.1] md:leading-none tracking-tight font-medium flex items-center ${
              isContactPage ? "text-white" : "text-foreground"
            }`}>
              Let
              <RiSingleQuotesR className="text-[2.5rem] sm:text-5xl md:text-[6rem] -ml-1 md:-ml-6 -mr-2 md:-mr-8 -mt-4" />
              s work
            </h1>
          </motion.div>

          <motion.div
            ref={headlineText2Ref}
            initial={{ opacity: 0, y: 30 }}
            animate={
              headlineText2InView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-between w-full mt-2 md:mt-4"
          >
            <h1 className={`text-[3.5rem] sm:text-6xl md:text-[8rem] leading-[1.1] md:leading-none tracking-tight font-medium ${
              isContactPage ? "text-white" : "text-foreground"
            }`}>
              together
            </h1>
            <div className="self-center md:ml-auto md:mr-0 mr-4">
              <ArrowDownLeft
                className={`w-8 h-8 md:w-10 md:h-10 font-light ${
                  isContactPage ? "text-white" : "text-foreground"
                }`}
                strokeWidth={1.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
