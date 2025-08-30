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

export type Layout354FinalProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout354Final = (props: Layout354FinalProps) => {
  const { featureSections } = {
    ...Layout354FinalDefaults,
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

export const Layout354FinalDefaults: Props = {
  featureSections: [
    {
      image: {
        src: "http://localhost:3845/assets/f83aefda4fcaa0a98985f08523b8407a6849bf84.png",
        alt: "Car slowing down",
      },
      heading: "The car slows, and the noise fades",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "http://localhost:3845/assets/123598581007b9dfa52e07bb013d8c8f0bf3cf1b.png",
        alt: "Getting out of the car",
      },
      heading: "You get out, and the world rushes back in",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "http://localhost:3845/assets/92f0e227c66e6c324822257631726354253695b0.png",
        alt: "Exhaustion after race",
      },
      heading: "My body is an empty vessel now, filled only with a deep, consuming exhaustion",
      description: "",
      buttons: [],
    },
    {
      image: {
        src: "http://localhost:3845/assets/92f0e227c66e6c324822257631726354253695b0.png",
        alt: "Reward for suffering",
      },
      heading: "It is a reward for the suffering, a promise for the future.",
      description: "",
      buttons: [],
    },
  ],
};
