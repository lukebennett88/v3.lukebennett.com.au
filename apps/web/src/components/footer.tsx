import { clsx } from 'clsx';

import { GitHubIcon } from '~/components/icons/github';
import { MastodonIcon } from '~/components/icons/mastodon';
import { TwitterIcon } from '~/components/icons/twitter';
import { containerClasses, focusClasses } from '~/lib/classes';

export function Footer() {
	return (
		<footer
			className={clsx(
				containerClasses,
				'flex flex-col items-center justify-between gap-4 py-8 text-gray-700 lg:flex-row'
			)}
		>
			<span>
				&copy; {new Date().getFullYear()} Luke Bennett. All rights reserved.
			</span>
			<nav>
				<ul className="flex items-center gap-4">
					{socialLinks.map(({ name, href, icon: Icon }) => (
						<li key={name}>
							<a
								className={clsx(
									'block rounded text-gray-500 transition-colors duration-200 hover:text-gray-700',
									focusClasses
								)}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="sr-only">{name}</span>
								<Icon className="h-4 w-4" />
							</a>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
}

const socialLinks = [
	{
		name: 'Mastodon',
		href: 'https://mastodon.social/@luke_bennett_',
		icon: MastodonIcon,
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com/luke_bennett_',
		icon: TwitterIcon,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/lukebennett88',
		icon: GitHubIcon,
	},
];
