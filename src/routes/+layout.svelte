<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import '../lib/assets/main.css'
	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Ligature's website">
  	<meta name="author" content="Alex Michael Berry">
  	<link rel="mask-icon" href={logo} color="#ffffff">
	<link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

{@render children?.()}
