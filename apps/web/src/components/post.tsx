import { type DocumentElement } from '@keystatic/core';
import { DocumentRenderer } from '@keystatic/core/renderer';

export function Post({
	document,
	title,
}: {
	document: DocumentElement[];
	title: string;
}) {
	return (
		<div className="prose">
			<h1>{title}</h1>
			<DocumentRenderer document={document} />
		</div>
	);
}
