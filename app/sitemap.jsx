import { MetadataRoute } from 'next';

export default function sitemap() {
    return [
        {
            url: process.env.VERCEL_PROJECT_PRODUCTION_URL || "null",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}   