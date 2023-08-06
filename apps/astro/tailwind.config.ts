import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import { zinc } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export const fontStackSansArray = [
	'Source Sans Pro',
	...defaultTheme.fontFamily.sans,
];
export const fontStackSerifArray = [
	'Source Serif Pro',
	...defaultTheme.fontFamily.serif,
];
export const fontStackMonoArray = [
	'Source Code Pro Variable',
	...defaultTheme.fontFamily.mono,
];

export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,mdoc,ts,tsx}'],
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
			typography: () => ({
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
	plugins: [typographyPlugin],
} satisfies Config;
