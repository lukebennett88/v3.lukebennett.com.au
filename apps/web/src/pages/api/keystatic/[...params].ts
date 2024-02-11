import { makeHandler } from '@keystatic/astro/api';

import { config } from '~/keystatic/keystatic.config';

export const ALL = makeHandler({
	config,
});

export const prerender = false;
