import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// If you add a custom domain later, set site to that domain and remove 'base'
export default defineConfig({
  site: 'https://physicsadept.github.io',
  base: '/chromatic-number-8',
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'vesper',
      wrap: true,
    },
  },
});
