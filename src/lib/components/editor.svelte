<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  const { children } = $props();
  const uid = $props.id();
  let editor = null

  onMount(async () => {
    const module = await import('@ligature/ligature-components');
    editor = module.showEditor(document.querySelector("#editor-" + uid))
  })

  async function run() {
    const module = await import('@ligature/ligature-components');

    if (browser) {
        const script = editor.getValue()
        const resultEl = document.querySelector("#result-" + uid)
        const outputEl = document.querySelector("#output-" + uid)
        resultEl.innerHTML = ""
        outputEl.innerHTML = ""
        const result = module.printResult(module.runScript(script, outputEl))
        resultEl.innerHTML = result
    }
  }
</script>

<div>
  <button onclick={run}>Run</button>
</div> 
<div  id="editor-{uid}" class="editor">
    {@render children?.()}
</div>
<div id="output-{uid}"></div>
<pre><code id="result-{uid}"></code></pre>
