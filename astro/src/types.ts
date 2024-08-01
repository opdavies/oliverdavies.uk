type Episode = {
  body: string;
  data: {
    date: Date;
    draft?: boolean;
    guests: Array<string>;
    topic: string;
  };
  id: string;
}

export type { Episode }
