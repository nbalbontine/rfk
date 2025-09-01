import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for large UI libraries
          'vendor-ui': ['@relume_io/relume-ui', '@relume_io/relume-tailwind'],
          // Animation libraries
          'vendor-motion': ['framer-motion'],
          // React core
          'vendor-react': ['react', 'react-dom'],
          // Icons
          'vendor-icons': ['react-icons']
        }
      }
    }
  }
})