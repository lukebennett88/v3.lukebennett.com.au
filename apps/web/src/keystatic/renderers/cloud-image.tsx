import { useMemo } from 'react';

type CloudImageProps = {
	/** The alt text for the image. */
	alt?: string;

	/** The caption for the image. */
	caption?: string;

	/**
	 * Hint for browser image decoding.
	 * - 'sync': Decode with DOM rendering.
	 * - 'async': Decode after DOM rendering.
	 * - 'auto': Browser decides.
	 */
	decoding?: 'sync' | 'async' | 'auto';

	/** The height of the image. */
	height: number | null;

	/**
	 * Browser loading behavior for the image.
	 * - 'eager': Load immediately.
	 * - 'lazy': Defer until near viewport.
	 */
	loading?: 'eager' | 'lazy';

	/**
	 * Sets loading priority for the image.
	 * When true, image loads eagerly and is given high priority.
	 * Useful for above-the-fold or large hero images.
	 * @default false
	 */
	priority?: boolean;

	/** The source URL of the image. */
	src: string;

	/** The width of the image. */
	width: number | null;
};

export function CloudImage({
	alt,
	caption,
	decoding,
	height,
	loading,
	priority = false,
	src,
	width,
	...consumerProps
}: CloudImageProps) {
	const srcSet = useMemo(
		() => generateSrcSet({ src, height, width }),
		[src, height, width],
	);

	const img = (
		<img
			{...consumerProps}
			alt={alt}
			decoding={decoding ?? priority ? 'async' : 'auto'}
			loading={loading ?? priority ? 'eager' : 'lazy'}
			role={alt ? undefined : 'presentation'}
			sizes={`(min-width: ${MAX_WIDTH}px) ${MAX_WIDTH}px, 100vw`}
			src={`${src}?width=${Math.min(width ?? 0, MAX_WIDTH)}&height=${
				height ?? 0
			}&fit=contain`}
			srcSet={srcSet}
			style={{
				objectFit: 'cover',
				maxWidth: width ? `${Math.min(width, MAX_WIDTH)}px` : '100%',
				maxHeight: height ? `${height}px` : '100%',
				aspectRatio:
					width && height ? `${(width / height).toFixed(2)}` : 'auto',
				width: '100%',
			}}
		/>
	);

	if (caption) {
		return (
			<figure>
				{img}
				<figcaption>{caption}</figcaption>
			</figure>
		);
	}

	return img;
}

function generateSrcSet({
	src,
	width,
	height,
}: {
	src: string;
	width: number | null;
	height: number | null;
}) {
	if (!width || !height) {
		return '';
	}

	const srcSet: Array<string> = [];

	BREAKPOINTS.forEach((breakpoint) => {
		DENSITIES.forEach((density) => {
			const scaledWidth = Math.round(breakpoint * density);
			const scaledHeight = Math.round((scaledWidth / width) * height);
			srcSet.push(
				`${src}?width=${scaledWidth}&height=${scaledHeight}&fit=contain ${scaledWidth}w`,
			);
		});
	});

	return srcSet.join(', ');
}

const MAX_WIDTH = 700;
const BREAKPOINTS = [300, 400, 500, 600, 700]; // Viewport widths to consider
const DENSITIES = [1, 1.5, 2]; // For 1x, 1.5x, 2x displays
