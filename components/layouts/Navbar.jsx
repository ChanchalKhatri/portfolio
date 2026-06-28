"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/ui/magnetic";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";

const links = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Pages whose hero/top section is light (white) — navbar must use dark text
const LIGHT_BG_PAGES = ["/about"];

export default function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoRef = useRef(null);
  const logoSymbolRef = useRef(null);
  const logoTextRef = useRef(null);
  const mobileBtnRef = useRef(null);

  const logoInView = useInView(logoRef, { once: true, margin: "-30px" });
  const logoSymbolInView = useInView(logoSymbolRef, {
    once: true,
    margin: "-30px",
  });
  const logoTextInView = useInView(logoTextRef, {
    once: true,
    margin: "-30px",
  });
  const mobileBtnInView = useInView(mobileBtnRef, {
    once: true,
    margin: "-30px",
  });

  // Determine text/dot colour based on the page background
  const isLightBg = LIGHT_BG_PAGES.includes(pathname);
  const textColor = isLightBg ? "#1C1D20" : "#FFFFFF";
  const dotColor = isLightBg ? "#1C1D20" : "#FFFFFF";
  const mutedColor = isLightBg ? "rgba(28,29,32,0.5)" : "rgba(255,255,255,0.6)";
  const borderColor = isLightBg
    ? "rgba(28,29,32,0.15)"
    : "rgba(255,255,255,0.15)";

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 pt-6 pb-4 sm:px-6 md:px-8 md:pt-12 md:pb-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0 }}
          animate={logoInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Magnetic intensity={1.2}>
            <Link
              href="/"
              style={{ color: textColor, transition: "color 0.4s ease" }}
              className="group flex items-center text-base tracking-tight sm:text-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.span
                ref={logoSymbolRef}
                initial={{ opacity: 0 }}
                animate={logoSymbolInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-1 text-xl transition-transform duration-500 ease-in-out group-hover:rotate-360 sm:text-2xl"
              >
                ©
              </motion.span>

              <motion.span
                ref={logoTextRef}
                initial={{ opacity: 0 }}
                animate={logoTextInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="transition-opacity duration-300"
              >
                {isHovered ? "Chanchal Khatri" : "Code by Chanchal"}
              </motion.span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex ml-auto">
          {links.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Magnetic key={item.name} intensity={1.2}>
                <Link
                  href={item.href}
                  style={{ color: textColor, transition: "color 0.4s ease" }}
                  className="group relative flex flex-col items-center text-lg tracking-tight font-sans font-light"
                >
                  {item.name}

                  {/* Active / hover dot */}
                  <span
                    style={{ backgroundColor: dotColor, transition: "background-color 0.4s ease" }}
                    className={`
                      absolute -bottom-3
                      h-1.5 w-1.5 rounded-full
                      transition-all duration-300
                      ${isActive ? "scale-100" : "scale-0 group-hover:scale-100"}
                    `}
                  />
                </Link>
              </Magnetic>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          ref={mobileBtnRef}
          initial={{ opacity: 0 }}
          animate={mobileBtnInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            style={{ color: textColor, transition: "color 0.4s ease" }}
            className="flex items-center gap-3 md:hidden"
            aria-label="Toggle Menu"
          >
            {/* Left Dot */}
            <span
              style={{
                backgroundColor: dotColor,
                transition: "background-color 0.4s ease",
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                isMenuOpen ? "scale-125" : ""
              }`}
            />

            {/* Menu Text */}
            <span className="text-sm uppercase tracking-widest">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen ? "mt-8 max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          style={{ borderColor }}
          className="flex flex-col gap-6 border-t pt-6"
        >
          {links.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={isMenuOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  style={{
                    color: isActive ? textColor : mutedColor,
                    transition: "color 0.3s ease",
                  }}
                  className="text-2xl tracking-tight hover:opacity-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
