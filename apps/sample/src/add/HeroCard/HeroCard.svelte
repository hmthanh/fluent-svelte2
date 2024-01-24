<script lang="ts">
	let className = "";
	export { className as class };

	let element: HTMLDivElement;

	export const getElement = () => element;
</script>

<!--	on:click-->
<!--	on:blur-->
<!--	on:focus-->
<!--	on:dblclick-->
<!--	on:contextmenu-->
<!--	on:mousedown-->
<!--	on:mouseup-->
<!--	on:mouseover-->
<!--	on:mouseout-->
<!--	on:mouseenter-->
<!--	on:mouseleave-->
<!--	on:keypress-->
<!--	on:keydown-->
<!--	on:keyup-->
<!--	bind:this={element}-->
<div class="hero-card {className}">
	<header>
		<slot name="header" />
	</header>
	<slot />
</div>

<style lang="scss">
  @use "./HeroCard";
</style>
