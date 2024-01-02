import type { CollectionEntry } from "astro:content"
import { slugify } from "./slugify.ts"

interface Props {
  data: {
    date: Date
    draft?: boolean
    category?: string
    author?: string
  }
}

export function filterPosts(
  post: CollectionEntry<"blog">,
  filterDraft = true,
  filterFuture = true,
  filterCategory?: string,
  filterAuthor?: string,
) {
  const { date, draft, category, author } =
    post.data as Props["data"]

  // console.log(
  //   "FP input",
  //   post.data.author,
  //   filterDraft,
  //   filterFuture,
  //   filterCategory,
  //   filterAuthor,
  // )
  //
  // author &&
  //   console.log(
  //     "FP filterAuthor",
  //     filterAuthor,
  //     slugify(author),
  //     slugify(author) === filterAuthor,
  //   )
  //
  // category &&
  //   console.log(
  //     "FP filterCategory",
  //     filterCategory,
  //     slugify(category),
  //     slugify(category) === filterCategory,
  //   )

  // filter out posts that don't match the author
  if (
    author &&
    filterAuthor &&
    filterAuthor !== slugify(author)
  )
    return false

  // filter out posts that don't match the category
  if (
    category &&
    filterCategory &&
    filterCategory !== slugify(category)
  )
    return false

  // filter out drafts
  if (filterDraft && draft) return false
  // filter out future posts
  if (filterFuture && new Date(date) > new Date())
    return false

  return true
}
