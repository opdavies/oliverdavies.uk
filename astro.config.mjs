import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import redirects from "./redirects.json";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

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
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  redirects,
  site: "https://www.oliverdavies.uk",
});
