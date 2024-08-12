import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api/v1', // Include `/api/v1` in the target URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove `/api` prefix
      },
    },
  },
});
