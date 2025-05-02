import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import I18nProvider from "./components/i18nProvider";
import Favicon from "./components/Favicon";
import MouseHalo from "./components/MouseHalo";
import Footer from "./components/Footer";
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
  authors: [{ name: "Virgile Popote", url: "https://virgilepopote.com" }],
  creator: "Virgile Popote",
  publisher: "Virgile Popote",
  metadataBase: new URL("https://virgilepopote.com"),
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VTGKQFS');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SX2M7CKH0L" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SX2M7CKH0L');
          `}
        </Script>
        {/* End Google Analytics */}

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
            "@type": "Person",
            "name": "Virgile Popote",
            "jobTitle": "Développeur Web Freelance",
            "url": "https://virgile.site/",
            "image": "https://virgile.site/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Guadeloupe",
              "addressCountry": "FR"
            },
            "description": "Développeur web freelance en Guadeloupe. Création de sites internet pour entreprises et entrepreneurs.",
            "email": "virgilepopote@gmail.com",
            "sameAs": [
              "https://github.com/virguiles",
              "https://bsky.app/profile/virgilepop.bsky.social",
              "https://www.instagram.com/virgilepop.up/",
              "mailto:virgilepopote@gmail.com"
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
              {children}
            </I18nProvider>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
