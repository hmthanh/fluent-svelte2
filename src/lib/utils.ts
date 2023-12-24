import { onMount, type SvelteComponent } from 'svelte';
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

	const handleEvent = (event: any) => {
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

type Callback = (e: Event) => void;

interface Options {
	exclude?: string[];
}

export function createEventForwarder(component: SvelteComponent, { exclude = [] }: Options = {}) {
	const events: [string, Callback][] = [];

	let forward: (e: Event) => void;

	component.$on = (name: string, callback: Callback) => {
		if (exclude.includes(name)) {
			return component.$$.callbacks[name].push(callback);
		}

		events.push([name, callback]);
		return () => {};
	};

	return (node: Element) => {
		const destructors: (() => void)[] = [];

		forward = (e) => component.$emit(e.type, e);

		const listen = (name: string, callback: Callback) => {
			node.addEventListener(name, callback);
			destructors.push(() => node.removeEventListener(name, callback));
		};

		for (let [name, callback] of events) {
			listen(name, callback);
			listen(name, forward);
		}

		return {
			destroy: () => destructors.forEach((d) => d())
		};
	};
}
