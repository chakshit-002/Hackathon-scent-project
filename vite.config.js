import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { path } from 'framer-motion/client'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // changes for framer motion
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
})
