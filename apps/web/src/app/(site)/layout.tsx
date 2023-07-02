import '~/styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import { clsx } from 'clsx';
import { type Metadata } from 'next';

import { ErrorBoundary } from '~/components/error-boundary';
import { Footer } from '~/components/footer';
import { Header, MAIN_ID } from '~/components/header';
import { ThemeProvider } from '~/components/theme-provider';
import { siteConfig } from '~/config/site';
import { containerClasses, innerPaddingClasses } from '~/lib/classes';
import { fontMono, fontSans, fontSerif } from '~/lib/fonts';

export const metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.baseUrl),
	authors: [
		{
			name: siteConfig.title,
			url: siteConfig.baseUrl,
		},
	],
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.baseUrl,
		siteName: siteConfig.title,
		images: [
			{
				url: `${siteConfig.baseUrl}/og.jpg`,
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-AU',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: siteConfig.title,
		card: 'summary_large_image',
	},
} satisfies Metadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			suppressHydrationWarning
			lang="en-AU"
			className={clsx(
				fontSerif.variable,
				fontSans.variable,
				fontMono.variable,
				'font-sans text-xl antialiased'
			)}
		>
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link
					rel="icon"
					href="/favicon-dark.svg"
					type="image/svg+xml"
					media="(prefers-color-scheme: dark)"
				/>
			</head>
			<body className="flex min-h-[100dvh] justify-center bg-teal-700 p-2 [tab-size:2]">
				<div
					className={clsx(
						containerClasses,
						'flex flex-col rounded-2xl bg-gray-100 shadow-2xl dark:bg-gray-900'
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<Header />
						<main
							id={MAIN_ID}
							className={clsx(
								innerPaddingClasses,
								'flex-1 bg-gray-100 pb-20 pt-10 dark:bg-gray-900'
							)}
						>
							<ErrorBoundary>
								{children}
								{process.env.NODE_ENV === 'production' && <Analytics />}
							</ErrorBoundary>
						</main>
						<Footer />
					</ThemeProvider>
				</div>
			</body>
		</html>
	);
}
