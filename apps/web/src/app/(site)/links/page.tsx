import { default as Link } from 'next/link';

import { ExternalLinkHeading } from '~/components/link-heading';
import { ZeroWidthSpace } from '~/components/zero-width-space';
import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';
import { formatToAustralianDate, sortPosts } from '~/lib/utils';

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
				{links.map(async ({ slug, entry }) => {
					const { content } = await reader.collections.links.readOrThrow(slug);
					return (
						<li
							key={slug}
							className="prose dark:prose-invert -mx-4 break-words rounded-xl bg-white p-4 shadow dark:bg-gray-800"
						>
							<div className="flex items-start justify-between gap-6">
								<ExternalLinkHeading href={entry.linkedUrl} level="2">
									{entry.title}
								</ExternalLinkHeading>
								<div className="inline-flex items-baseline">
									<a href={`/links/${slug}`}>Permalink</a>
									<h2 aria-hidden="true">
										<ZeroWidthSpace />
									</h2>
								</div>
							</div>
							<DocumentRenderer document={await content()} />
							<time dateTime={entry.publishedAt} className="text-sm">
								{formatToAustralianDate(entry.publishedAt)}
							</time>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
