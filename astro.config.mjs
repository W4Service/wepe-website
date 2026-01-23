// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Configuration pour GitHub Pages
// Si domaine personnalisé (wepe.fr) : base = '/'
// Si sous-domaine GitHub (wuilhome.github.io/wepe-website) : base = '/wepe-website/'
const isCustomDomain = true; // Mettre à false pour tester sur wuilhome.github.io/wepe-website

// https://astro.build/config
export default defineConfig({
  site: isCustomDomain ? 'https://wepe.fr' : 'https://wuilhome.github.io',
  base: isCustomDomain ? '/' : '/wepe-website/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
