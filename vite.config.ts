import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    // ...other plugins
    tanstackStart({
      spa: {
        enabled: true,
        // Tanstack Router will automatically crawl your pages
        prerender: {
          enabled: true,
        },
        // if you have any hidden paths that's not visible on UI, you can add them explicitly.
        pages: [
          {
            path: "/docs/test",
          },
        ],
      },
    }),
  ],
});
