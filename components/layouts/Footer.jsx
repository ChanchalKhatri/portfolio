"use client";

import React, { useState, useEffect } from "react";
import { ArrowDownLeft, Mail, Copy, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RiSingleQuotesR } from "react-icons/ri";
import { Magnetic } from "@/components/ui/magnetic";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerDetails = [
    {
      label: "Copyright",
      value: `© ${new Date().getFullYear()} Edition`,
      Icon: Copy,
    },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/ChanchalKhatri",
      Icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/khatrichanchal19/",
      Icon: FaLinkedin,
    },
  ];

  return (
    <footer className="bg-[#1C1D20] text-white min-h-screen w-full flex flex-col justify-between px-4 py-8 md:px-16 md:py-12 relative font-sans overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center mt-24 md:mt-40 max-w-[1400px] mx-auto w-full relative z-10">
        {/* Headline Section */}
        <div className="flex items-start md:items-center justify-between w-full pr-4 md:pr-24">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-4 md:gap-8">
              <img
                src="/hero.webp"
                alt="Profile"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28 rounded-full object-cover"
              />
              <h1 className="text-[3.5rem] sm:text-6xl md:text-[8rem] leading-[1.1] md:leading-none tracking-tight font-medium text-white flex items-center">
                Let
                <RiSingleQuotesR className="text-[2.5rem] sm:text-5xl md:text-[6rem] -ml-1 md:-ml-6 -mr-2 md:-mr-8 -mt-4" />
                s work
              </h1>
            </div>

            <div className="flex items-center justify-between w-full mt-2 md:mt-4">
              <h1 className="text-[3.5rem] sm:text-6xl md:text-[8rem] leading-[1.1] md:leading-none tracking-tight font-medium text-white">
                together
              </h1>
              {/* Arrow responds to mobile (right of together) and desktop (far right) */}
              <div className="self-center md:ml-auto md:mr-0 mr-4">
                <ArrowDownLeft
                  className="w-8 h-8 md:w-10 md:h-10 text-white font-light"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Action Buttons */}
        <div className="relative mt-20 md:mt-32 w-full flex items-center">
          {/* Horizontal Line */}
          <div className="absolute w-full h-[1px] bg-white/20"></div>

          {/* Circular Get in touch button overlapping the line */}
          <div className="absolute right-4 sm:right-12 md:right-[20%] top-1/2 -translate-y-1/2 z-20">
            <Magnetic intensity={1.2}>
              <Button
                variant="ghost"
                className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#455ce9] text-white hover:bg-[#334bd3] hover:text-white transition-colors duration-300 cursor-pointer shadow-xl"
              >
                <Magnetic intensity={0.9}>
                  <span className="text-sm md:text-base font-light tracking-wide">
                    Get in touch
                  </span>
                </Magnetic>
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Contact Pill Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-20 md:mt-24 w-full">
          <Magnetic intensity={1.2}>
            <Button
              variant="outline"
              asChild
              className="w-full sm:w-fit px-8 py-7 md:px-10 md:py-8 border-white/20 rounded-full text-sm md:text-base hover:bg-[#334bd3] hover:border-[#334bd3] hover:text-white transition-all w-full tracking-wide bg-transparent text-white"
            >
              <a
                href="mailto:khatrichanchal1910@gmail.com"
                className="flex items-center justify-center gap-3 w-full"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                khatrichanchal1910@gmail.com
              </a>
            </Button>
          </Magnetic>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-[1400px] mx-auto mt-20 z-10 pb-4">
        {/* Socials (Appears first on Mobile, Right side on Desktop) */}
        <div className="flex flex-col gap-3 order-1 md:order-2 w-full md:w-auto mb-10 md:mb-0">
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-2 md:mb-1">
            Socials
          </span>
          <ul className="flex flex-wrap gap-6 md:gap-8 text-sm md:text-base tracking-wide text-white/90">
            {socials.map((social, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  asChild
                  className="p-0 h-auto bg-transparent hover:bg-transparent text-white/90 hover:text-white transition-colors"
                >
                  <a
                    href={social.href}
                    className="flex items-center gap-2 hover:underline underline-offset-4 decoration-white/30"
                  >
                    <social.Icon className="w-4 h-4 md:w-5 md:h-5" />
                    {social.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile-only horizontal line separator matching image */}
        <div className="w-full h-[1px] bg-white/20 block md:hidden order-2 mb-8"></div>

        {/* Left Side (Copyright) (Appears last on Mobile, Left side on Desktop) */}
        <div className="flex gap-16 md:gap-24 order-3 md:order-1 w-full md:w-auto justify-between md:justify-start">
          {footerDetails.map((detail, index) => (
            <div key={index} className="flex flex-col gap-2 md:gap-3">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold flex items-center gap-2">
                <detail.Icon className="w-3 h-3" />
                {detail.label}
              </span>
              <span className="text-sm md:text-base tracking-wide text-white/90">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 md:w-14 md:h-14 bg-[#455ce9] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(69,92,233,0.4)] hover:bg-[#334bd3] transition-all duration-300 z-50 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp
          className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
          strokeWidth={2}
        />
      </button>
    </footer>
  );
}
