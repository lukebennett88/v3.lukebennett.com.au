import { Image } from '@unpic/react';

type CloudImageProps = {
	alt: string;
	caption?: string;
	height: number;
	src: string;
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
			style={{ aspectRatio: width / height }}
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
