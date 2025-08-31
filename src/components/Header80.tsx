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

  return (
    <section 
      id="relume" 
      ref={transformRef} 
      className="relative h-[250vh] px-[5%] md:h-[350vh]"
      style={{
        backgroundImage: "url('/images/pavement_long..jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
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
                  "left-[20vw] mt-[-15vw] w-[35vw] md:w-[30vw] lg:w-[25vw]": index === 2,
                  "left-[50vw] mt-[-30vw] w-[35vw] md:w-[30vw] lg:w-[25vw]": index === 3,
                })}
              >
                <img
                  src={image.src}
                  className={`absolute inset-0 size-full object-contain`}
                  alt={image.alt}
                />
              </div>
            ))}
          </motion.div>
        </div>


        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
};

export const Header80Defaults: Props = {
  images: [
    {
      src: "/images/auto3.png",
      alt: "Race car 3",
    },
    {
      src: "/images/auto2.png",
      alt: "Race car 2",
    },
    {
      src: "/images/auto1.png",
      alt: "Blue race car",
    },
    {
      src: "/images/yellow2.png",
      alt: "Yellow race car",
    },
  ],
};
