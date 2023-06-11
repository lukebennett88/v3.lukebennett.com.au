import RSS from 'rss';

import { siteConfig } from '~/config/site';
import { reader } from '~/keystatic/reader';
import { sortPosts, toIsoString } from '~/lib/utils';

const MAX_POSTS = 100;

export async function GET() {
	const [links, posts] = await Promise.all([
		reader.collections.posts.all().then((posts) =>
			posts.map((post) => ({
				...post,
				type: 'post' as const,
				url: `posts/${post.slug}`,
			}))
		),
		reader.collections.links.all().then((links) =>
			links.map((link) => ({
				...link,
				type: 'link' as const,
				url: `links/${link.slug}`,
			}))
		),
	]);

	const feed = new RSS({
		title: siteConfig.title,
		description: siteConfig.description,
		site_url: siteConfig.baseUrl,
		feed_url: `${siteConfig.baseUrl}/feed.xml`,
	});

	const sortedEntries = sortPosts([...posts, ...links])
		.filter(
			(item) =>
				item.type === 'link' || (item.type === 'post' && !item.entry.isDraft)
		)
		.slice(0, MAX_POSTS);

	sortedEntries.forEach(async ({ entry, url }) => {
		feed.item({
			title: entry.title,
			description: '',
			url: `${siteConfig.baseUrl}/${url}`,
			date: toIsoString(entry.publishedAt),
		});
	});

	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
		},
	});
}
