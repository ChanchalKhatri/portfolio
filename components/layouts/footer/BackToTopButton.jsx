"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTopButton({ isVisible, isContactPage, scrollToTop }) {
  return (
    <Button
      onClick={scrollToTop}
      variant="default"
      size="icon"
      className={`fixed bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } ${
        isContactPage 
          ? "bg-[#455CE9] text-white hover:bg-[#344bc9]" 
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
    </Button>
  );
}
