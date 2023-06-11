import { default as Link } from 'next/link';

import { reader } from '~/keystatic/reader';

export default async function Page() {
	const links = await reader.collections.links.all();
	return (
		<div className="prose dark:prose-invert">
			<h1>Links</h1>
			<p className="[text-wrap:balance]">
				Interesting links with limited commentary.
				<br />
				For longer form content,{' '}
				<Link href="/posts">check out the posts section</Link> instead.
			</p>
			<ul>
				{links.map((link) => (
					<li key={link.slug}>
						<a href={`/links/${link.slug}`}>{link.entry.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
