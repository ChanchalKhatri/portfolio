import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";

const VelocityMorph = React.forwardRef(
  ({ texts, className, interval = 3000, direction = "up", delay = 0 }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, interval);

      return () => clearInterval(timer);
    }, [interval, texts.length]);

    const variants =
      direction === "left"
        ? {
            initial: {
              x: 24,
              opacity: 0,
              filter: "blur(10px)",
            },
            animate: {
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
            },
            exit: {
              x: -24,
              opacity: 0,
              filter: "blur(10px)",
            },
          }
        : {
            initial: {
              y: 40,
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.8,
            },
            animate: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            },
            exit: {
              y: -40,
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.8,
            },
          };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden whitespace-nowrap", className)}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{
              duration: 0.4,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="will-change-transform"
          >
            {texts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  },
);

VelocityMorph.displayName = "VelocityMorph";

export { VelocityMorph };
