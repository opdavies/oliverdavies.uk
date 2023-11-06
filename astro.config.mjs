import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "astro/config";

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
  site: "https://www.oliverdavies.uk",
  vite: {
    plugins: [yaml()],
  },
});
