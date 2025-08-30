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
              <div className="flex min-h-screen max-w-md flex-col justify-center text-text-alternative">
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {section.heading}
                </h2>
                <p className="md:text-md">{section.description}</p>
                <div className="mt-6 flex items-center gap-x-4 md:mt-8">
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
      ))}
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
        src: "/images/Temp image.jpg",
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
