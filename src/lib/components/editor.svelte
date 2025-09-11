<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  let editor = null
	let { name, script } = $props();
  onMount(async () => {
    const module = await import('@ligature/ligature-components');
    editor = module.showEditor(document.querySelector("#editor-" + name), script, { minHeight: "300px", maxHeight: "300px" })
  })

  async function run() {
    const module = await import('@ligature/ligature-components');

    if (browser) {
        const script = editor.getValue()
        const resultEl = document.querySelector("#result-" + name)
        const outputEl = document.querySelector("#output-" + name)
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
<div  id="editor-{name}" class="editor">
</div>
<div id="output-{name}"></div>
<pre><code id="result-{name}"></code></pre>
