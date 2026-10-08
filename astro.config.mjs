import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://artcenter.com.pl',
  output: 'static',
  integrations: [sitemap()],
});
