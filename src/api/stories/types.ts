import { z } from 'zod';

const UrlSchema = z.object({
  type: z.string(),
  url: z.string(),
});

const ItemSchema = z.object({
  resourceURI: z.string(),
  name: z.string(),
});

const ThumbnailSchema = z.object({
  path: z.string(),
  extension: z.string(),
});

const ResourceSchema = z.object({
  available: z.string(),
  returned: z.string(),
  collectionURI: z.string(),
  items: z.array(ItemSchema),
});

const ResultSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  resourceURI: z.string(),
  type: z.string(),
  modified: z.string(),
  thumbnail: ThumbnailSchema,
  comics: ResourceSchema,
  series: ResourceSchema,
  events: ResourceSchema,
  characters: ResourceSchema,
  creators: ResourceSchema,
  originalissue: ItemSchema,
});

const DataSchema = z.object({
  offset: z.string(),
  limit: z.string(),
  total: z.string(),
  count: z.string(),
  results: z.array(ResultSchema),
});

const MyResponseSchema = z.object({
  code: z.string(),
  status: z.string(),
  copyright: z.string(),
  attributionText: z.string(),
  attributionHTML: z.string(),
  data: DataSchema,
  etag: z.string(),
});

export type Story = z.infer<typeof ResultSchema>