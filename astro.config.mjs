import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // To prevent crawling errors, remove the trailing slash from the URL
        // otherwise it will be a link to a redirect URL and not the content.
        item.url = item.url.replace(/\/$/, "");
        return item;
      }
    }),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
  ],
  site: "https://www.oliverdavies.uk"
});
