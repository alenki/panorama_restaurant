import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 777
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about/index.html',
        contact: 'contact/index.html',
        menu: 'menu/index.html'
      },
    },
  },
})
