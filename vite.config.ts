import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'tailwind-presets.cjs'),
      name: '@alias-code-is-law/alias-tailwind-presets',
      formats: ['cjs'],
      fileName: (format) => `alias-tailwind-presets.${format}`,
    },
    outDir: path.resolve(__dirname, 'dist/lib'),
  },
})
