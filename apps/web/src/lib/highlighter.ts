import { getHighlighter } from 'shikiji';

export const highlighter = await getHighlighter({
	themes: ['poimandres'],
	langs: [
		'css',
		'diff',
		'html',
		'javascript',
		'json',
		'jsx',
		'ts',
		'tsx',
		'typescript',
	],
});
