---
import Layout from './src/layouts/Main.mustache';
import { getStaticPaths } from './documentation/[document].astro';

let documentationPaths = await getStaticPaths();
const posts = await Astro.glob('../pages/blog/entries/*.md');
---
<Layout title="Ligature">
  <h3>What is Ligature?</h3>

  <p>Ligature is a libre (free and open source, MPL-2.0 licensed) knowledge graph that focuses on pragmatism, portability, and simplicity.
  It is currently under heavy design and development, and not ready for real world use, but experimentation and feedback are encouraged and much welcomed.</p>
  
  <p>Below are some resources to see where things are.</p>
  
  <h3>Development Blog</h3>

  <ul>
    {posts.reverse().slice(0,6).map((post) => (
      <li>{post.frontmatter.date.split("T")[0]} - <a href={post.url}>{post.frontmatter.title}</a></li>
    ))}
  </ul>

  <a href="/blog/">See more.</a>
    
  <h3>Code Repositories</h3>
  
  <p>
    Work on Ligature is spread out over a number of git repositories.
    Below is a list of them.
  </p>
  
  <ul>
    <li><a href="https://github.com/almibe/ligature-specification">Ligature Specification</a> - The specification documentations for the Ligature project.</li>
    <li><a href="https://github.com/almibe/ligature.dev">ligature.dev</a> - This website!</li>
    <li><a href="https://github.com/almibe/ligature-scala">Ligature Scala</a> - An implementation of Ligature written in <a href="https://scala-lang.org/">Scala</a> for the JVM and JS ecosystems. This is currently the most complete and actively developed implementation.</li>
    <li><a href="https://github.com/almibe/ligature-fs">Ligature F#</a> - An implementation of Ligature written in <a href="https://fsharp.org">F#</a>.</li>
    <li><a href="https://github.com/almibe/ligature-rs">Ligature Rust</a> - An implementation of Ligature written in <a href="https://www.rust-lang.org/">Rust</a>.</li>
    <li><a href="https://github.com/almibe/ligature-lab">Ligature Lab</a> - A web frontend made with <a href="https://kit.svelte.dev/">SvelteKit</a> for working with Ligature.</li>
    <li><a href="https://github.com/almibe/ligature-desktop">Ligature Desktop</a> - A desktop application based on <a href="https://tauri.app">Tauri</a> for working with Ligature.</li>
  </ul>
  
  <h3>Attribution</h3>

  <p>This website makes use of the follow projects and libraries (probably a few I'm forgetting)</p>
  
  <ul>
    <li><a href="https://astro.build/">Astro</a></li>
    <li><a href="https://svelte.dev/">Svelte</a></li>
    <li><a href="https://openmoji.org/library/emoji-1FAA2/">Logo Based on Openmoji's Knot</a></li>
    <li><a href="https://fonts.google.com/specimen/Comfortaa">Comfortaa font</a></li>
    <li><a href="https://fonts.google.com/specimen/Raleway">Raleway font</a></li>
  </ul>
</Layout>
