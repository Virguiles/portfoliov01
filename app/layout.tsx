import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import I18nProvider from "./components/i18nProvider";
import Favicon from "./components/Favicon";
import MouseHalo from "./components/MouseHalo";
import Footer from "./components/Footer";

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
