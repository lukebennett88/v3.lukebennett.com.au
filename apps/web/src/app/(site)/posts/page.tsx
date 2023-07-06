import { clsx } from 'clsx';
import { type Metadata } from 'next';
import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';
import { formatToAustralianDate, sortPosts } from '~/lib/utils';

export const metadata = {
	title: 'Posts',
} satisfies Metadata;

export default async function Page() {
	const posts = sortPosts(await reader.collections.posts.all()).filter((post) =>
		process.env.NODE_ENV === 'production' ? !post.entry.isDraft : true
	);
	return (
		<div className="mx-auto flex max-w-prose flex-col gap-4">
			<div className="prose dark:prose-invert">
				<h1>Posts</h1>
				<p className="[text-wrap:balance]">
					Longer form content.
					<br />
					For interesting links with limited commentary,{' '}
					<Link href="links">check out the links section</Link> instead.
				</p>
			</div>
			<ul className="flex max-w-prose flex-col gap-1 sm:gap-3" role="list">
				{posts.map(async ({ slug, entry }) => (
					<li
						className={clsx(
							'prose dark:prose-invert -mx-4 break-words bg-white p-4 shadow dark:bg-gray-800 sm:rounded-xl',
							entry.isDraft && 'border-2 border-dashed border-yellow-500'
						)}
						key={slug}
					>
						<Link className="inline-block" href={`/posts/${slug}`}>
							<h2 className="m-0">{entry.title}</h2>
						</Link>
						<br />
						<time className="text-sm" dateTime={entry.publishedAt}>
							{formatToAustralianDate(entry.publishedAt)}
						</time>
					</li>
				))}
			</ul>
		</div>
	);
}
