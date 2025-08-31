"use client";

import React from "react";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type HeaderZoomInProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeaderZoomIn = (props: HeaderZoomInProps) => {
  const { images } = {
    ...HeaderZoomInDefaults,
    ...props,
  };

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const opacityOverlay = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
  // Changed: Zoom starts later, reaches full zoom earlier, then holds
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 3.2]);

  return (
    <section ref={containerRef} id="relume" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 z-10 bg-black/50"
            style={{ opacity: opacityOverlay }}
          />
          <motion.div
            style={{ scale }}
            className="grid size-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={clsx(
                  "relative",
                  [0, 2, 3, 5, 6, 8].indexOf(index) !== -1 && "hidden md:block",
                )}
              >
                {index === 4 ? (
                  <video
                    src="/A_highspeed_nascar_202508301804_ppot5.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 size-full object-cover opacity-100"
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 size-full object-cover opacity-0"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const HeaderZoomInDefaults: Props = {
  images: [
    {
      src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
      alt: "RFK Racing image 1",
    },
    {
      src: "/images/Gemini_Generated_Image_7czxx87czxx87czx.png",
      alt: "RFK Racing image 2",
    },
    {
      src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
      alt: "RFK Racing image 3",
    },
    {
      src: "/images/Temp image.jpg",
      alt: "RFK Racing image 4",
    },
    {
      src: "/images/to_be_replaced2.jpg",
      alt: "RFK Racing image 5",
    },
    {
      src: "/images/tobe_replaced2.png",
      alt: "RFK Racing image 6",
    },
    {
      src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
      alt: "RFK Racing image 7",
    },
    {
      src: "/images/Gemini_Generated_Image_7czxx87czxx87czx.png",
      alt: "RFK Racing image 8",
    },
    {
      src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
      alt: "RFK Racing image 9",
    },
  ],
};
