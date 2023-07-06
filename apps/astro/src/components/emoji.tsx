export type EmojiProps = {
	children: React.ReactNode;
	'aria-label': string;
};

export function Emoji(props: EmojiProps) {
	return <span {...props} role="img" />;
}
