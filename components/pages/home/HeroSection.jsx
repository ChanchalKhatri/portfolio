"use client";

import { ArrowDownRight } from "lucide-react";
import ScrollBaseAnimation from "@/components/uilayouts/scroll-text-marque";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-dvh flex flex-col justify-end overflow-hidden"
      style={{
        backgroundSize: "auto 150%",
        backgroundPosition: "50% 25%",
        backgroundColor: "#999d9e",
      }}
    >
      {/* Desktop Arrow + Text */}
      <div className="hidden md:flex absolute right-[10%] top-[34%] flex-col items-start text-white z-10">
        <ArrowDownRight size={56} strokeWidth={1.5} className="mb-8" />

        <div className="text-[32px] lg:text-[56px] font-light leading-[1.15] tracking-[-0.03em]">
          <div>MERN Stack Developer</div>
          <div>And</div>
          <div>Web Designer</div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="w-full pb-6 md:pb-10">
        <ScrollBaseAnimation
          baseVelocity={3}
          scrollDependent
          textClassName="
            text-[26vw]
            sm:text-[20vw]
            md:text-[12vw]
            font-medium
            tracking-[-0.07em]
            leading-none
            text-white
            whitespace-nowrap
          "
        >
          Chanchal Khatri -
        </ScrollBaseAnimation>

        {/* Mobile Arrow + Text (Below Marquee) */}
        <div className="md:hidden px-5 mt-6 text-white">
          <ArrowDownRight size={40} strokeWidth={1.5} className="mb-4" />

          <div className="text-[22px] sm:text-[28px] font-light leading-[1.15] tracking-[-0.03em]">
            <div>MERN Stack Developer</div>
            <div>And Web Designer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
