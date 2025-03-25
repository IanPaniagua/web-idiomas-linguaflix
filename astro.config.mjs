// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    // Opciones para soportar mejor las importaciones desde node_modules
    ssr: {
      noExternal: ['plyr']
    },
    optimizeDeps: {
      include: ['plyr']
    }
  }
});