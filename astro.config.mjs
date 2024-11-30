// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ["trophy-award", "thumb-up", "check-circle", "calendar-check"],
        star: ["star"],
        trustpilot: ["trustpilot"],
        google: ["google"],
        custom: ["*"],
      },
    })
  ],
});