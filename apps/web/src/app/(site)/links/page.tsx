import { type Metadata } from 'next';
import { default as Link } from 'next/link';

import { ExternalLinkHeading } from '~/components/external-link-heading';
import { ZeroWidthSpace } from '~/components/zero-width-space';
import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';
import { formatToAustralianDate, sortPosts } from '~/lib/utils';

export const metadata = {
	title: 'Links',
} satisfies Metadata;

export default async function Page() {
	const links = sortPosts(await reader.collections.links.all());
	return (
		<div className="mx-auto flex max-w-prose flex-col gap-4">
			<div className="prose dark:prose-invert">
				<h1>Links</h1>
				<p className="[text-wrap:balance]">
					Interesting links with limited commentary.
					<br />
					For longer form content,{' '}
					<Link href="/posts">check out the posts section</Link> instead.
				</p>
			</div>
			<ul className="flex max-w-prose flex-col gap-1 sm:gap-3" role="list">
				{links.map(async ({ slug, entry }) => {
					const { content } = await reader.collections.links.readOrThrow(slug);
					const headingLevel = '2';
					const HeadingTag = `h${headingLevel}` as const;
					return (
						<li
							className="prose dark:prose-invert -mx-4 break-words bg-white p-4 shadow dark:bg-gray-800 sm:rounded-xl"
							key={slug}
						>
							<div className="flex items-start justify-between gap-6">
								<ExternalLinkHeading
									href={entry.linkedUrl}
									level={headingLevel}
								>
									{entry.title}
								</ExternalLinkHeading>
								<div className="inline-flex items-baseline">
									<Link href={`/links/${slug}`}>Permalink</Link>
									<HeadingTag aria-hidden="true" className="mt-0">
										<ZeroWidthSpace />
									</HeadingTag>
								</div>
							</div>
							<DocumentRenderer document={await content()} />
							<time className="text-sm" dateTime={entry.publishedAt}>
								{formatToAustralianDate(entry.publishedAt)}
							</time>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
