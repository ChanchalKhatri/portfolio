"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import AvailabilityBadge from "./AvailabilityBadge";

export default function MobileHeroText() {
  const iconRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const badgeRef = useRef(null);

  const iconInView = useInView(iconRef, { once: true, margin: "-30px" });
  const text1InView = useInView(text1Ref, { once: true, margin: "-30px" });
  const text2InView = useInView(text2Ref, { once: true, margin: "-30px" });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-30px" });

  return (
    <div className="md:hidden px-5 mt-6 text-white">
      <motion.div
        ref={iconRef}
        initial={{ opacity: 0, x: -20 }}
        animate={iconInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowDownRight size={40} strokeWidth={1.5} className="mb-4" />
      </motion.div>
      <div className="text-[22px] sm:text-[28px] font-light leading-[1.15] tracking-[-0.03em]">
        <motion.div
          ref={text1Ref}
          initial={{ opacity: 0, y: 20 }}
          animate={text1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          MERN Stack Developer
        </motion.div>
        <motion.div
          ref={text2Ref}
          initial={{ opacity: 0, y: 20 }}
          animate={text2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          And Web Designer
        </motion.div>
      </div>
      <motion.div
        ref={badgeRef}
        initial={{ opacity: 0, y: 15 }}
        animate={badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <AvailabilityBadge animated={false} />
      </motion.div>
    </div>
  );
}
