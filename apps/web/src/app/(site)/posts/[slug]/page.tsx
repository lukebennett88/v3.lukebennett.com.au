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
	const { content, isDraft, publishedAt, title } =
		await reader.collections.posts.readOrThrow(params.slug);

	if (process.env.NODE_ENV === 'production' && isDraft) {
		return notFound();
	}

	return (
		<Post
			publishedAt={publishedAt}
			title={<h1>{title}</h1>}
			document={await content()}
		/>
	);
}
