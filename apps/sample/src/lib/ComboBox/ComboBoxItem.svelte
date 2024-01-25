<script lang="ts">
	// import { createEventForwarder } from "$lib/internal.txt";
	// import { get_current_component } from "svelte/internal";

	import { createEventDispatcher } from 'svelte';

	export let selected = false;
	export let disabled = false;

	let className = '';
	export { className as class };

	const dispath = createEventDispatcher();
</script>

<!--tabindex="0"-->
<li
	{...$$restProps}
	class="combo-box-item {className}"
	class:disabled
	class:selected
>
	<slot name="icon" />
	<span>
		<slot />
	</span>
</li>

<style lang="scss">
  @use "./ComboBoxItem";
</style>
