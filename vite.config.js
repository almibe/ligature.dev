import path from "path";
import glob from "glob";

module.exports = {
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "_site/**", "**.html")),
    },
  }
}
