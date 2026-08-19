import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";

const baseUrl = "https://virgile.site";

export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` doit refléter une vraie modification de contenu. En mettant
  // `new Date()`, chaque déploiement annonçait à Google que toutes les pages
  // avaient changé : le signal devient bruité et Google finit par l'ignorer.
  // On date donc les pages statiques à leur dernière révision réelle, et le
  // blog à la date du dernier article publié.
  const staticLastModified = new Date("2026-08-18");
  const latestPostDate = blogPosts.reduce((latest, post) => {
    const d = new Date(post.updatedAt || post.date);
    return d > latest ? d : latest;
  }, new Date(0));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guadeloupe/`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projets/gwadalerte/`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales/`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/confidentialite/`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt || post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
