import { siteConfig } from '~/config/site';
import { getSortedEntries, toIsoString } from '~/lib/utils';

const MAX_POSTS = 100;

export async function GET() {
	const sortedEntries = (await getSortedEntries()).slice(0, MAX_POSTS);

	const body = {
		version: 'https://jsonfeed.org/version/1.1',
		title: siteConfig.title,
		home_page_url: siteConfig.baseUrl,
		feed_url: `${siteConfig.baseUrl}/feed.json`,
		icon: `${siteConfig.baseUrl}/apple-icon.png`,
		items: sortedEntries.map(({ entry, pathname, type }) => {
			const url = `${siteConfig.baseUrl}${pathname}`;
			return {
				authors: [{ name: 'Luke Bennett' }],
				date_published: toIsoString(entry.publishedAt),
				...(type === 'link' ? { external_url: entry.linkedUrl } : undefined),
				id: url,
				title: entry.title,
				url,
			};
		}),
	};

	return new Response(JSON.stringify(body, null, 2), {
		headers: {
			'Content-Type': 'application/feed+json; charset=utf-8',
		},
	});
}
