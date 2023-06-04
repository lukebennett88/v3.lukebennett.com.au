'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Logo } from '~/components/logo';
import { containerClasses, focusClasses } from '~/lib/classes';

let navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Posts', href: '/posts' },
	{ label: 'Links', href: '/links' },
	{ label: 'About', href: '/about' },
];

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
			<div className="flex flex-1 items-center">
				<a
					href="/"
					className={clsx(
						'rounded-full font-sans font-bold hover:text-teal-600',
						focusClasses
					)}
				>
					<span className="sr-only">Luke</span>
					<Logo className="h-10 w-10 text-teal-700 transition-colors" />
				</a>
			</div>
			<div className="flex items-center gap-2 rounded-full bg-gray-200 p-1.5 dark:bg-gray-950">
				{navLinks.map((link) => {
					const isHighlighted =
						link.href === '/'
							? pathname === link.href
							: pathname?.includes(link.href);
					return (
						<Link
							href={link.href}
							key={link.href}
							className={clsx(
								isHighlighted
									? ''
									: 'hover:text-gray-600 dark:hover:text-white',
								'relative rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 transition focus-visible:bg-teal-50 focus-visible:ring-offset-teal-50',
								focusClasses
							)}
						>
							{isHighlighted && (
								<motion.span
									aria-hidden="true"
									layoutId="bubble"
									className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 pointer-events-none"
									style={{ borderRadius: 9999 }}
									transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
								/>
							)}
							<span className="relative z-10">{link.label}</span>
						</Link>
					);
				})}
			</div>
			<div className="hidden flex-1 md:flex justify-end gap-4">
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
