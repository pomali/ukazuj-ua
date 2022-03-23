const pkg = require("./package.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksShortcode("version", function () {
    return pkg.version;
  });
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("manifest.webmanifest");
};
