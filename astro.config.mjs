import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321/',
  base: '/',
  outDir: 'dist',
  build: {
    format: 'directory'
  },
  integrations: [tailwind(), react()]
});