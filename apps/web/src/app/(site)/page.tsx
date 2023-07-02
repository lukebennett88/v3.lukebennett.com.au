import { Me } from '~/components/me';
import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';

export default async function Page() {
	const { content } = await reader.singletons.homepage.readOrThrow();
	return (
		<div className="mx-auto grid max-w-prose items-center gap-16">
			<div className="prose dark:prose-invert">
				<DocumentRenderer document={await content()} />
			</div>
			<Me className="w-full" />
		</div>
	);
}
