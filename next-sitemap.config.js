module.exports = {
  siteUrl: 'https://virgilepopote.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/404.html', '/not-found'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://virgilepopote.com/sitemap.xml',
      'https://virgile.site/sitemap.xml',
    ],
  },
};
