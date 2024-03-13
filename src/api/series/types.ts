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
    available: z.union([z.string(), z.number()]),
    returned: z.union([z.string(), z.number()]),
    collectionURI: z.string(),
    items: z.array(ItemSchema),
});

const ResultSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string().nullable(),
    resourceURI: z.string(),
    urls: z.array(UrlSchema),
    // startyear, endyear num
    rating: z.string(),
    thumbnail: ThumbnailSchema,
    comics: ResourceSchema,
    stories: ResourceSchema,
    events: ResourceSchema,
    characters: ResourceSchema,
    creators: ResourceSchema,
});

const DataSchema = z.object({
    offset: z.number(),
    limit: z.number(),
    total: z.number(),
    count: z.number(),
    results: z.array(ResultSchema),
});

export const MyResponseSchema = z.object({
    code: z.number(),
    status: z.string(),
    copyright: z.string(),
    attributionText: z.string(),
    attributionHTML: z.string(),
    data: DataSchema,
    etag: z.string(),
});

export type Series = z.infer<typeof ResultSchema>