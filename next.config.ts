import type { NextConfig } from "next";
import i18nConfig from './next-i18next.config';
const { i18n } = i18nConfig;

const nextConfig: NextConfig = {
  i18n,
  /* config options here */
  images: {
    domains: [],
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
