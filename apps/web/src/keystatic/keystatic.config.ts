import {
	collection,
	config as createConfig,
	fields,
	singleton,
} from '@keystatic/core';

import { componentBlocks } from './component-block';

const shouldUseGitHub = process.env.NODE_ENV === 'production';

export const localBaseDirectory = '../../';

export const config = createConfig({
	storage: shouldUseGitHub
		? {
				kind: 'github',
				repo: {
					name: 'v3.lukebennett.com.au',
					owner: 'lukebennett88',
				},
		  }
		: {
				kind: 'local',
		  },
	singletons: {
		homepage: singleton({
			label: 'Homepage',
			path: 'apps/web/src/content/_homepage',
			schema: {
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
		about: singleton({
			label: 'About',
			path: 'apps/web/src/content/_about',
			schema: {
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
	collections: {
		posts: collection({
			label: 'Posts',
			path: 'apps/web/src/content/posts/*',
			slugField: 'title',
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				publishedAt: fields.date({
					label: 'Published at',
					validation: {
						isRequired: true,
					},
				}),
				isDraft: fields.checkbox({
					label: 'Do not publish',
					description:
						'Check this box to prevent this post from being published',
					defaultValue: false,
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
		links: collection({
			label: 'Links',
			path: 'apps/web/src/content/links/*',
			slugField: 'title',
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				publishedAt: fields.date({
					label: 'Published at',
					validation: {
						isRequired: true,
					},
				}),
				linkedUrl: fields.url({
					label: 'Linked URL',
					validation: {
						isRequired: true,
					},
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
});
