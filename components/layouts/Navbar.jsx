"use client";

import { useState } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/magnetic";
import { VelocityMorph } from "@/components/ui/velocity-morph";

const links = ["Work", "About", "Contact"];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 pt-6 pb-4 sm:px-6 md:px-8 md:pt-12 md:pb-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Magnetic intensity={1.2}>
          <Link
            href="/"
            className="group flex items-center text-base tracking-tight text-white sm:text-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="mr-1 text-xl transition-transform duration-500 ease-in-out group-hover:rotate-360 sm:text-2xl">
              ©
            </span>

            <VelocityMorph
              texts={[isHovered ? "Chanchal Khatri" : "Code by Chanchal"]}
              direction="left"
              delay={0.5}
              interval={999999}
              className="p-0"
            />
          </Link>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <Magnetic key={item} intensity={1.2}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="group relative flex flex-col items-center text-lg tracking-tight text-white"
              >
                {item}

                <span
                  className="
                    absolute -bottom-3
                    h-1.5 w-1.5 rounded-full bg-white
                    scale-0 transition-transform duration-300
                    group-hover:scale-100
                  "
                />
              </Link>
            </Magnetic>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {/* Left Dot */}
          <span
            className={`h-2 w-2 rounded-full bg-white transition-all duration-300 ${
              isMenuOpen ? "scale-125" : ""
            }`}
          />

          {/* Menu Text */}
          <span className="text-sm uppercase tracking-widest">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen ? "mt-8 max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 border-t border-white/20 pt-6">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl tracking-tight text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
