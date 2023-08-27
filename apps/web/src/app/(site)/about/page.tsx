import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';

export const metadata = {
	title: 'About',
} satisfies Metadata;

export default async function Page() {
	const page = await reader.singletons.about.read();
	if (!page) {
		notFound();
	}
	return (
		<div className="prose dark:prose-invert mx-auto">
			<DocumentRenderer document={await page.content()} />
		</div>
	);
}
