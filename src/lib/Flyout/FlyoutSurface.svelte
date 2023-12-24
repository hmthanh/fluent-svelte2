<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/** Specifies a custom class name for the surface. */
	let className = '';
	export { className as class };

	/** Obtains a bound DOM reference to the surface element. */
	export let element: HTMLDivElement = null;

	const dispatch = createEventDispatcher();
</script>

<div class="flyout {className}" bind:this={element} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
  @use "./FlyoutSurface";
</style>
