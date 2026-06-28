"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDownLeft } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const fields = [
    {
      id: "name",
      num: "01",
      label: "What's your name?",
      placeholder: "John Doe *",
      type: "text",
    },
    {
      id: "email",
      num: "02",
      label: "What's your email?",
      placeholder: "john@doe.com *",
      type: "email",
    },
    {
      id: "organization",
      num: "03",
      label: "What's the name of your organization?",
      placeholder: "John & Doe ®",
      type: "text",
    },
    {
      id: "services",
      num: "04",
      label: "What services are you looking for?",
      placeholder: "Web Design, Web Development ...",
      type: "text",
    },
    {
      id: "message",
      num: "05",
      label: "Your message",
      placeholder: "Hello Dennis, can you help me with ... *",
      type: "textarea",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1C1D20] text-white font-sans selection:bg-[#455CE9] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-24 md:pt-48 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading and Form */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11vw] sm:text-[8vw] lg:text-[5vw] xl:text-[5.5rem] leading-[1.05] tracking-tight font-light mb-16 md:mb-24 max-w-3xl"
            >
              Let start a<br />
              project together
            </motion.h1>

            <motion.form
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              onSubmit={handleSubmit}
              className="relative border-t border-white/15"
            >
              {fields.map((field) => {
                const isFocused = focusedField === field.id;
                return (
                  <div
                    key={field.id}
                    className="relative flex items-start gap-6 md:gap-10 py-8 md:py-10"
                  >
                    {/* Field Number */}
                    <span className="text-white/30 text-sm md:text-base font-light tracking-wide pt-1 min-w-[2rem] md:min-w-[2.5rem]">
                      {field.num}
                    </span>

                    {/* Label & Input Container */}
                    <div className="flex-1 flex flex-col">
                      <Label
                        htmlFor={field.id}
                        className="text-lg md:text-2xl font-light tracking-wide text-white mb-4"
                      >
                        {field.label}
                      </Label>

                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.id}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent text-base md:text-xl text-white placeholder:text-white/20 focus:outline-none transition-colors py-2 font-light resize-none leading-relaxed border-0 p-0 min-h-0"
                        />
                      ) : (
                        <Input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent text-base md:text-xl text-white placeholder:text-white/20 focus:outline-none transition-colors py-2 font-light border-0 p-0 h-auto"
                        />
                      )}
                    </div>

                    {/* Bottom Border Line with Drawing Focus Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isFocused ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-white origin-left z-10"
                    />

                    {/* Submit Button overlapping bottom border of 5th field */}
                    {field.id === "message" && (
                      <div className="absolute right-0 md:right-8 bottom-0 translate-y-1/2 z-20">
                        <Magnetic intensity={0.7}>
                          <Button
                            type="submit"
                            className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#455CE9] text-white hover:bg-[#344bc9] transition-all duration-500 ease-out cursor-pointer flex items-center justify-center text-sm md:text-lg font-light tracking-wide shadow-lg hover:scale-105 active:scale-95"
                          >
                            Send it!
                          </Button>
                        </Magnetic>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.form>
          </div>

          {/* Right Column: Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-6 space-y-12 md:space-y-16"
          >
            {/* ArrowDownLeft Icon */}
            <div className="pt-4 md:pt-8 text-white/30">
              <ArrowDownLeft className="w-8 h-8 md:w-10 md:h-10 text-white/30 hover:text-white transition-colors duration-300" />
            </div>

            {/* Details Blocks */}
            <div className="space-y-12 md:space-y-16">
              {/* Contact Details */}
              <div>
                <h3 className="text-[11px] tracking-[0.15em] text-white/30 uppercase font-semibold mb-4 md:mb-5">
                  Contact Details
                </h3>
                <div className="space-y-2 md:space-y-3 flex flex-col items-start">
                  <a
                    href="mailto:khatrichanchal1910@gmail.com"
                    className="text-base md:text-lg tracking-wide text-white hover:underline underline-offset-4 decoration-white/20 transition-all font-light"
                  >
                    khatrichanchal1910@gmail.com
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-[11px] tracking-[0.15em] text-white/30 uppercase font-semibold mb-4 md:mb-5">
                  Socials
                </h3>
                <div className="space-y-2 md:space-y-3 flex flex-col items-start">
                  <a
                    href="https://www.linkedin.com/in/khatrichanchal19/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg tracking-wide text-white hover:underline underline-offset-4 decoration-white/20 transition-all font-light"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/khatrichanchal19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg tracking-wide text-white hover:underline underline-offset-4 decoration-white/20 transition-all font-light"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:khatrichanchal1910@gmail.com"
                    className="text-base md:text-lg tracking-wide text-white hover:underline underline-offset-4 decoration-white/20 transition-all font-light"
                  >
                    Gmail
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
