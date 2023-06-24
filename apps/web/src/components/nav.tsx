'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '~/components/logo';
import { siteConfig } from '~/config/site';
import { containerClasses, focusClasses } from '~/lib/classes';

export const MAIN_ID = 'main';

export function Nav() {
	const pathname = usePathname();
	const { setTheme } = useTheme();

	return (
		<nav
			className={clsx(
				containerClasses,
				'flex flex-col items-center gap-4 py-8 lg:flex-row'
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
						'bg-gray-50 text-teal-700 hover:bg-white hover:text-teal-600',
						'dark:bg-teal-500 dark:text-gray-800 dark:hover:bg-teal-400 dark:hover:text-gray-700',
						focusClasses
					)}
				>
					<span className="sr-only">Luke</span>
					<Logo />
				</Link>
			</div>
			<div className="flex items-center gap-2 rounded-full bg-gray-200 p-1.5 shadow-inner dark:bg-gray-950">
				{siteConfig.mainNav.map(({ href, label }) => {
					const isHighlighted =
						href === '/' ? pathname === href : pathname?.includes(href);
					return (
						<Link
							href={href}
							key={href}
							className={clsx(
								'relative rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 transition hover:bg-gray-100 focus-visible:ring-offset-teal-50 dark:text-gray-200 dark:hover:bg-gray-900',
								focusClasses
							)}
						>
							{isHighlighted && (
								<motion.span
									aria-hidden="true"
									layoutId="bubble"
									className="pointer-events-none absolute inset-0 rounded-full bg-white shadow dark:bg-gray-800"
									style={{ borderRadius: 9999 }}
									transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
								/>
							)}
							<span className="relative z-10">{label}</span>
						</Link>
					);
				})}
			</div>
			<div className="hidden flex-1 justify-end gap-4 md:flex">
				{[
					{
						label: 'Light',
						theme: 'light',
					},
					{
						label: 'Dark',
						theme: 'dark',
					},
					{
						label: 'System',
						theme: 'system',
					},
				].map(({ label, theme }) => (
					<button
						key={theme}
						onClick={() => setTheme(theme)}
						className={focusClasses}
					>
						{label}
					</button>
				))}
			</div>
		</nav>
	);
}
