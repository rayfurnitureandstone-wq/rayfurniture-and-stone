import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    banner: z.string().optional(),
    category: z.string().default('Artikel'),
    draft: z.boolean().default(false),
    author: z.string().default('Ray Furniture & Stone'),
  }),
});

export const collections = { posts };