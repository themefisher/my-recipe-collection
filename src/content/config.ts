import { z, defineCollection } from "astro:content";

const recipesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
