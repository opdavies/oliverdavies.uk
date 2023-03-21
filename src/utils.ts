export function getSlugFromFile(file: string): string {
  const parts = file.replace('.md', '').split('/')

  return parts[parts.length - 1]
}
