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

const EventSummarySchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
});

export const SeriesSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    resourceURI: z.string(),
    urls: z.array(UrlSchema),
    startYear: z.string(),
    endYear: z.string(),
    rating: z.string(),
    modified: z.string(),
    thumbnail: ThumbnailSchema,
    comics: ResourceSchema,
    stories: ResourceSchema,
    events: ResourceSchema,
    characters: ResourceSchema,
    creators: ResourceSchema,
    next: ItemSchema,
    previous: ItemSchema,
});

export const SeriesArraySchema = z.object({
    offset: z.string(),
    limit: z.string(),
    total: z.string(),
    count: z.string(),
    results: z.array(SeriesSchema),
});

const MyResponseSchema = z.object({
    code: z.string(),
    status: z.string(),
    copyright: z.string(),
    attributionText: z.string(),
    attributionHTML: z.string(),
    data: SeriesArraySchema,
    etag: z.string(),
});