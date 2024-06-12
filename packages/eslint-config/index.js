// @ts-check

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const OFF = 0;
const WARN = 1;

const config = [
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'turbo',
		'prettier',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
			parser: tsParser,
		},
		rules: {
			'jsx-a11y/alt-text': WARN,
			'jsx-a11y/anchor-has-content': WARN,
			'jsx-a11y/anchor-is-valid': WARN,
			'jsx-a11y/aria-role': [
				WARN,
				{ allowedInvalidRoles: ['text'], ignoreNonDOM: true },
			],
			'jsx-a11y/click-events-have-key-events': WARN,
			'jsx-a11y/iframe-has-title': WARN,
			'jsx-a11y/no-autofocus': WARN,
			'jsx-a11y/no-redundant-roles': OFF,
			'jsx-a11y/no-static-element-interactions': WARN,
			'no-case-declarations': OFF,
			'no-constant-condition': OFF,
			'no-inner-declarations': OFF,
			'no-mixed-spaces-and-tabs': OFF,
			'no-undef': OFF,
			'no-unused-expressions': OFF,
			'padding-line-between-statements': OFF,
			'prefer-const': WARN,
			'react-hooks/exhaustive-deps': WARN,
			'react-hooks/rules-of-hooks': WARN,
			'react/button-has-type': WARN,
			'react/display-name': WARN,
			'react/function-component-definition': [
				WARN,
				{
					namedComponents: 'function-declaration',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/jsx-boolean-value': WARN,
			'react/jsx-curly-brace-presence': WARN,
			'react/jsx-key': [
				WARN,
				{
					checkFragmentShorthand: true,
					checkKeyMustBeforeSpread: true,
					warnOnDuplicates: true,
				},
			],
			'react/jsx-max-depth': [WARN, { max: 4 }],
			'react/jsx-no-leaked-render': [WARN, { validStrategies: ['ternary'] }],
			'react/jsx-no-script-url': WARN,
			'react/jsx-no-target-blank': WARN,
			'react/jsx-no-undef': WARN,
			'react/jsx-no-useless-fragment': WARN,
			'react/jsx-pascal-case': WARN,
			'react/jsx-sort-props': WARN,
			'react/jsx-uses-react': WARN,
			'react/jsx-uses-vars': WARN,
			'react/jsx-wrap-multilines': WARN,
			'react/no-children-prop': OFF,
			'react/no-did-mount-set-state': WARN,
			'react/no-did-update-set-state': WARN,
			'react/no-direct-mutation-state': WARN,
			'react/no-unescaped-entities': OFF,
			'react/no-unknown-property': WARN,
			'react/no-unstable-nested-components': [WARN, { allowAsProps: true }],
			'react/no-unused-prop-types': WARN,
			'react/prefer-stateless-function': WARN,
			'react/prop-types': WARN,
			'react/self-closing-comp': WARN,
		},
	},
	...compat
		.extends(
			'plugin:@typescript-eslint/strict',
			'plugin:@typescript-eslint/stylistic',
		)
		.map((config) => ({
			...config,
			files: ['**/*.ts', '**/*.tsx'],
		})),
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'@typescript-eslint/ban-ts-comment': OFF,
			'@typescript-eslint/consistent-type-imports': [
				WARN,
				{
					prefer: 'type-imports',
					fixStyle: 'inline-type-imports',
				},
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
				WARN,
				{
					blankLine: 'always',
					next: '*',
					prev: 'block-like',
				},
			],
		},
	},
];

export default config;
