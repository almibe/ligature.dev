import { EleventyRenderPlugin } from "@11ty/eleventy"
import sisalPlugin from './sisal.js'

export default async function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/');
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(EleventyRenderPlugin)
    eleventyConfig.addPlugin(sisalPlugin)
    return {
      dir: {
        input: "src",
        output: "_site"
      },
      templateFormats: ['md', '11ty.js'],
    }
}
