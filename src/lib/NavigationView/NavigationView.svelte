<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let variant: 'default' | 'compact' | 'minimal' = 'default';
	export let expanded = true;
	export let menuButton = true;
	export let backButton = true;

	const dispatch = createEventDispatcher();
</script>

<main class="navigation-view variant-{variant}">
	<aside class="navigation-view-pane" class:expanded>
		<header class="navigation-view-pane-header">
			{#if backButton}
				<button type="button" on:click={() => dispatch("back")}>
					{"<-"}
				</button>
			{/if}
			{#if menuButton}
				<button type="button" on:click={() => (expanded = !expanded)}>
					{"-"}
				</button>
			{/if}

			<slot name="header" />
		</header>
		<slot name="items" />
		<footer class="navigation-view-pane-footer">
			<slot name="footer" />
		</footer>
	</aside>
	<article class="navigation-view-page">
		<slot />
	</article>
</main>

<style lang="scss">
  @use "./NavigationView";
</style>
