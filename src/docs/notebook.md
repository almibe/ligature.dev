# Ligature Notebook

Ligature Notebook is a specification and library for Ligature that allows you to write notebook style documents.
Notebooks allow you to intermix markdown content with Wander scripts.

```
let test {
    a b c,
}
let result {
    cell0 : NotebookStart,
    cell0 : MarkdownCell,
    cell0 source "*hello*",
    cell0 next cell1,
    cell1 : NetworkCell,
    cell1 source test,
    cell1 display graph,
}
let meta {
    display = notebook
}
```
