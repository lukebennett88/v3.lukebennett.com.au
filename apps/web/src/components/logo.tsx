export function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			fill="currentColor"
			fillRule="evenodd"
			focusable="false"
			role="img"
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-4.836l-4.8-2.4v-12l-2.4 1.2v12l7.2 3.6 7.2-3.6v-4.8l-2.4-1.2 2.4-1.2v-4.8l-7.2-3.6v16.8zm4.8-4.8l-2.4-1.2v4.8l2.4-1.2v-2.4zm0-7.2l-2.4-1.2v4.8l2.4-1.2v-2.4z" />
		</svg>
	);
}
