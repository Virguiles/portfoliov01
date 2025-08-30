/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: 'out', // Default for static export
  reactStrictMode: true,
  // Optimisations de performance
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
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
};

export default nextConfig;
