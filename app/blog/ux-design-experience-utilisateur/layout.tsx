import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Design : pourquoi l'expérience utilisateur est la clé d'un site internet efficace",
  description: "Découvrez pourquoi l'UX design est crucial pour votre site web. Apprenez comment une bonne expérience utilisateur peut augmenter vos conversions de 400% et fidéliser vos clients.",
  keywords: "UX design, expérience utilisateur, site web intuitif, conversion, interface utilisateur, design web, ergonomie",
  authors: [{ name: "Virgile Popote", url: "https://virgile.site" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgile.site"),
  alternates: {
    canonical: '/blog/ux-design-experience-utilisateur',
    languages: {
      'fr': '/blog/ux-design-experience-utilisateur',
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
    title: "UX Design : pourquoi l'expérience utilisateur est la clé d'un site internet efficace",
    description: "Découvrez pourquoi l'UX design est crucial pour votre site web. Apprenez comment une bonne expérience utilisateur peut augmenter vos conversions de 400% et fidéliser vos clients.",
    type: "article",
    url: "https://virgile.site/blog/ux-design-experience-utilisateur",
    siteName: "Virgile Popote - Développeur web freelance",
    locale: "fr_FR",
    authors: ["Virgile Popote"],
    publishedTime: "2025-01-10T00:00:00.000Z",
    modifiedTime: "2025-01-10T00:00:00.000Z",
    section: "UX Design",
    tags: ["UX design", "expérience utilisateur", "site web intuitif", "conversion", "interface utilisateur"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX Design : pourquoi l'expérience utilisateur est la clé d'un site internet efficace",
    description: "Découvrez pourquoi l'UX design est crucial pour votre site web. Apprenez comment une bonne expérience utilisateur peut augmenter vos conversions de 400%.",
    creator: "@virgilepop",
  },
  other: {
    "article:published_time": "2025-01-10T00:00:00.000Z",
    "article:modified_time": "2025-01-10T00:00:00.000Z",
    "article:author": "Virgile Popote",
    "article:section": "UX Design",
    "article:tag": "UX design, expérience utilisateur, site web intuitif, conversion, interface utilisateur",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
