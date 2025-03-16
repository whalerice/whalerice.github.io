import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        // rawbody: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
        seo: z.object({
          title: z.string(),
          description: z.string(),
          meta: z.array(z.record(z.string(), z.any())),
          link: z.array(z.record(z.string(), z.any())),
        }),
      }),
    }),
  },
});
