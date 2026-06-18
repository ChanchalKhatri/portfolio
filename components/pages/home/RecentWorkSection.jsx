"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link"; // Import Link

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import ImageReveal from "@/components/uilayouts/image-reveal";

const projects = [
  {
    title: "Trello Clone",
    category: "MERN Stack Development",
    img: "/chat.png",
    link: "https://github.com/ChanchalKhatri/srello",
  },
  {
    title: "Live Chat App",
    category: "MERN Stack Development",
    img: "/srello.png",
    link: "https://github.com/ChanchalKhatri/chat_app",
  },
];

export default function RecentWorkSection() {
  const sectionRef = useRef(null);

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
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-30 overflow-hidden px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Hero Section */}
        <div className="mx-auto flex flex-col lg:grid w-full max-w-[1200px] lg:grid-cols-[minmax(0,780px)_minmax(260px,1fr)] gap-10 lg:gap-8 justify-between pt-8 md:pt-[42px]">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-normal leading-tight md:leading-[1.42] tracking-tight md:tracking-[-2.5px] text-[#111]">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-8 sm:gap-12 lg:gap-0">
            <p className="text-base md:text-[18px] leading-relaxed md:leading-[1.9] text-[#2f2f2f] sm:flex-1 lg:flex-none">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </p>

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
          </div>
        </div>

        {/* Section Label */}
        <div className="mx-auto mt-16 md:mt-[58px] w-full max-w-[1200px]">
          <span className="text-[11px] uppercase tracking-[1.8px] text-[#7c7c7c]">
            Recent Work
          </span>
        </div>

        {/* Projects */}
        <ImageReveal
          items={projects}
          containerClassName="mt-[24px] md:mt-[38px] border-t border-[#d8d8d8]"
          imageClassName=""
          renderItem={(project) => (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              {/* Mobile View */}
              <div className="block md:hidden w-full py-10 border-b border-[#d8d8d8]">
                <div className="w-full aspect-[16/10] bg-[#f3f3f3] overflow-hidden mb-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
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
          )}
        />
      </div>
    </section>
  );
}
