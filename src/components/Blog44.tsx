import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  blogPosts: BlogPost[];
};

export type Blog44Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog44 = (props: Blog44Props) => {
  const { heading, description, blogPosts } = {
    ...Blog44Defaults,
    ...props,
  };
  return (
    <section className="bg-white px-16 py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-20 flex items-end justify-start">
          <div className="flex max-w-[768px] flex-col gap-6">
            <h1 className="text-[48px] font-bold leading-[1.2] text-[#474655]">
              {heading}
            </h1>
            <p className="text-[18px] font-normal leading-[1.5] text-[#6a6976]">
              {description}
            </p>
          </div>
        </div>
        <div className="flex gap-8 max-[850px]:flex-col">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.06)] border border-[lightgrey] transition-transform duration-200 ease-in-out hover:scale-[1.02] cursor-pointer"
            >
              <div 
                className="aspect-[405.333/270] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${post.image.src}')` }}
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[24px] font-bold leading-[1.4] text-[#474655]">
                      {post.title}
                    </h2>
                    <p className="text-[16px] font-normal leading-[1.5] text-[#6a6976]">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 group">
                  <span className="text-[16px] font-normal leading-[1.5] text-[#6a6976] group-hover:text-black transition-colors duration-200">
                    Read more
                  </span>
                  <RxChevronRight className="h-6 w-6 text-[#6a6976] group-hover:text-black transition-colors duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Blog44Defaults: Props = {
  heading: "Stories of success",
  description: "Trimble technology helps our customers build a winning edge, whether on the track or on the job site. Explore these stories to see how industry leaders use our solutions to get the checkered flag in their fields.",
  blogPosts: [
    {
      url: "https://heavyindustry.trimble.com/resources/customer-stories/on-the-banks-of-atlanta-motor-speedway-technique-and-technology-combine-to-produce-nascar-smooth-surfaces?_gl=1*15w1kx0*_gcl_au*MjMwMTgyNzg4LjE3NTAxNDQ2MjE.",
      image: {
        src: "http://localhost:3845/assets/2098f36fa252e25787fbddfb33279143caa1ac06.png",
        alt: "Paving construction site with Atlanta Motor Speedway in background",
      },
      title: "Paving the way to victory",
      description:
        "Faced with the complex challenge of repaving and re-profiling the Atlanta Motor Speedway, Baker's Construction Services leveraged Trimble technology to turn an aging asphalt icon into a modern high-banked masterpiece.",
    },
    {
      url: "https://www.trimble.com/en/products/building-construction-field-systems",
      image: {
        src: "http://localhost:3845/assets/7985db3f7ce3cddc2ed7a1ae0c26a68bc467adca.png",
        alt: "Surveying equipment at Darlington Raceway",
      },
      title: "Safety comes first",
      description:
        "Darlington Raceway needed custom-built safety walls in place by the big weekend race. Using Trimble tech to capture every detail of the track's aging wall, Abraham Land Surveying enabled a winning solution, turning high-stakes risks into high-speed rewards.",
    },
    {
      url: "https://www.trimble.com/blog/trimble/en-US/article/routing-the-optimal-path-to-high-speed-rail",
      image: {
        src: "http://localhost:3845/assets/a3261d48a84dd033412403ff66f37ed214a44cb1.png",
        alt: "High-speed train on railway tracks",
      },
      title: "Setting the speed of success",
      description:
        "Much like a pit crew, Trimble gives engineers the technology to work with speed and confidence. Our software helped a team in Sweden turn a complex challenge into a high-speed railway, analyzing every factor to find the most sustainable and efficient route.",
    },
  ],
};
