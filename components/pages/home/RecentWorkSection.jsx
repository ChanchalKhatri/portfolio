"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "motion/react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import ImageReveal from "@/components/uilayouts/image-reveal";

const projects = [
  {
    title: "Trello Clone",
    category: "React Vite",
    img: "/srello.png",
    link: "https://github.com/ChanchalKhatri/srello",
  },
  {
    title: "Live Chat App",
    category: "React Vite",
    img: "/chat.png",
    link: "https://github.com/ChanchalKhatri/chat_app",
  },
  {
    title: "Crop Prediction",
    category: "Python Flask",
    img: "/crop_prediction.png",
    link: "https://github.com/ChanchalKhatri/crop_detection",
  },
  {
    title: "Real Estate",
    category: "MERN Stack",
    img: "/real_estate.png",
    link: "https://github.com/ChanchalKhatri/final_real_estate",
  },
];

export default function RecentWorkSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingTextRef = useRef(null);
  const subHeadingRef = useRef(null);
  const subHeadingTextRef = useRef(null);
  const labelRef = useRef(null);
  const labelTextRef = useRef(null);
  const projectsRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });
  const headingTextInView = useInView(headingTextRef, {
    once: true,
    margin: "-30px",
  });
  const subHeadingInView = useInView(subHeadingRef, {
    once: true,
    margin: "-50px",
  });
  const subHeadingTextInView = useInView(subHeadingTextRef, {
    once: true,
    margin: "-30px",
  });
  const labelInView = useInView(labelRef, { once: true, margin: "-50px" });
  const labelTextInView = useInView(labelTextRef, {
    once: true,
    margin: "-30px",
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [300, -200]);

  const y = useSpring(yTransform, {
    stiffness: 220,
    damping: 25,
    mass: 0.5,
  });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-16 md:py-30 overflow-hidden px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Hero Section */}
        <div className="mx-auto flex flex-col lg:grid w-full max-w-[1200px] lg:grid-cols-[minmax(0,780px)_minmax(260px,1fr)] gap-10 lg:gap-8 justify-between pt-8 md:pt-[42px]">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              ref={headingTextRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                headingTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl sm:text-4xl md:text-[44px] font-normal leading-tight md:leading-[1.42] tracking-tight md:tracking-[-2.5px] text-[#111]"
            >
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </motion.h1>
          </motion.div>

          <motion.div
            ref={subHeadingRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              subHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-8 sm:gap-12 lg:gap-0"
          >
            <motion.p
              ref={subHeadingTextRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                subHeadingTextInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base md:text-[18px] leading-relaxed md:leading-[1.9] text-[#2f2f2f] sm:flex-1 lg:flex-none"
            >
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </motion.p>

            {/* Mobile Button - Static */}
            <div className="w-full flex justify-end sm:hidden mt-4">
              <Magnetic intensity={1.2}>
                <Button
                  variant="ghost"
                  className="h-32 w-32 rounded-full bg-[#101117] text-white hover:bg-[#455ce9] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <Magnetic intensity={0.9}>
                    <span className="text-lg font-light">About me</span>
                  </Magnetic>
                </Button>
              </Magnetic>
            </div>

            {/* Desktop Button - Animated */}
            <motion.div
              style={{ y }}
              className="hidden sm:flex w-full sm:w-auto lg:w-full justify-end"
            >
              <Magnetic intensity={1.2}>
                <Button
                  variant="ghost"
                  className="mt-4 md:mt-8 h-[160px] w-[160px] md:h-[228px] md:w-[228px] rounded-full bg-[#101117] text-white hover:bg-[#455ce9] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <Magnetic intensity={0.9}>
                    <span className="text-sm md:text-lg font-light">
                      About me
                    </span>
                  </Magnetic>
                </Button>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        {/* Section Label */}
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: 20 }}
          animate={labelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 md:mt-[58px] w-full max-w-[1200px]"
        >
          <motion.span
            ref={labelTextRef}
            initial={{ opacity: 0, y: 15 }}
            animate={
              labelTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] uppercase tracking-[1.8px] text-[#7c7c7c]"
          >
            Recent Work
          </motion.span>
        </motion.div>

        {/* Projects */}
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageReveal
            items={projects}
            containerClassName="mt-[24px] md:mt-[38px] border-t border-[#d8d8d8]"
            imageClassName=""
            renderItem={(project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  {/* Mobile View */}
                  <div className="block md:hidden w-full py-10 border-b border-[#d8d8d8]">
                    <div className="w-full aspect-16/10 bg-[#f3f3f3] overflow-hidden mb-6 relative">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-[38px] font-normal leading-none tracking-tight text-[#111] mb-5">
                      {project.title}
                    </h2>
                    <div className="border-t border-[#d8d8d8] pt-4 flex justify-between items-center text-[15px] font-light text-[#444]">
                      <span>{project.category}</span>
                      <span>2024</span>
                    </div>
                  </div>

                  {/* Desktop View */}
                  <div className="hidden md:block border-b border-[#d8d8d8]">
                    <div className="group mx-auto grid h-[235px] w-full max-w-[1200px] cursor-pointer grid-cols-[1fr_320px] items-center">
                      <h2 className="text-[92px] font-normal leading-[1.1] tracking-[-4px] text-[#111] transition-all duration-500 ease-out group-hover:-translate-x-6 group-hover:text-[#a0a0a0]">
                        {project.title}
                      </h2>
                      <p className="justify-self-start text-[18px] text-[#444] transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:text-[#a0a0a0]">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
