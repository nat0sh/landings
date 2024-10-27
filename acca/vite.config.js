import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
});

