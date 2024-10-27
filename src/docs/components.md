---
layout: Doc.liquid
---

# Ligature Components

Ligature Components is a project that provides a set of UI components for working with Ligature and Wander in the browser.
It is released as a npm package.

```
npm install @ligature/ligature-components
```

The main component is a custom element that allows you to execute a Wander script and display the result inline.
To use it just import the display file (the example below assumes you are using a bundler) and it will register the custom element.

```
import '@ligature/ligature-components/src/display/display'
```

Below is an example of using this componet to display the result of script as text.
This shows what this components expects from the results in order to display them.
The component will looks for a network named `result` and one named `meta`.
The meta network is expected to contain a triple that sets the value used to determine how to display the `result` network.

```
<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = text }
</ligature-display>
```

<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = text }
</ligature-display>

Tables are also supported via [Tabulator](https://tabulator.info/).

```
<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = table }
</ligature-display>
```

<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = table }
</ligature-display>

And also graphs via [Cytoscape.js](https://js.cytoscape.org/).
One thing to note about using graphs is that if you don't set the size of it you won't be able to see it.
To set the size set the height and width for the `.ligature-display-graph` class.

```
.ligature-display-graph {
    height: 400px;
    width: 400px;
}
```

```
<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = graph }
</ligature-display>
```

<ligature-display>
  let result {a b c, a d e, a f g},
  let meta { display = graph }
</ligature-display>


<test></test>
