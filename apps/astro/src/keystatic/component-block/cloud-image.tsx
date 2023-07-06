import { component, fields } from '@keystatic/core';

import { CloudImage } from '~/keystatic/renderers/cloud-image';

export const cloudImage = component({
	preview: ({ fields }) => (
		<CloudImage
			alt={fields.alt.value}
			caption={fields.caption.value}
			height={fields.height.value!}
			src={fields.src.value!}
			width={fields.width.value!}
		/>
	),
	label: 'Cloud image',
	schema: {
		src: fields.url({
			label: 'Source',
			validation: {
				isRequired: true,
			},
		}),
		alt: fields.text({
			label: 'Alt text (Optional)',
			description:
				'Include an alt text description or leave blank for decorative images',
		}),
		caption: fields.text({
			label: 'Caption (Optional)',
			description: 'Include a caption for the image',
		}),
		width: fields.integer({
			label: 'Width',
			description: 'Width of the image in pixels',
			validation: {
				isRequired: true,
				min: 1,
				max: Infinity,
			},
		}),
		height: fields.integer({
			label: 'Height',
			description: 'Height of the image in pixels',
			validation: {
				isRequired: true,
				min: 1,
				max: Infinity,
			},
		}),
	},
	chromeless: false,
});
