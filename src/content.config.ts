import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const essays = defineCollection({
	loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().default(''),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().default(''),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.enum(['in-progress', 'paused', 'done']).default('in-progress'),
		url: z.string().url().optional(),
		repo: z.string().url().optional(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { essays, projects };
