"use client";

import { cn } from "@/lib/utils";
import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function ScrollBaseAnimation({
  children,
  baseVelocity = -5,
  className,
  textClassName,
  scrollDependent = false,
  delay = 0,
}) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn(
        "overflow-hidden whitespace-nowrap flex flex-nowrap",
        className,
      )}
    >
      <motion.div
        className="flex whitespace-nowrap gap-10 flex-nowrap"
        style={{ x }}
      >
        {[...Array(4)].map((_, index) => (
          <span key={index} className={cn("block", textClassName)}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
