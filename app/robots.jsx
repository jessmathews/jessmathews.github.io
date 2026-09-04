import {MetadataRoute} from 'next';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/sitemap.xml`,
  };
}
