import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { clsx } from 'clsx';
import { Atkinson_Hyperlegible } from 'next/font/google';

import { ErrorBoundary } from '~/components/error-boundary';
import { Footer } from '~/components/footer';
import { Nav } from '~/components/nav';
import { ThemeProvider } from '~/components/theme-provider';
import { containerClasses } from '~/lib/classes';

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
			suppressHydrationWarning
			lang="en-AU"
			className={clsx(atkinsonHyperlegible.variable, 'font-sans text-xl')}
		>
			<body className="flex min-h-[100dvh] flex-col dark:bg-gray-900">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Nav />
					<main
						className={clsx(
							containerClasses,
							'flex-1 pb-24 [text-wrap:balance]'
						)}
					>
						<ErrorBoundary>
							{children}
							<Analytics />
						</ErrorBoundary>
					</main>
				</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
