import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	site: 'https://www.lukebennett.com.au',
	adapter: vercel({
		analytics: true,
	}),
	integrations: [markdoc(), react(), tailwind()],
	output: 'hybrid',
});
