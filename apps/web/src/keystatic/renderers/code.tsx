import { type Highlighter } from 'shikiji';

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
		codeBlock = highlighter.codeToHtml(children, {
			lang: language || 'auto',
			theme: 'poimandres',
		});
	} catch (_error) {
		throw new Error(
			`Failed to highlight code block with language "${language}"`,
		);
	}

	return <div dangerouslySetInnerHTML={{ __html: codeBlock }} />;
}
