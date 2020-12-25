module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static": "/" });
    eleventyConfig.addPassthroughCopy({ "icons": "/" });
    return {}
  };
  