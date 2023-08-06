import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	integrations: [markdoc(), react(), tailwind()],
	output: 'hybrid',
});
