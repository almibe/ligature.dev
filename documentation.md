---
layout: main.liquid
pagination:
  data: documentation
  size: 1
  alias: doc
permalink: "documentation/{{doc.title | slug}}/"
tags: documentation
---

{{doc.content}}
