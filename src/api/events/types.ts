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
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(ItemSchema),
});


const ResultSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    resourceURI: z.string(),
    urls: z.array(UrlSchema),
    // modified: z.union([z.date(), z.string()]).transform(value => {
    //     if (typeof value === 'string') return new Date(value);
    //     return value;
    // }),
    // start: z.union([z.date(), z.string()]).transform(value => {
    //     if (typeof value === 'string') return new Date(value);
    //     return value;
    // }),
    // end: z.union([z.date(), z.string()]).transform(value => {
    //     if (typeof value === 'string') return new Date(value);
    //     return value;
    // }),
    thumbnail: ThumbnailSchema,
    comics: ResourceSchema,
    stories: ResourceSchema,
    series: ResourceSchema,
    characters: ResourceSchema,
    creators: ResourceSchema
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

export type Event = z.infer<typeof ResultSchema>