import { MetadataRoute } from 'next';

export default function sitemap() {
    return [
        {
            url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}   