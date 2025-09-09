---
layout: Doc.liquid
---

# Sisal

Sisal is a plugin for 11ty that allows you to use Ligature and Wander to help build your static website.

## Installation

It is available via npm:

```bash
npm install sisal
```

Once you install sisal, it needs to be added to your site's 11ty.config.js.

```js
import SisalPlugin from 'sisal'

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(SisalPlugin)
    // ...
}
```

## Wander Templates

Sisal provides support for Wander templates.
This allows you to use Wander to generate HTML.
