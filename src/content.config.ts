// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const anime = defineCollection({ loader: glob({ pattern: './collections/anime/*.md' }), schema: z.object({
  title: z.string(),
  description: z.string().optional(),
  releaseDate: z.string().optional(),
  genres: z.array(z.string()).optional(),
  rating: z.number().min(0).max(10).optional(),
  image: z.string().optional(),
}) });
const books = defineCollection({ /* ... */ });
const cardGames = defineCollection({ /* ... */ });
const manga = defineCollection({ /* ... */ });
const projects = defineCollection({ /* ... */ });
const videoGames = defineCollection({ /* ... */ });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { anime, books, cardGames, manga, projects, videoGames };