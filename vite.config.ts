import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react'

import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  commonjs()],
  optimizeDeps: {
    include: ['react-outside-click-handler', 'react-slick', 'react-dom', 'react-draft-wysiwyg']
  },
  resolve: {
    // extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})

