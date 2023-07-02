import { type InferRenderersForComponentBlocks } from '@keystatic/core';
import { type DocumentRendererProps } from '@keystatic/core/renderer';
import { type Highlighter } from 'shiki';

import { componentBlocks } from '../component-block';
import { CloudImage } from './cloud-image';
import { Code } from './code';
import { Heading } from './heading';

export function getDocumentRenderers(highlighter: Highlighter) {
	return {
		block: {
			code(props) {
				return <Code {...props} highlighter={highlighter} />;
			},
			heading(props) {
				return <Heading {...props} isAnchor />;
			},
		},
	} satisfies DocumentRendererProps['renderers'];
}

export const componentBlockRenderers = {
	cloudImage(props) {
		return <CloudImage {...props} />;
	},
} satisfies InferRenderersForComponentBlocks<typeof componentBlocks>;
