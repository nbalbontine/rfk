"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  heading: string;
  description: string;
  image: ImageProps;
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type Layout348Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

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
    <section id="relume" className="bg-gray-900">
      <div className="relative grid md:grid-cols-2 md:py-0">
        <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center overflow-hidden">
            {images.map((image, index) => {
              const isVideo = image.src.endsWith('.mp4') || image.src.endsWith('.webm') || image.src.endsWith('.mov');
              
              return isVideo ? (
                <video
                  key={index}
                  src={image.src}
                  className={clsx(
                    "absolute w-full h-full object-cover transition-all duration-700 ease-out transform",
                    {
                      "opacity-100 scale-100": activeSection === index,
                      "opacity-0 scale-105": activeSection !== index,
                    }
                  )}
                  style={{
                    transitionDelay: activeSection === index ? '0ms' : '100ms'
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
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
              );
            })}
            
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

          <div className="grid grid-cols-1 gap-12 md:block px-[5%] py-16">
            {contents.map((content, index) => (
              <div key={index} data-section-index={index}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
                    {content.heading}
                  </h2>
                  <p className="md:text-md text-gray-200 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="mt-10 block w-full md:hidden">
                    {content.image.src.endsWith('.mp4') || content.image.src.endsWith('.webm') || content.image.src.endsWith('.mov') ? (
                      <video 
                        src={content.image.src} 
                        className="w-full rounded-lg" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                    ) : (
                      <img src={content.image.src} className="w-full rounded-lg" alt={content.image.alt} />
                    )}
                  </div>
                </div>
              </div>
            ))}
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
      heading: "The engine screams, a thousand angry voices",
      description:
        "The world disappears. Noise, crowd, fear. Gone. It's just me. The machine.",
      image: {
        src: "/images/hero_inside car.jpg",
        alt: "RFK Racing Innovation",
      },
    },
    {
      heading: "The green flag dances",
      description:
        "Time stretches, snaps. Go.",
      image: {
        src: "/flag.mp4",
        alt: "RFK Racing Performance",
      },
    },
    {
      heading: "The brain stops",
      description:
        "There are no more thoughts. Only instinct",
      image: {
        src: "/Wheel_driver.mp4",
        alt: "RFK Racing Legacy",
      },
    },
    {
      heading: "Next Generation Racing",
      description:
        "Leading the evolution of motorsports with advanced technology, sustainable practices, and a vision for the future of competitive racing.",
      image: {
        src: "/images/Temp image.jpg",
        alt: "RFK Racing Future",
      },
    },
  ],
  images: [
    {
      src: "/images/hero_inside car.jpg",
      alt: "RFK Racing Innovation",
    },
    {
      src: "/flag.mp4",
      alt: "RFK Racing Performance",
    },
    {
      src: "/Wheel_driver.mp4",
      alt: "RFK Racing Legacy",
    },
    {
      src: "/images/Temp image.jpg",
      alt: "RFK Racing Future",
    },
  ],
};
