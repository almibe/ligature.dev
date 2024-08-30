<h3>What is Ligature?</h3>

Ligature is a libre (free and open source, MPL-2.0 licensed) toolkit for working with semantic networks that focuses on simplicity, pragmatism, and portability.
It is currently under heavy design and development, and not ready for real world use, but experimentation and feedback are encouraged and much welcomed.
This website aims to document the current state of Ligature and link to resources.

<h3>What are Semantic Networks?</h3>

Wikipedia has a pretty good article on <a href="https://en.wikipedia.org/wiki/Semantic_network">Semantic Networks</a>,
quoting the opening paragraph:

<blockquote>
A semantic network, or frame network is a knowledge base that represents semantic relations between concepts in a network.
This is often used as a form of knowledge representation.
It is a directed or undirected graph consisting of vertices, which represent concepts, and edges, which represent semantic relations between concepts, mapping or connecting semantic fields.
A semantic network may be instantiated as, for example, a graph database or a concept map.
Typical standardized semantic networks are expressed as semantic triples.
</blockquote>

That article contains an example semantic network.
Below is that semantic network expressed in Ligature. 
I replaced "is a" and "is an" with a colon and changed "lives in" to "lives-in" but those are the only changes.

```
{
  Cat : Mammal, Cat has Fur,
  Bear : Mammal, Bear has Fur,
  Whale : Mammal, Whale lives-in Water,
  Mammal : Animal, Mammal has Vertebra,
  Fish : Animal, Fish lives-in Water,
}
```

Ligature and the tools around it allow you to work with data represented this way.

<h3>Implementations and Related Tools</h3>

<p>
  Work on Ligature is spread out over a number of git repositories.
  Below is a list of them.
</p>

<ul>
  <li><a href="https://github.com/almibe/ligature.dev">ligature.dev</a> - This website!</li>
  <li><a href="https://github.com/almibe/ligature-fs">Ligature F#</a> - An implementation of Ligature written in <a href="https://fsharp.org">F#</a>. It targets DotNet Core and JS via Fable. This is currently the most complete and actively developed implementation.
  It supports running in the browser via Fable an F# to JS compiler.</li>
  <li><a href="https://github.com/almibe/ligature-rs">Ligature Rust</a> - An implementation of Ligature written in <a href="https://www.rust-lang.org/">Rust</a>.</li>
  <li><a href="https://github.com/almibe/ligature-scala">Ligature Scala</a> - An implementation of Ligature written in <a href="https://scala-lang.org/">Scala</a> for the JVM.</li>
</ul>
