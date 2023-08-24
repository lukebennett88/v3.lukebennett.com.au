import { type Metadata, type ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { Post } from '~/components/post';
import { reader } from '~/keystatic/reader';

export async function generateStaticParams() {
	const posts = await reader.collections.posts.all();
	return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
	{ params }: { params: { slug: string } },
	parentPromise: ResolvingMetadata,
): Promise<Metadata> {
	const page = await reader.collections.posts.read(params.slug);
	const parent = await parentPromise;

	return {
		title: page?.title ?? parent?.title ?? 'Post',
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const page = await reader.collections.posts.read(params.slug);
	if (!page) {
		notFound();
	}

	if (process.env.NODE_ENV === 'production' && page.isDraft) {
		notFound();
	}

	return (
		<Post
			document={await page.content()}
			publishedAt={page.publishedAt}
			title={<h1>{page.title}</h1>}
		/>
	);
}
