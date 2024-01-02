import type { CollectionEntry } from "astro:content"

export function sortPosts(
  posts: CollectionEntry<"blog">[],
  sort?: string,
) {
  return posts.sort((a, b) => {
    if (sort === "rand") {
      return Math.random() - 0.5
    }
    if (sort === "asc") {
      return (
        new Date(a.data.date).getTime() -
        new Date(b.data.date).getTime()
      )
    }
    return (
      new Date(b.data.date).getTime() -
      new Date(a.data.date).getTime()
    )
  })
}
