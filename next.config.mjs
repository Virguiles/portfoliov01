/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commenté pour le développement local
  // distDir: 'out', // Default for static export
  reactStrictMode: true,

  // Configuration pour résoudre les problèmes de cache Firefox
  ...(process.env.NODE_ENV === 'development' && {
    headers: async () => [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      // Headers spécifiques pour les ressources statiques
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate, max-age=0',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate, max-age=0',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate, max-age=0',
          },
        ],
      },
    ],
  }),
  // Optimisations de performance
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['@/components', '@/lib'],
    // Optimisations pour améliorer le LCP
    optimizeServerReact: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  // SWC est activé par défaut dans Next.js 15
  images: {
    // unoptimized: true, // Commenté pour le développement local
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24h au lieu de 60s
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.gifer.com',
      },
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
  },
  trailingSlash: true,
  // Optimisations de compression
  compress: true,
  // Optimisations de build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimisation du bundle JavaScript
  webpack: (config, { dev }) => {
    // Optimiser la séparation des chunks
    if (!dev) {
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // Chunk pour les animations
        animations: {
          test: /[\\/]node_modules[\\/](framer-motion|canvas-confetti)[\\/]/,
          name: 'animations',
          chunks: 'all',
          priority: 10,
        },
        // Chunk pour les icônes
        icons: {
          test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
          name: 'icons',
          chunks: 'all',
          priority: 10,
        },
        // Chunk pour l'internationalisation
        i18n: {
          test: /[\\/]node_modules[\\/](i18next|@?react-i18next)[\\/]/,
          name: 'i18n',
          chunks: 'all',
          priority: 10,
        },
        // Chunk pour les CSS critiques
        criticalCSS: {
          test: /\.css$/,
          name: 'critical-css',
          chunks: 'initial',
          priority: 20,
          enforce: true,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
