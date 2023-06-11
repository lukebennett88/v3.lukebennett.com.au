import { siteConfig } from '~/config/site';

export function toIsoString(date: unknown): string {
	return new Date(typeof date === 'string' ? date : siteConfig.startDate)
		.toISOString()
		.split('T')[0]!;
}

type Post = {
	slug: string;
	entry: {
		title: string;
		publishedAt: string;
	};
};

export function postsToSitemapEntries(posts: Post[]) {
	return posts.map((post) => ({
		url: `${siteConfig.baseUrl}/posts/${post.slug}`,
		lastModified: toIsoString(post.entry.publishedAt),
	}));
}

export function sortPosts<P extends Post>(posts: P[]) {
	return posts.sort(
		(a, b) =>
			new Date(b.entry.publishedAt).getTime() -
			new Date(a.entry.publishedAt).getTime()
	);
}
