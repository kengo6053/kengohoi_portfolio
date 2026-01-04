import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.union([z.string(), z.array(z.string())]),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			// 追加フィールド
			subtitle: z.string().optional(),
			productionDate: z.string().optional(),
			video: z.string().optional(),
			role: z.string().optional(),
			techs: z.array(z.string()).optional(),
			classification: z.enum(['programming', 'visual']).optional(),
			order: z.number().optional(),
			draft: z.boolean().optional(),
			links: z.array(z.object({
				label: z.string(),
				url: z.string(),
			})).optional(),
		}),
	}),
};
