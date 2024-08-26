import {
	type DocumentRendererProps,
	DocumentRenderer as KeystaticDocumentRenderer,
} from '@keystatic/core/renderer';

import {
	componentBlockRenderers,
	getDocumentRenderers,
} from '~/keystatic/renderers';
import { highlighter } from '~/lib/highlighter';

export function DocumentRenderer(props: DocumentRendererProps) {
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
