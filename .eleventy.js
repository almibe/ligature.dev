module.exports = function eleventyConfig(eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/');
    eleventyConfig.addPassthroughCopy("src/assets");
  
    return {
      dir: {
        input: "src",
        output: "_site"
      },
      templateFormats: ['md', '11ty.js'],
    }
}
