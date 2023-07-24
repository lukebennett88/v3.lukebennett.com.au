import { clsx } from 'clsx';

import { siteConfig } from '~/config/site';
import {
	containerClasses,
	focusClasses,
	innerPaddingClasses,
} from '~/lib/classes';

export function Footer() {
	return (
		<footer
			className={clsx(
				containerClasses,
				innerPaddingClasses,
				'flex flex-col items-center justify-between gap-4 py-8 text-gray-700 dark:text-gray-400',
			)}
		>
			<FooterNav />
			<SocialLinks />
			<p>
				&copy; {new Date().getFullYear()} Luke Bennett. All rights reserved.
			</p>
			{process.env.NODE_ENV === 'development' && (
				<div
					className={clsx(
						containerClasses,
						innerPaddingClasses,
						'fixed bottom-8 flex justify-end',
					)}
				>
					<a
						className="rounded-full bg-teal-700 px-6 text-white"
						href="/keystatic"
					>
						Keystatic
					</a>
				</div>
			)}
		</footer>
	);
}

function FooterNav() {
	return (
		<nav
			aria-label="RSS Feeds"
			className="flex flex-col items-center"
			role="navigation"
		>
			<h2>Subscribe to my RSS feed</h2>
			<ul className="flex items-center gap-4">
				{Object.entries(siteConfig.rssFeed).map(([name, { href }]) => (
					<li key={name}>
						<a className="inline-flex items-center gap-2 underline" href={href}>
							{name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

function SocialLinks() {
	return (
		<nav
			aria-label="Social"
			className="flex flex-col items-center"
			role="navigation"
		>
			<ul className="flex items-center gap-4">
				{Object.entries(siteConfig.socialLinks).map(
					([name, { href, icon: Icon }]) => (
						<li key={name}>
							<a
								className={clsx(
									'block rounded text-gray-500 transition-colors duration-200 hover:text-gray-700',
									focusClasses,
								)}
								href={href}
								rel="me"
							>
								<span className="sr-only">{name}</span>
								<Icon className="h-4 w-4" />
							</a>
						</li>
					),
				)}
			</ul>
		</nav>
	);
}
