import i18nConfig from './next-i18next.config.js';
const { i18n } = i18nConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: 'standalone',
  images: {
    domains: [],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|ico|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
};

export default nextConfig;
