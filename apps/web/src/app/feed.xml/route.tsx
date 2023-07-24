import { DocumentRenderer } from '@keystatic/core/renderer';
import RSS from 'rss';

import { siteConfig } from '~/config/site';
import { getSortedEntries, toIsoString } from '~/lib/utils';

// @ts-expect-error: unable to import react-dom/server in a server component: https://github.com/vercel/next.js/issues/43810
import { renderToStaticMarkup } from '../../../node_modules/react-dom/server';

const MAX_POSTS = 100;

export async function GET() {
	const feed = new RSS({
		title: siteConfig.title,
		description: siteConfig.description,
		feed_url: `${siteConfig.baseUrl}/feed.xml`,
		site_url: siteConfig.baseUrl,
		image_url: `${siteConfig.baseUrl}/apple-icon.png`,
	});

	const sortedEntries = (await getSortedEntries()).slice(0, MAX_POSTS);

	await Promise.all(
		sortedEntries.map(async ({ entry, pathname }) => {
			feed.item({
				author: 'Luke Bennett',
				date: toIsoString(entry.publishedAt),
				description: renderToStaticMarkup(
					<DocumentRenderer document={await entry.content()} />,
				),
				title: entry.title,
				url: `${siteConfig.baseUrl}${pathname}`,
			});
		}),
	);

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
		},
	});
}
