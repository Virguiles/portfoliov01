import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développeur web freelance en Guadeloupe | Sites internet SEO local",
  description:
    "Développeur web freelance basé en Guadeloupe. Création de sites vitrines et applications sur-mesure, optimisation SEO local pour entreprises, artisans et PME guadeloupéennes.",
  alternates: {
    canonical: "/guadeloupe/",
  },
  openGraph: {
    title: "Développeur web freelance en Guadeloupe | Sites internet SEO local",
    description:
      "Création de sites internet modernes et optimisés SEO pour les entreprises en Guadeloupe. Sites vitrines, applications sur-mesure et référencement local.",
    url: "https://virgile.site/guadeloupe/",
    type: "website",
    locale: "fr_FR",
    siteName: "Virgile Popote - Développeur Web Guadeloupe",
    images: [
      {
        url: "https://virgile.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Développeur web freelance en Guadeloupe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur web freelance en Guadeloupe | Sites internet SEO local",
    description:
      "Création de sites internet modernes et optimisés SEO pour les entreprises en Guadeloupe.",
    images: ["https://virgile.site/og-image.jpg"],
  },
  keywords: [
    "développeur web Guadeloupe",
    "création site internet Guadeloupe",
    "SEO local Guadeloupe",
    "site vitrine Guadeloupe",
    "développeur freelance Guadeloupe",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function GuadeloupeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
