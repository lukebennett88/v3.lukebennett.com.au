import { default as Link } from 'next/link';

import { ExternalLinkHeading } from '~/components/link-heading';
import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';
import { sortPosts } from '~/lib/utils';

export default async function Page() {
	const links = sortPosts(await reader.collections.links.all());
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
							className="prose dark:prose-invert -mx-4 break-words rounded-xl bg-white p-4 shadow dark:bg-gray-800"
						>
							<div className="flex items-baseline justify-between gap-6">
								<ExternalLinkHeading href={link.entry.linkedUrl} level="2">
									{link.entry.title}
								</ExternalLinkHeading>
								<a href={`/links/${link.slug}`} className="inline-block">
									Permalink
								</a>
							</div>
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
