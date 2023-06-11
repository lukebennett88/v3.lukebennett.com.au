import { ImageResponse } from 'next/server';

/** Route segment config */
export const runtime = 'edge';

/** Image metadata */
export const size = {
	width: 32,
	height: 32,
};

export const contentType = 'image/png';

/** Image generation */
export default function Icon() {
	return new ImageResponse(
		(
			/** ImageResponse JSX element */
			<svg fillRule="evenodd" fill="#0f766e" viewBox="0 0 24 24">
				<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-4.836l-4.8-2.4v-12l-2.4 1.2v12l7.2 3.6 7.2-3.6v-4.8l-2.4-1.2 2.4-1.2v-4.8l-7.2-3.6v16.8zm4.8-4.8l-2.4-1.2v4.8l2.4-1.2v-2.4zm0-7.2l-2.4-1.2v4.8l2.4-1.2v-2.4z" />
			</svg>
		),
		/** ImageResponse options */
		{
			/**
			 * For convenience, we can re-use the exported icons size metadata
			 * config to also set the ImageResponse's width and height.
			 */
			...size,
		}
	);
}
