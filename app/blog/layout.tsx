import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Conseils développement web en Guadeloupe | Virgile Popote",
  description: "Découvrez mes conseils pour développer votre présence en ligne en Guadeloupe. Articles sur la création de sites web, le SEO local et l'UX design.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Conseils développement web en Guadeloupe",
    description: "Conseils pratiques pour améliorer votre visibilité en ligne en Guadeloupe. Création de sites web, SEO local et UX design.",
    url: "https://virgile.site/blog",
    type: "website",
    locale: "fr_FR",
    siteName: "Virgile Popote - Développeur Web Guadeloupe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Conseils développement web en Guadeloupe",
    description: "Conseils pratiques pour améliorer votre visibilité en ligne en Guadeloupe.",
  },
  keywords: [
    "blog développement web",
    "conseils sites internet",
    "SEO Guadeloupe",
    "création site web",
    "développeur web freelance",
    "UX design",
    "référencement local"
  ],
  authors: [{ name: "Virgile Popote" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
