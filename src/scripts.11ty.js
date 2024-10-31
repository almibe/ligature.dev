//const esbuild = require('esbuild')
import esbuild from 'esbuild'
const { NODE_ENV = 'production' } = process.env

const isProduction = NODE_ENV === 'production'

export default class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true,
    }
  }

  async render() {
    await esbuild.build({
      entryPoints: ['src/components.js'],
      bundle: true,
      minify: isProduction,
      outdir: '_site/js',
      sourcemap: !isProduction,
      target: isProduction ? 'es6' : 'esnext',
    })
  }
}
