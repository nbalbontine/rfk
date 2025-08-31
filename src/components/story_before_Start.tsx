import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  image: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  featureSections: FeatureSection[];
};

export type StoryBeforeStartProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StoryBeforeStart = (props: StoryBeforeStartProps) => {
  const { featureSections } = {
    ...StoryBeforeStartDefaults,
    ...props,
  };

  return (
    <section id="relume">
      {featureSections.map((section, index) => (
        <div
          key={index}
          className="sticky top-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${section.image.src}")`,
            backgroundPosition: "0 0, 50%",
            backgroundSize: "auto, cover",
            backgroundAttachment: "scroll, fixed",
            zIndex: index + 1,
          }}
        >
          <div className="px-[5%]">
            <div className="container">
              <div className={`flex min-h-screen max-w-md flex-col justify-center text-text-alternative ${
                index === 1 || index === 4 ? 'ml-auto' : ''
              }`}>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {section.heading}
                </h2>
                {section.description && (
                  <p className="md:text-md">{section.description}</p>
                )}
                {section.buttons.length > 0 && (
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    {section.buttons.map((button, index) => (
                      <Button key={index} {...button}>
                        {button.title}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const StoryBeforeStartDefaults: Props = {
  featureSections: [
    {
      image: {
        src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
        alt: "Car slowing down",
      },
      heading: "The car slows, and the noise fades",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "/images/Gemini_Generated_Image_7czxx87czxx87czx.png",
        alt: "Getting out of the car",
      },
      heading: "You get out, and the world rushes back in",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
        alt: "Exhaustion after race",
      },
      heading: "My body is an empty vessel now, filled only with a deep, consuming exhaustion",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "/images/Temp image.jpg",
        alt: "Reward for suffering",
      },
      heading: "It is a reward for the suffering, a promise for the future.",
      description: "",
      buttons: [],
    },
  ],
};
