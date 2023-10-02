import { makeHandler } from '@keystatic/astro/api';

import { config } from '~/keystatic/keystatic.config';

export const all = makeHandler({
	config,
});

export const prerender = false;
