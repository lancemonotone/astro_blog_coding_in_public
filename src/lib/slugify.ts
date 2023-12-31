export function slugify(text: string): string {
  if (!text) {
    throw new Error("Input cannot be empty.")
  }

  return text
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/--+/g, "-")
}
