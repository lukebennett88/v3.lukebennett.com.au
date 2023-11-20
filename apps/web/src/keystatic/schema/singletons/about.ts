import { singleton } from '@keystatic/core';

import { content } from '~/keystatic/schema/fields/content';

export const about = singleton({
	label: 'About',
	entryLayout: 'content',
	format: {
		contentField: 'content',
	},
	path: 'content/_about',
	schema: {
		content,
	},
});
