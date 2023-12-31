import { defineCollection, z } from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(), // or z.date() if you want to enforce date objects
      author: z.string(),
      image: z.object({
        // I wish to prefix '../../assets/images/' to the image filename
        obj: image().refine((img) => img.width >= 600, {
          message: "Image must be at least 600px wide.",
        }),
        alt: z.string(),
      }),
      description: z.string(),
      draft: z.boolean(),
      category: z.string(),
    }),
})

export const collections = {
  blog: blogCollection,
}
