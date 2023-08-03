import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Post } from '~/components/post';
import { reader } from '~/keystatic/reader';

export async function generateStaticParams() {
	const posts = await reader.collections.posts.all();
	return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> {
	const { title } = await reader.collections.posts.readOrThrow(params.slug);
	return {
		title,
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const page = await reader.collections.posts.readOrThrow(params.slug);
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
