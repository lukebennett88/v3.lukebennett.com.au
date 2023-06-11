import { GitHubIcon } from '~/components/icons/github';
import { MastodonIcon } from '~/components/icons/mastodon';
import { TwitterIcon } from '~/components/icons/twitter';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	title: 'Luke Bennett',
	description: 'Luke Bennett’s personal website',
	baseUrl: 'https://www.lukebennett.com.au',
	mainNav: [
		{ label: 'Home', href: '/' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'Links', href: '/links' },
		{ label: 'About', href: '/about' },
	],
	links: {
		Mastodon: {
			href: 'https://mastodon.social/@luke_bennett_',
			icon: MastodonIcon,
		},
		Twitter: {
			href: 'https://twitter.com/luke_bennett_',
			icon: TwitterIcon,
		},
		GitHub: {
			href: 'https://github.com/lukebennett88',
			icon: GitHubIcon,
		},
	},
};
