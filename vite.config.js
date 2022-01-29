import path from "path";
import glob from "glob";
import solidPlugin from 'vite-plugin-solid';

module.exports = {
  plugins: [solidPlugin()],
  root: '_site',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "_site/**", "**.html")),
    },
  }
}
