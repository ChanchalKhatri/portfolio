"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import AvailabilityBadge from "./AvailabilityBadge";
import SocialLinks from "./SocialLinks";

export default function HeroText() {
  const iconRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const badgeRef = useRef(null);
  const socialsRef = useRef(null);

  const iconInView = useInView(iconRef, { once: true, margin: "-30px" });
  const text1InView = useInView(text1Ref, { once: true, margin: "-30px" });
  const text2InView = useInView(text2Ref, { once: true, margin: "-30px" });
  const text3InView = useInView(text3Ref, { once: true, margin: "-30px" });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-30px" });
  const socialsInView = useInView(socialsRef, { once: true, margin: "-30px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={iconRef}
        initial={{ opacity: 0, x: -20 }}
        animate={iconInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowDownRight size={52} strokeWidth={1.5} className="mb-6" />
      </motion.div>

      <div className="text-[32px] lg:text-[52px] font-light leading-[1.12] tracking-[-0.03em]">
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
          And
        </motion.div>
        <motion.div
          ref={text3Ref}
          initial={{ opacity: 0, y: 20 }}
          animate={text3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Web Designer
        </motion.div>
      </div>

      <motion.div
        ref={badgeRef}
        initial={{ opacity: 0, y: 15 }}
        animate={badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <AvailabilityBadge animated={true} />
      </motion.div>

      <motion.div
        ref={socialsRef}
        initial={{ opacity: 0, y: 15 }}
        animate={socialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
