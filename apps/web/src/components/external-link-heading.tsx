import { ExternalLinkIcon } from '~/components/icons/external-link';
import { ZeroWidthSpace } from '~/components/zero-width-space';

export function ExternalLinkHeading({
	children,
	href,
	level,
}: {
	children: React.ReactNode;
	href: string;
	level: '1' | '2' | '3' | '4' | '5' | '6';
}) {
	const Tag = `h${level}` as const;
	return (
		<a className="group relative underline" href={href}>
			<Tag className="m-0 inline-block underline">
				{children}
				<span className="inline-flex items-center">
					<ZeroWidthSpace />
					<ExternalLinkIcon className="ms-1 hidden h-[0.75em] w-[0.75em] group-hover:absolute group-hover:inline-block group-focus:absolute group-focus:inline-block" />
				</span>
			</Tag>
		</a>
	);
}
