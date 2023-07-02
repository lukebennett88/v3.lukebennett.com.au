import { type Config } from 'tailwindcss';
import { zinc } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export const fontStackSansArray = [
	'var(--font-sans)',
	...defaultTheme.fontFamily.sans,
];
export const fontStackSerifArray = [
	'var(--font-serif)',
	...defaultTheme.fontFamily.serif,
];
export const fontStackMonoArray = [
	'var(--font-mono)',
	...defaultTheme.fontFamily.mono,
];

export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				gray: zinc,
			},
			fontFamily: {
				sans: fontStackSansArray,
				serif: fontStackSerifArray,
				mono: fontStackMonoArray,
			},
			typography: (theme: any) => ({
				DEFAULT: {
					css: {
						fontFamily: fontStackSerifArray.join(', '),
						h1: {
							fontFamily: fontStackSansArray.join(', '),
							textWrap: 'balance',
						},
						h2: {
							fontFamily: fontStackSansArray.join(', '),
							textWrap: 'balance',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
} satisfies Config;
