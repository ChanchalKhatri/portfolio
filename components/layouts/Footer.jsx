"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion, useInView } from "motion/react";
import FooterHeadline from "./footer/FooterHeadline";
import GetInTouchButton from "./footer/GetInTouchButton";
import ContactButtons from "./footer/ContactButtons";
import FooterSocials from "./footer/FooterSocials";
import FooterDetails from "./footer/FooterDetails";
import BackToTopButton from "./footer/BackToTopButton";

export default function Footer() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

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

  const isContactPage = pathname === "/contact";

  return (
    <footer
      ref={footerRef}
      className={`min-h-screen w-full flex flex-col justify-between px-4 py-8 md:px-16 md:py-12 relative font-sans overflow-hidden transition-colors duration-500 ${
        isContactPage
          ? "bg-[#1C1D20] text-white"
          : "bg-background text-foreground"
      }`}
    >
      {/* Main Content Area */}
      <FooterHeadline isContactPage={isContactPage} />

      {/* Divider & Action Buttons */}
      <div className="relative mt-20 md:mt-32 w-full flex items-center max-w-[1400px] mx-auto">
        {/* Horizontal Line */}
        <div
          className={`absolute w-full h-[1px] ${isContactPage ? "bg-white/15" : "bg-border"}`}
        ></div>

        {/* Circular Get in touch button overlapping the line */}
        <GetInTouchButton isContactPage={isContactPage} />
      </div>

      {/* Contact Pill Buttons */}
      <ContactButtons isContactPage={isContactPage} />

      {/* Bottom Footer Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-[1400px] mx-auto mt-20 z-10 pb-4"
      >
        {/* Socials (Appears first on Mobile, Right side on Desktop) */}
        <FooterSocials isContactPage={isContactPage} />

        {/* Mobile-only horizontal line separator matching image */}
        <div
          className={`w-full h-[1px] block md:hidden order-2 mb-8 ${isContactPage ? "bg-white/15" : "bg-border"}`}
        ></div>

        {/* Left Side (Copyright) (Appears last on Mobile, Left side on Desktop) */}
        <FooterDetails isContactPage={isContactPage} />
      </motion.div>

      {/* Floating Back to Top Button */}
      <BackToTopButton
        isVisible={isVisible}
        isContactPage={isContactPage}
        scrollToTop={scrollToTop}
      />
    </footer>
  );
}
