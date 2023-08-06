import { component, fields } from '@keystatic/core';

// import { Tweet } from 'react-tweet';

export const tweet = component({
	preview: ({ fields }) => (
		<>
			{fields.id.value}
			{/* <Tweet id={fields.id.value} /> */}
		</>
	),
	label: 'Tweet',
	schema: {
		id: fields.text({
			label: 'Tweet ID',
		}),
	},
	chromeless: false,
});
