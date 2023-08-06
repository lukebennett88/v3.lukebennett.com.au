import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps,
} from '@keystatic/core/renderer';
import { getHighlighter } from 'shiki';

import {
	componentBlockRenderers,
	getDocumentRenderers,
} from '~/keystatic/renderers';

export async function DocumentRenderer(props: DocumentRendererProps) {
	const highlighter = await getHighlighter({
		theme: 'poimandres',
	});
	const {
		componentBlocks = componentBlockRenderers,
		renderers = getDocumentRenderers(highlighter),
		...consumerProps
	} = props;

	return (
		<KeystaticDocumentRenderer
			componentBlocks={componentBlocks}
			renderers={renderers}
			{...consumerProps}
		/>
	);
}
