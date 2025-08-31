/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'out', // Default for static export
  reactStrictMode: true,
  // Optimisations de performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // SWC est activé par défaut dans Next.js 15
  images: {
    unoptimized: true, // Garder unoptimized pour l'export statique
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // 24h au lieu de 60s
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.pexels.com",
      "images.unsplash.com",
      "i.gifer.com",
      "i.giphy.com"
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
      };
    }
    return config;
  },
};

export default nextConfig;
