import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';

export default async function Page() {
	const posts = (await reader.collections.posts.all()).sort(
		(a, b) =>
			new Date(b.entry.publishedAt).getTime() -
			new Date(a.entry.publishedAt).getTime()
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
