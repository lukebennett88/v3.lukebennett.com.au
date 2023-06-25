import { clsx } from 'clsx';
import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';
import { sortPosts } from '~/lib/utils';

export default async function Page() {
	const posts = sortPosts(await reader.collections.posts.all()).filter((post) =>
		process.env.NODE_ENV === 'production' ? !post.entry.isDraft : true
	);
	return (
		<div className="flex flex-col gap-4">
			<div className="prose dark:prose-invert">
				<h1>Posts</h1>
				<p className="[text-wrap:balance]">
					Longer form content.
					<br />
					For interesting links with limited commentary,{' '}
					<Link href="links">check out the links section</Link> instead.
				</p>
			</div>
			<ul className="flex max-w-prose flex-col gap-4" role="list">
				{posts.map(async (post) => (
					<li
						key={post.slug}
						className={clsx(
							'prose dark:prose-invert -mx-4 break-words rounded-xl bg-white p-4 shadow dark:bg-gray-800',
							post.entry.isDraft && 'border-2 border-dashed border-yellow-500'
						)}
					>
						<a href={`/posts/${post.slug}`} className="inline-block">
							<h2 className="m-0 [text-wrap:balance]">{post.entry.title}</h2>
						</a>
						<br />
						<time dateTime={post.entry.publishedAt} className="text-sm">
							{new Intl.DateTimeFormat('en', {
								timeZone: 'Australia/Sydney',
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							}).format(new Date(post.entry.publishedAt))}
						</time>
					</li>
				))}
			</ul>
		</div>
	);
}
