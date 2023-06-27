import { type Metadata } from 'next';

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
	const { content, linkedUrl, publishedAt, title } =
		await reader.collections.links.readOrThrow(params.slug);
	return (
		<Post
			document={await content()}
			publishedAt={publishedAt}
			title={
				<ExternalLinkHeading href={linkedUrl} level="1">
					{title}
				</ExternalLinkHeading>
			}
		/>
	);
}
