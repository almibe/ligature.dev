<script>
    import text from "./shape.md?raw"
    import markdownit from 'markdown-it'
    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    })
    const result = md.render(text);
</script>

{@html result}
