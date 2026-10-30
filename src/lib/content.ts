import { getCollection, type CollectionEntry } from 'astro:content';

function isPublished<T extends { data: { draft: boolean } }>(entry: T): boolean {
	return import.meta.env.PROD ? !entry.data.draft : true;
}

export async function getPublishedEssays(): Promise<CollectionEntry<'essays'>[]> {
	const essays = await getCollection('essays', isPublished);
	return essays.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedProjects(): Promise<CollectionEntry<'projects'>[]> {
	const projects = await getCollection('projects', isPublished);
	return projects.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function featuredProject(
	projects: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'> | undefined {
	return projects.find((project) => project.data.featured) ?? projects[0];
}

export const STATUS_LABEL = {
	'in-progress': 'In progress',
	paused: 'Paused',
	done: 'Done',
} as const;
