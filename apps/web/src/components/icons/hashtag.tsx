export function HashtagIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			role="img"
			stroke="currentColor"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
