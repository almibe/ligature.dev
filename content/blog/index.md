---
title: Ligature Blog
---
<h3>Blog</h3>

<ul>
  {blogs.map((post) => (
    <li>
      <a href={post.url}>{post.title}</a>
    </li>
  ))}
</ul>
