"use client";

import React from "react";

type Content = {
  heading: string;
  description: string;
};

type Props = {
  leftContent: Content[];
  rightContent: Content[];
  video: string;
  videoType: string;
};

export type Layout355Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout355 = (props: Layout355Props) => {
  const { leftContent, rightContent, video, videoType } = {
    ...Layout355Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative">
      <div className="px-[5%]">
        <div className="container relative z-10">
          <div className="grid auto-cols-fr grid-cols-1 pb-8 md:grid-cols-[1fr_10rem_1fr] md:pb-0 lg:grid-cols-[1fr_12rem_1fr]">
            <div className="relative md:mt-[100vh]">
              {leftContent.map((content, index) => (
                <div key={index} className="flex flex-col justify-center py-8 md:h-screen md:py-0">
                  <div className="w-full max-w-sm">
                    <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
                    <p className="text-text-alternative md:text-md">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="static top-0 order-first flex h-[50vh] items-center justify-center md:sticky md:order-none md:h-screen">
            </div>
            <div className="relative md:pt-[150vh]">
              {rightContent.map((content, index) => (
                <div key={index} className="flex flex-col justify-center py-8 md:h-screen md:py-0">
                  <div className="w-full max-w-sm">
                    <h1 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                      {content.heading}
                    </h1>
                    <p className="text-text-alternative md:text-md">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[-100vh]" />
        </div>
      </div>
      <div className="sticky bottom-0 z-0 h-screen w-screen">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="sticky bottom-0 h-screen w-screen overflow-hidden object-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute -bottom-full -left-full -right-full -top-full m-auto size-full bg-cover object-cover [background-position:50%]"
          >
            <source src={video} type={videoType} />
          </video>
        </div>
      </div>
    </section>
  );
};

export const Layout355Defaults: Props = {
  leftContent: [
    {
      heading: "I push the car to its limit, and it screams with me.",
      description: "",
    },
  ],
  rightContent: [
    {
      heading: "One more lap.",
      description: "",
    },
    {
      heading: "Just one more.",
      description: "",
    },
  ],
  video: "/A_highspeed_nascar_202508301804_ppot5.mp4",
  videoType: "video/mp4",
};
