import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne",
  description: "Découvrez comment créer un site vitrine efficace en Guadeloupe. 5 conseils pratiques pour développer votre activité locale et attirer de nouveaux clients. Expert développeur web freelance.",
  keywords: "site vitrine Guadeloupe, création site internet, développeur web Guadeloupe, présence en ligne, entreprise locale, SEO local",
  authors: [{ name: "Virgile Popote", url: "https://virgile.site" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgile.site"),
  alternates: {
    canonical: '/blog/creer-site-vitrine-guadeloupe',
    languages: {
      'fr': '/blog/creer-site-vitrine-guadeloupe',
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
    title: "Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne",
    description: "Découvrez comment créer un site vitrine efficace en Guadeloupe. 5 conseils pratiques pour développer votre activité locale et attirer de nouveaux clients.",
    type: "article",
    url: "https://virgile.site/blog/creer-site-vitrine-guadeloupe",
    siteName: "Virgile Popote - Développeur web freelance",
    locale: "fr_FR",
    authors: ["Virgile Popote"],
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2025-01-15T00:00:00.000Z",
    section: "Développement web",
    tags: ["site vitrine", "Guadeloupe", "création site internet", "développeur web", "présence en ligne"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne",
    description: "Découvrez comment créer un site vitrine efficace en Guadeloupe. 5 conseils pratiques pour développer votre activité locale.",
    creator: "@virgilepop",
  },
  other: {
    "article:published_time": "2025-01-15T00:00:00.000Z",
    "article:modified_time": "2025-01-15T00:00:00.000Z",
    "article:author": "Virgile Popote",
    "article:section": "Développement web",
    "article:tag": "site vitrine, Guadeloupe, création site internet, développeur web, présence en ligne",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
