// @ts-check

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next',
		'turbo',
		'prettier',
	],
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/strict',
				'plugin:@typescript-eslint/stylistic',
			],
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			rules: {
				'@typescript-eslint/ban-ts-comment': OFF,
				'@typescript-eslint/consistent-type-imports': [
					WARN,
					{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
				],
				'@typescript-eslint/consistent-type-definitions': [WARN, 'type'],
				'@typescript-eslint/no-empty-function': OFF,
				'@typescript-eslint/no-explicit-any': OFF,
				'@typescript-eslint/no-unused-vars': [
					WARN,
					{
						argsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
					},
				],
				'@typescript-eslint/no-var-requires': OFF,
				'@typescript-eslint/no-non-null-assertion': OFF,
				'@typescript-eslint/padding-line-between-statements': [
					ERROR,
					{ blankLine: 'always', next: '*', prev: 'block-like' },
				],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@next/next/no-html-link-for-pages': OFF,
		'@next/next/no-img-element': OFF,
		curly: [ERROR, 'all'],
		'jsx-a11y/no-redundant-roles': OFF,
		'no-case-declarations': OFF,
		'no-constant-condition': OFF,
		'no-inner-declarations': OFF,
		'no-mixed-spaces-and-tabs': OFF,
		'no-undef': OFF,
		'no-unused-expressions': OFF,
		'padding-line-between-statements': OFF,
		'prefer-const': WARN,
		'react/jsx-sort-props': ERROR,
		'react/no-unescaped-entities': OFF,
	},
};
