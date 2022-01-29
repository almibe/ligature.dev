let fs = require('fs')
fs.rmSync("./_site", { recursive: true, force: true })
fs.rmSync("./dist", { recursive: true, force: true })
fs.rmSync("./css/ext", { recursive: true, force: true })
fs.mkdirSync("./css/ext")

fs.copyFileSync("./node_modules/blueprint-css/dist/blueprint.min.css", "./css/ext/blueprint.min.css")
