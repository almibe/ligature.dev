const fs = require("fs")

const frontMatter = (title) => `---
layout: Main.mustache
title: ${title}
---
`

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");

	eleventyConfig.addCollection("specification", async function () {
		if (!fs.existsSync("src/specification")) {
			fs.mkdirSync("src/specification")
			const urls = ['https://raw.githubusercontent.com/almibe/ligature-specification/main/ligature-format.md',
				'https://raw.githubusercontent.com/almibe/ligature-specification/main/ligature-model.md',
				'https://raw.githubusercontent.com/almibe/ligature-specification/main/wander.md']
			urls.map(
				(url) =>
					fetch(url)
					.then(async (res)=> {
						const text = await res.text()
						const fileName = url.split("/").at(-1)
						fs.writeFileSync("src/specification/" + fileName, frontMatter(fileName) + text)
					}))
			return Promise.all(urls)
		}
		return {}
	})

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
}
