import { type Config } from 'tailwindcss';
import { zinc } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

export const fontStackSansArray = [...defaultTheme.fontFamily.sans];
export const fontStackSerifArray = [...defaultTheme.fontFamily.serif];
export const fontStackMonoArray = [...defaultTheme.fontFamily.mono];

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
