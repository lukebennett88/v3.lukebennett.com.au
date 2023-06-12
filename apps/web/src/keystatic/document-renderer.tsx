import { type InferRenderersForComponentBlocks } from '@keystatic/core';
import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps,
} from '@keystatic/core/renderer';

import { componentBlocks } from './component-block';

export function DocumentRenderer({
	componentBlocks = componentBlockRenderers,
	...consumerProps
}: DocumentRendererProps) {
	return (
		<KeystaticDocumentRenderer
			componentBlocks={componentBlocks}
			{...consumerProps}
		/>
	);
}

const componentBlockRenderers = {} satisfies InferRenderersForComponentBlocks<
	typeof componentBlocks
>;
