import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import I18nProvider from "./components/i18nProvider";
import Favicon from "./components/Favicon";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false, // Désactiver pour éviter les layout shifts
});

export const viewport: Viewport = {
  themeColor: '#7c3aed', // Couleur violette pour correspondre au V
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Création site internet Guadeloupe – Virgile Popote, développeur web freelance",
  description: "Développeur web freelance en Guadeloupe. Création de sites vitrines, e-commerce et sur-mesure pour entreprises et entrepreneurs. Contactez-moi pour booster votre présence en ligne.",
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
          - Les pré-connexions à Google Fonts et les préchargements manuels de polices ont été supprimés.
            `next/font` gère automatiquement l'optimisation des polices auto-hébergées,
            rendant ces optimisations manuelles inutiles et potentiellement contre-productives.
        */}
        <link rel="preconnect" href="https://api.microlink.io" crossOrigin="anonymous" />
        {/* Google Tag Manager - Configuration unifiée pour éviter la duplication */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VTGKQFS');
          `}
        </Script>

        {/* Service Worker pour le caching offline */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>

        {/* Balises Open Graph */}
        <meta property="og:title" content="Création site internet Guadeloupe – Virgile Popote, développeur web freelance" />
        <meta property="og:description" content="Développeur web freelance en Guadeloupe. Création de sites vitrines, e-commerce et sur-mesure pour entreprises et entrepreneurs." />
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
            </I18nProvider>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
