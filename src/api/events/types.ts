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

const NextPreviousSchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
});

const ResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    resourceURI: z.string(),
    urls: z.array(UrlSchema),
    modified: z.string(),
    start: z.string(),
    end: z.string(),
    thumbnail: ThumbnailSchema,
    comics: ResourceSchema,
    stories: ResourceSchema,
    series: ResourceSchema,
    characters: ResourceSchema,
    creators: ResourceSchema,
    next: NextPreviousSchema,
    previous: NextPreviousSchema,
});

const DataSchema = z.object({
    offset: z.string(),
    limit: z.string(),
    total: z.string(),
    count: z.string(),
    results: z.array(ResultSchema),
});

export const MyResponseSchema = z.object({
    code: z.string(),
    status: z.string(),
    copyright: z.string(),
    attributionText: z.string(),
    attributionHTML: z.string(),
    data: DataSchema,
    etag: z.string(),
});

export type Event = z.infer<typeof ResultSchema>