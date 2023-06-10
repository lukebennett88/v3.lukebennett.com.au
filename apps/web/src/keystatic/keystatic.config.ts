import {
	collection,
	config as createConfig,
	fields,
	singleton,
} from '@keystatic/core';

export const config = createConfig({
	storage: {
		kind: 'local',
	},
	singletons: {
		homepage: singleton({
			label: 'Homepage',
			path: 'src/content/_homepage',
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
			path: 'src/content/_about',
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
			path: 'src/content/posts/*',
			slugField: 'title',
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				publishedAt: fields.date({
					label: 'Published at',
				}),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
		links: collection({
			label: 'Links',
			path: 'src/content/links/*',
			slugField: 'title',
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				publishedAt: fields.date({
					label: 'Published at',
				}),
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
});
