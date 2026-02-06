module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("blog/css");
  
  // Add date filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });
  
  return {
    dir: {
      input: "blog",
      output: "_site/blog",
      includes: "_includes",
      layouts: "_layouts"
    },
    pathPrefix: "/blog/"
  };
};
