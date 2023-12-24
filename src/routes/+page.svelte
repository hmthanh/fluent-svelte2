<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
	// import Button from './../lib/Button/Button.svelte';
	import '$lib/sass/global.scss';
	import { onMount } from 'svelte';

	import Box from '@fluentui/svg-icons/icons/box_16_regular.svg?raw';
	import Book from '@fluentui/svg-icons/icons/book_24_regular.svg?raw';
	import Open from '@fluentui/svg-icons/icons/open_16_regular.svg?raw';
	import TextBox from '$lib/TextBox/TextBox.svelte';

	function onClick() {
		console.log('click');
	}
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

<Button variant="standard" on:click={onClick}>standard</Button>

<TextBox placeholder="placeholder" type="password"/>

<Button variant="accent">accent</Button>


