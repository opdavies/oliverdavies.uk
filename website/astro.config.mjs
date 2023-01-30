import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), sitemap()],
  site: 'https://www.oliverdavies.uk'
});