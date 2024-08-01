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

  const callToAction = (emailBody) => {
    if (emailBody.includes('P.S.')) {
      return '';
    }

    return '<br />P.S. ' + _.sample([
      'Are you still using Drupal 7 and don’t know what’s involved to upgrade to Drupal 10? <a href="https://www.oliverdavies.uk/call">Book a Drupal 7 upgrade consultation call</a> or <a href="https://www.oliverdavies.uk/drupal-upgrade">an upgrade roadmap</a>.',
      'Need help or want another pair of eyes on your code? Book a <a href="https://www.oliverdavies.uk/call">1-on-1 consulting call</a> or an <a href="https://www.oliverdavies.uk/pair">online pair programming session</a> with a 100% money-back guarantee.',
      'If you\'re creating a new Drupal module, try my <a href="https://github.com/opdavies/drupal-module-template">free Drupal module template</a>.',
    ]);
  };

  const convertTag = (tag) => {
    const words = tag.split("-");
    const wordCount = words.length;

    if (wordCount > 1) {
      return _.upperFirst(_.camelCase(tag));
    }

    return _.lowerCase(tag);
  }

  return rss({
    title: 'Daily email list',
    description: 'A daily newsletter on software development, DevOps, community, and open-source.',
    site: import.meta.env.SITE,

    items: sortedEmails.slice(0, 1).map((email) => ({
      description: `
        <div style="max-width: 550px;">
          ${sanitizeHtml(parser.render(email.body))}
          ${callToAction(email.body)}
        </div>
      `,
      link: `${import.meta.env.SITE}/${email.data.permalink}`,
      pubDate: email.data.pubDate,
      title: `${email.data.title.trim()}`,
      customData: `
        <snippet>${email.data.snippet}</snippet>
        <tags>
          #dev ${email.data.tags.map(tag => `#${convertTag(tag)}`).join(' ')}
        </tags>`,
    }))
  });
};
