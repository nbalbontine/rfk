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

export type Layout354Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout354 = (props: Layout354Props) => {
  const { featureSections } = {
    ...Layout354Defaults,
    ...props,
  };

  return (
    <section id="relume">
      {featureSections.map((section, index) => {
        // Define alignment pattern: 1st: left, 2nd: right, 3rd: left, 4th: left
        const isRightAligned = index === 1;
        
        return (
          <div
            key={index}
            className="sticky top-0 overflow-hidden"
            style={{
              zIndex: index + 1,
            }}
          >
            {/* Background video for first, second, and third sections, image for others */}
            {index === 0 ? (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/Add_some_stars_202508310106.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </>
            ) : index === 1 ? (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/Static_image_person_202508310038.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </>
            ) : index === 2 ? (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/meeting.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </>
            ) : index === 3 ? (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/hero walk to car.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </>
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("${section.image.src}")`,
                  backgroundPosition: "0 0, 50%",
                  backgroundSize: "auto, cover",
                  backgroundAttachment: "scroll, fixed",
                }}
              ></div>
            )}
            <div className="relative px-[5%] z-10">
              <div className="container">
                <div className={`flex min-h-screen flex-col justify-center text-text-alternative ${
                  isRightAligned ? 'items-end' : 'items-start'
                }`}>
                  <div className="max-w-md text-left">
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                      {section.heading}
                    </h2>
                    <p className="md:text-md">{section.description}</p>
                    <div className="mt-6 flex items-center gap-x-4 md:mt-8 justify-start">
                      {section.buttons.map((button, index) => (
                        <Button key={index} {...button}>
                          {button.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export const Layout354Defaults: Props = {
  featureSections: [
    {
      image: {
        src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
        alt: "Racing track at night",
      },
      heading: "The night before, the track is empty",
      description: "Just a black ribbon under the stars",
      buttons: [],
    },
    {
      image: {
        src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
        alt: "Racing preparation",
      },
      heading: "My stomach is a knot",
      description: "It's not fear, just the knowledge of what's to come.",
      buttons: [],
    },
    {
      image: {
        src: "/Silhouette_over_shoulder_202508310025.mp4",
        alt: "Strategy discussion",
      },
      heading: "We talk strategy",
      description: "They've built the machine; now I must wield it.",
      buttons: [],
    },
    {
      image: {
        src: "http://localhost:3845/assets/92f0e227c66e6c324822257631726354253695b0.png",
        alt: "Walking to the car",
      },
      heading: "The walk to the car is the last quiet moment",
      description: "",
      buttons: [],
    },
  ],
};
