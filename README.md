# ligature.dev
Ligature's website

## Buidling

To build run

`npm run build`

To preview

`npm run preview`
 
and go to localhost:5000

## Credits

This website makes use of the follow projects and libraries (probably a few I'm forgetting)

 * [Vite](https://vitejs.dev/)
 * [Shoelace](https://shoelace.style)
 * [Logo based on](https://openmoji.org/library/#search=knot&emoji=1FAA2)
 * [Comfortaa font](https://fonts.google.com/specimen/Comfortaa)
 * [Raleway font](https://fonts.google.com/specimen/Raleway)

## Static Site Generator

This repo contains the start of a static site generator.
Rather than relying on conventions this static site generator is based on scripting and provides a set of utility functions.
The approach is based on thinking about SSGs as providing a couple of key features.

 * A Bundler - in this case I'm using parcel since it seems to just work for me.
 * Markdown Support - Currently this project uses Remark
 * Templating - Currently uses Handlebars

And that's it.

### Directory Structure

 * templates - store templates
 * static - static assets (images, css, js, etc.)
 * content - input for templates in markdown
 * temp - the directory template output is put in before handled by bundler
 * dist - the output of the bundler and final site

### Important Files
 * naps.ts - the main naps file that contains all of the utility functions used to make a site
 * site.ts - the script that builds the site

### Utility Functions
 * processFile(fileName: string, templateName: string, data: object)
 * processDirectory(directoryName: string, templateName: string, recursive: boolean, data: object)
 * build()

 Experienced ego death while debugging my website, blacked out, and woke up to find I wrote my own SSG. I really like it. It doesn't do anything clever and is essentially just a couple of functions that use handlebars, remark, and parcel.

TODO
 - trash old code
 - create new directory structure
 - setup npm to run site.ts
 - add naps.ts
 - get markdown processing working
 - get templating working for layout
 - get parcel working
 - is that it?