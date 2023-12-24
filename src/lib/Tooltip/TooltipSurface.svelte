<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/* Specifies a custom class name for the surface. */
	let className = '';
	export { className as class };

	/** Obtains a bound DOM reference to the surface element. */
	export let element: HTMLDivElement = null;

	const dispatch = createEventDispatcher();
</script>

<div
	class="tooltip {className}"
	role="tooltip"
	bind:this={element}
	{...$$restProps}
>
	<slot />
</div>

<!--	use:forwardEvents-->
<!-- // import { createEventForwarder } from "$lib/internal";
	// import { get_current_component } from "svelte/internal"; -->

<style lang="scss">
  @use './TooltipSurface';
</style>
