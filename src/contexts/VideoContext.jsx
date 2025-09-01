import React, { createContext, useContext } from 'react';
import { useVideoPreloader } from '../hooks/useVideoPreloader';

const VideoContext = createContext();

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};

// Comprehensive list of all videos used in the application
const VIDEO_ASSETS = [
  // High priority - above the fold videos
  { src: '/victory.mp4', priority: 'high' },
  { src: '/Add_some_stars_202508310106.mp4', priority: 'high' },
  
  // Medium priority - main content videos
  { src: '/A_highspeed_nascar_202508301804_ppot5.mp4', priority: 'medium' },
  { src: '/Cars_passing.mp4', priority: 'medium' },
  { src: '/Static_image_person_202508310038.mp4', priority: 'medium' },
  { src: '/meeting.mp4', priority: 'medium' },
  { src: '/hero walk to car.mp4', priority: 'medium' },
  { src: '/We_are_inside_202508310149.mp4', priority: 'medium' },
  
  // Low priority - secondary content videos
  { src: '/flag.mp4', priority: 'low' },
  { src: '/Wheel_driver.mp4', priority: 'low' },
  { src: '/Silhouette_over_shoulder_202508310025.mp4', priority: 'low' },
  { src: '/Make_a_cinematic_202508310026.mp4', priority: 'low' },
  { src: '/This_is_a_202508310005.mp4', priority: 'low' }
];

export const VideoProvider = ({ children }) => {
  const videoPreloader = useVideoPreloader(VIDEO_ASSETS);

  return (
    <VideoContext.Provider value={videoPreloader}>
      {children}
    </VideoContext.Provider>
  );
};
