import { notFound } from 'next/navigation';

import { Me } from '~/components/me';
import { siteConfig } from '~/config/site';
import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';

export const metadata = {
	title: {
		absolute: siteConfig.title,
	},
};

export default async function Page() {
	const page = await reader.singletons.homepage.read();
	if (!page) {
		notFound();
	}
	return (
		<div className="mx-auto grid max-w-prose items-center gap-16">
			<div className="prose dark:prose-invert">
				<DocumentRenderer document={await page.content()} />
			</div>
			<Me className="w-full" />
		</div>
	);
}
