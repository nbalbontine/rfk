import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  avatar: ImageProps;
  fullName: string;
  date: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  blogPosts: BlogPost[];
};

export type Blog35Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog35 = (props: Blog35Props) => {
  const { tagline, heading, description, blogPosts } = {
    ...Blog35Defaults,
    ...props,
  };
  
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative size-full"
      data-name="Blog / 35 /"
      data-node-id="4:125"
    >
      <div
        className="box-border content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] p-0 relative shrink-0 w-full"
        data-name="Container"
        data-node-id="4:126"
      >
        {/* Section Title */}
        <div
          className="box-border content-stretch flex flex-col gap-4 items-center justify-start max-w-[768px] p-0 relative shrink-0 w-full"
          data-name="Section Title"
          data-node-id="4:127"
        >
          <div
            className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
            data-name="Tagline Wrapper"
            data-node-id="4:128"
          >
            <div
              className="font-semibold leading-[0] relative shrink-0 text-[#000000] text-[16px] text-center text-nowrap"
              data-node-id="4:129"
            >
              <p className="block leading-[1.5] whitespace-pre">{tagline}</p>
            </div>
          </div>
          <div
            className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-center w-full"
            data-name="Content"
            data-node-id="4:130"
          >
            <div
              className="font-bold relative shrink-0 text-[48px] w-full"
              data-node-id="4:131"
            >
              <p className="block leading-[1.2]">{heading}</p>
            </div>
            <div
              className="font-normal relative shrink-0 text-[18px] w-full"
              data-node-id="4:132"
            >
              <p className="block leading-[1.5]">{description}</p>
            </div>
          </div>
        </div>

        {/* Blog Cards Row */}
        <div
          className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative shrink-0 w-full"
          data-name="Row"
          data-node-id="4:133"
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-[20px] shrink-0"
              data-name="Card"
            >
              <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
                <div
                  className="aspect-[405.333/270] bg-center bg-cover bg-no-repeat rounded-t-[20px] shrink-0 w-full"
                  data-name="Placeholder Image"
                  style={{ backgroundImage: `url('${post.image.src}')` }}
                />
                <div
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative shrink-0 w-full"
                  data-name="Content"
                >
                  <div
                    className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
                    data-name="Content"
                  >
                    <div
                      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
                      data-name="Tag"
                    >
                                          <div
                      className="font-semibold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left"
                    >
                      <p className="block leading-[1.5]">{post.category}</p>
                    </div>
                    </div>
                    <div
                      className="font-bold leading-[0] min-w-full relative shrink-0 text-[#474655] text-[24px] text-left"
                      style={{ width: "min-content" }}
                    >
                      <p className="block leading-[1.4]">{post.title}</p>
                    </div>
                    <div
                      className="font-normal leading-[0] min-w-full relative shrink-0 text-[#6a6976] text-[16px] text-left"
                      style={{ width: "min-content" }}
                    >
                      <p className="block leading-[1.5]">{post.description}</p>
                    </div>
                  </div>
                  <div
                    className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full"
                    data-name="Avatar"
                  >
                    <div className="relative shrink-0 size-12" data-name="Avatar Image">
                      <img alt="" className="block max-w-none size-full rounded-full object-cover" height="48" src={post.avatar.src} width="48" />
                    </div>
                    <div
                      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                      data-name="Content"
                    >
                      <div
                        className="font-semibold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left w-full"
                      >
                        <p className="block leading-[1.5]">{post.fullName}</p>
                      </div>
                      <div
                        className="box-border content-stretch flex flex-row font-normal gap-2 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left text-nowrap w-full"
                        data-name="Time"
                      >
                        <div className="relative shrink-0 text-[14px]">
                          <p className="block leading-[1.5] text-nowrap whitespace-pre">{post.date}</p>
                        </div>
                        <div className="relative shrink-0 text-[18px]">
                          <p className="block leading-[1.5] text-nowrap whitespace-pre">•</p>
                        </div>
                        <div className="relative shrink-0 text-[14px]">
                          <p className="block leading-[1.5] text-nowrap whitespace-pre">{post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none rounded-[21px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
          data-name="Actions"
        >
          <div
            className="bg-[#004ecc] box-border content-stretch flex flex-row gap-2 items-center justify-center px-6 py-3 relative shrink-0 cursor-pointer"
            data-name="Button"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[#000000] border-solid inset-[-1px] pointer-events-none"
            />
            <div
              className="font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[0px] text-left text-nowrap"
            >
              <p
                className="block font-bold leading-[1.5] text-[16px] whitespace-pre"
              >
                View all
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Using the exact images from the Figma design
const blogPost1: BlogPost = {
  url: "#",
  image: {
    src: "/images/construction-worker-1.png",
    alt: "Construction worker looking concerned at phone",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  avatar: {
    src: "/images/avatar-1.png",
    alt: "Profile avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

const blogPost2: BlogPost = {
  url: "#",
  image: {
    src: "/images/construction-worker-2.png",
    alt: "Construction worker smiling with phone",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  avatar: {
    src: "/images/avatar-2.png",
    alt: "Profile avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

const blogPost3: BlogPost = {
  url: "#",
  image: {
    src: "/images/construction-worker-3.png",
    alt: "Construction worker holding head with hands",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  avatar: {
    src: "/images/avatar-2.png",
    alt: "Profile avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
};

export const Blog35Defaults: Props = {
  tagline: "Blog",
  heading: "This is a test",
  description: "Here are the best stories",
  blogPosts: [blogPost1, blogPost2, blogPost3],
};