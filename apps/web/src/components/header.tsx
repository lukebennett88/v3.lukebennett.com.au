'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '~/components/logo';
import { ThemeSwitcher } from '~/components/theme-switcher';
import { siteConfig } from '~/config/site';
import { focusClasses, innerPaddingClasses } from '~/lib/classes';

export const MAIN_ID = 'main';

export function Header() {
	const pathname = usePathname();

	return (
		<header
			role="banner"
			className={clsx(
				innerPaddingClasses,
				'flex flex-wrap items-center gap-4 py-8'
			)}
		>
			<a
				href={`#${MAIN_ID}`}
				className={clsx(
					'sr-only',
					'focus-visible:not-sr-only focus-visible:absolute focus-visible:inline-block focus-visible:rounded-full focus-visible:bg-gray-200 focus-visible:px-3 focus-visible:py-1.5 focus-visible:hover:text-gray-600',
					'dark:focus-visible:bg-teal-700 dark:focus-visible:hover:text-white',
					focusClasses
				)}
			>
				Skip to main content
			</a>
			<div className="flex flex-1 items-center">
				<Link
					href="/"
					className={clsx(
						'h-11 w-11 rounded-full p-1 font-sans font-bold shadow transition-colors',
						'bg-white text-teal-700 hover:text-teal-600',
						'dark:bg-teal-600 dark:text-gray-900 dark:hover:bg-teal-500',
						focusClasses
					)}
				>
					<span className="sr-only">{siteConfig.title}</span>
					<Logo />
				</Link>
			</div>
			<nav
				role="navigation"
				aria-label="Primary"
				className="order-last flex w-full justify-center md:order-none md:w-auto"
			>
				<ul className="flex items-center gap-2 rounded-full bg-gray-200 p-1.5 shadow-inner dark:bg-gray-950">
					{siteConfig.mainNav.map(({ href, label }) => {
						const isCurrent = pathname === href;
						const isHighlighted =
							href === '/' ? pathname === href : pathname?.includes(href);
						return (
							<li key={href}>
								<Link
									aria-current={isCurrent ? 'page' : undefined}
									href={href}
									className={clsx(
										'relative rounded-full px-3 py-1.5 text-xs font-medium text-gray-800 transition hover:bg-gray-100 focus-visible:ring-offset-teal-50 dark:text-gray-200 dark:hover:bg-gray-900',
										'text-sm sm:px-4 sm:py-1.5',
										focusClasses
									)}
								>
									{isHighlighted && (
										<motion.span
											aria-hidden="true"
											layoutId="bubble"
											className="pointer-events-none absolute inset-0 rounded-full bg-white shadow dark:bg-gray-800"
											style={{ borderRadius: 9999 }}
											transition={{
												type: 'spring',
												bounce: 0.2,
												duration: 0.6,
											}}
										/>
									)}
									<span className="relative z-10">{label}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<ThemeSwitcher />
		</header>
	);
}
