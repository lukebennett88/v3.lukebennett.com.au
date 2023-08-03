import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ExternalLinkHeading } from '~/components/external-link-heading';
import { Post } from '~/components/post';
import { reader } from '~/keystatic/reader';

export async function generateStaticParams() {
	const links = await reader.collections.links.all();
	return links.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> {
	const { title } = await reader.collections.links.readOrThrow(params.slug);
	return {
		title,
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
