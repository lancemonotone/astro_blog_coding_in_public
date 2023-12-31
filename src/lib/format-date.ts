export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-us", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
