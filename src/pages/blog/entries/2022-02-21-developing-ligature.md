---
layout: ../../../layouts/Blog.astro
title: How Ligature-Scala is Currently Developed
tags: blog
date: 2022-02-27
---

# How Ligature-Scala is Currently Developed

**Note: This blog post is out of date. See [Running Ligature](/documentation/running-ligature) for similar docs that are up to date.**

Hello I wanted to spend a little time today to document how I'm current developing Ligature-Scala.
I'm sure this workflow will change eventually but for now it's working well enough for me.
Ligature like much software today is polyglot.
Currently it focuses on Scala 3 built with SBT that targets both the JVM and JS ecosystems that focuses on the core logic and
TypeScript using npm to build the UI.
The two main repos involved are https://github.com/almibe/ligature-scala and https://github.com/almibe/ligature-components.

## The Core/Scala Side

The Scala repo is setup with a number of projects, the majority of which target both the JVM and JS.
The most relevant project for interactive development is (somewhat confusingly called) [`ligature-js`](https://github.com/almibe/ligature-scala/tree/main/ligature-js).
This project's main goal is to provide the interface from ScalaJS code to JS.
It's very minimal at the moment but I'm working on filling it out.
The main idea is to not provide the entire Ligature api to JS but rather to just provide the key functionality for a UI.
When developing both the core logic and a UI I typically build this project in watch mode.

```
> sbt
> project ligatureJSJS
> ~fastLinkJS
```

This creates an output file located at `ligature-scala/ligature-js/js/target/scala-3.1.0/ligature-js-fastopt/main.js`.
This file will be update when the Scala code is updated.

## The UI/TypeScript Side

Moving on to ligature-components, this project provides a [SolidJS](http://solidjs.com/)/[Shoelace](https://shoelace.style/) based frontend for working with Ligature.
The project isn't intended to be used by itself, rather just provide reusable components, but it does include a demo that can work with the core Scala project when developing.
The demo is setup to assume that you have ran the sbt task above and that you have checked out both repositories in the same directory.
If you haven't you'll need to update the import in `demo.tsx`.
To run the demo in the root of `ligature-components` run `npm run dev` and go to http://localhost:3000/.
