import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { clsx } from 'clsx';
import { Atkinson_Hyperlegible } from 'next/font/google';

import { ErrorBoundary } from '~/components/error-boundary';
import { containerClasses } from '~/lib/classes';

import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';

const atkinsonHyperlegible = Atkinson_Hyperlegible({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['400', '700'],
});

export const metadata = {
	title: 'Luke Bennett',
	description: 'Luke Bennett’s personal website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en-AU"
			className={clsx(atkinsonHyperlegible.variable, 'font-sans text-xl')}
		>
			<body className="flex min-h-[100dvh] flex-col">
				<Nav />
				<main className={clsx(containerClasses, 'flex-1 pb-24')}>
					<ErrorBoundary>
						{children}
						<Analytics />
					</ErrorBoundary>
				</main>
				<Footer />
			</body>
		</html>
	);
}
