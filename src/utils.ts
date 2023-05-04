import { differenceInYears } from 'date-fns';

export function getSlugFromFile(file: string): string {
  const parts = file.replace('.md', '').split('/')

  return parts[parts.length - 1]
}

export const numberOfYears = differenceInYears(new Date(), new Date(2007, 0, 1));
