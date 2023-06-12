import { type DocumentElement } from '@keystatic/core';
import { DocumentRenderer } from '@keystatic/core/renderer';

export function Post({
	document,
	title,
}: {
	document: DocumentElement[];
	title: JSX.Element;
}) {
	return (
		<div className="prose dark:prose-invert">
			{title}
			<DocumentRenderer document={document} />
		</div>
	);
}
