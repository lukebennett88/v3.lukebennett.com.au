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
		<a href={href} className="group relative underline">
			<Tag className="inline-block underline">
				{children}
				<span className="inline-flex items-center">
					{/* Zero width space */}
					&#8203;
					<svg
						aria-hidden="true"
						className="ms-1 hidden h-[0.75em] w-[0.75em] group-hover:absolute group-hover:inline-block group-focus:absolute group-focus:inline-block"
						fill="none"
						focusable="false"
						role="img"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</span>
			</Tag>
		</a>
	);
}
