import { clsx } from 'clsx';
import { default as NextLink } from 'next/link';

type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ className, ...consumerProps }: LinkProps) {
	return (
		<NextLink
			{...consumerProps}
			className={clsx(
				'-mx-0.5 rounded-md px-0.5 decoration-teal-700 underline-offset-2 transition-colors hover:bg-teal-700/50',
				className
			)}
		/>
	);
}
