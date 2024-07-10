import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})

