import { Button, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  video: string;
  videoType: string;
};

export type HeaderFinalProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeaderFinal = (props: HeaderFinalProps) => {
  const { heading, description, buttons, video, videoType } = {
    ...HeaderFinalDefaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10 max-w-lg">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
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
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const HeaderFinalDefaults: Props = {
  heading: "The work starts again. The wheel is waiting.",
  description: "",
  buttons: [],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};
