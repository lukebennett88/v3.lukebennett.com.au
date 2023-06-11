import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';
import { sortPosts } from '~/lib/utils';

export default async function Page() {
	const posts = sortPosts(await reader.collections.posts.all()).filter(
		(post) => !post.entry.isDraft
	);
	return (
		<div className="prose dark:prose-invert">
			<h1>Posts</h1>
			<p className="[text-wrap:balance]">
				Longer form content.
				<br />
				For interesting links with limited commentary,{' '}
				<Link href="links">check out the links section</Link> instead.
			</p>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<a href={`/posts/${post.slug}`}>{post.entry.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
