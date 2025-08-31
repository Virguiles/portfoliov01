import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import I18nProvider from "./components/i18nProvider";
import Favicon from "./components/Favicon";
import MouseHalo from "./components/MouseHalo";
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
        {/* Optimisations pour le LCP et les polices */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        {/* Préchargement des ressources critiques */}
        <link
          rel="preload"
          href="/_next/static/media/JetBrainsMono-Regular-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        {/* Précharger les polices Geist aussi */}
        <link
          rel="preload"
          href="/_next/static/media/Geist-Regular-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Virgile Popote – Développeur web freelance",
            "url": "https://virgile.site/",
            "image": "https://virgile.site/og-image.jpg",
            "description": "Développeur web freelance en Guadeloupe. Création de sites vitrines, e‑commerce et sur‑mesure.",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Guadeloupe"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Guadeloupe",
              "addressCountry": "FR"
            },
            "email": "mailto:virgilepopote@gmail.com",
            "sameAs": [
              "https://github.com/virguiles",
              "https://bsky.app/profile/virgilepop.bsky.social",
              "https://www.instagram.com/virgilepop.up/"
            ]
          }
          `
        }} />
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
        <MouseHalo />
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
