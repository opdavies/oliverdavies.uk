import rss from '@astrojs/rss';

const emailImportResult = import.meta.glob('./daily-emails/**/*.md', { eager: true });
const emails = Object.values(emailImportResult)
  .sort((a, b) =>
    new Date(b.frontmatter.pubDate).valueOf() -
    new Date(a.frontmatter.pubDate).valueOf()
  )

export const get = () => rss({
    title: 'Daily list',
    description: 'A daily newsletter on software development, DevOps, community, and open-source.',
    site: import.meta.env.SITE,
    items: emails.map((email) => ({
      description: email.compiledContent(),
      link: email.url,
      pubDate: email.frontmatter.pubDate,
      title: email.frontmatter.title,
    }))
  });
