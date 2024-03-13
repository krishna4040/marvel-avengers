import { z } from 'zod';

const TextObjectSchema = z.object({
    type: z.string(),
    language: z.string(),
    text: z.string(),
});

const UrlSchema = z.object({
    type: z.string(),
    url: z.string(),
});

const SeriesSummarySchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
});

const ComicSummarySchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
});

const ComicDateSchema = z.object({
    type: z.string(),
    date: z.union([z.date(), z.string()]).transform(value => {
        if (typeof value === 'string') return new Date(value);
        return value;
    })
});

const ComicPriceSchema = z.object({
    type: z.string(),
    price: z.number(),
});

const ImageSchema = z.object({
    path: z.string(),
    extension: z.string(),
});

const CreatorSummarySchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
    role: z.string(),
});

const ResourceSchema = z.object({
    available: z.number(),
    returned: z.number(),
    collectionURI: z.string(),
    items: z.array(CreatorSummarySchema),
});

const EventSummarySchema = z.object({
    resourceURI: z.string(),
    name: z.string(),
});

const ResultSchema = z.object({
    id: z.number(),
    digitalId: z.number(),
    title: z.string(),
    issueNumber: z.number(),
    variantDescription: z.string(),
    description: z.string(),
    modified: z.union([z.date(), z.string()]).transform(value => {
        if (typeof value === 'string') return new Date(value);
        return value;
    }),
    isbn: z.string(),
    upc: z.string(),
    diamondCode: z.string(),
    ean: z.string(),
    issn: z.string(),
    format: z.string(),
    pageCount: z.number(),
    textObjects: z.array(TextObjectSchema),
    resourceURI: z.string(),
    urls: z.array(UrlSchema),
    series: SeriesSummarySchema,
    variants: z.array(ComicSummarySchema),
    collections: z.array(ComicSummarySchema),
    collectedIssues: z.array(ComicSummarySchema),
    // dates: z.array(ComicDateSchema),
    prices: z.array(ComicPriceSchema),
    thumbnail: ImageSchema,
    images: z.array(ImageSchema),
    // creators: ResourceSchema,
    // characters: ResourceSchema,
    // stories: ResourceSchema,
    // events: ResourceSchema,
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
});

export type Comic = z.infer<typeof ResultSchema>