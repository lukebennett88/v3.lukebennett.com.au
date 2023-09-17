import { renderToHtml, type Highlighter } from 'shiki';

export function Code({
	children,
	highlighter,
	language,
}: {
	children: string;
	highlighter: Highlighter;
	language?: string;
}) {
	let codeBlock = children;
	try {
		const tokens = highlighter.codeToThemedTokens(children, language);
		codeBlock = renderToHtml(tokens, {
			elements: {
				pre({ children }) {
					return `<pre>${children}</pre>`;
				},
			},
		});
	} catch (_error) {
		throw new Error(
			`Failed to highlight code block with language "${language}"`,
		);
	}

	return <div dangerouslySetInnerHTML={{ __html: codeBlock }} />;
}
