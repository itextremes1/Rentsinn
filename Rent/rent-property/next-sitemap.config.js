/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rentsinn.com',
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
  
  // Since you only have one page (the home page), you don't need additionalPaths
  // The home page will be automatically included
  
  // Optional: If you want to exclude any paths (though you don't have any)
  exclude: [],
  
  // Optional: Custom transformation function
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  
  // Optional: Additional sitemaps
  additionalSitemaps: [],
}