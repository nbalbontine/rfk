"use client";

import { useEffect, useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "link";
  iconRight?: React.ReactNode;
  onClick?: () => void;
};

type ContentProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type Layout348Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// Custom Button component to replace Relume UI Button
const Button = ({ title, variant = "primary", size = "default", iconRight, onClick, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-input",
    link: "text-primary underline-offset-4 hover:underline"
  };
  
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    link: "h-auto p-0"
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size]
      )}
      onClick={onClick}
      {...props}
    >
      {title}
      {iconRight && iconRight}
    </button>
  );
};

export const Layout348 = (props: Layout348Props) => {
  const { contents, images } = {
    ...Layout348Defaults,
    ...props,
  };

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get all content sections
      const contentSections = document.querySelectorAll('[data-section-index]');
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      let newActiveSection = 0;
      
      // Find which section is most visible in the viewport
      contentSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = sectionTop + rect.height;
        const viewportCenter = scrollTop + viewportHeight / 2;
        
        // Check if the center of the viewport is within this section
        if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
          newActiveSection = index;
        }
        
        // Also check if section is prominently visible (more than 50% in view)
        const visibleTop = Math.max(0, Math.min(viewportHeight, rect.bottom));
        const visibleBottom = Math.max(0, Math.min(viewportHeight, viewportHeight - rect.top));
        const visibleHeight = Math.max(0, visibleBottom - (viewportHeight - visibleTop));
        const visibilityRatio = visibleHeight / rect.height;
        
        if (visibilityRatio > 0.5) {
          newActiveSection = index;
        }
      });
      
      // Ensure we stay within bounds
      newActiveSection = Math.min(Math.max(newActiveSection, 0), contents.length - 1);
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [contents.length, activeSection]);

  return (
    <section id="relume" className="px-[5%] bg-gray-900">
      <div className="container mx-auto">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className={clsx(
                  "absolute w-full h-full object-cover transition-all duration-700 ease-out transform",
                  {
                    "opacity-100 scale-100": activeSection === index,
                    "opacity-0 scale-105": activeSection !== index,
                  }
                )}
                alt={image.alt}
                style={{
                  transitionDelay: activeSection === index ? '0ms' : '100ms'
                }}
              />
            ))}
            
            {/* Overlay for smoother transitions */}
            <div 
              className={clsx(
                "absolute inset-0 bg-black transition-opacity duration-300",
                {
                  "opacity-0": true, // Keep transparent, but ready for effects
                }
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div key={index} data-section-index={index}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold md:mb-4 text-sm uppercase tracking-wide text-gray-300">
                    {content.tagline}
                  </p>
                  <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
                    {content.heading}
                  </h2>
                  <p className="md:text-md text-gray-200 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {content.buttons.map((button, buttonIndex) => (
                      <Button key={buttonIndex} {...button}>
                        {button.title}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img src={content.image.src} className="w-full rounded-lg" alt={content.image.alt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background color transition */}
      <div
        className={clsx(
          "fixed inset-0 -z-10 transition-all duration-700 ease-out",
          {
            "bg-gray-900": activeSection === 0,
            "bg-slate-900": activeSection === 1,
            "bg-gray-800": activeSection === 2,
            "bg-neutral-900": activeSection === 3,
          }
        )}
      />
    </section>
  );
};

export const Layout348Defaults: Props = {
  contents: [
    {
      tagline: "Innovation",
      heading: "Racing Excellence Redefined",
      description:
        "Experience the cutting-edge technology and precision engineering that drives RFK Racing to victory. Our commitment to innovation sets us apart on every track.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        { title: "Watch Video", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
        alt: "RFK Racing Innovation",
      },
    },
    {
      tagline: "Performance",
      heading: "Built for Speed",
      description:
        "Every component, every detail, every decision is made with one goal in mind: maximum performance. Our cars are engineered to dominate the competition.",
      buttons: [
        { title: "Explore Tech", variant: "secondary" },
        { title: "View Specs", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "/images/Gemini_Generated_Image_7czxx87czxx87czx.png",
        alt: "RFK Racing Performance",
      },
    },
    {
      tagline: "Legacy",
      heading: "Champions Heritage",
      description:
        "Building on decades of racing excellence, RFK Racing continues to push boundaries and set new standards in motorsports competition.",
      buttons: [
        { title: "Our History", variant: "secondary" },
        { title: "Championships", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
        alt: "RFK Racing Legacy",
      },
    },
    {
      tagline: "Future",
      heading: "Next Generation Racing",
      description:
        "Leading the evolution of motorsports with advanced technology, sustainable practices, and a vision for the future of competitive racing.",
      buttons: [
        { title: "Future Vision", variant: "secondary" },
        { title: "Join Us", variant: "link", size: "link", iconRight: <RxChevronRight /> },
      ],
      image: {
        src: "/images/Temp image.jpg",
        alt: "RFK Racing Future",
      },
    },
  ],
  images: [
    {
      src: "/images/Gemini_Generated_Image_52o7hd52o7hd52o7.png",
      alt: "RFK Racing Innovation",
    },
    {
      src: "/images/Gemini_Generated_Image_7czxx87czxx87czx.png",
      alt: "RFK Racing Performance",
    },
    {
      src: "/images/Gemini_Generated_Image_slfx54slfx54slfx.png",
      alt: "RFK Racing Legacy",
    },
    {
      src: "/images/Temp image.jpg",
      alt: "RFK Racing Future",
    },
  ],
};
