import z from "zod";

const CharacterSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  modified: z.date(),
  resourceURI: z.string(),
  urls: z.array(
    z.object({
      type: z.string(),
      url: z.string(),
    })
  ),
  thumbnail: z.object({
    path: z.string(),
    extension: z.string(),
  }),
  comics: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
  stories: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
        type: z.string(),
      })
    ),
  }),
  events: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
  series: z.object({
    available: z.string(),
    returned: z.string(),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
});
export const CharactersSchema = z.array(CharacterSchema);
export type Character = z.infer<typeof CharacterSchema>;