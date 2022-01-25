let fs = require('fs')
fs.rmSync("./src/css/ext", { recursive: true, force: true })
fs.mkdirSync("./src/css/ext")

fs.copyFileSync("./node_modules/blueprint-css/dist/blueprint.min.css", "./src/css/ext/blueprint.min.css")