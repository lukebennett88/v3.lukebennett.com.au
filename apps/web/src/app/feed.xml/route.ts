import RSS from 'rss';

import { siteConfig } from '~/config/site';
import { reader } from '~/keystatic/reader';
import { sortPosts, toIsoString } from '~/lib/utils';

const MAX_POSTS = 100;

export async function GET() {
	const posts = await reader.collections.posts.all();
	const links = await reader.collections.links.all();
	const feed = new RSS({
		title: siteConfig.title,
		description: siteConfig.description,
		site_url: siteConfig.baseUrl,
		feed_url: `${siteConfig.baseUrl}/feed.xml`,
	});

	const sortedEntries = sortPosts([...posts, ...links])
		// @ts-ignore
		.filter(({ entry }) => !entry.isDraft)
		.slice(0, MAX_POSTS);

	console.log(sortedEntries);

	sortedEntries.forEach(async ({ entry, slug }) => {
		feed.item({
			title: entry.title,
			description: '',
			url: `${siteConfig.baseUrl}/${slug}`,
			date: toIsoString(entry.publishedAt),
		});
	});

	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
		},
	});
}
