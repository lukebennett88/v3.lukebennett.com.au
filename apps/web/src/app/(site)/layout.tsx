import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { clsx } from 'clsx';

import { ErrorBoundary } from '~/components/error-boundary';
import { Footer } from '~/components/footer';
import { MAIN_ID, Nav } from '~/components/nav';
import { ThemeProvider } from '~/components/theme-provider';
import { siteConfig } from '~/config/site';
import { containerClasses } from '~/lib/classes';
import { fontSans } from '~/lib/fonts';

export const metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
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
			className={clsx(fontSans.variable, 'font-sans text-xl')}
		>
			<body className="flex min-h-[100dvh] flex-col bg-gray-100 dark:bg-gray-900 [tab-size:2]">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Nav />
					<main id={MAIN_ID} className={clsx(containerClasses, 'flex-1 pb-20')}>
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
