import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  backgroundImage: string;
};

export type Header7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header7 = (props: Header7Props) => {
  const { heading, description, buttons, backgroundImage } = {
    ...Header7Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-start py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl whitespace-pre-line">
              {heading}
            </h1>
            <p className="text-white md:text-md whitespace-pre-line">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>
    </section>
  );
};

export const Header7Defaults: Props = {
  heading: "The weight\nof the wheel",
  description:
    "Outside, the world is a blur of color and noise.\nInside, its just me and the machine.\nThis is where the story begins.",
  buttons: [],
  backgroundImage: "/images/trimble_auto.jpg",
};
