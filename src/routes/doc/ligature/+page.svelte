<script>
    import text from "./ligature.md?raw"
    import markdownit from 'markdown-it'
    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    })
    const result = md.render(text);
</script>

{@html result}
