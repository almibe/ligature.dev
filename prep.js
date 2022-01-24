let fs = require('fs')
fs.rmSync("./public/css/ext", { recursive: true, force: true })
fs.mkdirSync("./public/css/ext")

fs.copyFileSync("./node_modules/blueprint-css/dist/blueprint.min.css", "./public/css/ext/blueprint.min.css")