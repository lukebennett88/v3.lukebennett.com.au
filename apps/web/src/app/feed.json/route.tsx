import { DocumentRenderer } from '@keystatic/core/renderer';

import { siteConfig } from '~/config/site';
import { getSortedEntries, toIsoString } from '~/lib/utils';

// @ts-expect-error: unable to import react-dom/server in a server component: https://github.com/vercel/next.js/issues/43810
import { renderToStaticMarkup } from '../../../node_modules/react-dom/server';

const MAX_POSTS = 100;

export async function GET() {
	const sortedEntries = (await getSortedEntries()).slice(0, MAX_POSTS);

	const body = {
		version: 'https://jsonfeed.org/version/1.1',
		title: siteConfig.title,
		home_page_url: siteConfig.baseUrl,
		feed_url: `${siteConfig.baseUrl}/feed.json`,
		icon: `${siteConfig.baseUrl}/apple-icon.png`,
		items: await Promise.all(
			sortedEntries.map(async ({ entry, pathname, type }) => {
				const url = `${siteConfig.baseUrl}${pathname}`;
				return {
					authors: [{ name: 'Luke Bennett' }],
					content_html: renderToStaticMarkup(
						<DocumentRenderer document={await entry.content()} />
					),
					date_published: toIsoString(entry.publishedAt),
					...(type === 'link' ? { external_url: entry.linkedUrl } : undefined),
					id: url,
					title: entry.title,
					url,
				};
			})
		),
	};

	return new Response(JSON.stringify(body, null, 2), {
		headers: {
			'Content-Type': 'application/feed+json; charset=utf-8',
		},
	});
}
