import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://virgile.site'

  // Routes statiques
  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Articles de blog (à dynamiser plus tard si besoin via une API ou CMS)
  const blogPosts = [
    'ux-design-experience-utilisateur',
    'creer-site-vitrine-guadeloupe',
    'faire-site-internet-guadeloupe',
    'seo-local-guadeloupe',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts]
}
