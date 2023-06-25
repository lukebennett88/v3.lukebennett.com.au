import { type DocumentElement } from '@keystatic/core';

import { DocumentRenderer } from '~/keystatic/document-renderer';
import { formatToAustralianDate } from '~/lib/utils';

export function Post({
	document,
	publishedAt,
	title,
}: {
	document: DocumentElement[];
	publishedAt: string;
	title: JSX.Element;
}) {
	return (
		<div className="prose dark:prose-invert">
			<time className="block text-sm" dateTime={publishedAt}>
				{formatToAustralianDate(publishedAt)}
			</time>
			{title}
			<DocumentRenderer document={document} />
		</div>
	);
}
