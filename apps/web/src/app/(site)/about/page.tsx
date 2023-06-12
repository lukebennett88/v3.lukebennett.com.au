import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';

export default async function Page() {
	const { content } = await reader.singletons.about.readOrThrow();
	return (
		<div className="prose dark:prose-invert">
			<DocumentRenderer document={await content()} />
		</div>
	);
}
