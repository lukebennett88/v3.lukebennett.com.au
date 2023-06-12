import { DocumentRenderer } from '@keystatic/core/renderer';
import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';

export default async function Page() {
	const links = await reader.collections.links.all();
	return (
		<div className="flex flex-col gap-4">
			<div className="prose dark:prose-invert">
				<h1>Links</h1>
				<p className="[text-wrap:balance]">
					Interesting links with limited commentary.
					<br />
					For longer form content,{' '}
					<Link href="/posts">check out the posts section</Link> instead.
				</p>
			</div>
			<ul className="flex max-w-prose flex-col gap-4" role="list">
				{links.map(async (link) => {
					const { content } = await reader.collections.links.readOrThrow(
						link.slug
					);
					return (
						<li
							key={link.slug}
							className="prose dark:prose-invert -mx-4 rounded-xl bg-white p-4 dark:bg-gray-800 break-words"
						>
							<a href={`/links/${link.slug}`} className="inline-block">
								<h2 className="m-0">{link.entry.title}</h2>
							</a>
							<DocumentRenderer document={await content()} />
							<time dateTime={link.entry.publishedAt} className="text-sm">
								{new Intl.DateTimeFormat('en', {
									timeZone: 'Australia/Sydney',
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								}).format(new Date(link.entry.publishedAt))}
							</time>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
