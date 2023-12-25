import { onMount } from 'svelte';
import type { Options as FocusTrapOptions } from 'focus-trap';

import { tabbable } from 'tabbable';
import { createFocusTrap } from 'focus-trap';

// ID generator for handling WAI-ARIA related attributes
export function uid(prefix: string) {
	return (
		prefix +
		String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
		Math.random().toString(16).slice(2) +
		Date.now().toString(16).split('.')[0]
	);
}

// Returns a number representing the duration of a specified CSS custom property in ms
export function getCSSDuration(property: any) {
	const duration = window.getComputedStyle(document.documentElement).getPropertyValue(property);

	return parseFloat(duration) * (/\ds$/.test(duration) ? 1000 : 1) || 0;
}

// Basic wrapper action around focus-trap
export function focusTrap(node: HTMLElement, options?: FocusTrapOptions) {
	const trap = createFocusTrap(node, (options = { ...options, fallbackFocus: node }));
	trap.activate();

	return {
		destroy() {
			trap.deactivate();
		}
	};
}

interface CCC extends MouseEvent {}

interface ExternalMouseEventOptions {
	type?: string;
	stopPropagation?: boolean;
}

export function externalMouseEvents(
	node: HTMLElement,
	options: ExternalMouseEventOptions = { type: 'click', stopPropagation: false }
) {
	const { type, stopPropagation } = options;

	const handleEvent = (event: Event) => {
		if (stopPropagation) event.stopPropagation();

		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent(`outer${type}`, {
					detail: event
				})
			);
		}
	};
	const typeEvent = options.type || 'click'; // Use a default

	document.addEventListener(typeEvent, handleEvent, true);

	return {
		destroy() {
			document.removeEventListener(typeEvent, handleEvent, true);
		}
	};
}

// export function createEventForwarder(component: SvelteComponent | null, exclude: string[] = []) {
// 	if (component === null) {
// 		return () => {};
// 	}
// 	type EventCallback = (event: any) => void;
//
// 	let $on: (eventType: string, callback: EventCallback) => () => void;
//
// 	// This is a list of events bound before mount.
// 	const events: [string, EventCallback][] = [];
//
// 	let forward: (e: Event) => void;
//
// 	component.$on = (eventType: string, callback: EventCallback) => {
// 		let destructor = () => {};
//
// 		if (exclude.includes(eventType)) {
// 			// Bail out of the event forwarding and run the normal Svelte $on() code
//
// 			const callbacks =
// 				component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
// 			callbacks.push(callback);
// 			return () => {
// 				const index = callbacks.indexOf(callback);
// 				if (index !== -1) callbacks.splice(index, 1);
// 			};
// 		}
//
// 		if ($on) {
// 			destructor = $on(eventType, callback); // The event was bound programmatically.
// 		} else {
// 			events.push([eventType, callback]); // The event was bound before mount by Svelte.
// 		}
// 		return () => destructor();
// 	};
//
// 	return (node: HTMLElement | SVGElement) => {
// 		const destructors: (() => void)[] = [];
// 		const forwardDestructors: { [k: string]: () => void } = {};
// 		const forward = (e: Event) => component.$emit(e.type, e);
//
// 		// This function is responsible for listening and forwarding
// 		// all bound events.
//
// 		const listen = (eventType: string, callback: EventCallback) => {
// 			node.addEventListener(eventType, callback);
// 			destructors.push(() => node.removeEventListener(eventType, callback));
// 		};
//
// 		for (let [eventType, callback] of events) {
// 			listen(eventType, callback);
// 			listen(eventType, forward);
// 		}
//
// 		return {
// 			destroy: () => destructors.forEach((d) => d())
// 		};
// 	};
// }

interface ArrowNavigationOptions {
	preventTab?: boolean;
	stopPropagation?: boolean;
}

// Controls the focus of a list of elements by using the arrow keys
export function arrowNavigation(
	node: HTMLElement,
	options: ArrowNavigationOptions = { preventTab: false, stopPropagation: false }
) {
	const handleKeyDown = (event: KeyboardEvent) => {
		const { key } = event;
		const { activeElement } = document;

		let tabOrder = <HTMLElement[]>tabbable(node);
		// if (directChildren) tabOrder = tabOrder.filter(child => child.parentElement === node);
		const activeIndex = tabOrder.indexOf(document.activeElement as HTMLElement);

		if (tabOrder.length < 0) return;
		if (
			key === 'ArrowUp' ||
			key === 'ArrowDown' ||
			key === 'Home' ||
			key === 'End' ||
			(key === 'Tab' && options.preventTab)
		) {
			event.preventDefault();
			if (options.stopPropagation) event.stopPropagation();
		}

		if (key === 'ArrowUp') {
			if (tabOrder[0] === activeElement) {
				tabOrder[tabOrder.length - 1].focus();
			} else if (tabOrder.includes(<HTMLElement>activeElement)) {
				tabOrder[activeIndex - 1].focus();
			}
		} else if (key === 'ArrowDown') {
			if (tabOrder[tabOrder.length - 1] === activeElement) {
				tabOrder[0].focus();
			} else if (tabOrder.includes(<HTMLElement>activeElement)) {
				tabOrder[activeIndex + 1].focus();
			}
		} else if (key === 'Home') {
			tabOrder[0].focus();
		} else if (key === 'End') {
			tabOrder[tabOrder.length - 1].focus();
		}
	};

	node.addEventListener('keydown', handleKeyDown);

	return {
		destroy: () => node.removeEventListener('keydown', handleKeyDown)
	};
}
