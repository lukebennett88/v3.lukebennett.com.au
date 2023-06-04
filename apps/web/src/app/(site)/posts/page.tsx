import { clsx } from 'clsx';

import { reader } from '~/keystatic/reader';
import { h1Classes } from '~/lib/classes';

export default async function Page() {
	const posts = await reader.collections.posts.all();
	return (
		<div className="prose dark:prose-invert">
			<h1>Posts</h1>
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
