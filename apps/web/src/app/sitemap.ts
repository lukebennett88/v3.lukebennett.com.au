import { type MetadataRoute } from 'next';

import { siteConfig } from '~/config/site';
import { reader } from '~/keystatic/reader';
import { postsToSitemapEntries } from '~/lib/utils';

export default async function sitemap() {
	const routes = ['', '/about', '/posts', '/links'].map((route) => ({
		url: `${siteConfig.baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));
	const posts = postsToSitemapEntries(await reader.collections.posts.all());
	const links = postsToSitemapEntries(await reader.collections.links.all());
	return [...routes, ...posts, ...links] satisfies MetadataRoute.Sitemap;
}
