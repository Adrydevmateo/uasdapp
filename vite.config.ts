/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://uasdapi.ia3x.com',
  //       changeOrigin: true, // This is needed for virtual hosts and cross-origin requests
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path, optional
  //     },
  //   },
  // },
})
