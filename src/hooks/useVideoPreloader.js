import { useState, useEffect, useCallback } from 'react';

export const useVideoPreloader = (videos) => {
  const [progress, setProgress] = useState({
    loaded: 0,
    total: videos.length,
    percentage: 0,
    currentVideo: '',
    errors: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set());

  const preloadVideo = useCallback((video) => {
    return new Promise((resolve, reject) => {
      const videoElement = document.createElement('video');
      
      // Set video attributes for optimal loading
      // Use 'metadata' for low priority videos to save bandwidth
      videoElement.preload = video.priority === 'high' ? 'auto' : 'metadata';
      videoElement.muted = true;
      videoElement.playsInline = true;
      
      const handleCanPlayThrough = () => {
        cleanup();
        resolve();
      };
      
      const handleError = () => {
        cleanup();
        reject(new Error(`Failed to load video: ${video.src}`));
      };
      
      const cleanup = () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('error', handleError);
      };
      
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.addEventListener('error', handleError);
      
      // Start loading
      videoElement.src = video.src;
      videoElement.load();
    });
  }, []);

  const loadVideosSequentially = useCallback(async () => {
    // Sort videos by priority: high -> medium -> low
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const sortedVideos = [...videos].sort((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    // Load high priority videos first, then allow app to start
    const highPriorityVideos = sortedVideos.filter(v => v.priority === 'high');
    const otherVideos = sortedVideos.filter(v => v.priority !== 'high');

    // Load critical videos first
    for (const video of highPriorityVideos) {
      try {
        setProgress(prev => ({
          ...prev,
          currentVideo: video.src
        }));
        
        await preloadVideo(video);
        
        setLoadedVideos(prev => new Set([...prev, video.src]));
        setProgress(prev => ({
          ...prev,
          loaded: prev.loaded + 1,
          percentage: Math.round(((prev.loaded + 1) / prev.total) * 100)
        }));
        
      } catch (error) {
        console.warn(`Failed to preload video: ${video.src}`, error);
        setProgress(prev => ({
          ...prev,
          errors: [...prev.errors, video.src],
          loaded: prev.loaded + 1,
          percentage: Math.round(((prev.loaded + 1) / prev.total) * 100)
        }));
      }
    }
    
    // Allow app to start after high priority videos are loaded
    setIsLoading(false);
    
    // Continue loading other videos in background
    for (const video of otherVideos) {
      try {
        setProgress(prev => ({
          ...prev,
          currentVideo: video.src
        }));
        
        await preloadVideo(video);
        
        setLoadedVideos(prev => new Set([...prev, video.src]));
        setProgress(prev => ({
          ...prev,
          loaded: prev.loaded + 1,
          percentage: Math.round(((prev.loaded + 1) / prev.total) * 100)
        }));
        
      } catch (error) {
        console.warn(`Failed to preload video: ${video.src}`, error);
        setProgress(prev => ({
          ...prev,
          errors: [...prev.errors, video.src],
          loaded: prev.loaded + 1,
          percentage: Math.round(((prev.loaded + 1) / prev.total) * 100)
        }));
      }
    }
  }, [videos, preloadVideo]);

  useEffect(() => {
    if (videos.length > 0) {
      loadVideosSequentially();
    } else {
      setIsLoading(false);
    }
  }, [loadVideosSequentially, videos.length]);

  return {
    isLoading,
    progress,
    loadedVideos,
    hasErrors: progress.errors.length > 0
  };
};
