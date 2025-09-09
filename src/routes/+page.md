<script lang="ts">
	import logo from '$lib/assets/logo.svg';
</script>

<div class="header">
	<img src={logo} alt="a drawing of a knot" height="120" width="120"/>
	<div>
		<h1 class="title">Ligature</h1>
		<h2 class="subtitle">A Libre Knowledge<br/>Representation Toolkit</h2>
	</div>
</div>

## What is Ligature?

Ligature is a libre (free and open source, MPL-2.0 licensed) knowledge representation toolkit that focuses on simplicity, pragmatism, and portability.
It is currently under heavy design and development, and not ready for real world use, but experimentation and feedback are encouraged and much welcomed.
This website aims to document the current state of Ligature and link to resources.

## Happy Little TBoxes
### An Introduction to Description Logic using Ligature

<u>Happy Little TBoxes</u> is an in-progress E-Book/offical documentation for Ligature.
It might be ahead or behind code artifacts at any given time while under active development.

[Read it here!](/happy-little-tboxes/)

See my [readings list](/readings/) for more readings on Description Logics, Knowledge Representation and Reasoning, and related topics.

## Try

[Try](/try/) Ligature in the browser.

## Software

Ligature is made up of many projects.
Below is an incomplete list of ones that are being developed.
More will be added as they develop.

### Ligature F#

This is the main implementation of Ligature at the moment.
Artifacts of this project are available on npm and built using fable.

* [codeberg.org/almibe/ligature-fs](https://codeberg.org/almibe/ligature-fs)
* [npm package](https://www.npmjs.com/package/@ligature/ligature)

### Ligature Test Suite

A test suite for Ligature implementations.

* [codeberg.org/almibe/ligature-test-suite](https://codeberg.org/almibe/ligature-test-suite)

### Ligature Components

A set of UI components for working with Ligature in the browser.

* [Docs](/docs/components/)
* [@ligature/ligature-components](https://www.npmjs.com/package/@ligature/ligature-components) - npm package
* [github.com/almibe/ligature-components](https://github.com/almibe/ligature-components)

### Sisal

Sisal is a plugin for [11ty](https://11ty.dev) that integrates Ligature and Wander.

* [Docs](/docs/sisal/)
* [npm package](https://www.npmjs.com/package/sisal)
* [github.com/almibe/sisal](https://github.com/almibe/sisal)

---

Logo credit: [https://openmoji.org/library/emoji-1FAA2/](openmoji.org/library/emoji-1FAA2/)
