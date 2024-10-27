module.exports = function eleventyConfig(eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/');
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(sisalPlugin)
    return {
      dir: {
        input: "src",
        output: "_site"
      },
      templateFormats: ['md', '11ty.js', 'wander'],
    }
}

function sisalPlugin(eleventyConfig, pluginOptions) {
  eleventyConfig.addExtension("wander", {
    compile: async (inputContent) => {
      return async () => {
        return `<ligature-display>${inputContent}</ligature-display>`
      };
    },
  });
}
