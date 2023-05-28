import { DocumentRenderer } from '@keystatic/core/renderer';

import { reader } from '~/keystatic/reader';

export default async function Page() {
	const { content } = await reader.singletons.about.readOrThrow();
	return (
		<div className="prose">
			<DocumentRenderer document={await content()} />
		</div>
	);
}
