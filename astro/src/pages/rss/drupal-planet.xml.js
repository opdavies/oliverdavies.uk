import MarkdownIt from 'markdown-it';
import _ from 'lodash';
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { getCollection } from 'astro:content';

/**
 * Determines if a post should be shown based on its tags.
 */
const isDrupalPost = (email) => {
  if (email.data.tags?.includes('drupal-planet')) {
    return true;
  }

  return email.data.tags?.includes('drupal');
};

export async function get() {
  const emails = await getCollection('daily-email');

  const filteredEmails = Object.values(emails).filter(e => isDrupalPost(e));

  const sortedEmails = filteredEmails
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
      description: `
        <div style="max-width: 550px;">
          ${sanitizeHtml(parser.render(email.body))}
        </div>
      `,
      link: `${import.meta.env.SITE}/${email.data.permalink}`,
      pubDate: email.data.pubDate,
      title: `${email.data.title.trim()}`,
    }))
  });
};
