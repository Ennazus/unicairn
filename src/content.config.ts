import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
	loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		heroImageCaption: z.string().optional(),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		url: z.string().url().optional(),
		tags: z.array(z.string()).default([]),
		type: z.enum(['project', 'publication', 'dataset', 'tool']).default('project'),
		image: z.optional(image()),
	}),
});

export const collections = { research, work };
