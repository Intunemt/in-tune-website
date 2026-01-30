const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Pass-through copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");

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