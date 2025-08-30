import { useState } from "react";

type VideoSectionProps = {
  backgroundImage: string;
  content: {
    left?: string;
    center?: string;
    right?: string;
  };
};

export const VideoSection = ({ backgroundImage, content }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would handle video playback here
  };

  return (
    <section 
      className="relative w-full h-[900px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${backgroundImage}")`,
      }}
    >
      <div className="container mx-auto px-16 h-full">
        {/* Video Play Button */}
        <div className="flex items-center justify-center h-[900px] max-w-[1280px] mx-auto">
          <button
            onClick={handlePlayClick}
            className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
          >
            <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
          </button>
        </div>

        {/* Content Sections */}
        <div className="absolute bottom-64 left-0 right-0 px-16">
          <div className="max-w-[1280px] mx-auto space-y-20">
            {content.left && (
              <div className="flex justify-start">
                <div className="max-w-[480px]">
                  <h2 className="text-[40px] font-bold text-white leading-[1.2]">
                    {content.left}
                  </h2>
                </div>
              </div>
            )}
            
            {content.center && (
              <div className="flex justify-center">
                <div className="max-w-[480px]">
                  <h2 className="text-[40px] font-bold text-white leading-[1.2]">
                    {content.center}
                  </h2>
                </div>
              </div>
            )}
            
            {content.right && (
              <div className="flex justify-end">
                <div className="max-w-[480px]">
                  <h2 className="text-[40px] font-bold text-white leading-[1.2]">
                    {content.right}
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
