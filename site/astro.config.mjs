// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://beautiologynv.com',
  // Keep old WordPress URLs working for Google and bookmarks.
  redirects: {
    '/sample-page': '/about',
    '/our-services': '/services',
    '/gallery': '/',
  },
});
