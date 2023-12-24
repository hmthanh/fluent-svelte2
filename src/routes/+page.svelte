<script lang="ts">
	import Button from "$lib/Button/Button.svelte";
	// import Button from './../lib/Button/Button.svelte';
	import '$lib/sass/global.scss';
	import { onMount } from 'svelte';
	
	import Box from "@fluentui/svg-icons/icons/box_16_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Open from "@fluentui/svg-icons/icons/open_16_regular.svg?raw";

</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button variant="standard">standard</Button>

<Button variant="accent">accent</Button>

<Button variant="standard">standard</Button>

<Button variant="hyperlink">hyperlink</Button>
<Button variant="hyperlink" disabled>hyperlink</Button>
