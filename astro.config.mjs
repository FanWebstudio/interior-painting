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
        mdi: ["trophy-award", "thumb-up", "check-circle", "calendar-check"],
        star: ["star"],
        trustpilot: ["trustpilot"],
        google: ["google"],
        custom: ["*"],
      },
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                removeUnusedNS: true,
                removeUselessDefs: true,
                removeEmptyAttrs: true,
              },
            },
          },
        ],
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: true,
      SVG: true,
    })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com'
      }
    ]
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
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