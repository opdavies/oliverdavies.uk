import MarkdownIt from 'markdown-it';
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';

export async function get() {
  const emails = await getCollection('daily-email');

  const sortedEmails = Object.values(emails)
    .sort((a, b) =>
      new Date(b.data.pubDate).valueOf() -
      new Date(a.data.pubDate).valueOf()
    );

  const parser = new MarkdownIt();

  return rss({
    title: 'Daily email list',
    description: 'A daily newsletter on software development, DevOps, community, and open-source.',
    site: import.meta.env.SITE,

    items: sortedEmails.slice(0, 1).map((email) => ({
      description: `<div style="max-width: 550px;">${sanitizeHtml(parser.render(email.body))}</div>`,
      link: `${import.meta.env.SITE}/${email.data.permalink}`,
      pubDate: email.data.pubDate,
      title: `${email.data.title}`,
      customData: `<tags>${email.data.tags.map(tag => `<tag>#${tag}</tag>`)}</tags>`,
    }))
  });
};
