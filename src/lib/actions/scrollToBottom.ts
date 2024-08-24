import type { Action } from 'svelte/action';

export const scrollToBottom: Action<HTMLElement, { list: unknown[] }> = () => {
	function scroll() {
		window.scrollTo(0, document.body.scrollHeight);
	}

	scroll();

	return {
		update: scroll
	};
};
