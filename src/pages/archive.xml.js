import MarkdownIt from 'markdown-it';
import _ from 'lodash';
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

  const callToAction = () => {
    return _.sample([
      'Do you need help or want another pair of eyes on your code? Book a <a href="https://www.oliverdavies.uk/call">1-on-1 consulting call</a> or an <a href="https://www.oliverdavies.uk/pair">online pair programming session</a> with a 100% money-back guarantee.',
      'If you\'re creating a new Drupal module, try my <a href="https://github.com/opdavies/drupal-module-template">free Drupal module template</a>.',
    ]);
  };

  return rss({
    title: 'Daily email list',
    description: 'A daily newsletter on software development, DevOps, community, and open-source.',
    site: import.meta.env.SITE,

    items: sortedEmails.slice(0, 1).map((email) => ({
      description: `
        <div style="max-width: 550px;">
          ${sanitizeHtml(parser.render(email.body))}
          <hr />
          <p>P.S. ${callToAction()}</p>
        </div>
      `,
      link: `${import.meta.env.SITE}/${email.data.permalink}`,
      pubDate: email.data.pubDate,
      title: `${email.data.title}`,
      customData: `<tags>${email.data.tags.map(tag => `<tag>#${tag}</tag>`)}</tags>`,
    }))
  });
};
