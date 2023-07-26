import { siteConfig } from '~/config/site';
import { reader } from '~/keystatic/reader';

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
			new Date(a.entry.publishedAt).getTime(),
	);
}

export async function getSortedEntries() {
	const [links, posts] = await Promise.all([
		reader.collections.posts.all().then((posts) =>
			posts.map((post) => ({
				...post,
				type: 'post' as const,
				pathname: `/posts/${post.slug}`,
			})),
		),
		reader.collections.links.all().then((links) =>
			links.map((link) => ({
				...link,
				type: 'link' as const,
				pathname: `/links/${link.slug}`,
			})),
		),
	]);

	return sortPosts([...posts, ...links]).filter(
		(item) =>
			item.type === 'link' || (item.type === 'post' && !item.entry.isDraft),
	);
}

export function formatToAustralianDate(date: string) {
	const [day, month, year] = new Intl.DateTimeFormat('en-AU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
		.format(new Date(date))
		.split(' ');
	return `${day} ${month} ${year}`;
}
