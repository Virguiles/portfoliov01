import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire un site internet en Guadeloupe : Guide complet 2025 | Virgile Popote",
  description: "Guide complet pour faire un site internet en Guadeloupe. Découvrez les étapes, coûts et conseils pour créer un site web professionnel qui attire des clients locaux. Développeur web freelance expert.",
  keywords: "faire site internet Guadeloupe, créer site web Guadeloupe, développeur web freelance Guadeloupe, site vitrine Guadeloupe, coût site internet Guadeloupe, agence web Guadeloupe",
  authors: [{ name: "Virgile Popote", url: "https://virgile.site" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgile.site"),
  alternates: {
    canonical: '/blog/faire-site-internet-guadeloupe',
    languages: {
      'fr': '/blog/faire-site-internet-guadeloupe',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Faire un site internet en Guadeloupe : Guide complet 2025",
    description: "Guide complet pour créer un site internet professionnel en Guadeloupe. Étapes, coûts et conseils d'expert pour réussir votre présence en ligne.",
    type: "article",
    url: "https://virgile.site/blog/faire-site-internet-guadeloupe",
    siteName: "Virgile Popote - Développeur web freelance",
    locale: "fr_FR",
    authors: ["Virgile Popote"],
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    section: "Guide développement web",
    tags: ["faire site internet", "Guadeloupe", "développeur web", "site vitrine", "coût site web", "SEO local"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faire un site internet en Guadeloupe : Guide complet 2025",
    description: "Guide complet pour créer un site internet professionnel en Guadeloupe. Étapes, coûts et conseils d'expert.",
    creator: "@virgilepop",
  },
  other: {
    "article:published_time": "2025-01-15T00:00:00.000Z",
    "article:modified_time": "2025-01-15T00:00:00.000Z",
    "article:author": "Virgile Popote",
    "article:section": "Guide développement web",
    "article:tag": "faire site internet, Guadeloupe, développeur web freelance, site vitrine, coût site web, SEO local",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
