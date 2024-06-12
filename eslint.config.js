import config from '@lukebennett/eslint-config';

export default [
	{
		ignores: [
			'!**/.*',
			'**/coverage',
			'**/lib',
			'**/node_modules',
			'**/pnpm-lock.yaml',
		],
	},
	...config,
	{
		settings: {
			next: {
				rootDir: ['apps/*/'],
			},
		},
	},
];
