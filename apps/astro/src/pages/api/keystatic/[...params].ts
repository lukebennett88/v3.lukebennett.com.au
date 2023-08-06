import { makeHandler } from '@keystatic/astro/api';

import { config, localBaseDirectory } from '~/keystatic/keystatic.config';

export const all = makeHandler({
	config,
	localBaseDirectory,
});

export const prerender = false;
