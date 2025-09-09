<script lang="ts">
  import Editor from "$lib/components/editor.svelte";
	import logo from '$lib/assets/logo.svg';

  let remoteAddress = $state("localhost:5000/ws")
</script>

<div>
  <div class="header">
    <a href="/"><img src={logo} alt="a drawing of a knot" height="80" width="80"/></a>
    <div>
      <h1 class="title"><a href="/">Try Ligature</a></h1>
    </div>
  </div>
  <Editor>append-table(docs())</Editor>
</div>
