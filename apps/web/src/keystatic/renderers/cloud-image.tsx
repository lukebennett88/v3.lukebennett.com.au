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
			src={src}
			width={width}
			height={height}
			style={{ aspectRatio: width / height }}
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
