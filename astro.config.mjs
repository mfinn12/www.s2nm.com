// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.s2nm.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
