import {
	collection,
	config as createConfig,
	fields,
	singleton,
} from '@keystatic/core';

import { componentBlocks } from './component-block';

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
		homepage: singleton({
			label: 'Homepage',
			entryLayout: 'form',
			format: { contentField: 'content' },
			path: 'content/_homepage',
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
			entryLayout: 'form',
			format: { contentField: 'content' },
			path: 'content/_about',
			schema: {
				content: fields.document({
					label: 'Content',
					componentBlocks,
					dividers: true,
					formatting: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
	collections: {
		posts: collection({
			label: 'Posts',
			entryLayout: 'form',
			format: { contentField: 'content' },
			path: 'content/posts/*',
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
			entryLayout: 'form',
			format: { contentField: 'content' },
			path: 'content/links/*',
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
