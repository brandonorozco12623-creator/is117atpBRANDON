const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function (eleventyConfig) {
  // Add sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname:
        process.env.SITE_URL || 'https://yourusername.github.io/117_site',
    },
  });

  // Copy static assets to output
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('src/assets/css/');

  // Add a custom date filter for formatting dates
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  // Add a custom filter to get current year
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
