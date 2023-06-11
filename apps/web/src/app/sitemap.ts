import { type MetadataRoute } from 'next';

import { siteConfig } from '~/config/site';
import { reader } from '~/keystatic/reader';

function formatDate(date: unknown) {
	return new Date(typeof date === 'string' ? date : siteConfig.startDate)
		.toISOString()
		.split('T')[0];
}

type Post = {
	slug: string;
	entry: {
		title: string;
		publishedAt: string | null;
	};
};

function mapPosts(posts: Post[]) {
	return posts.map((post) => ({
		url: `${siteConfig.baseUrl}/posts/${post.slug}`,
		lastModified: formatDate(post.entry.publishedAt),
	}));
}

export default async function sitemap() {
	const routes = ['', '/about', '/posts', '/links'].map((route) => ({
		url: `${siteConfig.baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	const posts = mapPosts(await reader.collections.posts.all());
	const links = mapPosts(await reader.collections.links.all());
	return [...routes, ...posts, ...links] satisfies MetadataRoute.Sitemap;
}
