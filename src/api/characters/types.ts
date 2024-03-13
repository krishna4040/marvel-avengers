import { z } from "zod";

export const CharacterSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  description: z.string().nullable(),
  modified: z.union([z.date(), z.string()]).transform(value => {
    if (typeof value === 'string') {
      return new Date(value);
    }
    return value;
  }),
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
    available: z.union([z.string(), z.number()]),
    returned: z.union([z.string(), z.number()]),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
  stories: z.object({
    available: z.union([z.string(), z.number()]),
    returned: z.union([z.string(), z.number()]),
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
    available: z.union([z.string(), z.number()]),
    returned: z.union([z.string(), z.number()]),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
  series: z.object({
    available: z.union([z.string(), z.number()]),
    returned: z.union([z.string(), z.number()]),
    collectionURI: z.string(),
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
});

export const ComicDataSchema = z.object({
  offset: z.union([z.string(), z.number()]),
  limit: z.union([z.string(), z.number()]),
  total: z.union([z.string(), z.number()]),
  count: z.union([z.string(), z.number()]),
  results: z.array(CharacterSchema),
});

export const MarvelApiResponseSchema = z.object({
  code: z.number(),
  status: z.string(),
  copyright: z.string(),
  attributionText: z.string(),
  attributionHTML: z.string(),
  data: ComicDataSchema,
  etag: z.string(),
});

export type Character = z.infer<typeof CharacterSchema>;
export type ComicData = z.infer<typeof ComicDataSchema>;
export type MarvelApiResponse = z.infer<typeof MarvelApiResponseSchema>;