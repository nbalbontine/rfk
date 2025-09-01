import React, { forwardRef } from 'react';
import { useVideoContext } from '../contexts/VideoContext';

export const OptimizedVideo = forwardRef(({ 
  src, 
  fallbackImage, 
  className, 
  ...props 
}, ref) => {
  const { loadedVideos } = useVideoContext();
  const isVideoLoaded = loadedVideos.has(src);

  // If video failed to load and we have a fallback image
  if (!isVideoLoaded && fallbackImage) {
    return (
      <img
        src={fallbackImage}
        alt="Video fallback"
        className={className}
      />
    );
  }

  // If video failed to load and no fallback, show placeholder
  if (!isVideoLoaded) {
    return (
      <div className={`bg-gray-900 flex items-center justify-center ${className}`}>
        <div className="text-white/50 text-center">
          <div className="animate-pulse">Loading video...</div>
        </div>
      </div>
    );
  }

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      {...props}
    />
  );
});

OptimizedVideo.displayName = 'OptimizedVideo';
