import rss from '@astrojs/rss';

export const get = () => rss({
	title: 'Daily list',
	description: '',
	site: 'https://www.oliverdavies.uk',
	items: import.meta.glob('./daily-emails/**/*.{md,mdx}'),
})
