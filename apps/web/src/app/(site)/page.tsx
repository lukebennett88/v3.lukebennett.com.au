import { DocumentRenderer } from '@keystatic/core/renderer';

import { Me } from '~/components/me';
import { reader } from '~/keystatic/reader';

export default async function Page() {
	const { content } = await reader.singletons.homepage.readOrThrow();
	return (
		<div className="grid items-center gap-y-8 md:grid-cols-2">
			<div className="prose dark:prose-invert">
				<DocumentRenderer document={await content()} />
			</div>
			<div>
				<Me />
			</div>
		</div>
	);
}
