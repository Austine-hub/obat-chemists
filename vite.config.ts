import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures correct root path for Vercel
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional alias for cleaner imports
    },
  },
  build: {
    outDir: 'dist', // default output folder
    sourcemap: true, // optional, useful for debugging
  },
});
