import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx()],
  site: 'https://www.oliverdavies.uk',
});
