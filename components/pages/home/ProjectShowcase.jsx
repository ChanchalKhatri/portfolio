"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const showcaseImages = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/notes_app/main/public/output.png",
    title: "Notes App",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/notes_app",
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/expense-tracker/main/public/output.png",
    title: "Expense Tracker",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/expense-tracker",
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/calculator/main/public/output.png",
    title: "Calculator",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/calculator",
  },
  {
    id: 4,
    img: "/battery.png",
    title: "Battery Indicator",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/battery_indicator",
  },
  {
    id: 5,
    img: "/wether.png",
    title: "Weather Forcasting",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/weather_forecasting",
  },
];

const showcaseImages2 = [
  {
    id: 6,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/color_palette_generator/main/public/color_palette.png",
    title: "Color Palette Generator",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/color_palette_generator",
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/flashcard/main/public/flashcard3.png",
    title: "Flash Card",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/flashcard",
  },
  {
    id: 8,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/url_shortener/main/public/url_shortener.png",
    title: "Url Shortener",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/url_shortener",
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/pomodoro_timer/main/public/pomodoro_timer.png",
    title: "Pomodoro Timer",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/pomodoro_timer/",
  },
  {
    id: 10,
    img: "https://raw.githubusercontent.com/ChanchalKhatri/password_generator/main/public/password_generator.png",
    title: "Password Generator",
    category: "Web Development",
    repo: "https://github.com/ChanchalKhatri/password_generator",
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const handleWheel = (e) => {
      if (row1Ref.current && row2Ref.current) {
        e.preventDefault();
        const scrollAmount = e.deltaY;
        row1Ref.current.scrollLeft += scrollAmount;
        row2Ref.current.scrollLeft -= scrollAmount;
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("wheel", handleWheel, { passive: false });
      return () => section.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-16 md:py-30 overflow-hidden px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 md:mb-16 w-full max-w-[1200px]"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] uppercase tracking-[1.8px] text-[#7c7c7c]"
          >
            Mini Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-[44px] font-normal leading-tight md:leading-[1.42] tracking-tight md:tracking-[-2.5px] text-[#111] mt-4"
          >
            A collection of creative explorations & experiments
          </motion.h2>
        </motion.div>

        {/* Row 1 - Scrolls Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div
            ref={row1Ref}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {showcaseImages.map((item, index) => (
              <Link
                key={item.id}
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[300px] md:w-[380px] group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden rounded-lg bg-[#f0f0f0] aspect-[16/10]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <h3 className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Row 2 - Scrolls Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={row2Ref}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {showcaseImages2.map((item, index) => (
              <Link
                key={item.id}
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[300px] md:w-[380px] group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden rounded-lg bg-[#f0f0f0] aspect-[16/10]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <h3 className="text-white text-xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 text-[#7c7c7c] text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <span className="uppercase tracking-wider text-[11px]">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}
