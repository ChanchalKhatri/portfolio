"use client";

import Link from "next/link";
import { motion, useSpring } from "motion/react";
import React, { useRef, useState } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import Image from "next/image";

export default function ImageReveal({
  items = demoList,
  renderItem,
  containerClassName = "",
  imageClassName = "",
}) {
  const [img, setImg] = useState({
    src: "",
    alt: "",
    link: "",
    opacity: 0,
  });

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e) => {
    if (!containerRef.current || !imageRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
  };

  const showImage = (item) => {
    setImg({
      src: item.img,
      alt: item.title || item.label || "Preview Image",
      link: item.link,
      opacity: 1,
    });
  };

  const hideImage = () => {
    setImg((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  const defaultRender = (item) => (
    <div className="flex cursor-pointer items-center justify-between border-b py-5">
      <p className="text-5xl">{item.label}</p>
      <span>{item.tag}</span>
    </div>
  );

  const finalRender = renderItem || defaultRender;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={hideImage}
      className={`relative ${
        containerClassName || (!renderItem ? "mx-auto w-4/5 p-4" : "")
      }`}
    >
      {items.map((item, index) => (
        <div key={index} onMouseEnter={() => showImage(item)}>
          {finalRender(item, index)}
        </div>
      ))}

      {img.src && (
        <motion.div
          ref={imageRef}
          className="pointer-events-none absolute left-0 top-0 z-30 hidden md:block"
          style={{
            x: imagePos.x,
            y: imagePos.y,
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: img.opacity,
            scale: img.opacity ? 1 : 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
        >
          <div className="relative h-[280px] w-[400px] overflow-hidden rounded-2xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={280}
              className={`pointer-events-none h-full w-full object-cover shadow-2xl ${imageClassName}`}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Magnetic intensity={1.2}>
                <Link
                  href={img.link || "#"}
                  className="pointer-events-auto flex h-26 w-26 items-center justify-center rounded-full bg-[#455ce9] text-lg font-medium text-white shadow-xl"
                >
                  <Magnetic intensity={0.9}>
                    <span className="text-sm">View</span>
                  </Magnetic>
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
