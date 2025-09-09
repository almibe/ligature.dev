<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import '$lib/assets/main.css'
	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Ligature's website">
  	<meta name="author" content="Alex Michael Berry">
  	<link rel="mask-icon" href={logo} color="#ffffff">
	<link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<div class="header">
  <a href="/"><img src={logo} alt="a drawing of a knot" height="120" width="120"/></a>
  <div>
    <h1 class="title"><a href="/">Ligature</a></h1>
    <h2 class="subtitle"><a href="/">A Libre Knowledge<br/>Representation Toolkit</a></h2>
  </div>
</div>
{@render children?.()}

<a href="/">Home</a>
