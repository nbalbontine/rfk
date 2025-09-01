import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background Video Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-black" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-md w-full">


        {/* Title */}
        <motion.h1 
          className="text-4xl font-bold text-white mb-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          RFK RACING
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Preparing the ultimate racing experience...
        </motion.p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
              style={{ width: `${progress.percentage}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress.percentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <motion.p 
            className="text-white font-semibold text-lg mb-2"
            key={progress.percentage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress.percentage}%
          </motion.p>
          
          <p className="text-gray-400 text-sm">
            Loading videos ({progress.loaded}/{progress.total})
          </p>
          
          {progress.currentVideo && (
            <motion.p 
              className="text-gray-500 text-xs mt-2 truncate"
              key={progress.currentVideo}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {progress.currentVideo.split('/').pop()}
            </motion.p>
          )}
        </div>

        {/* Error indicator */}
        {progress.errors.length > 0 && (
          <motion.div
            className="mt-4 p-2 bg-yellow-900/50 border border-yellow-600 rounded text-yellow-300 text-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Some videos failed to load but the experience will continue
          </motion.div>
        )}


      </div>
    </div>
  );
};
