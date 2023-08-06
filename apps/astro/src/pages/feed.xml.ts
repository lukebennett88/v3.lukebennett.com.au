import rss from '@astrojs/rss';
import { type APIRoute } from 'astro';
import invariant from 'tiny-invariant';

export const get: APIRoute = ({ site }) => {
	invariant(site, '`site` must be defined in astro.config.ts');
	return rss({
		// `<title>` field in output xml
		title: 'Luke Bennett',

		// `<description>` field in output xml
		description: 'Luke Bennett’s personal website',

		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: site.toString(),

		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: [],

		// (optional) inject custom xml
		customData: `<language>en-AU</language>`,
	});
};
