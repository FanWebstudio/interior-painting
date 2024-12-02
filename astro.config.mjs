// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: [
          "trophy-award",
          "thumb-up",
          "shield-check",
          "brush",
          "format-paint",
          "palette",
          "home",
          "phone",
          "email",
          "menu",
          "arrow-right",
          "paint",
          "hammer-wrench",
          "home-modern"
        ],
        heroicons: [
          "user",
          "calendar",
          "chart-bar",
          "document",
          "cog",
          "check"
        ]
      }
    }),
    compress()
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});