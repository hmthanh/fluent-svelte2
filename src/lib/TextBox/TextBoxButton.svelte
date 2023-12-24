<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let className = '';
	export { className as class };

	export let element: HTMLButtonElement | null = null;

	const dispatch = createEventDispatcher();
</script>

<!-- use:forwardEvents -->
<button
	bind:this={element}
	class="text-box-button {className}"
	on:click={() => dispatch('click')}
	type="button"
	{...$$restProps}
>
	<slot />
</button>

<style lang="scss">
	@use './TextBoxButton';
</style>
