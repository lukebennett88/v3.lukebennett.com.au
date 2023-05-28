'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
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
			<div className="flex items-center gap-2 rounded-full bg-gray-200 p-1.5">
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
								isHighlighted ? '' : 'hover:text-gray-600',
								'relative rounded-full px-4 py-1.5 text-sm font-medium text-gray-800 transition focus-visible:bg-teal-50 focus-visible:ring-offset-teal-50',
								focusClasses
							)}
						>
							{isHighlighted && (
								<motion.span
									aria-hidden="true"
									layoutId="bubble"
									className="absolute inset-0 rounded-full bg-white"
									style={{ borderRadius: 9999 }}
									transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
								/>
							)}
							<span className="relative z-10">{link.label}</span>
						</Link>
					);
				})}
			</div>
			<div aria-hidden="true" className="hidden flex-1 md:block" />
		</nav>
	);
}
