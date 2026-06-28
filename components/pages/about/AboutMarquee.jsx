"use client";

import ScrollBaseAnimation from "@/components/uilayouts/scroll-text-marque";

export default function AboutMarquee() {
  return (
    <section className="bg-[#141517] pb-[clamp(4em,10vh,8em)] overflow-hidden">
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
        Chanchal Khatri —
      </ScrollBaseAnimation>
    </section>
  );
}
