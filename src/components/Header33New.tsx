import React from "react";
import { Button, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type Header33NewProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header33New = (props: Header33NewProps) => {
  const { heading, description, buttons, video, videoType } = {
    ...Header33NewDefaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10 max-w-[1280px] mx-auto">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 md:py-24 lg:py-28">
          <div className="flex flex-col items-center justify-center text-center max-w-[768px] w-full">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative text-center md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative text-center md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header33NewDefaults: Props = {
  heading: "The taste of victory",
  description: "",
  buttons: [],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};
