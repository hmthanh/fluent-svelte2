<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/Button/Button.svelte';
	// import Button from './../lib/Button/Button.svelte';
	import '$lib/global.scss';

	import Box from '@fluentui/svg-icons/icons/box_16_regular.svg?raw';
	import Book from '@fluentui/svg-icons/icons/book_24_regular.svg?raw';
	import Open from '@fluentui/svg-icons/icons/open_16_regular.svg?raw';
	import TextBox from '$lib/TextBox/TextBox.svelte';
	import TooltipWrapper from '$lib/Tooltip/TooltipWrapper.svelte';
	import AutoSuggestBox from '$lib/AutoSuggestBox/AutoSuggestBox.svelte';
	import CalendarView from '$lib/CalendarView/CalendarView.svelte';
	import CalendarDatePicker from '$lib/CalendarDatePicker/CalendarDatePicker.svelte';
	import Checkbox from '$lib/Checkbox/Checkbox.svelte';
	import ComboBox from '$lib/ComboBox/ComboBox.svelte';
	import ContentDialog from '$lib/ContentDialog/ContentDialog.svelte';
	import ContextMenu from '$lib/ContextMenu/ContextMenu.svelte';
	import Expander from '$lib/Expander/Expander.svelte';
	import FlyoutSurface from '$lib/Flyout/FlyoutSurface.svelte';
	import IconButton from '$lib/IconButton/IconButton.svelte';
	import InfoBadge from '$lib/InfoBadge/InfoBadge.svelte';
	import InfoBar from '$lib/InfoBar/InfoBar.svelte';
	import { ListItem, TextBlock } from '$lib';
	import MenuBar from '$lib/MenuBar/MenuBar.svelte';
	import MenuBarItem from '$lib/MenuBar/MenuBarItem.svelte';
	import MenuFlyoutSurface from '$lib/MenuFlyout/MenuFlyoutSurface.svelte';
	import MenuFlyoutWrapper from '$lib/MenuFlyout/MenuFlyoutWrapper.svelte';
	import NavigationView from '$lib/NavigationView/NavigationView.svelte';
	import NumberBox from '$lib/NumberBox/NumberBox.svelte';
	import PersonPicture from '$lib/PersonPicture/PersonPicture.svelte';
	import ProgressBar from '$lib/ProgressBar/ProgressBar.svelte';
	import ProgressRing from '$lib/ProgressRing/ProgressRing.svelte';
	import RadioButton from '$lib/RadioButton/RadioButton.svelte';
	import ScrollView from '$lib/ScrollView/ScrollView.svelte';
	import Slider from '$lib/Slider/Slider.svelte';
	import TextBoxButton from '$lib/TextBox/TextBoxButton.svelte';
	import ToggleSwitch from '$lib/ToggleSwitch/ToggleSwitch.svelte';

	let dateNow = new Date();

	function onClick() {
		console.log('click');
	}

	let value = 'Default value';

	let flavor = 'chocolate';
	let valueSlider = 10;
	let checked = true;
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>

<Button variant="standard" on:click={onClick}>standard</Button>

<TextBox placeholder="placeholder" type="text" bind:value />

<Button variant="accent">accent</Button>

<TooltipWrapper />

<AutoSuggestBox />

<CalendarView />


<CalendarDatePicker value={dateNow} />

<Checkbox />
<div>
	<ComboBox />
</div>

<div>
	<ContentDialog />
</div>

<div>
	<ContextMenu />
</div>

<div>
	<Expander />
</div>

<div>
	<FlyoutSurface />
</div>

<div>
	<IconButton />
</div>

<div>
	<InfoBadge />
</div>

<div>
	<InfoBar />
</div>

<div>
	<ListItem />
</div>

<div>
	<MenuBar />
</div>

<div>
	<MenuBarItem />
</div>

<div>
	<MenuFlyoutSurface />
</div>

<div>
	<MenuFlyoutWrapper />
</div>

<div>
	<NavigationView />
</div>

<div>
	<NumberBox />
</div>

<div>
	<PersonPicture />
</div>

<div>
	<ProgressBar />
</div>


<div>
	<ProgressRing />
</div>


<div>
	<RadioButton bind:group={flavor} value="chocolate">Chocolate</RadioButton>
	<RadioButton bind:group={flavor} value="vanilla">Vanilla</RadioButton>
	<RadioButton bind:group={flavor} value="strawberry">Strawberry</RadioButton>
</div>
<ScrollView />

<div>
	<Slider bind:valueSlider min={-100} max={100} step={10} ticks={[-50, 0, 50]} />
</div>

<div>
	<TextBlock />
</div>

<div>
	<TextBox />
	<TextBoxButton />
</div>


<div>
	<ToggleSwitch bind:checked />
</div>

<div>
	<ContentDialog />
</div>


<div>
	<ContentDialog />
</div>

<div>
	<ContentDialog />
</div>


<div>
	<ContentDialog />
</div>

<div>
	<ContentDialog />
</div>


<div>
	<ContentDialog />
</div>


<div>
	<ContentDialog />
</div>

<style>

</style>