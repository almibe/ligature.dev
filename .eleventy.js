const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(EleventyVitePlugin)
	eleventyConfig.addPassthroughCopy("src/assets");
	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
}
