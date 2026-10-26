import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        image: z.string(),
        imageWidth: z.number().optional(),
        imageHeight: z.number().optional(),
        price: z.string(),
        material: z.string(),
        description: z.string(),
        category: z.array(z.string()),
        url: z.string(),
        order: z.number(),
    }),
});

export const collections = { projects };
