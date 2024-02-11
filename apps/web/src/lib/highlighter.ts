import { bundledLanguages, getHighlighter, type Highlighter } from 'shiki';

export const highlighter: Highlighter = await getHighlighter({
	themes: ['poimandres'],
	langs: Object.keys(bundledLanguages),
});
