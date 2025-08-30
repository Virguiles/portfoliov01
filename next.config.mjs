/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  trailingSlash: true
};

export default nextConfig;
