import { Button, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: string;
};

export type HeaderFinalProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeaderFinal = (props: HeaderFinalProps) => {
  const { heading, description, buttons, image } = {
    ...HeaderFinalDefaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10 max-w-none">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-end py-16 md:py-24 lg:py-28">
          <div className="text-left max-w-lg mr-8 md:mr-16 lg:mr-24">
            <h1 className="mb-5 text-[40px] font-bold text-text-alternative leading-tight whitespace-pre-line">
              {heading}
            </h1>
            {description && (
              <p className="text-text-alternative md:text-md">{description}</p>
            )}
            {buttons.length > 0 && (
              <div className="mt-6 flex items-center justify-start gap-x-4 md:mt-8">
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
        <img 
          src={image} 
          alt="Background" 
          className="absolute inset-0 size-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const HeaderFinalDefaults: Props = {
  heading: "A taste of victory\nis sweetest when\nyou've earned it together",
  description: "",
  buttons: [],
  image: "/images/celebration.jpg",
};
