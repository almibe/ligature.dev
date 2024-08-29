<script lang="js">
  import img from '$lib/images/logo.svg';
</script>

<div>
    <div class="header">
      <img src={img} alt="an image of a knot" height="120" width="120"/>
      <div>
        <h1 class="title">Ligature</h1>
        <h2 class="subtitle">A Semantic Network Toolkit</h2>
      </div>
    </div>
	 <slot />
</div>
