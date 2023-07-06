import { DocumentRenderer as KeystaticDocumentRenderer, type DocumentRendererProps } from '@keystatic/core/renderer';
import { type Highlighter } from 'shiki';
import { componentBlockRenderers, getDocumentRenderers } from '~/keystatic/renderers';

export function DocumentRenderer({ highlighter, ...props }: DocumentRendererProps & { highlighter: Highlighter }) {
	const {
		componentBlocks = componentBlockRenderers,
		renderers = getDocumentRenderers(highlighter),
		...consumerProps
	} = props;

	return <KeystaticDocumentRenderer componentBlocks={componentBlocks} renderers={renderers} {...consumerProps} />;
}
