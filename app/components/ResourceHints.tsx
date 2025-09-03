/**
 * Composant pour optimiser les resource hints et réduire les requêtes bloquantes
 * Améliore les performances en préchargeant les ressources critiques
 */
export default function ResourceHints() {
  return (
    <>
      {/* DNS Prefetch pour les domaines externes */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//api.microlink.io" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect pour les connexions critiques */}
      <link rel="preconnect" href="https://api.microlink.io" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

      {/* Preload pour les ressources critiques */}
      <link
        rel="preload"
        href="/favicon.ico"
        as="image"
        type="image/x-icon"
      />

      {/* Modulepreload pour les chunks JavaScript critiques */}
      <link
        rel="modulepreload"
        href="/_next/static/chunks/webpack.js"
      />

      {/* Prefetch pour les pages probables */}
      <link rel="prefetch" href="/blog" />
      <link rel="prefetch" href="/guadeloupe" />

      {/* Optimisation des polices avec font-display */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Geist';
              font-display: swap;
            }
            @font-face {
              font-family: 'Geist Mono';
              font-display: swap;
            }
            @font-face {
              font-family: 'JetBrains Mono';
              font-display: swap;
            }
          `,
        }}
      />
    </>
  );
}
