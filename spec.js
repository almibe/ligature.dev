const fs = require("fs")

const printTitle = (fileName) => {
    if (fileName.includes("wander")) {
        return "Wander"
    } else {
        return "Ligature"
    }
}

const frontMatter = (fileName) => `---
layout: Main.liquid
title: ${printTitle(fileName)}
---
`

async function setup() {
    if (!fs.existsSync("src/specification")) {
        fs.mkdirSync("src/specification")
        const urls = ['https://raw.githubusercontent.com/almibe/ligature-specification/main/ligature.md',
            'https://raw.githubusercontent.com/almibe/ligature-specification/main/wander.md']
        const promises = urls.map(
            (url) =>
                fetch(url)
                .then(async (res)=> {
                    const text = await res.text()
                    const fileName = url.split("/").at(-1)
                    console.log("filename", fileName)
                    fs.writeFileSync("src/specification/" + fileName, frontMatter(fileName) + text)
                }))
        return Promise.all(promises)
    }    
}

setup()
