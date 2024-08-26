import { type Highlighter, bundledLanguages, getHighlighter } from 'shiki';

export const highlighter: Highlighter = await getHighlighter({
	themes: ['poimandres'],
	langs: Object.keys(bundledLanguages),
});
