import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postsCollection,
};