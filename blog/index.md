---
layout: Main.mustache
---
<Layout title="Ligature: Development Blog">
  <h3>Development Blog</h3>

  <ul>
    {posts.reverse().map((post) => (
      <li>{post.frontmatter.date.split("T")[0]} - <a href={post.url}>{post.frontmatter.title}</a></li>
    ))}
  </ul>

  <a href="..">Home</a>
</Layout>
