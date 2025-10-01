import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import I18nProvider from "./components/i18nProvider";
import Favicon from "./components/Favicon";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import MouseHalo from "./components/MouseHalo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Optimisé : pas de préchargement pour réduire la chaîne critique
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Éviter le préchargement de trop de polices
  fallback: ['monospace'],
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true, // Seule police préchargée car principale
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  themeColor: '#7c3aed', // Couleur violette pour correspondre au V
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Développeur web freelance en Guadeloupe | Virgile Popote",
  description: "Développeur web freelance en Guadeloupe. Je crée des sites vitrines, e-commerce et sur-mesure. Boostez votre présence en ligne avec un site performant.",
  keywords: "développeur web, freelance, Guadeloupe, création site internet, site vitrine, e-commerce, next.js, développeur frontend",
  authors: [{ name: "Virgile Popote", url: "https://virgile.site" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgile.site"),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
      'en-US': '/en',
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
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "200x200" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
  ],
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: "Portfolio de Virgile",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Favicon />
        {/*
          Optimisations des connexions et des polices.
          - Pré-connexion à l'API Microlink pour accélérer le chargement des aperçus de liens.
          - Pré-connexion à Google Fonts pour accélérer le chargement des polices.
          - Préchargement des CSS critiques pour réduire le blocage du rendu.
        */}
        {/* Preconnect hints optimisés pour les domaines critiques */}
        <link rel="preconnect" href="https://api.microlink.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Préchargement des polices critiques pour améliorer le LCP */}
        <link rel="preload" href="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT1YhSmWJmOtjI.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/geist/v1/GeistVF.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Préchargement des CSS critiques pour réduire le blocage du rendu */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
        {/* Google Tag Manager - Configuration unifiée pour éviter la duplication */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VTGKQFS');
          `}
        </Script>

        {/* Service Worker pour le caching offline - chargement différé */}
        <Script id="register-sw" strategy="lazyOnload">
          {`
            if ('serviceWorker' in navigator) {
              // Délai pour ne pas impacter le LCP
              setTimeout(function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              }, 2000);
            }
          `}
        </Script>

        {/* Balises Open Graph */}
        <meta property="og:title" content="Développeur web freelance en Guadeloupe | Virgile Popote" />
        <meta property="og:description" content="Développeur web freelance en Guadeloupe. Je crée des sites vitrines, e-commerce et sur-mesure. Boostez votre présence en ligne avec un site performant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://virgile.site/" />
        <meta property="og:image" content="https://virgile.site/og-image.jpg" />


        {/* Liens sociaux pour SEO */}
        <link rel="me" href="https://github.com/virguiles" />
        <link rel="me" href="https://bsky.app/profile/virgilepop.bsky.social" />
        <link rel="me" href="https://www.instagram.com/virgilepop.up/" />
        <link rel="me" href="mailto:virgilepopote@gmail.com" />
        <link rel="contact" href="mailto:virgilepopote@gmail.com" />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  name: "Virgile Popote – Développeur web freelance",
                  url: "https://virgile.site/",
                  image: "https://virgile.site/og-image.jpg",
                  description: "Développeur web freelance en Guadeloupe. Création de sites vitrines, e‑commerce et sur‑mesure.",
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: "Guadeloupe",
                    addressCountry: "FR",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Guadeloupe",
                    addressCountry: "FR",
                  },
                  email: "mailto:virgilepopote@gmail.com",
                  telephone: "+590 690 XX XX XX",
                  priceRange: "€€",
                  sameAs: [
                    "https://github.com/virguiles",
                    "https://bsky.app/profile/virgilepop.bsky.social",
                    "https://www.instagram.com/virgilepop.up/",
                  ],
                  serviceType: "Création de sites internet",
                  knowsAbout: [
                    "Développement web",
                    "SEO local Guadeloupe",
                    "Sites vitrines",
                    "React",
                    "Next.js",
                    "Ruby on Rails",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services de développement web",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Création site vitrine Guadeloupe",
                          description: "Site internet professionnel pour entreprises en Guadeloupe",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SEO local Guadeloupe",
                          description: "Optimisation pour les recherches locales en Guadeloupe",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Virgile Popote - Création site internet Guadeloupe",
                  url: "https://virgile.site",
                  description: "Développeur web freelance en Guadeloupe spécialisé dans la création de sites vitrines et d'applications web. Services SEO local et développement moderne.",
                  inLanguage: "fr-FR",
                  publisher: {
                    "@type": "Organization",
                    name: "Virgile Popote",
                    url: "https://virgile.site",
                    logo: "https://virgile.site/favicon.png",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://virgile.site/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  mainEntity: {
                    "@type": "ItemList",
                    name: "Services de développement web Guadeloupe",
                    description: "Services complets de création de sites internet pour entreprises en Guadeloupe",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-white dark:bg-black`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VTGKQFS"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />
        {/* End Google Tag Manager (noscript) */}
        <div className="flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <I18nProvider>
              <Header />
              {children}
              <MouseHalo />
            </I18nProvider>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
