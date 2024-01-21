import { config as createConfig } from '@keystatic/core';

import { links } from '~/keystatic/schema/collections/links';
import { posts } from '~/keystatic/schema/collections/posts';
import { about } from '~/keystatic/schema/singletons/about';
import { homepage } from '~/keystatic/schema/singletons/homepage';

export const config = createConfig({
	cloud: {
		project: 'luke-bennett/lukebennett-com-au',
	},
	storage:
		process.env.NODE_ENV === 'production'
			? {
					kind: 'cloud',
					pathPrefix: 'apps/web',
				}
			: {
					kind: 'local',
				},
	singletons: {
		homepage,
		about,
	},
	collections: {
		posts,
		links,
	},
});
