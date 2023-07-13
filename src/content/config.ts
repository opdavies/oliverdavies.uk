import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    date: z.date().or(z.null()),
    draft: z.boolean().optional(),
    excerpt: z.string().or(z.null()).optional(),
    promoted: z.boolean().optional(),
    title: z.string(),
    tweets: z.boolean().optional(),
  }),
});

const dailyEmailCollection = defineCollection({
  schema: z.object({
    pubDate: z.date(),
    permalink: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

const talkCollection = defineCollection({
  schema: z.object({
    description: z.string(),
    events: z.array(
      z.object({
        date: z.string(),
        location: z.string().optional(),
        name: z.string(),
        online: z.boolean().optional(),
        url: z.string().optional(),
      })
    ),
    speakerdeck: z
      .object({
        id: z.string(),
        ratio: z.string(),
        url: z.string(),
      })
      .optional(),
    title: z.string(),
    video: z
      .object({
        id: z.string(),
        type: z.enum(["vimeo", "youtube"]),
      })
      .or(z.null())
      .optional(),
  }),
});

const testimonialCollection = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.string().optional(),
    image: z.string().or(z.null()),
    name: z.string(),
    tagline: z.string().or(z.null()),
    text: z.string(),
    url: z.string().or(z.null()),
  }),
});


export const collections = {
  "daily-email": dailyEmailCollection,
  blog: blogCollection,
  talk: talkCollection,
  testimonial: testimonialCollection,
};
