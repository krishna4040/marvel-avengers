import { z } from 'zod';

export const comicSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().optional(),
    modified: z.date().optional(),
    format: z.string().optional(),
    pageCount: z.number().optional(),
    urls: z.array(z.object({ type: z.string().optional(), url: z.string().optional() })).optional(),
    series: z.object({
        resourceURI: z.string().optional(),
        name: z.string().optional(),
    }).optional(),
    collections: z.array(
        z.object({
            resourceURI: z.string().optional(),
            name: z.string().optional(),
        })).optional(),
    prices: z.array(
        z.object({
            type: z.string().optional(),
            price: z.number().optional(),
        })).optional(),
    thumbnail: z.object({
        path: z.string().optional(),
        extension: z.string().optional(),
    }).optional(),
    images: z.array(
        z.object({
            path: z.string().optional(),
            extension: z.string().optional(),
        })).optional(),
    creators: z.object({
        available: z.number().optional(),
        returned: z.number().optional(),
        collectionURI: z.string().optional(),
        items: z.array(
            z.object({
                resourceURI: z.string().optional(),
                name: z.string().optional(),
                role: z.string().optional(),
            })).optional(),
    }).optional(),
    characters: z.object({
        available: z.number().optional(),
        returned: z.number().optional(),
        collectionURI: z.string().optional(),
        items: z.array(
            z.object({
                resourceURI: z.string().optional(),
                name: z.string().optional(),
                role: z.string().optional(),
            })).optional(),
    }).optional(),
    stories: z.object({
        available: z.number().optional(),
        returned: z.number().optional(),
        collectionURI: z.string().optional(),
        items: z.array(
            z.object({
                resourceURI: z.string().optional(),
                name: z.string().optional(),
                type: z.string().optional(),
            })).optional(),
    }).optional(),
    events: z.object({
        available: z.number().optional(),
        returned: z.number().optional(),
        collectionURI: z.string().optional(),
        items: z.array(
            z.object({
                resourceURI: z.string().optional(),
                name: z.string().optional(),
            })).optional(),
    }).optional(),
});

export const comicsSchema = z.array(comicSchema)

export type Comic = z.infer<typeof comicSchema>