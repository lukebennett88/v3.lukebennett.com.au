import { type Metadata, type ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { ExternalLinkHeading } from '~/components/external-link-heading';
import { Post } from '~/components/post';
import { reader } from '~/keystatic/reader';

export async function generateStaticParams() {
	const links = await reader.collections.links.all();
	return links.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parentPromise: ResolvingMetadata,
): Promise<Metadata> {
	const page = await reader.collections.posts.read(params.slug);
	const parent = await parentPromise;

	return {
		title: page?.title ?? parent?.title ?? 'Link',
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const page = await reader.collections.links.read(params.slug);
	if (!page) {
		notFound();
	}
	return (
		<Post
			document={await page.content()}
			publishedAt={page.publishedAt}
			title={
				<ExternalLinkHeading href={page.linkedUrl} level="1">
					{page.title}
				</ExternalLinkHeading>
			}
		/>
	);
}
