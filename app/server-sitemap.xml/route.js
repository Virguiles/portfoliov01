import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  // Pour une page statique simple, ceci peut rester minimaliste
  // Si vous ajoutez plus tard du contenu dynamique (projets, articles, etc.)
  // vous pourrez l'enrichir ici
  const fields = [
    {
      loc: 'https://virgilepopote.com',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
  ];

  return getServerSideSitemap(fields);
}

// Nécessaire pour Next.js 13+
export const dynamic = 'force-dynamic';
