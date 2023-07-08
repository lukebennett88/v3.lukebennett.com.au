const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended', 'next', 'turbo', 'prettier'],
	overrides: [
		{
			files: '**/*.test.ts',
			rules: {
				// These on-by-default rules aren't useful in test files.
				'@typescript-eslint/no-unsafe-assignment': OFF,
				'@typescript-eslint/no-unsafe-call': OFF,
			},
		},
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	rules: {
		'@next/next/no-html-link-for-pages': OFF,
		'@next/next/no-img-element': OFF,
		'@typescript-eslint/no-unused-vars': [ERROR, { caughtErrors: 'none' }],
		'@typescript-eslint/padding-line-between-statements': [
			ERROR,
			{ blankLine: 'always', next: '*', prev: 'block-like' },
		],
		curly: [ERROR, 'all'],
		'import/extensions': OFF,
		'no-case-declarations': OFF,
		'no-constant-condition': OFF,
		'no-inner-declarations': OFF,
		'no-undef': OFF,
		'padding-line-between-statements': OFF,
		'prefer-const': WARN,
	},
};
