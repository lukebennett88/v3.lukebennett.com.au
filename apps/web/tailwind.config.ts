import { type Config } from 'tailwindcss';
import { zinc } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const fontSans = ['var(--font-sans)', ...defaultTheme.fontFamily.sans];
const fontSerif = ['var(--font-serif)', ...defaultTheme.fontFamily.serif];

export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				gray: zinc,
			},
			fontFamily: {
				sans: fontSans,
				serif: fontSerif,
			},
			typography: () => ({
				DEFAULT: {
					css: {
						fontFamily: fontSerif.join(', '),
						h1: {
							fontFamily: fontSans.join(', '),
							textWrap: 'balance',
						},
						h2: {
							fontFamily: fontSans.join(', '),
							textWrap: 'balance',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
} satisfies Config;
