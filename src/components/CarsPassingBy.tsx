import React, { useRef, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type CarsPassingByProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CarsPassingBy = (props: CarsPassingByProps) => {
  const { heading, description, buttons, video, videoType } = {
    ...CarsPassingByDefaults,
    ...props,
  };
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const sectionElement = sectionRef.current;
    
    if (!videoElement || !sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.log("Video autoplay failed:", error);
            });
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.25, // Start playing when 25% of the component is visible
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section ref={sectionRef} id="relume" className="relative px-[5%]">
      <div className="container relative z-10 max-w-lg">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="text-center">
            {heading && (
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
            )}
            {description && (
              <p className="text-text-alternative md:text-md">{description}</p>
            )}
            {buttons.length > 0 && (
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="absolute inset-0 aspect-video size-full object-cover" 
          loop 
          muted
          playsInline
        >
          <source src={video} type={videoType} />
        </video>
      </div>
    </section>
  );
};

export const CarsPassingByDefaults: Props = {
  heading: "",
  description: "",
  buttons: [],
  video: "/Cars_passing.mp4",
  videoType: "video/mp4",
};
