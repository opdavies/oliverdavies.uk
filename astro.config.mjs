import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
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
  site: "https://www.oliverdavies.dev"
});
