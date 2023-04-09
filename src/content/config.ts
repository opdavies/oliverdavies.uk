import { defineCollection, z } from 'astro:content';

const talkCollection = defineCollection({
  schema: z.object({
    description: z.string(),
    events: z.array(z.object({
      date: z.string(),
      location: z.string().optional(),
      name: z.string(),
      online: z.boolean().optional(),
    })),
    title: z.string(),
    // TODO: add SpeakerDeck
    // TODO: add Video
  }),
});

export const collections = {
  'talk': talkCollection,
};
