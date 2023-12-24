<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// @param {href} - Specifies the URL of the page the link goes to
	export let href = '';

	// @param {disabled} - Specifies that a button should be disabled.
	export let disabled = false;

	// @param {variant} - Specifies the visual styling of the button..
	export let variant = 'standard';

	// @param {className} - Specifies the class name of the button
	let className = '';
	export { className as class };

	$: tag = href && !disabled ? 'a' : 'button';
	export let element: HTMLElement | null = null;
	// export let restProps;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<svelte:element
	this={tag}
	role="button"
	tabindex="0"
	class="button style-{variant} {className}"
	class:disabled
	{...$$restProps}
	bind:this={element}
	on:click|preventDefault|stopPropagation={() => dispatch('click')}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use './Button';
</style>
