import { clsx } from 'clsx';

import { siteConfig } from '~/config/site';
import { containerClasses, focusClasses } from '~/lib/classes';

export function Footer() {
	return (
		<footer
			className={clsx(
				containerClasses,
				'flex flex-col items-center justify-between gap-4 py-8 text-gray-700 dark:text-gray-400 lg:flex-row'
			)}
		>
			<span>
				&copy; {new Date().getFullYear()} Luke Bennett. All rights reserved.
			</span>
			<nav>
				<ul className="flex items-center gap-4">
					{Object.entries(siteConfig.links).map(
						([name, { href, icon: Icon }]) => (
							<li key={name}>
								<a
									className={clsx(
										'block rounded text-gray-500 transition-colors duration-200 hover:text-gray-700',
										focusClasses
									)}
									href={href}
									rel="me"
								>
									<span className="sr-only">{name}</span>
									<Icon className="h-4 w-4" />
								</a>
							</li>
						)
					)}
				</ul>
			</nav>
		</footer>
	);
}
