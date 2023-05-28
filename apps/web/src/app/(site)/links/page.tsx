import { reader } from '~/keystatic/reader';

export default async function Page() {
	const links = await reader.collections.links.all();
	return (
		<div className="prose">
			<h1>Links</h1>
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
