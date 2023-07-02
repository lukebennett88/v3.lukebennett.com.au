import {
	Source_Code_Pro,
	Source_Sans_3,
	Source_Serif_4,
} from 'next/font/google';

export const fontSerif = Source_Serif_4({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400', '700'],
});

export const fontSans = Source_Sans_3({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['400', '700'],
});

export const fontMono = Source_Code_Pro({
	subsets: ['latin'],
	variable: '--font-mono',
	weight: ['400', '700'],
});
