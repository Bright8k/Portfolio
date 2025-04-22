import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],               // Use the Vite React plugin for React support
  build: {
    target: 'esnext',               // Build target for modern browsers
    outDir: 'dist',                 // Output directory for the build
    assetsDir: 'assets'             // Directory for static assets
  },
  server: {
    port: 3000                      // Define the port for development server
  }
});
