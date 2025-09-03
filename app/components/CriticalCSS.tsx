/**
 * Composant pour injecter le CSS critique directement dans le <head>
 * Cela réduit les requêtes de blocage de l'affichage
 */
export default function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* CSS critique pour le rendu initial */
          * {
            box-sizing: border-box;
          }

          html {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
          }

          body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #000000;
            font-size: 16px;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Styles pour le mode sombre */
          @media (prefers-color-scheme: dark) {
            body {
              background-color: #000000;
              color: #ffffff;
            }
          }

          /* Prévenir les layout shifts */
          img {
            max-width: 100%;
            height: auto;
          }

          /* Styles de base pour les conteneurs */
          .min-h-screen {
            min-height: 100vh;
          }

          .flex {
            display: flex;
          }

          .flex-col {
            flex-direction: column;
          }

          /* Animation de chargement */
          .loading-skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }

          @keyframes loading {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }

          /* Optimisation pour les polices */
          .font-loading {
            font-display: swap;
          }
        `,
      }}
    />
  );
}
