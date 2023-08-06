type Post = {
	slug: string;
	entry: {
		title: string;
		publishedAt: string;
	};
};

export function sortPosts<P extends Post>(posts: P[]) {
	return posts.sort(
		(a, b) =>
			new Date(b.entry.publishedAt).getTime() -
			new Date(a.entry.publishedAt).getTime(),
	);
}

export function formatToAustralianDate(date: string) {
	const [day, month, year] = new Intl.DateTimeFormat('en-AU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
		.format(new Date(date))
		.split(' ');
	return `${day} ${month} ${year}`;
}
