<script>
    import "@shoelace-style/shoelace/dist/themes/light.css"
    import text from "../data/index.md?raw"
    import ligatureText from "../data/ligature.md?raw"
    import wanderText from "../data/wander.md?raw"
    import img from '$lib/images/logo.svg';
    import markdownit from 'markdown-it'

	import { browser } from '$app/environment';
    import Split from 'split-grid'

    if (browser) {
        import("@shoelace-style/shoelace/dist/shoelace.js")
        import("@shoelace-style/shoelace/dist/components/tree/tree.js")
        import("@shoelace-style/shoelace/dist/components/tree-item/tree-item.js")
        import("@shoelace-style/shoelace/dist/components/icon/icon.js")

        setTimeout(() => {
            Split({
                columnGutters: [{
                    track: 1,
                    element: document.querySelector('.gutter'),
                }]
            })

            const tree = document.querySelector("#resourceTree")
            tree?.addEventListener("sl-selection-change", e => {
                const selection = (e.detail.selection[0]).getAttribute("value")
                if (selection == "section:README") {
                    result = readmeHtml
                } else if (selection == "section:Ligature") {
                    result = ligatureHtml
                } else if (selection == "section:Wander") {
                    result = wanderHtml
                } else if (selection == "section:Lab") {
                    throw "TODO"
                } else {
                    result = readmeHtml
                }
            })
        })  
    }

    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    })
    const readmeHtml = md.render(text);
    const ligatureHtml = md.render(ligatureText);
    const wanderHtml = md.render(wanderText);
    let result = readmeHtml;
</script>

<div id="split-panel">
    <div id="resource-panel">
        <sl-tree id="resourceTree">
            <sl-tree-item selected value="section:README"><sl-icon src="/icons/file-earmark-text.svg"></sl-icon>README</sl-tree-item>
            <sl-tree-item value="section:Ligature"><sl-icon src="/icons/file-earmark-text.svg"></sl-icon>Ligature Docs</sl-tree-item>
            <sl-tree-item value="section:Wander"><sl-icon src="/icons/file-earmark-text.svg"></sl-icon>Wander Docs</sl-tree-item>
            <!-- <sl-tree-item value="section:Lab"><sl-icon src="/icons/terminal.svg"></sl-icon>LigatureLab</sl-tree-item> -->
        </sl-tree>
    </div>
    <div class="gutter"></div>
    <div id="content-panel">
        <div class="header">
        <img src={img} alt="a knot" height="120" width="120"/>
        <div>
            <h1 class="title">Ligature</h1>
            <h2 class="subtitle">A Semantic Network Toolkit</h2>
        </div>
        </div>
        <div id="content" >{@html result}</div>
    </div>
</div>
