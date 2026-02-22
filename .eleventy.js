const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Pass-through copy for static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css"); 
  eleventyConfig.addPassthroughCopy("fonts");

  // Date filter using Luxon
  eleventyConfig.addFilter("date", (dateObj, format = "LLLL d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Blog collection for resources
  eleventyConfig.addCollection("resources", (collectionApi) => {
    return collectionApi.getFilteredByGlob("./src/resources/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};