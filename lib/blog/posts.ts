import type { Metadata } from "next";

type Locale = "fr" | "en";

export type BlogPost = {
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  excerpt: string;
  excerptEn?: string;
  date: string; // ISO string
  updatedAt?: string; // ISO string
  readTime: string;
  keywords: string[];
  keywordsEn?: string[];
  section?: string;
  featured?: boolean;
};

const baseUrl = "https://virgile.site";
const defaultOgImage = `${baseUrl}/og-image.jpg`;

export const blogPosts: BlogPost[] = [
  {
    slug: "faire-site-internet-guadeloupe",
    title: "Faire un site internet en Guadeloupe : Guide complet 2025",
    titleEn: "Building a website in Guadeloupe: Complete Guide 2025",
    description:
      "Guide complet pour faire un site internet en Guadeloupe. Étapes, coûts et conseils pour créer un site web professionnel qui attire des clients locaux.",
    excerpt:
      "Vous cherchez à faire un site internet en Guadeloupe ? Découvrez comment créer un site web professionnel qui attire des clients locaux et booste votre visibilité en ligne.",
    date: "2025-03-12",
    updatedAt: "2025-03-12",
    readTime: "8 min",
    keywords: [
      "faire site internet",
      "Guadeloupe",
      "guide complet",
      "développeur web freelance",
      "coût site web",
    ],
    keywordsEn: [
      "build website",
      "Guadeloupe",
      "complete guide",
      "freelance web developer",
      "website cost",
    ],
    section: "Développement web",
    featured: true,
  },
  {
    slug: "creer-site-vitrine-guadeloupe",
    title: "Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne",
    titleEn:
      "Creating a showcase website in Guadeloupe: 5 tips for successful online presence",
    description:
      "Découvrez comment créer un site vitrine efficace en Guadeloupe. 5 conseils pratiques pour développer votre activité locale et attirer de nouveaux clients.",
    excerpt:
      "En 2025, avoir un site vitrine professionnel n'est plus une option pour les entreprises en Guadeloupe. Voici 5 conseils clés pour réussir votre présence en ligne.",
    date: "2025-04-28",
    updatedAt: "2025-04-28",
    readTime: "5 min",
    keywords: [
      "site vitrine",
      "Guadeloupe",
      "création site internet",
      "développeur web",
      "présence en ligne",
      "SEO local",
    ],
    keywordsEn: [
      "showcase website",
      "Guadeloupe",
      "website creation",
      "web developer",
      "online presence",
    ],
    section: "Développement web",
  },
  {
    slug: "ux-design-experience-utilisateur",
    title: "UX Design : pourquoi l'expérience utilisateur est la clé d'un site internet efficace",
    titleEn: "UX Design: why user experience is key to an effective website",
    description:
      "Pourquoi l'UX design est crucial pour un site web performant. Les bonnes pratiques pour améliorer les conversions et réduire le taux de rebond.",
    excerpt:
      "L'UX design est un facteur clé de succès pour votre site web. Découvrez comment une bonne expérience utilisateur peut transformer vos conversions et fidéliser vos clients.",
    date: "2025-02-08",
    updatedAt: "2025-02-08",
    readTime: "6 min",
    keywords: ["UX design", "expérience utilisateur", "site web", "conversion", "UI/UX"],
    keywordsEn: ["UX design", "user experience", "website", "conversion"],
    section: "UX Design",
  },
  {
    slug: "seo-local-guadeloupe",
    title: "SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent",
    titleEn:
      "Local SEO in Guadeloupe: how to appear on Google when your clients search for you",
    description:
      "Optimisez votre visibilité locale en Guadeloupe avec des techniques SEO adaptées à votre territoire et à vos clients.",
    excerpt:
      "Être visible localement en Guadeloupe est crucial pour votre business. Découvrez comment optimiser votre site pour apparaître dans les recherches locales et attirer des clients.",
    date: "2025-05-15",
    updatedAt: "2025-05-15",
    readTime: "7 min",
    keywords: [
      "SEO Guadeloupe",
      "référencement local",
      "Google My Business",
      "visibilité locale",
    ],
    keywordsEn: [
      "SEO Guadeloupe",
      "local SEO",
      "Google My Business",
      "local visibility",
    ],
    section: "SEO",
  },
  {
    slug: "utiliser-api-scraping-pdf-gwadalerte",
    title: "Utilisation d'API et scraping de PDF : L'exemple Gwad'Alerte",
    titleEn: "API Usage and PDF Scraping: The Gwad'Alerte Example",
    description: "Comment transformer des PDF inaccessibles en API exploitable. Étude de cas sur les tours d'eau de la SMGEAG et le projet Gwad'Alerte.",
    excerpt: "Découvrez comment Gwad'Alerte transforme les communiqués PDF de la SMGEAG en données structurées pour informer les Guadeloupéens sur les tours d'eau.",
    excerptEn: "Discover how Gwad'Alerte transforms SMGEAG PDF announcements into structured data to inform Guadeloupeans about water cuts.",
    date: "2026-01-04",
    updatedAt: "2026-01-04",
    readTime: "6 min",
    keywords: [
      "Scraping PDF",
      "API",
      "Guadeloupe",
      "SMGEAG",
      "Gwad'Alerte",
      "Open Data",
      "Développement Web",
    ],
    keywordsEn: [
      "PDF Scraping",
      "API",
      "Guadeloupe",
      "SMGEAG",
      "Gwad'Alerte",
      "Open Data",
      "Web Development",
    ],
    section: "Développement web",
    featured: true,
  },
  {
    slug: "tableau-de-bord-environnemental-guadeloupe-nextjs",
    title: "Tableau de bord environnemental Guadeloupe : La puissance de Next.js",
    titleEn: "Environmental Dashboard in Guadeloupe: The Power of Next.js",
    description: "Comment j'ai conçu un tableau de bord environnemental pour la Guadeloupe en utilisant Next.js pour optimiser les performances et le SEO local.",
    excerpt: "Découvrez GwadAlerte, un projet de monitoring environnemental en Guadeloupe conçu avec Next.js pour offrir une expérience fluide et un référencement local optimal.",
    excerptEn: "Discover GwadAlerte, an environmental monitoring project in Guadeloupe built with Next.js for a fluid experience and optimal local SEO.",
    date: "2026-04-16",
    updatedAt: "2026-04-16",
    readTime: "5 min",
    keywords: [
      "tableau de bord environnemental",
      "Guadeloupe",
      "Next.js",
      "GwadAlerte",
      "développement sur-mesure",
      "écologie numérique",
    ],
    keywordsEn: [
      "environmental dashboard",
      "Guadeloupe",
      "Next.js",
      "GwadAlerte",
      "custom development",
    ],
    section: "Étude de cas",
    featured: true,
  },
];

export const getPostBySlug = (slug: string): BlogPost => {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Article introuvable pour le slug ${slug}`);
  }
  return post;
};

export const buildMetadataForPost = (post: BlogPost, locale: Locale = "fr"): Metadata => {
  const url = `${baseUrl}/blog/${post.slug}`;
  const title = locale === "en" && post.titleEn ? post.titleEn : post.title;
  const description = locale === "en" && post.excerptEn ? post.excerptEn : post.description;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/blog/${post.slug}`,
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
    openGraph: {
      title,
      description,
      type: "article",
      url,
      siteName: "Virgile Popote - Développeur web freelance",
      locale: locale === "en" ? "en_US" : "fr_FR",
      authors: ["Virgile Popote"],
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      section: post.section,
      tags: post.keywords,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@virgilepop",
    },
    keywords: post.keywords,
    authors: [{ name: "Virgile Popote", url: baseUrl }],
    creator: "Virgile Popote",
    publisher: "Virgile Popote",
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.updatedAt || post.date,
      "article:author": "Virgile Popote",
      "article:section": post.section || "Blog",
      "article:tag": post.keywords.join(", "),
    },
  };
};

export const getArticleJsonLd = (post: BlogPost) => {
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: "Virgile Popote",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Virgile Popote",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    keywords: post.keywords,
    inLanguage: "fr-FR",
    image: {
      "@type": "ImageObject",
      url: defaultOgImage,
      width: 1200,
      height: 630,
    },
  };
};
