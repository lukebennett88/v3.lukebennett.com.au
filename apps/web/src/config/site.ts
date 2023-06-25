import { GitHubIcon } from '~/components/icons/github';
import { JsonFeedIcon } from '~/components/icons/json-feed';
import { MastodonIcon } from '~/components/icons/mastodon';
import { RssFeedIcon } from '~/components/icons/rss-feed';
import { TwitterIcon } from '~/components/icons/twitter';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	title: 'Luke Bennett',
	description: 'Luke Bennett’s personal website',
	baseUrl: 'https://www.lukebennett.com.au',
	startDate: '2023-05-29' /** Date v3 of the website was first published */,
	mainNav: [
		{ label: 'Home', href: '/' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'Links', href: '/links' },
		{ label: 'About', href: '/about' },
	],
	socialLinks: {
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
	rssFeed: {
		'JSON Feed': {
			href: '/feed.json',
			icon: JsonFeedIcon,
		},
		'XML Feed': {
			href: '/feed.xml',
			icon: RssFeedIcon,
		},
	},
};
