import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "${path.join(process.cwd(), 'src/styles/_mantine').replace(/\\/g, '/')}" as mantine;`,
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/constants": "/src/constants",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/components": "/src/components",
      "@/utils": "/src/utils",
    }
  },
})
