"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Separator } from "@/components/ui/separator";

export default function ServiceRow({ index, title, description, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div>
      <Separator className="bg-white/15 mb-[clamp(1.5em,4vw,2.5em)]" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.7, 0, 0.3, 1] }}
        className="pb-[clamp(1.5em,4vw,2.5em)] flex flex-col gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:items-start md:gap-[clamp(1.5em,4vw,3em)]"
      >
        {/* Row 1 on mobile: Index & Title (unwrapped on desktop with md:contents) */}
        <div className="flex items-baseline gap-4 sm:gap-6 md:contents">
          {/* Index */}
          <span className="text-[clamp(16px,1.2vw,19px)] text-white/40 font-[450] pt-[0.1em] min-w-[2em]">
            {String(index).padStart(2, "0")}
          </span>

          {/* Title */}
          <span className="text-[calc(clamp(1.55em,2.3vw,2.5em)*0.9)] text-white font-[450] leading-[1.1]">
            {title}
          </span>
        </div>

        {/* Row 2 on mobile: Description */}
        <span className="text-[clamp(16px,1.2vw,19px)] text-white/55 font-[450] leading-[1.6] text-left max-w-full md:max-w-[280px] md:text-right">
          {description}
        </span>
      </motion.div>
    </div>
  );
}
