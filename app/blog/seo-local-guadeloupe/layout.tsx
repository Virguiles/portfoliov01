import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent",
  description: "Optimisez votre visibilité locale en Guadeloupe avec des techniques SEO adaptées à votre territoire. Apprenez à apparaître dans les recherches 'près de moi' et attirer des clients locaux.",
  keywords: "SEO Guadeloupe, référencement local, Google My Business, visibilité locale, entreprise locale, marketing local, Guadeloupe",
  authors: [{ name: "Virgile Popote", url: "https://virgile.site" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgile.site"),
  alternates: {
    canonical: '/blog/seo-local-guadeloupe',
    languages: {
      'fr': '/blog/seo-local-guadeloupe',
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
    title: "SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent",
    description: "Optimisez votre visibilité locale en Guadeloupe avec des techniques SEO adaptées à votre territoire. Apprenez à apparaître dans les recherches 'près de moi' et attirer des clients locaux.",
    type: "article",
    url: "https://virgile.site/blog/seo-local-guadeloupe",
    siteName: "Virgile Popote - Développeur web freelance",
    locale: "fr_FR",
    authors: ["Virgile Popote"],
    publishedTime: "2025-01-05T00:00:00.000Z",
    modifiedTime: "2025-01-05T00:00:00.000Z",
    section: "SEO",
    tags: ["SEO Guadeloupe", "référencement local", "Google My Business", "visibilité locale", "marketing local"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent",
    description: "Optimisez votre visibilité locale en Guadeloupe avec des techniques SEO adaptées à votre territoire. Apprenez à apparaître dans les recherches 'près de moi'.",
    creator: "@virgilepop",
  },
  other: {
    "article:published_time": "2025-01-05T00:00:00.000Z",
    "article:modified_time": "2025-01-05T00:00:00.000Z",
    "article:author": "Virgile Popote",
    "article:section": "SEO",
    "article:tag": "SEO Guadeloupe, référencement local, Google My Business, visibilité locale, marketing local",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
