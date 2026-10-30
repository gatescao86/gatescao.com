import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishedEssays } from '../lib/content';

export async function GET(context: APIContext) {
	const essays = await getPublishedEssays();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site!,
		items: essays.map((essay) => ({
			title: essay.data.title,
			description: essay.data.description,
			pubDate: essay.data.pubDate,
			link: `/essays/${essay.id}/`,
			categories: essay.data.tags,
		})),
	});
}
