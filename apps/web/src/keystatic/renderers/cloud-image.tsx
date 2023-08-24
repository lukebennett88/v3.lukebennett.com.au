import { Image } from '@unpic/react';

type CloudImageProps = {
	/** The alt text for the image. */
	alt: string;

	/** The caption for the image. */
	caption?: string;

	/** The height of the image. */
	height: number;

	/** The source URL of the image. */
	src: string;

	/** The width of the image. */
	width: number;
};

export function CloudImage({
	alt,
	caption,
	height,
	src,
	width,
}: CloudImageProps) {
	const img = (
		<Image
			alt={alt}
			height={height}
			src={src}
			style={height && width ? { aspectRatio: width / height } : undefined}
			width={width}
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
