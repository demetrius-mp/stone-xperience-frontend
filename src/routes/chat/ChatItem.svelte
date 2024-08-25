<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let from: string;
	export let time: string;
	export let position: 'left' | 'right';

	$: positionClass = position === 'left' ? 'chat-start' : 'chat-end';
	$: marginClass = position === 'left' ? 'ms-2' : 'me-2';
</script>

<div class="chat {positionClass} py-0">
	<div class="chat-image avatar">
		<div class="rounded-full">
			{#if from === 'Tony'}
				<svelte:component this={icon} class="text-4xl -m-2" />
			{:else}
				<svelte:component this={icon} class="text-2xl" />
			{/if}
		</div>
	</div>
	<div class="chat-header mb-1 {marginClass}">
		{from}

		<time class="text-xs opacity-50">
			{time}
		</time>
	</div>
	<div class="chat-bubble whitespace-pre-line" style="max-width: 75%;">
		<slot />
	</div>
</div>
