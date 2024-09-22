// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	// Plugins
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
	],
	// Options
	printWidth: 80,
	singleQuote: true,
	useTabs: true,
	// Overrides
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
