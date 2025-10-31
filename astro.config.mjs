// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Plus Jakarta Sans",
        cssVariable: "--font-jakarta",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
