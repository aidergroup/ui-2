import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
  },
  server: {
    host: '127.0.0.1',
    port: 3001,
    strictPort: true,
    open: false,
  },
})
