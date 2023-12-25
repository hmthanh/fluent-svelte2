<script lang="ts">
	import {  createEventDispatcher } from 'svelte';

	/** @restProps {button | a} */
	/** Specifies the visual styling of the button. */
	export let variant: 'standard' | 'accent' | 'hyperlink' = 'standard';

	// @param {href} - Sets an href value and converts the button element into an anchor
	export let href = '';

	// @param {disabled} - Controls whether the button is intended for user interaction, and styles it accordingly.
	export let disabled = false;

	// @param {className} - Specifies a custom class name for the button
	let className = '';
	export { className as class };

	// @param {element} - Obtains a bound DOM reference to the button or anchor element
	export let element: HTMLElement | null = null;
		
	const dispatch = createEventDispatcher();
</script>

<!--
@component
A button gives the user a way to trigger an immediate action. Some buttons are specialized for particular tasks, such as navigation, repeated actions, or presenting menus. Docs
- Usage:
    ```tsx
    <Button>Click me!</Button>
    ```
-->
<!--  -->
<svelte:element
	this={href && !disabled ? 'a' : 'button'}
	bind:this={element}
	on:click|preventDefault|stopPropagation={() => dispatch('click')}
	role={href && !disabled ? 'button' : undefined}
	href={href && !disabled ? href : undefined}
	tabindex="0"
	class="button style-{variant} {className}"
	class:disabled
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	@use './Button';
</style>
