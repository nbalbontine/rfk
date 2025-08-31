import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type Header80Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header80 = (props: Header80Props) => {
  const { images } = {
    ...Header80Defaults,
    ...props,
  };

  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    bounce: 0,
    stiffness: 100,
    damping: 30,
  });
  // Reverse the original animation: start zoomed in, zoom out to show all images
  const yFirst = useTransform(animatedScrollYProgress, [0, 0.8], ["-300vh", "100vh"]);
  const ySecond = useTransform(animatedScrollYProgress, [0, 0.8], ["-250vh", "100vh"]);

  return (
    <section id="relume" ref={transformRef} className="relative h-[250vh] px-[5%] md:h-[350vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute bottom-0 left-0 right-auto top-0 z-10">
          <motion.div className="flex flex-col gap-[20vw] pt-[0vh]" style={{ y: yFirst }}>
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[30vw] pt-[120%] sm:h-auto", {
                  "w-[24vw] md:w-[22vw] lg:w-[16vw] left-[15vw] md:left-[20vw] lg:left-[25vw]": index === 0,
                  "left-[45vw] mt-[-35vw] w-[24vw] md:w-[22vw] lg:left-[50vw] lg:w-[16vw]":
                    index === 1,
                  "left-[20vw] mt-[-15vw] w-[22vw] md:w-[20vw] lg:w-[14vw]": index === 2,
                  "left-[55vw] mt-[-30vw] w-[20vw] md:w-[18vw] lg:w-[12vw]": index === 3,
                })}
              >
                <img
                  src={image.src}
                  className="absolute inset-0 size-full object-cover"
                  alt={image.alt}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-auto right-0 top-0 z-0"
          style={{ y: ySecond }}
        >
          <div className="flex flex-col gap-[20vw] pt-[0vh]">
            {images.slice(4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[30vw] pt-[120%] opacity-75 sm:h-auto", {
                  "w-[22vw] md:w-[20vw] lg:w-[14vw] right-[40vw] md:right-[45vw] lg:right-[50vw]": index === 0,
                  "right-[25vw] mt-[-35vw] w-[20vw] md:w-[18vw] lg:right-[30vw] lg:w-[12vw]":
                    index === 1,
                })}
              >
                <img
                  src={image.src}
                  className="absolute inset-0 size-full object-cover"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
};

export const Header80Defaults: Props = {
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
  ],
};
