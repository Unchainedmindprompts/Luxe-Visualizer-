import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.inwbasecamp.com'
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Articles
    {
      url: `${baseUrl}/articles/the-60-minute-rule`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/only-one-place-made-us-stay`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/best-time-to-move-to-coeur-dalene`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/dog-friendly-living-inland-northwest`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/four-seasons`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/geographic-jackpot`,
      lastModified: new Date('2026-02-01').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
