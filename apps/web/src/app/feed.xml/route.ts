import RSS from 'rss';

import { siteConfig } from '~/config/site';
import { getSortedEntries, toIsoString } from '~/lib/utils';

const MAX_POSTS = 100;

export async function GET() {
	const feed = new RSS({
		title: siteConfig.title,
		description: siteConfig.description,
		site_url: siteConfig.baseUrl,
		feed_url: `${siteConfig.baseUrl}/feed.xml`,
	});

	const sortedEntries = (await getSortedEntries()).slice(0, MAX_POSTS);

	sortedEntries.forEach(async ({ entry, pathname }) => {
		feed.item({
			author: 'Luke Bennett',
			date: toIsoString(entry.publishedAt),
			description: '',
			title: entry.title,
			url: `${siteConfig.baseUrl}${pathname}`,
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
		},
	});
}
